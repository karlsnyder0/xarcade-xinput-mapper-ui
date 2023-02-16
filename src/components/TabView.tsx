import React, { useState } from 'react';
import { v4 } from 'uuid';
import isElectron from 'is-electron';

import { Button, Overflow, OverflowItem, SelectTabData, SelectTabEvent, SelectTabEventHandler, Tab, TabList, Tooltip } from '@fluentui/react-components';
import { CopyRegular, DismissFilled, AddFilled } from '@fluentui/react-icons';

import { useMappingStore } from '../stores/MappingStore';

import XInputMapView from './XInputMapView';
import MessageDialog from './MessageDialog';

import { saveMappingConfig, setMappingStoreState } from '../util/MappingUtil';
import { copyToClipboard } from '../util/ClipboardUtil';

import UploadConfig from './UploadConfig';
import TestInput from './TestInput';

const TabView: React.FC = () => {
    const mappingStoreState = useMappingStore();
    const { mappings, create: createTab, delete: deleteTab } = mappingStoreState;
    setMappingStoreState(mappingStoreState);

    const [currentTab, setCurrentTab] = useState<number>(1);

    const onTabSelect: SelectTabEventHandler = (event: SelectTabEvent, data: SelectTabData) => {
        setCurrentTab((data.value as number));
    };

    const onAddTab = () => {
        createTab();
    }

    // Copy config to Clipboard
    const onCopyClick = () => {
        const content = saveMappingConfig();
        copyToClipboard(content);
    }

    // Delete Tab
    const [deleteMappingIndex, setDeleteMappingIndex] = useState<number | null>(null);
    const onDeleteTabConfirmation = (mappingIndex: number) => {
        setDeleteMappingIndex(mappingIndex);
    }

    const onCancelDeleteTab = () => {
        setDeleteMappingIndex(null);
    }

    const onDeleteTab = () => {
        // Delete mapping.
        setCurrentTab(currentTab - 1);

        // Delete Tab
        deleteTab(deleteMappingIndex as number);

        onCancelDeleteTab();
    }
    
    return (
        <>
            <div className="flex flex-col h-full">
                <div className="grow-0">
                    <Overflow minimumVisible={2}>
                        <TabList selectedValue={currentTab} onTabSelect={onTabSelect}>
                            { mappings.map((mapping, index) => {
                                const id = index + 1;
                                return (
                                    <OverflowItem key={v4()} id={`${id}`} priority={currentTab === id ? 2 : 1}>
                                        <Tab value={id} icon={index > 0 ?
                                            <DismissFilled onClick={() => onDeleteTabConfirmation(index)} style={{ color: 'black', fontSize: '.5em' }} /> : null
                                        }
                                        style={{ direction: 'rtl' }}>
                                            Controller {id}
                                        </Tab>
                                    </OverflowItem>
                                );
                            })}
                            <Tooltip content="Add Controller" relationship="label">
                                <Button key={v4()} appearance="transparent" size="small"  disabled={mappings.length >= 4} onClick={onAddTab} icon={<AddFilled style={Object.assign({ fontSize: '.75em' }, mappings.length >= 4 ? {} : { color: 'black' })} />} />
                            </Tooltip>
                            <div className="mt-auto mb-auto ml-auto">
                                    <TestInput />
                                    {isElectron() ? '' : (
                                    <>
                                        <UploadConfig />
                                        <Tooltip content="Copy Config to Clipboard" relationship="label">
                                            <Button appearance="transparent" size="small" icon={<CopyRegular />} onClick={onCopyClick} />
                                        </Tooltip>
                                    </>
                                )}
                            </div>
                        </TabList>
                    </Overflow>
                </div>
                { mappings.map((mapping, index) => {
                    const id = index + 1;

                    return (
                        <XInputMapView key={v4()} hide={currentTab === id} mappingIndex={index} mapping={mapping} />
                    );
                })}
            </div>
            <MessageDialog title="Delete Controller"
                message="Are you sure you want to delete this controller?  All mapped inputs will be lost!"
                show={!!deleteMappingIndex} 
                cancelButtonText="Cancel" onCancel={onCancelDeleteTab}
                okButtonText="Delete" onOk={onDeleteTab} />
        </>
    );
};

export default TabView;