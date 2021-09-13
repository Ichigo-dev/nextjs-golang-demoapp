import React from "react";
import ListItem from "./ListItem";

const List: React.FC<{ contents: any }> = ({ contents }) => {
  return (
    <div>
      {contents.map((c) => (
        <ListItem key={c.id} content={c} />
      ))}
    </div>
  );
};

export default List;
