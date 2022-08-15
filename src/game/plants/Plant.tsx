enum LifeCycle {
    'sprout',
    'young',
    'grown',
    'ripe',
    'harvested',
}

abstract class Plant {
    protected lifeState: LifeCycle;

    protected canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.lifeState = LifeCycle.sprout;
        this.canvas = canvas;
    }

    // eslint-disable-next-line class-methods-use-this
    public get tileType(): number {
        return 1;
    }
}

export default Plant;
