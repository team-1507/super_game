import Plant, { LifeCycle } from './Plant';

class Pepper extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 51,
            [LifeCycle.young]: 52,
            [LifeCycle.grown]: 53,
            [LifeCycle.ripe]: 54,
            [LifeCycle.harvested]: 55,
        };
    }
}

export default Pepper;
