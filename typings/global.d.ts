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
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}
