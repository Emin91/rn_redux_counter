import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

export const Buttons = ({type, mainStyle, textStyle, text}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(type)} style={mainStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
