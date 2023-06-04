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
    updateFirstName: any;
    firstName: string
    lastName: string
}

export type ActionFlat = {
    updateFirstName: (firstName: StateFlat['firstName']) => void
    updateLastName: (lastName: StateFlat['lastName']) => void
}

export interface AuthState {
    isAuthenticated: boolean;
    user: null;
    token: null | string;
    login: (email: string, password: string) => Promise<void>;
    register: (userInfo: FormData) => Promise<void>;
    logout: () => void;
}