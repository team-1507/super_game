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
        return 10;
    }

    public get plantingTime(): number {
        return 5;
    }
}

export default Tomato;
