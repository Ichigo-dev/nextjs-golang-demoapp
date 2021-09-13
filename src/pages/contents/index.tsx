import { NextPage } from "next";
import { PureComponent } from "react";
import Link from "next/link";

const Contents: NextPage<{ contents: any }> = (props) => {
  const contents = props.contents;
  return (
    <div>
      {contents.map((c: { id: number; name: string; text: string }) => {
        return (
          <div key={c.id}>
            <Link href={`/contents/${c.id}`}>
              <a>
                <h3>{c.name}</h3>
                <p>{c.id}</p>
                <p>{c.text}</p>
              </a>
            </Link>
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
