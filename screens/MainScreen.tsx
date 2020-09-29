import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../types';
import { Button } from '../components';
import { colors, fontSizes } from '../constants';

export default function MainScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Main'>) {

  const onPressPlay = useCallback(() => {
    navigation.replace('Question');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Trivia Challenge</Text>
      <Text style={styles.subtitle}>You will be presented with 10 true or false questions.</Text>
      <Text style={styles.subtitleItalics}>Can you score a 10/10?</Text>
      <Button onPressEvent={onPressPlay} text={'BEGIN'} styleOverride={'play'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: fontSizes.header,
    color: colors.grey,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSizes.subHeader,
    color: colors.grey,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  subtitleItalics: {
    fontSize: fontSizes.subHeader,
    color: colors.grey,
    fontWeight: 'normal',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
