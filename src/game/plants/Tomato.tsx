import Plant, { LifeCycle } from './Plant';

class Tomato extends Plant {
    public get tileTypeList(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 11,
            [LifeCycle.young]: 12,
            [LifeCycle.grown]: 13,
            [LifeCycle.ripe]: 14,
            [LifeCycle.harvested]: 15,
        };
    }

    public get sellingPrice(): number {
        return 30;
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
            [LifeCycle.harvested]: 10,
        };
    }
}

export default Tomato;
