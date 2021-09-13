import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";

const Contents: NextPage<{ content: any }> = (props) => {
  return (
    <div>
      <Link href="/contents">
        <a>Home</a>
      </Link>
      <ListItem content={props.content} />
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
