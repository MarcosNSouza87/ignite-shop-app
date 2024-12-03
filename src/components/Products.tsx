import { useNavigation } from '@react-navigation/native';
import { VStack } from '@gluestack-ui/themed';
import { HeaderList } from './HeaderList';

import { ProductCard, ProductCardProps } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { FlatList } from 'react-native';

type Props = {
	brand: string;
	data: ProductCardProps[];
};

export function Products({ data, brand }: Props) {
	const { navigate } = useNavigation();

	function handleGoDetail (itm: any) {
		console.log('item => ', itm)
		navigate('details', { productId: itm.id })
	}

	return (
		<VStack flex={1}>
			<HeaderList title={brand} counter={data.length} />

			<FlatList
				data={data}
				keyExtractor={(item)  => item.id}
				renderItem={({ item })  => (
					<ProductCard
						data={item}
						onPress={() => handleGoDetail(item)}
					/>
				)}
				numColumns={2}
				contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</VStack>
	);
}
