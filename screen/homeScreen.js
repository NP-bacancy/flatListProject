/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

const homeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.titleText}
          onPress={() => Linking.openURL('https://reactnative.dev/index.html')}
        >
          Welcome to React Native
        </Text>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 200,
            margin: 10,
            alignSelf: 'center',
          }}
          source={require('./react-native.png')}
        />
      </View>
      <Button
        onPress={() => props.navigation.navigate('GS')}
        title="Getting Started Using Button"
        // style={{
        //         padding: '10',
        // }}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('FL')}>
        <Text style={styles.listText}>
          FlatList Demo With Touchable Opacity
        </Text>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 200,
            margin: 10,
            alignSelf: 'center',
          }}
          source={require('./List.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#888',
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  listText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 6,
    color: '#222',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    padding: 15,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#444',
    color: '#fff',
    borderColor: 'cyan',
  },
});

export default homeScreen;
