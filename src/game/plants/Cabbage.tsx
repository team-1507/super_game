import Plant, { LifeCycle } from './Plant';

class Cabbage extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 41,
            [LifeCycle.young]: 42,
            [LifeCycle.grown]: 43,
            [LifeCycle.ripe]: 44,
            [LifeCycle.harvested]: 45,
        };
    }

    public get sellingPrice(): number {
        return 40;
    }

    public get plantingTime(): number {
        return 5;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 20,
            [LifeCycle.young]: 20,
            [LifeCycle.grown]: 70,
            [LifeCycle.ripe]: 120,
            [LifeCycle.harvested]: 10,
        };
    }
}

export default Cabbage;
