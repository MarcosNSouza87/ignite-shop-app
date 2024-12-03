import { Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Cart } from '../screens/Cart';
import { HomeRoutes } from './home.routes';

import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  
	const { tokens } = gluestackUIConfig;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray300,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: tokens.colors.gray600,
          height: Platform.OS === 'android' ? 'auto' : 86,
					paddingBottom: tokens.space['6'],
					paddingTop: tokens.space['4'],
        },
      }}>
      <Screen
        name="products"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={24} />
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <Feather name="shopping-bag" color={color} size={24} />,
        }}
      />
    </Navigator>
  )
}