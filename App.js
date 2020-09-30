import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am ...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 2,
        }}
        defaultValue="Give me a name!"
      />
    </View>
  );
};

export default Cat;
