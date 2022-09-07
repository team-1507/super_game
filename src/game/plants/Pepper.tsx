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
        return 10;
    }

    public get plantingTime(): number {
        return 5;
    }
}

export default Pepper;
