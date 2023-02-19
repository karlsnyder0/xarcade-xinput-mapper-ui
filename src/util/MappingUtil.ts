import { toastStore, Type } from '../components/Toast';
import { getXInputKeyForEventKey, KeyName, Mapping, XInputControllerInput, XInputKeyToEventKeyName } from '../models/Mapping';
import { mappingStore } from '../stores/MappingStore';


const importMapping = (xarcadeXinputMapping: XarcadeXinputMapping): void => {
    while (mappingStore.count() > 0) {
        mappingStore.delete(0);
    }

    Object.keys(xarcadeXinputMapping).forEach((xInputKeyInput: string) => {
        const xInputMapping: [number, string, number?, (number | null)?] = xarcadeXinputMapping[xInputKeyInput];

        if (xInputMapping.length === 2) {
            xInputMapping.push(1);
            xInputMapping.push(null);
        } else if (xInputMapping.length === 3) {
            xInputMapping.push(null);
        }
    
        if (xInputKeyInput === 'undefined') {
            const message = `An invalid X-Arcade XInput mapping was detected. ${xInputKeyInput}: ${JSON.stringify(xInputMapping)} `;

            toastStore.add(message, Type.Error);
            return;
        }

        /* eslint-disable-next-line prefer-const */
        let [index, controllerInput, keyDown, keyUp] = xInputMapping;
        keyDown = (typeof keyDown === 'undefined') ? 1 : keyDown;

        // Create all tabs up to this index.
        while (mappingStore.count() < index + 1) {
            mappingStore.create();
        }

        if ([XInputControllerInput.LeftStickX,
            XInputControllerInput.LeftStickY,
            XInputControllerInput.RightStickY,
            XInputControllerInput.RightStickY].indexOf((controllerInput as XInputControllerInput)) > -1
            && keyDown < 0) {
                controllerInput = `${controllerInput}I`;
        }

        if (typeof keyUp !== 'undefined') {
            // No Op
        }

        const mapping: Mapping = mappingStore.read(index);
        const keyName = <KeyName> xInputKeyInput;
        const keyCode: string = XInputKeyToEventKeyName[keyName];
        mapping[controllerInput] = keyCode;

        mappingStore.update(mapping, index);
    });
}

export const loadMappingConfig = (config: string): void => {
    let xarcadeXinputMapping;
    try {
        xarcadeXinputMapping = JSON.parse(config);
    } catch (e) {
        // No Op
    }
    
    importMapping(xarcadeXinputMapping);
}

type XarcadeXinputMapping = {[key: string]: [index: number, controllerInput: string]};

const exportMapping = (): XarcadeXinputMapping => {
    const xarcadeXinputMapping: XarcadeXinputMapping = {};

    mappingStore.mappings.forEach((mapping, index) => {
        Object.keys(mapping).forEach((controllerInput: string) => {
            const eventKeyName: KeyName = (mapping[controllerInput] as KeyName);
            const xInputKeyInput: string = getXInputKeyForEventKey(eventKeyName);
            if (!xInputKeyInput) {
                return;
            }

            xarcadeXinputMapping[xInputKeyInput] = [index, controllerInput];

            if ([XInputControllerInput.LeftStickXI,
                XInputControllerInput.LeftStickYI,
                XInputControllerInput.RightStickYI,
                XInputControllerInput.RightStickYI].indexOf((controllerInput as XInputControllerInput)) > -1) {
                xarcadeXinputMapping[xInputKeyInput].push(-1);
            }
        });
    });

    return xarcadeXinputMapping;
}

export const saveMappingConfig = (): string => {
    const xaXiMapping = exportMapping();
    const contents = JSON.stringify(xaXiMapping, null, 4);

    return contents;
}