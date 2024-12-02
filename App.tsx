import {
	useFonts,
	Roboto_700Bold,
	Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { Center, Text } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';

export default function App() {

	const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <Center>
      <Text>Hlo</Text>
    </Center>
  );
}


