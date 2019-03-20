import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import styles from './styles';
import api from '~/services/api';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExistence = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExistence(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (error) {
      console.tron.log('User does not exist.');
    }
  };

  render() {
    const { username } = this.state;

    return (
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
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
