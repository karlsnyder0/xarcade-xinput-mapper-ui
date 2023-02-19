import { create as createStore } from 'zustand';
import produce from 'immer';

import { Mapping } from '../models/Mapping';

export type MappingStore = {
    mappings: Array<Mapping>,
    count: () => number,
    create: () => void,
    read: (index: number) => Mapping,
    update: (update: Mapping, index: number) => void,
    delete: (index: number) => void,
}

export const mappingStore: MappingStore = {
    mappings: [],
    count: () => {
        // Not Initialized
        return 0;
    },
    create: () => {
        // Not Initialized
    },
    read: () => {
        // Not Initialized
        return <Mapping> {};
    },
    update: () => {
        // Not Initialized
    },
    delete: () => {
        // Not Initialized
    },
};

export const setMappingStoreState = (mappingStoreState: MappingStore): void => {
    const { mappings, count, create, read, update, delete: _delete } = mappingStoreState;

    mappingStore.mappings = mappings;
    mappingStore.count = count;
    mappingStore.create = create;
    mappingStore.read = read;
    mappingStore.update = update;
    mappingStore.delete = _delete;
}

export const useMappingStore = createStore<MappingStore>((set, get) => ({
    mappings: [<Mapping> {}],
    count: () => {
      return get().mappings.length;
    },
    create: () => {
      set(
        produce<MappingStore>((draft) => {
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
        produce<MappingStore>((draft) => {
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
        produce<MappingStore>((draft) => {
          draft.mappings.splice(index, 1);
        })
      );
    }
}));

export default {
    useMappingStore
};