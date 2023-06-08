
import React, {useState} from 'react';
import { Text, View, Button, Stylesheet } from 'react-native';
import { StyleSheet } from 'react-native-web';

const App = () => {
  const{counter, setCounter}=React.useState(0);

  const incrementHandler=()=>{
    setCounter(counter+1);

  };
  const decrementHandler=()=>{
    setCounter(counter-1);
  };
  const resetHandler=()=>{
    setCounter(0);
  };




  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>5</Text>
      </View>
      <View style={styles.horizontalButtonContainer}>
        <View styles={[styles.buttonContainer, { flex: 1 }]}>
          <button title='increment' color={'green'} onPress={incrementHandler()} />
        </View>
        <View styles={[styles.buttonContainer, { flex: 1 }]}>
          <button title='decrament' color={'red'} onPress={decrementHandler()}/>
        </View>
        <View style={{padding:10,width:'100%'}}>
          <View styles={[styles.resetButtonContainer, { flex: 1 }]}>
            <button title='reset' color={'grey'} onPress={resetHandler()} />
          </View>
        </View>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    with: 100,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontalButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 10,

  },
  resetButtonContainer: {
    width: '100%',

  }

});
export default App;

