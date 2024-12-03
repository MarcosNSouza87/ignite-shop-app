import { Feather } from '@expo/vector-icons';
import { Platform, TouchableOpacity } from 'react-native';
import { HStack, Image, Heading, Text, VStack, Icon } from '@gluestack-ui/themed';

import { Trash } from 'lucide-react-native';
import { StorageCartProps } from '../storage/storageCart';

type Props = {
	onRemove: () => void;
	data: StorageCartProps;
};

export function ItemCartCard({ data, onRemove }: Props) {
	return (
		<HStack
			w="$full"
			h='$20'
			bgColor="$gray500"
			rounded="md"
			alignItems="center"
			px='$4'
			mb='$2'
		>
			<Image
				w='$16'
				h='$16'
				source={data.image}
				alt="Imagem do produto"
				resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
			/>

			<VStack flex={1} ml={2}>
				<Heading color="white" fontFamily="heading" fontSize="$lg" mt={2}>
					{data.name}
				</Heading>

				<Text color="$gray200" fontSize="$sm">
					{data.quantity} unidades
				</Text>
			</VStack>

			<TouchableOpacity onPress={onRemove}>
				<Icon as={Trash} size="md" color="$red500" />
			</TouchableOpacity>
		</HStack>
	);
}
