import { FunctionComponent, useState } from 'react'
import { useItemSelectionContext } from '../context/ItemSelectionContext'

type Props = {
  id: string
	content: string;
};

const ListItem = (props: Props) => {

	// State
	const {select, deselect, includes} = useItemSelectionContext();

	// Handlers
	const handleClick = () => {
		if (includes(props.id)) {
			deselect(props.id);
		} else {
			select(props.id);
		}
	}

	// Text
	const buttonName = includes(props.id) ? "Deselect" : "Select";

  return (
    <li key={props.id}>
      <span>{props.id}. {props.content}</span>
			<button onClick={handleClick}>{buttonName}</button>
    </li>
  )
}

export default ListItem
