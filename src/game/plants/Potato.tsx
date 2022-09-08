import Plant, { LifeCycle } from './Plant';

class Potato extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 21,
            [LifeCycle.young]: 22,
            [LifeCycle.grown]: 23,
            [LifeCycle.ripe]: 24,
            [LifeCycle.harvested]: 25,
        };
    }

    public get sellingPrice(): number {
        return 18;
    }

    public get plantingTime(): number {
        return 60;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 20,
            [LifeCycle.young]: 20,
            [LifeCycle.grown]: 20,
            [LifeCycle.ripe]: 180,
            [LifeCycle.harvested]: 10,
        };
    }
}

export default Potato;
