import { ThemeProvider } from 'styled-components/native';
import {useFonts,NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'


import { AppContainer } from '@styles/app';
import { Loader } from '@components/Loader';
import { defaultTheme } from '@styles/defaultTheme';
import { StatusBar } from 'react-native';
import { Router } from '@routes/index';
import { MealsProvier } from '@context/MealsContext';

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
        <MealsProvier>
          {fontLodaded ? <Router/> :<Loader/>}
        </MealsProvier>
      </AppContainer>

    </ThemeProvider>
  );
}

