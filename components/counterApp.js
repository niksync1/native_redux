import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Button, Text, View, StyleSheet } from "react-native";
import counterSlice from '../redux/someSlicers';


function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
      <View>
        <Text style={styles.text}>  
         Counter: {counter}
        </Text>
        <View>
          <Button
            title="Increment"
            onPress= {() => dispatch(counterSlice.actions.increment())}
          />
          <Button
          title="Decrement"
          onPress= {() => dispatch(counterSlice.actions.decrement())}
        />      
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 300
    },
    text: {
      fontSize:32,
      fontWeight: 'bold',
      color: 'red',
      marginBottom: 50
    },
    button:{
      flexDirection: 'row',
      justifyContent:'space-around',
      width: 300,
      height: 50
    }
  });
  
  export default Counter;