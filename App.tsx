import { StatusBar } from 'react-native';
import {
	useFonts,
	Roboto_700Bold,
	Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { CartContextProvider } from './src/contexts/CartContext';
export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

	return (
		<GluestackUIProvider config={config}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor={'transparent'}
			/>
			<CartContextProvider>
				{fontsLoaded ? <Routes /> : <Loading />}
			</CartContextProvider>
		</GluestackUIProvider>
	);
}
