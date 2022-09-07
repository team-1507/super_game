declare module '*.png' {
    const value: string;
    export = value;
}

declare module '*.ogg' {
    const value: string;
    export = value;
}

declare module '*.scss' {
    const styles: { [className: string]: string };
    export default styles;
}

declare global {
    interface Window {
        __INITIAL_STATE__: State;
        // eslint-disable-next-line @typescript-eslint/ban-types
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}
