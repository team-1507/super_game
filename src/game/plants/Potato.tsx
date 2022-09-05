import Plant from './Plant';

class Potato extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 21;
    }
}

export default Potato;
