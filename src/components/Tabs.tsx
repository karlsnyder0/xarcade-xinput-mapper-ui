import React from 'react';
import { v4 } from 'uuid';

import { Button, Overflow, OverflowItem, SelectTabData, SelectTabEvent, SelectTabEventHandler, Tab, TabList, TabValue } from '@fluentui/react-components';

import { useMappingStore } from '../stores/MappingStore';

import './Tabs.scss';

const Tabs: React.FC = () => {
    const { mappings, add } = useMappingStore();

    const [currentTab, setCurrentTab] = React.useState<TabValue>('1');

    const onTabSelect: SelectTabEventHandler = (event: SelectTabEvent, data: SelectTabData) => {
        setCurrentTab(data.value);
    };

    const onAddTab = () => {
        add({});
    }

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="grow-0">
                    <Overflow minimumVisible={2}>
                        <TabList defaultSelectedValue={currentTab} onTabSelect={onTabSelect}>
                            { mappings.map((mapping, index) => {
                                const id = `${index + 1}`;

                                return (
                                    <OverflowItem key={v4()} id={id} priority={currentTab === id ? 2 : 1}>
                                        <Tab value={id}>
                                            Controller {id}
                                        </Tab>
                                    </OverflowItem>
                                );
                            })}
                        <Button appearance="transparent" size="small" onClick={onAddTab}>+</Button>
                        </TabList>
                    </Overflow>
                </div>
                { mappings.map((mapping, index) => {
                    const id = `${index + 1}`;

                    return (
                        <div key={v4()} className={`
                            ${currentTab === id ? 'block' : 'hidden'}
                            bg-dpad bg-no-repeat
                            p-4 block grow flex-1
                        `}></div>
                    );
                })}
            </div>
        </>
    );
};

export default Tabs;