import { Pressable, Text } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Pressable> & {
	size: string;
	isActive: boolean;
};

export function Size({ size, isActive, ...rest }: Props) {
	return (
		<Pressable
			mr='$3'
			w='$10'
			h='$8'
			bg="$gray600"
			rounded="xs"
			justifyContent="center"
			alignItems="center"
			overflow="hidden"
			borderWidth={1}
			borderColor={isActive ? '$green500' : '$gray600'}
			
			{...rest}
		>
			<Text color={isActive ? '$green500' : '$gray200'} fontSize="$xs">
				{size}
			</Text>
		</Pressable>
	);
}
