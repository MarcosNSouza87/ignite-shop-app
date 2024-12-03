import { HeaderList } from './HeaderList';
import { Card, VStack, useToast } from '@gluestack-ui/themed';

import { useCart } from '../hooks/useCart';

import { ItemCartCard } from './ItemCartCard';
import { Button } from '../components/Button';
import { ToastMessage } from './ToastMessage';
import { FlatList } from 'react-native';

export function ItemsCart() {
	const { cart, removeProductCart } = useCart();
	const toast = useToast();

	async function handleItemRemove(productId: string) {
		try {
			await removeProductCart(productId);

			toast.show({
				placement: 'top',
				render: ({ id }) => (
					<ToastMessage
						id={id}
						action="success"
						title={'Produto removido'}
						onClose={() => toast.close(id)}
					/>
				),
			});
		} catch (error) {
			toast.show({
				placement: 'top',
				render: ({ id }) => (
					<ToastMessage
						id={id}
						action="error"
						title={'Não foi possível remover o produto'}
						onClose={() => toast.close(id)}
					/>
				),
			});
		}
	}

	return (
		<VStack flex={1}>
			<HeaderList title="Produtos" counter={cart ? cart.length : 0} />
			{cart && (
				<FlatList
					data={cart}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<ItemCartCard data={item} onRemove={() => handleItemRemove(item.id)} />
					)}
					contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
					showsVerticalScrollIndicator={false}
					style={{ paddingHorizontal: 8, marginTop: 2 }}
				/>
			)}

			{cart && cart.length > 0 && <Button title="Finalizar compra" mx={8} my={3} />}
		</VStack>
	);
}
