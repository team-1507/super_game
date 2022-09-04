import Plant from './Plant';

class Pepper extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 51;
    }
}

export default Pepper;
