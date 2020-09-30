import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = ({name}) => {
  //destructuring of porops
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {name}, and I am {isHungry ? 'thirsty' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some beer, please!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Gocho" />
      <Cat name="Kochev" />
    </>
  );
};

export default Cafe;
