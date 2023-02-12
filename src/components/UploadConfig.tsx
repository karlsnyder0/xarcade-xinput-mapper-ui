import React, { Ref, useState } from 'react';

import { Button, Input, Tooltip } from '@fluentui/react-components';
import { ArrowUploadFilled } from '@fluentui/react-icons';

import { loadMappingConfig } from '../util/MappingUtil';
import MessageDialog from './MessageDialog';

const UploadConfig: React.FC = () => {
    // Upload Config
    const uploadInputRef: Ref<HTMLInputElement> = React.createRef();

    const onUploadClick = () => {
        uploadInputRef.current?.click();
    }

    const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const files = ev.target.files;
        if (!files) {
            return;
        }

        if (files.length > 0) {
            const file = files[0];

            // const filemame = file.name;
            // const filesize = file.size;

            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                doLoadConfig(e.target?.result as string);

                // IMPORTANT - There is no need to clear the file.  "value={''}" takes care of this. 
            };
            fileReader.onerror = (e) => console.error(e.target?.error?.name);
            fileReader.readAsText(file, "UTF-8");
        }
    }

    // Upload Config Confirmation
    const [loadConfig, setLoadConfig] = useState<string | null>(null);

    const doLoadConfig = (config: string) => {
        setLoadConfig(config);
    };

    const onCancelLoadConfig = () => {
        setLoadConfig(null);
    }

    const onLoadConfig = () => {
        // Load configuration.
        loadMappingConfig(loadConfig as string);

        onCancelLoadConfig();
    }

    return (
        <>
            <Input hidden ref={uploadInputRef} accept="application/json" onChange={onFileChange} value={''} input={{ type: 'file' }} style={{ display: 'none' }} />
            <Tooltip content="Upload Config" relationship="label">
                <Button appearance="transparent" size="small" icon={<ArrowUploadFilled />} onClick={onUploadClick} />
            </Tooltip>
            <MessageDialog title="Load Config"
                message="Are you sure you want to load a new configuration?  All mapped inputs will be lost!"
                show={loadConfig !== null} 
                cancelButtonText="Cancel" onCancel={onCancelLoadConfig}
                okButtonText="Load" onOk={onLoadConfig} />
        </>
    );
};

export default UploadConfig;