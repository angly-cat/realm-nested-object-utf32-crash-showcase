import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Realm from 'realm';

const ItemSchema = {
    name: 'Item',
    primaryKey: 'id',
    properties: {
        id: 'string',
    },
};

const realm = new Realm({
    schema: [
        ItemSchema,
    ],
    migration: () => {},
    schemaVersion: 1,
});

class App extends Component {
  render() {
    realm.write(() => {
        realm.create('Item', {
            id: 'test',
            randomName: {
                // String with any UTF-32 symbol with code >= 10000.
                // Strings with U+00009999 and lower are fine, strings with U+00010000 and higher cause crashes.
                otherRandomName: '😊',
            },
        }, true);
    });

    return (
      <View style={styles.container}>
        <Text>Select "Debug JS Remotely" and the app should crash!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('realmnestedobjectutf32crashshowcase', () => App);
