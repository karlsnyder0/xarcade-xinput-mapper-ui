import React, { useState } from 'react';

import { Button, Tooltip } from '@fluentui/react-components';
import { WindowWrenchFilled } from '@fluentui/react-icons';
import TestInputDialog from './TestInputDialog';

const TestInput: React.FC = () => {
    const [ active, setActive ] = useState<boolean>(false);

    const onClick = () => {
        setActive(true);
    }

    const onCloseDialog = () => {
        setActive(false);
    }

    return (
        <>
            <Tooltip content="Test Input Diagnostic Tool" relationship="label">
                <Button appearance="transparent" size="small" icon={<WindowWrenchFilled />} onClick={onClick} />
            </Tooltip>
            <TestInputDialog show={active} onClose={onCloseDialog} />
        </>
    );
};

export default TestInput;