import { ThemeProvider } from 'styled-components/native';
import {useFonts,NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'

import { Home } from '@screens/Home';
import {Statistics} from '@screens/Statistics'
import { AppContainer } from '@styles/app';
import { Loader } from '@components/Loader';
import { defaultTheme } from '@styles/defaultTheme';
import { StatusBar } from 'react-native';
import { NewMeal } from '@screens/NewMeal';

export default function App() {
  const [fontLodaded] =  useFonts({
    NunitoSans_700Bold,
    NunitoSans_400Regular,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor= 'transparent'
        />
        {fontLodaded ? <NewMeal/> :<Loader/>}
      </AppContainer>

    </ThemeProvider>
  );
}

