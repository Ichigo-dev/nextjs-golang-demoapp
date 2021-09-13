import { NextPage } from "next";
import { PureComponent } from "react";

const Contents: NextPage<{ contents: any }> = (props) => {
  const contents = props.contents;
  return (
    <div>
      {contents.map((c: { name: string; text: string }) => {
        return (
          <div key={c.name}>
            <h3>{c.name}</h3>
            <p>{c.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Contents;

export const getStaticProps = () => {
  return {
    props: {
      contents: [
        {
          name: "Hoge",
          text: "this is hoge.",
        },
        {
          name: "Fuga",
          text: "this is fuga.",
        },
        {
          name: "Hoge",
          text: "this is hoge.",
        },
      ],
    },
  };
};
