import { NextPage } from "next";
import List from "../../components/List";

const Contents: NextPage<{ contents: any }> = (props) => {
  return <List contents={props.contents} />;
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
