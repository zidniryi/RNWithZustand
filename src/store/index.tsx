import { create } from "zustand"
import { IBasic } from "./index.interface"
import axios from "axios";

const useStoreApp = create((set) => ({
    data: {},
    loading: false,
    hasErrors: false,
    bears: 0,
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

export default useStoreApp