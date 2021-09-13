import React, { useState } from "react";

const ListItem: React.FC<{ content: any }> = (props) => {
  const [content, setContent] = useState(props.content);
  const [edit, setEdit] = useState(false);
  const clickHandle = () => {
    setEdit(!edit);
  };

  const closeHandle = () => {
    setEdit(!edit);
  };

  const editName = (e) => {
    setContent({
      id: content.id,
      name: e.target.value,
      text: content.text,
    });
  };

  const editText = (e) => {
    setContent({
      id: content.id,
      name: content.name,
      text: e.target.value,
    });
  };

  const deleteHandle = () => {
    setContent(null);
  };

  if(!content) {
    return null;
  }

  return (
    <div>
      {!edit && (
        <div
          onClick={() => {
            clickHandle();
          }}
        >
          <h3>{content.name}</h3>
          <p>{content.id}</p>
          <p>{content.text}</p>
        </div>
      )}
      {edit && (
        <div>
          <p>{content.id}</p>
          <p>
            <input
              type="text"
              value={content.name}
              onChange={(e) => {
                editName(e);
              }}
            />
          </p>
          <p>
            <input
              type="text"
              value={content.text}
              onChange={(e) => {
                editText(e);
              }}
            />
          </p>
          <button onClick={() => closeHandle()}>save</button>
        </div>
      )}
      <button onClick={() => deleteHandle()}>delete</button>
    </div>
  );
};

export default ListItem;
