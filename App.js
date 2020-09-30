import React from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
//import Constants from 'expo-constants';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>
          This equipment has been tested and found to comply with the limits for
          a Class B digital device, pursuant to part 15 of the FCC Rules. These
          limits are designed to provide reasonable protection against harmful
          interference in a residential installation. This equipment generates,
          uses and can radiate radio frequency energy and, if not installed and
          used in accordance with the instructions, may cause harmful
          interference to radio communications. However, there is no guarantee
          that interference will not occur in a particular installation. If this
          equipment does cause harmful interference to radio or television
          reception, which can be determined by turning the equipment off and
          on, the user is encouraged to try to correct the interference by one
          or more of the following measures:
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  ScrollView: {
    backgroundColor: 'skyblue',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
