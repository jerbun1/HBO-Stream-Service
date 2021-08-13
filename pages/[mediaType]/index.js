import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../components/UI/HBOProvider";
import { useRouter } from "next/router";
import Login from "../../components/UI/Login/Login";
import MainLayout from "../../components/layouts/MainLayout";
import Image from "next/dist/client/image";
import Header from "../../components/UI/Header/Header";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import LazyLoad from "react-lazyload";
import AuthCheck from "../../components/UI/AuthCheck";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import Placeholder from "../../components/UI/Placeholder/Placeholder";
import GenreNav from "../../components/UI/Genre-Nav/genre-nav";
import axios from "axios";
import { shuffleArray } from "../../components/Utilities";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={props.params.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
        overview={props.featuredData.overview}
        linkUrl={`/${props.params.mediaType}/${props.featuredData.id}`}
        type="single"
      />
      <GenreNav
        mediaType={props.params.mediaType}
        genresData={props.genresData}
      />
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title={`${props.params.mediaType === 'movie' ? 'Movie': 'Series'}`}
          type="large-v"
          mediaType="movie"
          endpoint={`discover/${props.params.mediaType === 'movie' ? 'movie' : 'tv'}?sort_by=popularity.desc&primary_release_year=2021`}
        />
      </LazyLoad>
    </MainLayout>
  );

}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.params.mediaType}/list?api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`
    );
    featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.params.mediaType}?primary_release_year=2021&api_key=1cf7f7e617b87f5547cd6011c423719d&language=en-US`);
    console.log('genresData')
    console.log(genresData.data);
    console.log(featuredData.data.results);

  } catch (error) {
    console.log(error);
  }

  return {
    props: { genresData: genresData.data.genres, featuredData: shuffleArray(featuredData.data.results)[0],
      params: context.query }, // will be passed to the page component as props
  };
}
