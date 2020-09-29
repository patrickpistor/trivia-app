import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fontSizes } from '../constants';

type Props = {
  onPressEvent(): void;
  text: string;
  styleOverride?: string;
}

export const Button: React.FC<Props> = ({onPressEvent, text, styleOverride}) => {
  return (
    <TouchableOpacity onPress={onPressEvent} style={[styles.button,
      styleOverride === 'play' ? styles.buttonPlay : null,
      styleOverride === 'true' ? styles.buttonTrue : null,
      styleOverride === 'false' ? styles.buttonFalse : null,
    ]}>
        <Text style={[styles.buttonText,
          styleOverride === 'play' ? styles.textPlay : null,
          styleOverride === 'true' ? styles.textTrue : null,
          styleOverride === 'false' ? styles.textFalse : null,
        ]}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingVertical: 16,
    marginVertical: 8
  },
  buttonText: {
    textAlign: 'center',
    fontSize: fontSizes.text,
  },
  buttonPlay: {
    backgroundColor: colors.blue,
    width: '75%',
  },
  textPlay: {
    color: colors.veryLightBlue,
  },
  buttonTrue: {
    backgroundColor: colors.green,
    paddingHorizontal: 128,
  },
  textTrue: {
    color: colors.veryLightGreen,
  },
  buttonFalse: {
    backgroundColor: colors.red,
    paddingHorizontal: 128,
  },
  textFalse: {
    color: colors.verylightRed,
  },
});
