import { create } from "zustand"
import { IBasic, StateFlat } from "./index.interface"
import axios from "axios";
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



// if (process.env.NODE_ENV === 'development') {
//     mountStoreDevtool('Store2', useStoreApp);
// }



export default useStoreApp