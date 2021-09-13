import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Contents: NextPage<{ content: any }> = (props) => {
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

    const editText= (e) => {
      setContent({
          id: content.id,
          name: content.name,
          text: e.target.value,
      });
  };

  return (
    <div>
      <Link href="/contents">
        <a>Home</a>
      </Link>
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
            <input type="text" value={content.name} onChange={(e) => { editName(e)}}/>
          </p>
          <p>
            <input type="text" value={content.text} onChange={(e) => { editText(e)}}/>
          </p>
          <button onClick={() => closeHandle()}>save</button>
        </div>
      )}
    </div>
  );
};

export default Contents;

export const getStaticProps = () => {
  return {
    props: {
      content: {
        name: "Hoge",
        id: 1,
        text: "this is hoge.",
      },
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};
