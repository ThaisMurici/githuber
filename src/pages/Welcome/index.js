import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Welcome!</Text>
    <Text style={styles.text}>Please, provide your GitHub username to continue.</Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Insert your username"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
