import { BasketBall } from './Basketball';
import { Football } from './Football'; 
import { BallType } from './ball-type-enum';
import { IBall } from './Ball-inteface';

export class BallFactory{
    public async createBallAsync(type: BallType): Promise<IBall>{
        try {
            switch(type){
                case BallType.Basketball:
                    return await Promise.resolve(new BasketBall('Under Armour'));
                case BallType.Football:
                    return await Promise.resolve(new Football('Nike'));
                default:
                    return await Promise.reject('Not a recongised ball type');
            }
        } catch (error) {
            throw error;
        }
    }
}

