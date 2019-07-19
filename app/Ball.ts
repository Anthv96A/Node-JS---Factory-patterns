import { IBall } from "./Ball-inteface";

export abstract class Ball implements IBall {
    constructor(public readonly make: string){}

    abstract type: string;

    public roll(): string{
        return `The ${this.type} is rolling.`;
    }
    abstract action(): string;
}