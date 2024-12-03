import { HStack, Text, CloseIcon, Icon } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { X, Bell } from 'lucide-react-native';

type Props = {
	title: string;
	onClose: () => void;
};

export function Notification({ title, onClose }: Props) {
	return (
		<HStack
			w="$full"
			p='$4'
			pt='$12'
			justifyContent="space-between"
			alignItems="center"
			bgColor="$gray200"
			position="absolute"
			top={0}
		>
			<Icon
				as={Bell}
				size='md'
				color="black"
				mr='$2'
			/>

			<Text fontSize="$md" color="black" flex={1}>
				{title}
			</Text>

			<TouchableOpacity onPress={onClose}>
				<Icon
					as={X}
					size='md'
					color="$coolGray600"
					mr='$2'
				/>
			</TouchableOpacity>
			
			
		</HStack>
	);
}
