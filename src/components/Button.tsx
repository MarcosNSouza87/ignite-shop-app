import {
	Button as ButtonNativeBase,
	IButtonProps,
	Text,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof ButtonNativeBase> & {
	title: string;
};

export function Button({ title, ...rest }: Props) {
	return (
		<ButtonNativeBase
			flex={1}
			minHeight='$14'
			maxHeight='$14'
			bg="$green700"
			borderWidth={0}
			borderColor="$green500"
			rounded="$sm"
			$pressed={{ bg: '$green500' }}
			{...rest}
		>
			<Text color="$white" fontFamily="$heading" fontSize="$sm">
				{title}
			</Text>
		</ButtonNativeBase>
	);
}
