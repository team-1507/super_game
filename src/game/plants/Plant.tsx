export enum LifeCycle {
    'sprout',
    'young',
    'grown',
    'ripe',
    'harvested',
}

abstract class Plant {
    protected lifeState?: LifeCycle;

    protected canvas?: HTMLCanvasElement | null;

    protected wasPlanted?: number;

    constructor(canvas: HTMLCanvasElement | null, plantingTimestamp: number) {
        this.lifeState = LifeCycle.sprout;
        this.canvas = canvas;
        this.wasPlanted = plantingTimestamp;
    }

    public get tileType(): number {
        if (!this.lifeState) {
            this.lifeState = LifeCycle.sprout;
        }
        return this.tileTypeList[this.lifeState];
    }

    public getAndSetCurrentLifeState(currentTimestamp: number): LifeCycle {
        let lifeTime = currentTimestamp - (this.wasPlanted ?? 0);
        Object.entries(
            this.liveStateDuration as Record<LifeCycle, number>,
        ).some(([state, duration]) => {
            if (lifeTime - duration <= 0) {
                return true;
            }
            this.lifeState = state as unknown as LifeCycle;
            lifeTime -= duration;
            return false;
        });

        return this.lifeState ?? LifeCycle.sprout;
    }

    public get lastKnownLifeState() {
        return this.lifeState;
    }

    public get liveStateDuration(): Record<LifeCycle, number> {
        return {
            [LifeCycle.sprout]: 10,
            [LifeCycle.young]: 10,
            [LifeCycle.grown]: 10,
            [LifeCycle.ripe]: 10,
            [LifeCycle.harvested]: 10,
        };
    }

    public get tileTypeList(): Record<LifeCycle, number> {
        throw new Error('Getter "tileTypeList" is not implemented');
        return {
            [LifeCycle.sprout]: 0,
            [LifeCycle.young]: 0,
            [LifeCycle.grown]: 0,
            [LifeCycle.ripe]: 0,
            [LifeCycle.harvested]: 0,
        };
    }

    public get sellingPrice(): number {
        return 10;
    }

    public get plantingTime(): number {
        return 10;
    }
}

export default Plant;
