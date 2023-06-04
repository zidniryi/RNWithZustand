import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStorePersist } from "../store";

const Persist = () => {
  const counter = useStorePersist((state) => state.counter);
  const increment = useStorePersist((state) => state.increment);
  const decrement = useStorePersist((state) => state.decrement);

  return (
    <View>
      <Text style={{ color: "black" }}>Counter: {counter}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default Persist;