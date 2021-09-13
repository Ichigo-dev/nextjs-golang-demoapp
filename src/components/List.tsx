import React, { useState } from "react";
import { useContents } from "../contexts/ContentsProvider";
import ListItem from "./ListItem";
import NewListItem from "./NewListItem";

const List: React.FC = () => {
  const contents = useContents();
  const [cc, setContents] = useState(contents);
  const newContent = (c) => {
    setContents([...cc, {id: c.id, name: c.name, text: c.text}])
    return true
  }
  return (
    <div>
      {cc.map((c) => (
        <ListItem key={c.id} content={c} />
      ))}
      <NewListItem newContent={newContent}/>
    </div>
  );
};

export default List;
