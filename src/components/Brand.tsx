import { ImageSourcePropType, Platform } from 'react-native';
import { Pressable, Image } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Pressable> & {
	image: ImageSourcePropType;
	isActive: boolean;
};

export function Brand({ image, isActive, ...rest }: Props) {
	return (
		<Pressable
			mr='$3'
			w='$24'
			h='$14'
			bg="$gray600" 
			justifyContent="center"
			alignItems="center"
			overflow="hidden"
			borderRadius='$sm'
			borderWidth={1}
			borderColor={isActive ? '$green500' : '$gray600'}
			{...rest}
		>
			<Image
				source={image}
				alt="Brand image"
				w='$16'
				h='$7'
				resizeMode={Platform.OS === 'android' ? 'contain' : 'cover'}
			/>
		</Pressable>
	);
}
