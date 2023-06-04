export interface IBasic {
    bears: number;
    data: Object;
    increasePopulation: (by: number) => void
    decresasePopulation: (by: number) => void
    removeAllBears: () => void;
    loading: boolean,
    hasErrors: boolean,
}

export type StateFlat = {
    firstName: string
    lastName: string
}

export type ActionFlat = {
    updateFirstName: (firstName: StateFlat['firstName']) => void
    updateLastName: (lastName: StateFlat['lastName']) => void
}