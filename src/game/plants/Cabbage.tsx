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
        return 10;
    }

    public get plantingTime(): number {
        return 5;
    }
}

export default Cabbage;
