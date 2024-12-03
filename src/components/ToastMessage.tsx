import {
	ToastDescription,
	ToastTitle,
	Toast,
	Pressable,
	Icon,
	VStack,
	HStack,
} from '@gluestack-ui/themed';

import { X } from 'lucide-react-native';

type Props = {
	id: string;
	title: string;
	description?: string;
	action?: 'error' | 'success';
	onClose: () => void;
};

export function ToastMessage({
	id,
	title,
	description,
	action = 'success',
	onClose,
}: Props) {
	return (
		<Toast
			nativeID={`toast-${id}`}
			action={action}
			bgColor={action === 'success' ? '$green500' : '$red500'}
			mt="$10"
			p='$10'
		>
			<VStack space="lg" w="$full">
				<HStack flex={1}>
					<ToastTitle color="$white" fontFamily="$heading" flex={1}>
						{title}
					</ToastTitle>
					<Pressable onPress={onClose} alignSelf="flex-end">
						<Icon as={X} color="$coolGray50" size="md" />
					</Pressable>
				</HStack>
				{description && (
					<ToastDescription color="$white" fontFamily="$body">
						{description}
					</ToastDescription>
				)}
			</VStack>
		</Toast>
	);
}
