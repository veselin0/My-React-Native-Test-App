import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const PageOne = ({goToNextPage}) => {
  const [text, setText] = useState('');
  const [persisted, setPersisted] = useState('');

  const storeData = async (value) => {
    const newPersisted = persisted ? `${persisted}, ${value}` : value;
    await AsyncStorage.setItem('@storage_key', newPersisted);
    setPersisted(newPersisted);
  };

  const removeItem = async (item) => {
    const allText = await AsyncStorage.getItem('@storage_key');
    const asArray = allText?.split(', ') ?? [];
    const newArray = asArray.filter((i) => i !== item);
    const asText = newArray.join(', ');
    await AsyncStorage.setItem('@storage_key', asText);
    setPersisted(asText);
  };

  useEffect(() => {
    const readStorage = async () => {
      const value = await AsyncStorage.getItem('@storage_key');
      setPersisted(value ?? '');
    };
    readStorage();
  }, []);

  return (
    <View style={{padding: 20, paddingTop: 40, flex: 1}}>
      <TextInput
        placeholder="Write here!"
        value={text}
        onChangeText={setText}
      />
      <View style={{flex: 1}}>
        <Text style={{margin: 40}}>Current value: {persisted} </Text>
        <Button
          title="Update value"
          onPress={() => {
            storeData(text);
            setText('');
          }}
        />
        <View style={{marginTop: 10}}>
          <Button
            title="Remove matching value"
            onPress={() => {
              removeItem(text);
            }}
          />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Button title="Go to page 2" onPress={goToNextPage} />
      </View>
    </View>
  );
};

export default PageOne;
