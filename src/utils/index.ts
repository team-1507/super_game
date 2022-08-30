export function debounce (f: any, ms: number) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(undefined, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

export function throttle (f: any, ms: number) {

    let isThrottled = true;

    return (...args: any) => {
        console.warn(isThrottled)
        if (!isThrottled) return;

        isThrottled = false;
        f(...args);

        setTimeout(function () {
            isThrottled = true;
        }, ms);
    }
}
