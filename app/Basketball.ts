import { Ball } from './Ball';

export class BasketBall extends Ball {
    readonly type: string = 'Basketball';

    constructor(make: string){
        super(make)
    }
    action(): string {
        return `You bounced the ball`;
    }
}