import React from 'react';
import {Text, View} from 'react-native';

const Cat = ({name}) => {
  //destructuring of porops
  return (
    <View>
      <Text>Hello, I am {name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name="Gocho" />
      <Cat name="Kochev" />
      <Cat name="The Prophet" />
    </View>
  );
};

export default Cafe;
