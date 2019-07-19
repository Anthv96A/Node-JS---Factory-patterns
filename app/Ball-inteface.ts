export interface IBall {
    type: string;
    make: string;
    roll(): string;
    action(): string;
}