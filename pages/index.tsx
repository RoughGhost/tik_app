import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import { VideoCard, NoResult } from "../components";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResult text={"No Videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  // console.log(response.data.name)

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
