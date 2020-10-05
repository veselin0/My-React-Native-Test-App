import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const PageTwo = ({goBack}) => {
  const [persisted, setPersisted] = useState('');

  useEffect(() => {
    const readStorage = async () => {
      const value = await AsyncStorage.getItem('@storage_key');
      setPersisted(value ?? '');
    };
    readStorage();
  }, []);

  return (
    <View style={{padding: 20, paddingTop: 40, flex: 1}}>
      <Text>This is Page Two</Text>

      <View style={{flex: 1}}>
        <Text>{persisted.split(', ').join('\n')}</Text>
      </View>

      <Button title="Go back" onPress={goBack} />
    </View>
  );
};

export default PageTwo;
