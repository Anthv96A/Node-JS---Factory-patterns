import { BallFactory } from './BallFactory';
import { BallType } from './ball-type-enum';
import { IBall } from './Ball-inteface';

(async() => {
   await startFactoryAsync();
})();

async function startFactoryAsync() {
    try {
        const factory = new BallFactory();

        const football: IBall = await factory.createBallAsync(BallType.Football);
        const basketball: IBall = await factory.createBallAsync(BallType.Basketball);
    
        console.log(football.roll()); // The football is rolling.
        console.log(basketball.roll()); // The basketball is rolling.
        console.log(football.action()); // You kicked the football.
        console.log(basketball.action()); // You bounced the basketball.
        console.log(football.make); // Nike
        console.log(basketball.make); // Under Armour
    } catch (error) {
        throw error;
    }
}
