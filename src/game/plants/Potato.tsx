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
        return 10;
    }

    public get plantingTime(): number {
        return 5;
    }
}

export default Potato;
