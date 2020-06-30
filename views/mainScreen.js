import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {appStyle} from './styles';
import {Buttons} from './buttonCounter';
import {decrement, increment, newCounter} from '../redux/actions';

function MainScreen() {
  const dispatch = useDispatch();
  const {bgColor, counter} = useSelector(state => state);
  const [newValue, setNewValue] = useState(counter);

  const styles = appStyle(bgColor, counter);

  const data = [
    {
      type: decrement(),
      mainStyle: styles.leftBtnView,
      textStyle: styles.leftBtnText,
      text: `\<`,
    },
    {
      type: null,
      mainStyle: styles.countTextView,
      textStyle: styles.countText,
      text: counter,
    },
    {
      type: increment(),
      mainStyle: styles.rightBtnView,
      textStyle: styles.rightBtnText,
      text: `\>`,
    },
  ];

  useEffect(() => {
    dispatch(newCounter(newValue));
  }, [newValue]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.counterView}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={e => setNewValue(e)}
        />
        <Text onPress={() => dispatch(reset())} style={styles.resetText}>
          RESET
        </Text>
        <View style={styles.bnts}>
          {data.map(({type, mainStyle, textStyle, text}) => {
            return (
              <Buttons
                type={type}
                mainStyle={mainStyle}
                textStyle={textStyle}
                text={text}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default MainScreen;
