import Plant, { LifeCycle } from './Plant';

class Squash extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 61,
            [LifeCycle.young]: 62,
            [LifeCycle.grown]: 63,
            [LifeCycle.ripe]: 64,
            [LifeCycle.harvested]: 65,
        };
    }
}

export default Squash;
