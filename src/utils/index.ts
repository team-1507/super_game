export function debounce (f: any, ms: number) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(undefined, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
};

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
};

export function classNames (classesObject: object) {
    const getClasses = (object: object) => {
        return Object.entries(object)
            .map(([key, value]) => value ? key : '')
            .filter(key => key)
            .join(' ');
    };

    if (Array.isArray(classesObject)) {
        return classesObject
            .map(item => typeof item === 'string' ? item : getClasses(item))
            .filter(key => key)
            .join(' ');
    } else {
        return getClasses(classesObject);
    }
};
