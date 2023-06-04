import { create } from "zustand"
import { IBasic, StateFlat } from "./index.interface"
import axios from "axios";
import { persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { mountStoreDevtool } from 'simple-zustand-devtools';


const useStoreApp = create((set) => ({
    data: {},
    loading: false,
    hasErrors: false,
    bears: 0,
    firstName: '',
    lastName: '',
    updateFirstName: (firstName: StateFlat) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName: StateFlat) => set(() => ({ lastName: lastName })),
    increasePopulation: () => set((state: IBasic) => ({ bears: state.bears + 1 })),
    decresasePopulation: () => set((state: IBasic) => ({ bears: state.bears < 1 ? 0 : state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
    fetch: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(
                "https://api.github.com/users/zidniryi"
            );
            set((state: IBasic) => ({ data: (state.data = response.data), loading: false }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false }));
        }
    },
}))


export const useStorePersist = create(
    persist(
        (set: any) => ({
            // Define your store state and actions
            counter: 0,
            increment: () => set((state: any) => ({ counter: state.counter + 1 })),
            decrement: () => set((state: any) => ({ counter: state.counter - 1 })),
        }),
        {
            // Configure Zustand-persist options
            name: 'my-app-store', // Name of the persisted store
            getStorage: () => AsyncStorage, // AsyncStorage for React Native
        }
    )
);


// if (process.env.NODE_ENV === 'development') {
//     mountStoreDevtool('Store2', useStoreApp);
// }



export default useStoreApp