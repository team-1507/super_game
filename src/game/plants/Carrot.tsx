import Plant, { LifeCycle } from './Plant';

class Carrot extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 31,
            [LifeCycle.young]: 32,
            [LifeCycle.grown]: 33,
            [LifeCycle.ripe]: 34,
            [LifeCycle.harvested]: 35,
        };
    }

    public get sellingPrice(): number {
        return 22;
    }

    public get plantingTime(): number {
        return 30;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 30,
            [LifeCycle.young]: 30,
            [LifeCycle.grown]: 40,
            [LifeCycle.ripe]: 120,
            [LifeCycle.harvested]: 120,
        };
    }
}

export default Carrot;
