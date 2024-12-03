import { Heading, VStack } from '@gluestack-ui/themed';

import { Size } from './Size';
import { FlatList } from 'react-native';

type Props = {
	onSelect: (value: string) => void;
	selected: string;
};

export function Sizes({ onSelect, selected }: Props) {
	return (
		<VStack my="$8">
			<Heading fontFamily="heading" fontSize="$md" color="$gray200" mb="$3">
				Sizes
			</Heading>

			<FlatList
				data={['35', '36', '37', '38', '39', '40', '41']}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Size
						size={item}
						isActive={selected === item}
						onPress={() => onSelect(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingRight: 8 }}
			/>
		</VStack>
	);
}
