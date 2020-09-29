import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useContext } from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import { ScoreContext } from '../context';
import { RootStackParamList, AnswerList } from '../types';
import { ResultHeader, Button, ResultItem } from '../components';

export default function ResultScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Result'>) {
  const { score, clearScore, answerList } = useContext(ScoreContext);

  const onPressGoHome = useCallback(() => {
    clearScore();
    navigation.replace('Main');
  }, [navigation, clearScore]);

  const renderResult = useCallback(({item}) => {
    return <ResultItem question={item.question} answer={item.answer} userAnswer={item.userAnswer}/>;
  }, []);

  const keyExtractor = useCallback((item: AnswerList, index: number) => {
    return item.question + index.toString();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<AnswerList>
        data={answerList}
        renderItem={renderResult}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <ResultHeader score={score} total={answerList.length} />
        }
        ListFooterComponentStyle={styles.footerContainer}
        ListFooterComponent={
          <Button onPressEvent={onPressGoHome} text={'PLAY AGAIN'} styleOverride={'play'}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    alignItems: 'center',
  }
});
