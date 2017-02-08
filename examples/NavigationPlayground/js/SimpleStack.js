/**
 * @flow
 */

import React from 'react';
import {
  Button,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Home Screen"
    navigation={navigation}
  />
);
MyHomeScreen.navigationOptions = {
  header: {
    title: 'Welcome Welcome Welcome Welcome Welcome Welcome',
    titleStyle: {
      backgroundColor: 'red',
    },
  },
};

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={
      `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''
      }${navigation.state.params.name}'s Profile`
    }
    navigation={navigation}
  />
);
MyProfileScreen.navigationOptions = {
  header: ({ state, setParams, goBack}) => ({
    title: 'Profile',
    titleStyle: {
      titleStyle: {
        backgroundColor: 'blue',
      },
    },
    left: (
        <Button
          title="Back"
          onPress={() => goBack()}
        />
    ),
  }),
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  },
});

export default SimpleStack;
