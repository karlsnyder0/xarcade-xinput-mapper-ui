import { create } from 'zustand';
import produce from 'immer';

import { Mapping } from '../models/Mapping';

type MappingStoreState = {
    mappings: Array<Mapping>,
    create: () => void,
    read: (index: number) => Mapping,
    update: (update: Mapping, index: number) => void,
    delete: (index: number) => void,
}

export const useMappingStore = create<MappingStoreState>((set, get) => ({
    mappings: [<Mapping> {}],
    create: () => {
      set(
        produce<MappingStoreState>((draft) => {
          draft.mappings.push(<Mapping> {});
        })
      );
    },
    read: (index: number) => {
      return get().mappings[index];
    },
    update: (update: Mapping, index: number) => {
      set(
        produce<MappingStoreState>((draft) => {
          if (index < draft.mappings.length) {
              const mapping: Mapping = draft.mappings[index];
              Object.assign(mapping, update);
          } else {
            console.error('No mapping found at index `${index}`.');
          }
        })
      );
    },
    delete: (index: number) => {
      set(
        produce<MappingStoreState>((draft) => {
          draft.mappings.splice(index, 1);
        })
      );
    }
}));

export default {
    useMappingStore
};