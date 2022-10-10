import { useState } from "react";
import { generateContext } from "./helpers/Context";

const ctx = () => {

  const [selected, setSelected] = useState<string[]>([]);

  const select = (id: string): void => {
    const updatedSelection: string[] = [...selected, id];
    setSelected(updatedSelection);
  }

  const deselect = (id: string): void => {
    const updatedSelection: string[] = selected.filter(value => value !== id);
    setSelected(updatedSelection);
  }

  const includes = (id: string): boolean => {
    return selected.includes(id);
  }

  return {
    selected,
    select,
    deselect,
    includes,
  };
}

const {GenericProvider, useGenericContext} = generateContext("ItemSelectionContext", ctx);
export const ItemSelectionProvider = GenericProvider;
export const useItemSelectionContext = useGenericContext;