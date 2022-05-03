import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './src/contexts/StateContext';
import MainStacks from './src/stacks/MainStacks';

export default App=()=>{
  return (
      <StateProvider>
          <NavigationContainer>
              <MainStacks/>
          </NavigationContainer>
      </StateProvider>
  );
}