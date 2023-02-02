let waiting = false;
let lastCallback: (() => void) | undefined;

const _handleKeyDown_waitForNext = (ev: KeyboardEvent): void => {
    console.log('_handleKeyDown_waitForNext', ev);
    console.log('_handleKeyDown_waitForNext', ev.code);

    waitForNext(true);
}

const waitForNext = (cancelWait: boolean | (() => void) = false, cancelCallback?: () => void): void => {
    // Handle optional parameters.
    if (typeof cancelWait === 'function') {
        cancelCallback = cancelWait;
        cancelWait = false;
    }

    if (cancelWait) {
        document.removeEventListener('keydown', _handleKeyDown_waitForNext);
        waiting = false;

        if (typeof cancelCallback === 'function') {
            cancelCallback();
        }

        if (typeof lastCallback === 'function') {
            lastCallback();
        }

        return;
    }

    if (waiting) {
        waitForNext(true);
    }

    document.addEventListener('keydown', _handleKeyDown_waitForNext);
    lastCallback = cancelCallback;
    waiting = true;
}

export default {
    waitForNext,
}