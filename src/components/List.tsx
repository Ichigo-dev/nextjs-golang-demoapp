import React from "react";
import ListItem from "./ListItem";
import NewListItem from "./NewListItem";

const List: React.FC<{ contents: any }> = ({ contents }) => {
  return (
    <div>
      {contents.map((c) => (
        <ListItem key={c.id} content={c} />
      ))}
      <NewListItem />
    </div>
  );
};

export default List;
