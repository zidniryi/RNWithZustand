import { View, Text } from 'react-native'
import React from 'react'
import Basic from "./components/Basic"
import RequestApp from "./components/Request"

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'black' }}>App</Text>
      <Basic />
      <RequestApp />
      <Text>Hello</Text>
    </View>
  )
}