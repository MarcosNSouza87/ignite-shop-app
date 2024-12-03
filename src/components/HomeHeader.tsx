import { Feather } from '@expo/vector-icons';
import { Heading, HStack, Icon, Text, VStack, Image } from '@gluestack-ui/themed';

import { LogOut } from 'lucide-react-native';
import userPhotoDefault from "../assets/userPhotoDefault.png";
import { Platform } from 'react-native';

export function HomeHeader() {
  return (
    <HStack pt={ Platform.OS === 'android' ? "$12" : '$16'} pb='$6' px='$8' bg="$gray600" alignItems="center">
      <Image
        source={userPhotoDefault}
        size='sm'
        mr='$4'
        borderWidth='$2'
        borderColor="$gray400"
        rounded='$full'
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md">
          Hello,
        </Text>

        <Heading color="$gray100" fontSize="$md" fontFamily="$heading">
          Marcos N Souza
        </Heading>
      </VStack>

      <Icon
        as={LogOut}
        color="$gray200"
        size='lg'
      />
    </HStack>
  );
}