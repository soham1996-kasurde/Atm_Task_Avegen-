/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import all the components we are going to use
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const App = () => {

  const [amount, setAmount] = useState(1000);
  const [p_amount, setp_amount] = useState();

  const handleTextChange = (val) => {
    console.log('Amount', val)
    setp_amount(Number(val))
  };

  const add = () => {
    var t_amount = amount + p_amount
    setAmount(t_amount)
    console.log('Amount to add', amount)
  };

  const subtract = () => {
    var t_amount = amount - p_amount
    setAmount(t_amount)
    console.log('Amount to subtract', amount)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={{alignSelf: 'center', fontSize: 30}}>{amount}</Text>        
      </View>
      <TextInput
          placeholder="Enter amount.."
          underlineColorAndroid="transparent"
          autoCapitalize="words"
          style={styles.txtField}
          keyboardType="number-pad"
          onChangeText={(val) => handleTextChange(val)}
        />
        <View style={styles.container_button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => add() }>
            <Text style={styles.button_text}>
              ADD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => subtract()}>
            <Text style={styles.button_text}>
              SUBTRACT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: '#FFA07A',
    height: 280,
    width: 280,
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  txtField: {
    height: 50,
    paddingLeft: 16,
    marginTop: 16,
    marginBottom: 25,
    width: Dimensions.get('window').width - 32,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    backgroundColor: '#87ceeb',
    alignSelf: 'center'
  },
  container_button: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#dec1dc',
    margin: 10,
    width: 150,
    borderRadius: 5,
  },
  button_text: {
    fontSize: 16,
    fontFamily: 'Oswald-Regular',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
});








/* 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Soham</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
 */