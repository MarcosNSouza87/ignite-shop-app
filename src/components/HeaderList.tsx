import { Heading, HStack, Text } from '@gluestack-ui/themed';

type Props = {
  title: string;
  counter: number;
}

export function HeaderList({ title, counter }: Props) {
  return (
    <HStack w="$full" justifyContent="space-between" alignItems="center" px='$8' my='$3'>
      <Heading fontFamily="$heading" color="$gray200" fontSize="$md">
        {title}
      </Heading>

      <Text color="$gray200" fontSize="$sm">
        {counter}
      </Text>
    </HStack>
  );
}