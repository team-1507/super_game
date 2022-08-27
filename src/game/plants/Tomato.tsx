import Plant from './Plant';

class Tomato extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 11;
    }
}

export default Tomato;
