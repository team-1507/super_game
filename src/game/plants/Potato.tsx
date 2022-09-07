import Plant, { LifeCycle } from './Plant';

class Potato extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 21,
            [LifeCycle.young]: 22,
            [LifeCycle.grown]: 23,
            [LifeCycle.ripe]: 24,
            [LifeCycle.harvested]: 25,
        };
    }
}

export default Potato;
