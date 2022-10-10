import { memo, useEffect, useState } from 'react';
import { useItemSelectionContext } from '../context/ItemSelectionContext';

// https://staleclosures.dev/preventing-list-rerenders/

type Props = {
  id: string
	content: string;
	select: (id: string) => void;
	deselect: (id: string) => void;
};

const ListItem = memo((props: Props) => {

	const [isSelected, setIsSelected] = useState(false);

	// Handlers
	const handleClick = () => {
		if (isSelected) {
			setIsSelected(false);
			props.deselect(props.id);
		} else {
			setIsSelected(true);
			props.select(props.id);
		}
	}

	// Text
	const buttonName = isSelected ? "Deselect" : "Select";

  return (
    <li key={props.id}>
      <span>{props.id}. {props.content}</span>
			<button onClick={handleClick}>{buttonName}</button>
    </li>
  )
})

export default ListItem;