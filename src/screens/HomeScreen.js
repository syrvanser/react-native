import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hi There!</Text>
    <Button
      onPress={() => console.log('Button PRessed')}
      title="Go to Components Demo"
    />
    <TouchableOpacity onPress={() => console.log('Button PRessed')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
