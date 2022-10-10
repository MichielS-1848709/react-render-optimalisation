import { useEffect } from 'react';
import ListItem from '../components/ListItem';
import { useItemSelectionContext } from '../context/ItemSelectionContext';
import { Item } from '../pages';

type Props = {
    items: Item[]
}

const List = (props: Props) => {

  const {select, deselect} = useItemSelectionContext();

  const list = props.items.map((item) => {
    const id = String(item.key);

    return <ListItem
      key={id}
      id={id}
      content={item.content}
      select={select}
      deselect={deselect}
    />
  });

  return (
    <ul>
      {list}
    </ul>
  )
}

export default List
