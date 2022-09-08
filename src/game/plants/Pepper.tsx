import Plant, { LifeCycle } from './Plant';

class Pepper extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 51,
            [LifeCycle.young]: 52,
            [LifeCycle.grown]: 53,
            [LifeCycle.ripe]: 54,
            [LifeCycle.harvested]: 55,
        };
    }

    public get sellingPrice(): number {
        return 45;
    }

    public get plantingTime(): number {
        return 45;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 60,
            [LifeCycle.young]: 60,
            [LifeCycle.grown]: 60,
            [LifeCycle.ripe]: 60,
            [LifeCycle.harvested]: 60,
        };
    }
}

export default Pepper;
