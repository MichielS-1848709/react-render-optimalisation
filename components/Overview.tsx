import { FunctionComponent, useState } from 'react'
import { useItemSelectionContext } from '../context/ItemSelectionContext';

const Overview: FunctionComponent = () => {

	const {selected} = useItemSelectionContext();

  return (
    <div>
      <span>Selected items: {selected.join(", ")}</span>
    </div>
  );
}

export default Overview
