import React, { useContext } from "react";

export const ContentsContext = React.createContext<any>(undefined);

export const ContentsProvider: React.FC<{ contents: any }> = (props) => {
  return (
    <ContentsContext.Provider value={props.contents}>
      {props.children}
    </ContentsContext.Provider>
  );
};

export const useContents = () => {
  const contents = useContext(ContentsContext);
  if (!contents) {
    throw new Error("contents is undefined");
  }
  return contents;
};
