import Plant, { LifeCycle } from './Plant';

class Squash extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 61,
            [LifeCycle.young]: 62,
            [LifeCycle.grown]: 63,
            [LifeCycle.ripe]: 64,
            [LifeCycle.harvested]: 65,
        };
    }

    public get sellingPrice(): number {
        return 35;
    }

    public get plantingTime(): number {
        return 5;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 60,
            [LifeCycle.young]: 20,
            [LifeCycle.grown]: 20,
            [LifeCycle.ripe]: 240,
            [LifeCycle.harvested]: 10,
        };
    }
}

export default Squash;
