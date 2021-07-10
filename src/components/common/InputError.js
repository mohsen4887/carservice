import {Text, View} from 'native-base';
import React from 'react';
const InputError = ({message}) => {
  if (!message) {
    return <View />;
  }
  return (
    <Text style={{color: 'red', marginLeft: 15, fontSize: 13}}>{message}</Text>
  );
};

export default InputError;
