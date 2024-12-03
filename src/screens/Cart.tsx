import { VStack } from '@gluestack-ui/themed';

import { ItemsCart } from '../components/ItemsCart';
import { ScreenHeader } from '../components/ScreenHeader';

export function Cart() {
	return (
		<VStack flex={1}>
			<ScreenHeader title="Cart" />
			<ItemsCart />
		</VStack>
	);
}
