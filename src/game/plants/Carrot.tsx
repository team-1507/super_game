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
        return 10;
    }

    public get plantingTime(): number {
        return 5;
    }
}

export default Carrot;
