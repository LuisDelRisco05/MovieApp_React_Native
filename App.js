import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
// import FadeScreen from './src/screens/FadeScreen';
import BackgroundState from './src/context/BackgroundState';


const App = () => {
  return (

    <NavigationContainer>
      <BackgroundState>
          <StackNavigation />
          {/*<FadeScreen />*/}
      </BackgroundState>
    </NavigationContainer>
    
  );

};

export default App;
