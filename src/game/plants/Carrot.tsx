import Plant from './Plant';

class Carrot extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 31;
    }
}

export default Carrot;
