

import { Brand } from './Brand';
import { BRANDS } from '../data/brands';
import { IData } from '../@types/data';
import { FlatList } from 'react-native';

type Props = {
  onSelect: (value: string) => void;
  selected: string;
}

export function Brands({ onSelect, selected }: Props) {
  const data: IData[] = BRANDS

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Brand
          image={item.image}
          isActive={selected === item.name}
          onPress={() => onSelect(item.name || '')}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 28,paddingVertical: 14 }}
      style={{maxHeight: 75}}
    />
  );
}