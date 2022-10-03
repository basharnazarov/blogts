import type { NextPage } from "next";
import Post from "../components/Post";
import MainLayout from "../layout/mainLayout";



const Home: NextPage = () => {
  return (
    <MainLayout>
      <Post />
    </MainLayout>
  );
};

export default Home;
