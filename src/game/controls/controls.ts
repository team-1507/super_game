import { KeyboardEvent, RefObject } from 'react';

interface IControls {
    readonly character: RefObject<HTMLCanvasElement>,
}

class Controls implements IControls {
    readonly character: RefObject<HTMLCanvasElement>;

    constructor(props: IControls) {
        this.character = props.character;
    }

    // eslint-disable-next-line class-methods-use-this
    public handleKeyPress(event: KeyboardEvent) {
        const redirectedEvent = event;
        redirectedEvent.bubbles = false;
        // this.character.current?.dispatchEvent(redirectedEvent as unknown as Event);
    }
}

export default Controls;
