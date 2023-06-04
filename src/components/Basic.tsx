import React from 'react'
import { View, Text, Button } from 'react-native'
import useStoreApp from "../store"

function BearCounter() {
    const bears = useStoreApp((state: any) => state.bears)
    return <Text style={{ color: 'black' }}>{bears} around here.. 22.</Text>
}

function Controls() {
    const increasePopulation = useStoreApp((state: any) => state.increasePopulation)
    const decreasePopulation = useStoreApp((state: any) => state.decresasePopulation)

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