import React, { Ref, useState } from 'react';
import { v4 } from 'uuid';

import { Button, Input, InputOnChangeData, Overflow, OverflowItem, SelectTabData, SelectTabEvent, SelectTabEventHandler, Tab, TabList, Tooltip } from '@fluentui/react-components';
import { ArrowUploadFilled, CopyRegular, DismissFilled, AddFilled } from '@fluentui/react-icons';

import { useMappingStore } from '../stores/MappingStore';

import XInputMapView from './XInputMapView';
import DeleteTabDialog, { DeleteTabState } from './DeleteTabDialog';

import './TabView.scss';

const styles = {
    labelContainer: {
        width: "auto",
        padding: 0
    },
    iconLabelWrapper: {
        flexDirection: "row-reverse"
    }
};

const Tabs: React.FC = () => {
    const { mappings, create } = useMappingStore();

    const [currentTab, setCurrentTab] = useState<number>(1);

    const onTabSelect: SelectTabEventHandler = (event: SelectTabEvent, data: SelectTabData) => {
        setCurrentTab((data.value as number));
    };

    const onAddTab = () => {
        create();
    }

    const onCopyClick = () => {
        navigator.clipboard.writeText('Text copied to clipboard');
    }

    const uploadInputRef: Ref<HTMLInputElement> = React.createRef();
    const onUploadClick = () => {
        uploadInputRef.current?.click();
    }

    const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        console.log(ev);
        console.log(data);
        console.log(uploadInputRef);

        const files = ev.target.files;
        if (!files) {
            return;
        }

        if (files.length > 0) {
            const file = files[0];

            const filemame = file.name;
            const filesize = file.size;

            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                console.log(e.target?.result);
                // setTextValue(file);
            };
            fileReader.onerror = (e) => console.error(e.target?.error?.name);
            fileReader.readAsText(file, "UTF-8");
        }
    }

    const [deleteMappingIndex, setDeleteMappingIndex] = useState<number | null>(null);
    const onDeleteTabConfirmation = (mappingIndex: number) => {
        setDeleteMappingIndex(mappingIndex);
    }

    const onCancelDeleteTab = () => {
        setDeleteMappingIndex(null);
    }

    const onDeleteTab = () => {
        // Delete Tab
        alert('Delete Tab ' + deleteMappingIndex);

        alert(currentTab);

        // Delete mapping.
        setCurrentTab(currentTab - 1);

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
                                <Button key={v4()} appearance="transparent" size="small" onClick={onAddTab} icon={<AddFilled style={{ color: 'black', fontSize: '.75em' }} />} />
                            </Tooltip>
                            <div className="mt-auto mb-auto ml-auto">
                                <Input name="input" hidden ref={uploadInputRef} accept="application/json" onChange={onFileChange} input={{ type: 'file' }} style={{ display: 'none' }} />
                                <Tooltip content="Upload Config" relationship="label">
                                    <Button appearance="transparent" size="small" icon={<ArrowUploadFilled />} onClick={onUploadClick} />
                                </Tooltip>
                                <Tooltip content="Copy Config to Clipboard" relationship="label">
                                    <Button appearance="transparent" size="small" icon={<CopyRegular />} onClick={onCopyClick} />
                                </Tooltip>
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
            <DeleteTabDialog show={!!deleteMappingIndex} onCancel={onCancelDeleteTab} onDelete={onDeleteTab} />
        </>
    );
};

export default Tabs;