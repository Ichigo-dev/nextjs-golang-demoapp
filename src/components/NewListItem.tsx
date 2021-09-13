import React, { useState } from "react";

const NewListItem: React.FC = () => {
  const [content, setContent] = useState({ id: "", name: "", text: "" });

  const saveHandle = () => {
    // TODO: API叩く
    setContent({ id: "", name: "", text: "" });
    // ページリロード等で表示を最新のものにする
  };

  const editID = (e) => {
    setContent({
      id: e.target.value,
      name: content.name,
      text: content.text,
    });
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

  return (
    <div>
      <p>
        <input
          type="text"
          value={content.id}
          placeholder="id"
          onChange={(e) => {
            editID(e);
          }}
        />
      </p>
      <p>
        <input
          type="text"
          value={content.name}
          placeholder="name"
          onChange={(e) => {
            editName(e);
          }}
        />
      </p>

      <p>
        <input
          type="text"
          value={content.text}
          placeholder="text"
          onChange={(e) => {
            editText(e);
          }}
        />
      </p>
      <button onClick={() => saveHandle()}>save</button>
    </div>
  );
};

export default NewListItem;
