import { View, Text, TextInput } from 'react-native'
import React from 'react'
import useStoreApp from "../store"
import { StateFlat } from "../store/index.interface"
import { shallow } from 'zustand/shallow'

export default function FlatUpdate() {
    const [firstName, updateFirstName] = useStoreApp(
        (state: any) => [state.firstName, state.updateFirstName],
        shallow
    )

    console.log(firstName)
    return (
        <View>
            <Text>FlatUpdate</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1, color: 'black' }}
                onChangeText={(e) => updateFirstName(e)}
                value={firstName}
            />
            <Text style={{ color: 'black', fontWeight: 'bold' }}>{firstName}</Text>
        </View>
    )
}