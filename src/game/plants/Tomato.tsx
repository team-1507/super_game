import Plant, { LifeCycle } from './Plant';

class Tomato extends Plant {
    // eslint-disable-next-line class-methods-use-this
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 11,
            [LifeCycle.young]: 12,
            [LifeCycle.grown]: 13,
            [LifeCycle.ripe]: 14,
            [LifeCycle.harvested]: 15,
        };
    }
}

export default Tomato;
