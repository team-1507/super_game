import Plant, { LifeCycle } from './Plant';

class Carrot extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 31,
            [LifeCycle.young]: 32,
            [LifeCycle.grown]: 33,
            [LifeCycle.ripe]: 34,
            [LifeCycle.harvested]: 35,
        };
    }
}

export default Carrot;
