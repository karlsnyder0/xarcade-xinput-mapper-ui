let waiting = false;
let lastKeydownCallback: ((ev: KeyboardEvent) => void) | undefined;
let lastCancelCallback: (() => void) | undefined;

const _handleKeyDown_waitForNext = (ev: KeyboardEvent): void => {
    ev.preventDefault();
    
    // Immediately cancel.
    cancelWaitForNext(true);

    if (typeof lastKeydownCallback === 'function') {
        // First de-register the callback then execute.
        const keydownCallback = lastKeydownCallback;
        lastKeydownCallback = undefined;
        lastCancelCallback = undefined;

        keydownCallback(ev);
    }
}

export interface WaitForNextCallbacks {
    keydownCallback?: (ev: KeyboardEvent) => void,
    cancelCallback?: () => void,
}

const waitForNext = (callbacks: WaitForNextCallbacks = {}): void => {
    // If we are cancelling waitForNext or we are already waiting.
    if (waiting) {
        cancelWaitForNext();
    }

    document.addEventListener('keydown', _handleKeyDown_waitForNext);
    lastKeydownCallback = callbacks.keydownCallback;
    lastCancelCallback = callbacks.cancelCallback;
    waiting = true;
}

const cancelWaitForNext = (ignoreCallbacks = false): void => {
    document.removeEventListener('keydown', _handleKeyDown_waitForNext);
    waiting = false;

    if (!ignoreCallbacks && typeof lastCancelCallback === 'function') {
        // First de-register the callback then execute.
        const cancelCallback = lastCancelCallback;
        lastCancelCallback = undefined;
        lastKeydownCallback = undefined;

        cancelCallback();
    }
}

export default {
    waitForNext,
    cancelWaitForNext,
}