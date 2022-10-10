import { createContext, ReactNode, useContext } from "react";

type GenericProviderProps = {
  children?: ReactNode;
};

type Optional<T> = T | undefined;


export const generateContext = <R, >(name: string, definition: () => R) => {

  const GenericContext = createContext<Optional<R>>(undefined);

  const GenericProvider = (props: GenericProviderProps) => {
    const initial = definition();

    return <GenericContext.Provider value={initial}>
      {props.children}
    </GenericContext.Provider>
  }

  const useGenericContext = (): R => {
    const context = useContext<Optional<R>>(GenericContext);

    if (context === undefined) {
      throw Error(`Context '${name}' used outside of its provider`);
    }

    return context;
  }

  return {
    GenericContext,
    GenericProvider,
    useGenericContext,
  };
}