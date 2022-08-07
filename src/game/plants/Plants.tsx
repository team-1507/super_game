import React from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';

class Plants {
    private spriteSheet: SpriteSheet;

    constructor() {
        this.spriteSheet = new SpriteSheet({ ...config, ...constants });
    }

    public Garden() {
        return (
            <div>
                garden
            </div>
        );
    }
}

export default Plants;
