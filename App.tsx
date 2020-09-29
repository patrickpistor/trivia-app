import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { ScoreProvider, QuestionListProvider, ApiProvider } from './context';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ScoreProvider>
          <ApiProvider>
            <QuestionListProvider>
              <Navigation />
              <StatusBar />
            </QuestionListProvider>
          </ApiProvider>
        </ScoreProvider>
      </SafeAreaProvider>
    );
  }
}
