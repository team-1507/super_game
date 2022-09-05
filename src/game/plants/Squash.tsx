import Plant from './Plant';

class Squash extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 61;
    }
}

export default Squash;
