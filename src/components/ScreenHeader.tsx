import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

type Props = {
	title: string;
};

export function ScreenHeader({ title }: Props) {
	const { goBack } = useNavigation();

	return (
		<HStack bg="$gray600" pb="$6" pt="$16" alignItems='center' justifyContent="space-between" px="$6">
			<TouchableOpacity onPress={goBack}>
				<Icon as={ArrowLeft} color="$green500" size="xl" />
			</TouchableOpacity>

			<Heading color="$gray100" fontSize="$xl">
				{title}
			</Heading>

			<Box w='$6' h='$6' />
		</HStack>
	);
}
