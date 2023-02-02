import { create } from 'zustand';
import { Mapping } from '../models/Mapping';

type MappingStoreState = {
    mappings: Array<Mapping>,
    create: () => void,
}

export const useMappingStore = create<MappingStoreState>((set) => ({
    mappings: [<any> {}],
    create: () => {
      const mapping: Mapping = <any> {};
      set(state => ({
          mappings: [...state.mappings, mapping]
      }));
    }
}));

export default {
    useMappingStore
};