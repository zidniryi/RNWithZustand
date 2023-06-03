import { create } from 'zustand'
import { View, Text, Button } from 'react-native'
import React from 'react'


interface IBasic {
    bears: number;
    increasePopulation: (by: number) => void
    decresasePopulation: (by: number) => void
    removeAllBears: () => void;
}



const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: IBasic) => ({ bears: state.bears + 1 })),
    decresasePopulation: () => set((state: IBasic) => ({ bears: state.bears < 1 ? 0 : state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

function BearCounter() {
    const bears = useStore((state: any) => state.bears)
    return <Text>{bears} around here.. 22.</Text>
}

function Controls() {
    const increasePopulation = useStore((state: any) => state.increasePopulation)
    const decreasePopulation = useStore((state: any) => state.decresasePopulation)

    return (
        <View>
            <Button onPress={increasePopulation} title="One Up" />
            <Button onPress={decreasePopulation} title="One Down" color={"red"} />

        </View>
    )
}



export default function Basic() {
    return (
        <View>
            <BearCounter />
            <Controls />
        </View>
    )
}