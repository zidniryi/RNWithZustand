export interface IBasic {
    bears: number;
    data: Object;
    increasePopulation: (by: number) => void
    decresasePopulation: (by: number) => void
    removeAllBears: () => void;
    loading: boolean,
    hasErrors: boolean,
}