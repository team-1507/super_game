export const debounce = (fn: (...args: unknown[]) => unknown, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function dnced(this: unknown, ...args: unknown[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

export function throttle(f: (...args: unknown[]) => unknown, ms: number) {
    let isThrottled = true;

    return (...args: unknown[]) => {
        if (!isThrottled) return;

        isThrottled = false;
        f(...args);

        setTimeout(() => {
            isThrottled = true;
        }, ms);
    };
}

export function classNames(classesObject: object) {
    const getClasses = (object: object) => {
        return Object.entries(object)
            .map(([key, value]) => (value ? key : ''))
            .filter((key) => key)
            .join(' ');
    };

    if (Array.isArray(classesObject)) {
        return classesObject
            .map((item) => (typeof item === 'string' ? item : getClasses(item as object)))
            .filter((key) => key)
            .join(' ');
    }
    return getClasses(classesObject);
}

export const whatTimeIsItNow = (timestamp: number) => (timestamp % (60 * 24));
export const whatDayIsItToday = (timestamp: number) => Math.ceil(timestamp / (60 * 24));

export const twoDigit = (str: string | number) => `0${str}`.slice(-2);

export const timestampToHuman = (timestamp: number | string) => {
    const ts = typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp;
    const date = new Date(ts);
    return {
        hours: twoDigit(date.getHours()),
        minutes: twoDigit(date.getMinutes()),
        day: twoDigit(date.getDate()),
        month: twoDigit(date.getMonth() + 1),
        year: date.getFullYear(),
    };
};
