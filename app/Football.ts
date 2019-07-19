import { Ball } from './Ball';

export class Football extends Ball {
    readonly type: string = 'Football'   
    
    constructor(make: string){
        super(make)
    }
    action(): string {
        return `You kicked the ball`;
    }
}