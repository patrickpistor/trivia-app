import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants';

type Props = {
  question: string;
}

export const QuestionItem: React.FC<Props> = ({question}) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    borderWidth: 6,
    borderRadius: 6,
    borderColor: colors.blue,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 32,
    color: colors.grey,
    paddingHorizontal: 4,
  },
});
