import { NextPage } from "next";
import { PureComponent } from "react";
import Link from "next/link";
import { useState } from "react";
import ListItem from "../../components/ListItem";

const Contents: NextPage<{ contents: any }> = (props) => {
  return (
    <div>
      {props.contents.map(
        (c: { id: number; name: string; text: string }, i: number) => {
          return <ListItem key={i} content={c} />;
        }
      )}
    </div>
  );
};

export default Contents;

export const getStaticProps = () => {
  return {
    props: {
      contents: [
        {
          id: 1,
          name: "Hoge",
          text: "this is hoge.",
        },
        {
          id: 2,
          name: "Fuga",
          text: "this is fuga.",
        },
        {
          id: 3,
          name: "Hoge",
          text: "this is hoge.",
        },
      ],
    },
  };
};
