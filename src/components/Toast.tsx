import React from 'react';

import { DismissCircleRegular } from '@fluentui/react-icons';
import { Alert } from '@fluentui/react-components/unstable';
import { create as createStore } from 'zustand';
import produce from 'immer';
import { v4 } from 'uuid';

import './Toast.scss';

interface ToastStore {
    items: Array<ToastItem>,
    add: (message: string, type: Type) => void,
    remove: (id: string) => void,
}

interface ToastItem {
    id: string;
    message: string;
    type: Type;
    created: number;
}

export enum Type {
    Error = 'error',
}

const useToastStore = createStore<ToastStore>((set, get) => ({
    items: [],
    add: (message: string, type: Type) => {
        set(
            produce<ToastStore>((draft) => {
                const toastItem: ToastItem = {
                    id: v4(),
                    message,
                    type,
                    created: Date.now(),
                }

                draft.items.push(toastItem);
            })
        );
    },
    remove: (id: string) => {
      set(
        produce<ToastStore>((draft) => {
            const index = get().items.findIndex((item) => {
                return item.id === id;
            });

            if (index > -1) {
                draft.items.splice(index, 1);
            }
        })
      );
    }
}));

export const toastStore: ToastStore = {
    items: [],
    add: () => {
        // Not Initialized
    },
    remove: () => {
        // Not Initialized
    },
};

const setToastStoreState = (toastStoreState: ToastStore): void => {
    const { items, add, remove } = toastStoreState;

    toastStore.items = items;
    toastStore.add = add;
    toastStore.remove = remove;
}

const onCloseAlert = (id: string) => {
    toastStore.remove(id);
};

const Toast: React.FC = () => {
    const toastStore = useToastStore();
    const { items } = toastStore;
    setToastStoreState(toastStore);

    return (
        <>
            <div className="fixed top-0 w-full place-items-center ml-auto mr-auto pt-1" style={{ display: "flex", flexDirection: "column", gap: "10px", zIndex: "1" }}>
                { items.map((item) => {
                    return (
                        <Alert key={item.id} intent={item.type} action={{
                            icon: <DismissCircleRegular />,
                            onClick: () => onCloseAlert(item.id),
                        }}>
                            { item.message }
                        </Alert>
                    );
                })}
            </div>
        </>
    );
};

export default Toast;