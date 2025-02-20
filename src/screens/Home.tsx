import { useEffect, useState } from 'react';
import { VStack } from '@gluestack-ui/themed';

import { PRODUCTS } from '../data/products';

import { Brands } from '../components/Brands';
import { Products } from '../components/Products';
import { HomeHeader } from '../components/HomeHeader';
import { ProductCardProps } from '../components/ProductCard';
import { Notification } from '@components/Notification';

export function Home() {
	const [brandSelected, setBrandSelected] = useState('All');
	const [products, setProducts] = useState<ProductCardProps[]>([]);

	useEffect(() => {
		const filtered: ProductCardProps[] =
			brandSelected !== 'All'
				? (PRODUCTS.filter(
						(product) => product.brand === brandSelected,
				  ) as ProductCardProps[])
				: (PRODUCTS as ProductCardProps[]);
		setProducts(filtered);
	}, [brandSelected]);

	return (
		<VStack flex={1} alignItems="flex-start" justifyContent="flex-start">
			<HomeHeader />
			<Brands onSelect={setBrandSelected} selected={brandSelected} />
			<Products brand={brandSelected} data={products} />
		</VStack>
	);
}
