import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../constants';
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

type Props = {
  question: string;
  answer: string;
  userAnswer: string;
}

export const ResultItem: React.FC<Props> = ({ question, answer, userAnswer }) => {
  const textColor = answer === userAnswer ? styles.correctText : styles.incorrectText;
  return (
    <View style={[styles.itemContainer, answer === userAnswer ? styles.correctBackground : styles.incorrectBackground]}>
      <Text style={[styles.itemText, textColor]}>{entities.decode(question)}</Text>
      <Text style={[styles.answerText, textColor]}>Correct Answer: {answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
  },
  correctBackground: {
    backgroundColor: colors.lightGreen,
  },
  incorrectBackground: {
    backgroundColor: colors.lightRed,
  },
  itemText: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    fontWeight: 'bold',
  },
  answerText: {
    textAlign: 'center',
    fontSize: fontSizes.extraSmall,
    fontWeight: 'normal',
    marginTop: 8,
  },
  correctText: {
    color: colors.darkGreen,
  },
  incorrectText: {
    color: colors.darkRed,
  }
});
