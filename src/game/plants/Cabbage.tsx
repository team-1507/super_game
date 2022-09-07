import Plant, { LifeCycle } from './Plant';

class Cabbage extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 41,
            [LifeCycle.young]: 42,
            [LifeCycle.grown]: 43,
            [LifeCycle.ripe]: 44,
            [LifeCycle.harvested]: 45,
        };
    }
}

export default Cabbage;
