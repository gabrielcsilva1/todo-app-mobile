import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'
import { StyleSheet, Text, View } from 'react-native';


import Home from './src/app/home';
import { colors } from './src/styles';
import { Loading } from './src/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (fontsLoaded == false) {
    return <Loading/>
  }

  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600]
  },
});
