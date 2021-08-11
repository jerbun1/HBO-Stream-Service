import MediaRow from "../../components/UI/MediaRow/MediaRow";
import Header from "../../components/UI/Header/Header";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import MainLayout from "../../components/layouts/MainLayout";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/UI/Placeholder/Placeholder";
import AuthCheck from "../../components/UI/AuthCheck";
export default function SingleMediaPage(props) {

  const router = useRouter(); //use to get the route of the page using a hook
  const [mediaData, setMediaData] = useState(false); //used to get the state for the movie 
  console.log(props);
  // API call to get the information of selection 
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
      )
      .then((res) => {
        //Handles successful response

        console.log(res.data);
        setMediaData(res.data);
      })
      .catch((res) => {
        //Handles an error
        console.log(res);
      });
  }, [mediaData]);
  return AuthCheck(
    <MainLayout>
      <Header />
      <FeaturedMedia
        title={mediaData.original_title}
        playing={mediaData.release_date}
        overview={mediaData.overview}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        linkUrl="/movies/id"
        type="single"

      />
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Similar Movies"
          type="small-v"
          endpoint={`movie/${props.params.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={props.params.id} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { params: context.query }, // will be passed to the page component as props
  };
}
