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
  const [mediaData, setMediaData] = useState(false); //used to get the movie data from API  
  console.log(props.mediaData);
  console.log(mediaData);

  // API call to get the information of selection 
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
  //     )
  //     .then((res) => {
  //       //Handles successful response

  //       console.log(res.data);
  //       setMediaData(res.data);
  //     })
  //     .catch((res) => {
  //       //Handles an error
  //       console.log(res);
  //     });
  // }, [mediaData]);
  return AuthCheck(
    <MainLayout>
      <Header />
      <FeaturedMedia
        title={props.params.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name}
        playing={ props.params.mediaType === 'movie' ? props.mediaData.release_date : props.mediaData.first_air_date}
        overview={props.mediaData.overview}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
        linkUrl="/movies/id"
        type="single"
        mediaType={props.params.mediaType}
        mediaId ={props.params.id}

      />
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
        updateData={props.params.id}
          title="Similar Movies"
          type="small-v"
          mediaType={props.params.mediaType}
          endpoint={`${props.params.mediaType == 'movie' ? 'movie': 'tv'}/${props.params.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={props.params.id} mediaType={props.params.mediaType}         updateData={props.params.id}
 />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try{
    mediaData = await axios.get(`https://api.themoviedb.org/3/${context.params.mediaType}/${context.params.id}?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`)
    console.log(mediaData)

  }catch(error){
    console.log(error);

  }
  return {
    props: {mediaData: mediaData.data, params: context.query }, // will be passed to the page component as props
  };
}
