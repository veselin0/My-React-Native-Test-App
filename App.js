import React from 'react';
import {Text} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return `${firstName} ${secondName} ${thirdName}`;
};

const Cat = () => {
  return (
    <Text>
      Hello, I am your cat {getFullName('Gocho', 'Kochev', 'The Prophet')}!
    </Text>
  );
};

export default Cat;
