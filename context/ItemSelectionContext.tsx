import { useCallback, useState } from "react";
import { generateContext } from "./helpers/Context";

const ctx = () => {

  const [selected, setSelected] = useState<string[]>([]);

  const select = useCallback((id: string) => {
    setSelected(selected => [...selected, id]);
  }, []);

  const deselect = useCallback((id: string) => {
    setSelected(selected => selected.filter(value => value !== id));
  }, []);

  const includes = useCallback((id: string): boolean => {
    return selected.includes(id);
  }, []);

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