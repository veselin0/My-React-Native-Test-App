import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAsyncStorage} from '@react-native-community/async-storage';

export default function App() {
  const [value, setValue] = useState('value');
  const {getItem, setItem} = useAsyncStorage('@storage_key');

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem();
    setValue(item);
  }, [getItem]);

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, [readItemFromStorage]);

  return (
    <View style={{margin: 40}}>
      <Text>Current value: {value}</Text>
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage(Math.random().toString(36).substr(2, 5))
        }>
        <Text>Update value</Text>
      </TouchableOpacity>
    </View>
  );
}

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';

// const DATA = [
//   {
//     id: '1',
//     title: 'First item',
//   },
//   {
//     id: '2',
//     title: 'Second item',
//   },
//   {
//     id: '3',
//     title: 'Third item',
//   },
// ];

// const Item = ({item, onPress, style}) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//     <Text style={styles.title}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({item}) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         style={{backgroundColor}}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;
