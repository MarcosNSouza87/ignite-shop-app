import { Feather } from '@expo/vector-icons';
import { Heading, HStack, Icon, Text, VStack, Image } from '@gluestack-ui/themed';

import { LogOut } from 'lucide-react-native';
import userPhotoDefault from "../assets/userPhotoDefault.png";

export function HomeHeader() {
  return (
    <HStack pt='$16' pb='$6' px='$8' bg="$gray600" alignItems="center">
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
          Olá,
        </Text>

        <Heading color="$gray100" fontSize="$md" fontFamily="$heading">
          Rodrigo Gonçalves
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