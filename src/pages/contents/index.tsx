import { NextPage } from "next";
import List from "../../components/List";
import { ContentsProvider } from "../../contexts/ContentsProvider";

const Contents: NextPage<{ contents: any }> = (props) => {
  return (
    <ContentsProvider {...props}>
      <List/>
    </ContentsProvider>
  );
};

export default Contents;

export const getStaticProps = () => {
  // TODO: API叩く
  const contents = [
    {
      id: "1",
      name: "Hoge",
      text: "this is hoge.",
    },
    {
      id: "2",
      name: "Fuga",
      text: "this is fuga.",
    },
    {
      id: "3",
      name: "Hoge",
      text: "this is hoge.",
    },
  ];

  return {
    props: {
      contents,
    },
  };
};
