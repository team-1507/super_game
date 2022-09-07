enum LifeCycle {
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

    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        if (!this.lifeState) {
            throw new Error('Life state is not set');
        }
        // return this.tileTypeList[this.lifeState];
        return 11;
    }

    // public getCurrentLifeState(currentTimestamp: number): LifeCycle {
    //     let currentState = LifeCycle.sprout;
    //     let lifeTime = currentTimestamp - (this.wasPlanted ?? 0);
    //     Object.entries(
    //         this.liveStateDuration as Record<LifeCycle, number>,
    //     ).some(([state, duration]) => {
    //         if (lifeTime - duration <= 0) {
    //             return true;
    //         }
    //         currentState = state as unknown as LifeCycle;
    //         lifeTime -= duration;
    //         return false;
    //     });

    //     return currentState;
    // }

    // // eslint-disable-next-line class-methods-use-this
    // private get liveStateDuration(): Record<LifeCycle, number> {
    //     return {
    //         [LifeCycle.sprout]: 10,
    //         [LifeCycle.young]: 10,
    //         [LifeCycle.grown]: 10,
    //         [LifeCycle.ripe]: 10,
    //         [LifeCycle.harvested]: 10,
    //     };
    // }

    // // eslint-disable-next-line class-methods-use-this
    // private get tileTypeList(): Record<LifeCycle, number> {
    //     throw new Error('Getter "tileTypeList" is not implemented');
    //     return {
    //         [LifeCycle.sprout]: 0,
    //         [LifeCycle.young]: 0,
    //         [LifeCycle.grown]: 0,
    //         [LifeCycle.ripe]: 0,
    //         [LifeCycle.harvested]: 0,
    //     };
    // }
}

export default Plant;
