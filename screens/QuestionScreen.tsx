import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, QuestionItem } from '../components';
import { QuestionListContext, ScoreContext } from '../context';
import { Question, RootStackParamList } from "../types";
import { colors, fontSizes } from '../constants';
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

export default function QuestionScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Question'>) {
  const { getListAsync } = useContext(QuestionListContext);
  const { addScore, addAnswer } = useContext(ScoreContext);
  const [displayList, setDisplayList] = useState<Question[]>();
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  useEffect(() => {
    const bootstrap = async () => {
      const list = await getListAsync();
      if (list) {
        setDisplayList(list);
      }
    };
    bootstrap();
  }, []);

  const onPressTrue = useCallback(() => {
    if (displayList && displayList[questionNumber]) {
      setQuestionNumber(questionNumber + 1);
      const correctAnswer = displayList[questionNumber].correct_answer;

      const question = entities.decode(displayList[questionNumber].question);
      addAnswer(question, correctAnswer, 'True');

      if (correctAnswer === 'True') {
        addScore();
      }
    } 

    if(displayList && questionNumber + 1 >= displayList.length) {
      navigation.replace('Result');
    }    
  }, [questionNumber, setQuestionNumber, displayList]);

  const onPressFalse = useCallback(() => {
    if (displayList && displayList[questionNumber]) {
      setQuestionNumber(questionNumber + 1);
      const correctAnswer = displayList[questionNumber].correct_answer;

      const question = entities.decode(displayList[questionNumber].question);
      addAnswer(question, correctAnswer, 'False');

      if (correctAnswer === 'False') {
        addScore();
      }
    }

    if(displayList && questionNumber + 1 >= displayList.length) {
      navigation.replace('Result');
    }
  }, [questionNumber, setQuestionNumber, displayList]);
  
  if (displayList && displayList[questionNumber]) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{displayList[questionNumber].category}</Text>
        <QuestionItem question={entities.decode(displayList[questionNumber].question)}/>
        <Button onPressEvent={onPressTrue} text={'True'} styleOverride={'true'}/>
        <Button onPressEvent={onPressFalse} text={'False'} styleOverride={'false'} />
        <Text style={styles.title}>{questionNumber} / {displayList.length}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Loading..."}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: fontSizes.text,
    fontWeight: '200',
    textAlign: 'center',
    paddingVertical: 32,
    color: colors.grey,
    paddingHorizontal: 4,
  },
});
