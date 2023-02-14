import { EventKeyToXInputKey, KeyName, Mapping, XInputControllerInput, XInputKeyToEventKeyName } from '../models/Mapping';
import { MappingStoreState } from '../stores/MappingStore';

let mappings: Array<Mapping>;
let count: () => number;
let create: () => void;
let read: (index: number) => Mapping;
let update: (update: Mapping, index: number) => void;
let _delete: (index: number) => void;

export const setMappingStoreState = (mappingStoreState: MappingStoreState): void => {
    const { mappings: _mappings, count: _count, create: _create, read: _read, update: _update, delete: __delete } = mappingStoreState;

    mappings = _mappings;
    count = _count;
    create = _create;
    read = _read;
    update = _update;
    _delete = __delete;
}

const importMapping = (xarcadeXinputMapping: XarcadeXinputMapping): void => {
    while (count() > 0) {
        _delete(0);
    }

    Object.keys(xarcadeXinputMapping).forEach((xInputKeyInput: string) => {
        const xInputMapping: [number, string, number?, (number | null)?] = xarcadeXinputMapping[xInputKeyInput];

        if (xInputMapping.length === 2) {
            xInputMapping.push(1);
            xInputMapping.push(null);
        } else if (xInputMapping.length === 3) {
            xInputMapping.push(null);
        }

        /* eslint-disable-next-line prefer-const */
        let [index, controllerInput, keyDown, keyUp] = xInputMapping;
        keyDown = (typeof keyDown === 'undefined') ? 1 : keyDown;

        if (count() < index + 1) {
            create();
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

        const mapping: Mapping = read(index);
        const keyName = <KeyName> xInputKeyInput;
        const keyCode: string = XInputKeyToEventKeyName[keyName];
        mapping[controllerInput] = keyCode;

        update(mapping, index);
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

    mappings.forEach((mapping, index) => {
        Object.keys(mapping).forEach((controllerInput: string) => {
            const eventKeyName: KeyName = (mapping[controllerInput] as KeyName);
            const xInputKeyInput: string = EventKeyToXInputKey[eventKeyName];

            if (!xInputKeyInput) {
                console.log(`Unable to find the XInputKeyInput for ${eventKeyName}`);
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