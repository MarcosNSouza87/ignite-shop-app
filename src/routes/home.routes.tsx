import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Details } from '@screens/Details';

type HomeRoutes = {
	homeStack: undefined;
	details: { productId: string };
};

export type HomeNavigatorRoutesProps = NativeStackNavigationProp<HomeRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<HomeRoutes>();

export function HomeRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="homeStack" component={Home} />
			<Screen name="details" component={Details} />
		</Navigator>
	);
}
