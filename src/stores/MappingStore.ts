import { create } from 'zustand';

export type Mapping = Record<string, unknown>;

type MappingStoreState = {
    mappings: Array<Record<string, unknown>>,
    add: (mapping: Mapping) => void,
}

export const useMappingStore = create<MappingStoreState>((set) => ({
    mappings: [{}],
    add: (mapping) => {
        set(state => ({
            mappings: [...state.mappings, mapping]
        }));
    }
}));

export default {
    useMappingStore
};