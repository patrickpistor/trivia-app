import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../constants';

type Props = {
  score: number;
  total: number;
}

export const ResultHeader: React.FC<Props> = ({score, total}) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>Right: <Text style={styles.correctText}>{score}</Text></Text>
      <Text style={styles.scoreText}>Wrong: <Text style={styles.incorrectText}>{total - score}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreText: {
    color: colors.grey,
    fontSize: fontSizes.subHeader,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  correctText: {
    color: colors.darkGreen,
  },
  incorrectText: {
    color: colors.darkRed,
  }
});
