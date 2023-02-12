import { EventKeyToXInputKey, KeyName, Mapping, XInputControllerInput } from '../models/Mapping';
import { MappingStoreState } from '../stores/MappingStore';

let mappings: Array<Mapping>;

export const setMappingStoreState = (mappingStoreState: MappingStoreState) => {
    const { mappings: _mappings } = mappingStoreState;

    mappings = _mappings;
}

const importMapping = (xarcadeXinputMapping: XarcadeXinputMapping): void => {
    console.log(mappings);
}

export const loadMappingConfig = (config: string): void => {
    console.log(config);

    let xarcadeXinputMapping;
    try {
        xarcadeXinputMapping = JSON.parse(config);
    } catch (e) {
        // No Op
    }
    
    importMapping(xarcadeXinputMapping);
}

type XarcadeXinputMapping = {[key: string]: [index: number, controllerInput: string]};

export const exportMapping = (): XarcadeXinputMapping => {
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

export const saveMappingConfig = (): void => {
    const xarcadeXinputMapping = exportMapping();

    // Save to file
}

export default {
}