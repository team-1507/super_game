import Plant from './Plant';

class Cabbage extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 41;
    }
}

export default Cabbage;
