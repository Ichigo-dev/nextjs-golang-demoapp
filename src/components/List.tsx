import React, { useState } from "react";
import { useContents } from "../contexts/ContentsProvider";
import ListItem from "./ListItem";
import NewListItem from "./NewListItem";

const List: React.FC = () => {
  const contents = useContents();
  const [cc, setContents] = useState(contents);
  const clickHandle = () => {
    setContents([...cc, {id: "4", name: "aaaaa", text: "aaaaaaaa"}])
  }
  return (
    <div>
      {cc.map((c) => (
        <ListItem key={c.id} content={c} />
      ))}
      <NewListItem />
      <button onClick={() => {clickHandle()}}>click</button>
    </div>
  );
};

export default List;
