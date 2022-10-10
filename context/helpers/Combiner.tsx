
const combineComponents = (components: any[]): any => {

    return components.reduce(
      (AccumulatedComponents, CurrentComponent) => {
        // eslint-disable-next-line react/display-name
        return (props: any): any => {
          return (
            <AccumulatedComponents>
              <CurrentComponent>{props.children}</CurrentComponent>
            </AccumulatedComponents>
          );
        };
      },
      (props: any) => <>{props.children}</>,
    );
  };

  export default combineComponents;