import { create } from 'zustand';
import produce from 'immer';

import { Mapping } from '../models/Mapping';

export type MappingStoreState = {
    mappings: Array<Mapping>,
    count: () => number,
    create: () => void,
    read: (index: number) => Mapping,
    update: (update: Mapping, index: number) => void,
    delete: (index: number) => void,
}

export const useMappingStore = create<MappingStoreState>((set, get) => ({
    mappings: [<Mapping> {}],
    count: () => {
      return get().mappings.length;
    },
    create: () => {
      set(
        produce<MappingStoreState>((draft) => {
          draft.mappings.push(<Mapping> {});
        })
      );
    },
    read: (index: number) => {
      // Return an extensible copy.
      return JSON.parse(JSON.stringify(get().mappings[index]));
    },
    update: (update: Mapping, index: number) => {
      set(
        produce<MappingStoreState>((draft) => {
          if (index < draft.mappings.length) {
              const mapping: Mapping = draft.mappings[index];
              Object.assign(mapping, update);

              // Remove any keys that don't exist in the update.
              Object.keys(mapping).forEach((key) => {
                if (!update[key]) {
                  delete mapping[key];
                }
              });
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