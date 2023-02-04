let waiting = false;
let lastKeydownCallback: ((ev: KeyboardEvent) => void) | undefined;
let lastCancelCallback: (() => void) | undefined;

const _handleKeyDown_waitForNext = (ev: KeyboardEvent): void => {
    if (typeof lastKeydownCallback === 'function') {
        lastKeydownCallback(ev);
        lastKeydownCallback = undefined;
    }

    waitForNext(true);
}

export interface WaitForNextCallbacks {
    keydownCallback?: (ev: KeyboardEvent) => void,
    cancelCallback?: () => void,
}

const waitForNext = (cancelWait?: boolean | WaitForNextCallbacks, callbacks: WaitForNextCallbacks = {}): void => {
    // Handle optional params.
    if (typeof cancelWait === 'object') {
        callbacks = cancelWait;
        cancelWait = false;
    }

    // If we are cancelling waitForNext or we are already waiting.
    if (cancelWait || waiting) {
        document.removeEventListener('keydown', _handleKeyDown_waitForNext);
        waiting = false;

        if (typeof lastCancelCallback === 'function') {
            lastCancelCallback();
            lastCancelCallback = undefined;
            lastKeydownCallback = undefined;
        }

        // If we are just cancelling then do nothing else.
        if (cancelWait) {
            return;
        }
    }

    document.addEventListener('keydown', _handleKeyDown_waitForNext);
    lastKeydownCallback = callbacks.keydownCallback;
    lastCancelCallback = callbacks.cancelCallback;
    waiting = true;
}

export default {
    waitForNext,
}