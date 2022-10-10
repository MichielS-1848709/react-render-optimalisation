import ListItem from '../components/ListItem';
import { Item } from '../pages';

type Props = {
    items: Item[]
}

const List = (props: Props) => {

  const list = props.items.map((item, index) => {
    console.log(item);

    return <ListItem key={index} id={String(item.key)} content={item.content} />
  });

  return (
    <ul>
      {list}
    </ul>
  )
}

export default List
