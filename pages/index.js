import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/UI/HBOProvider";
import { useRouter } from "next/router";
import Login from "../components/UI/Login/Login";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import Header from "../components/UI/Header/Header";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import LazyLoad from "react-lazyload";
import AuthCheck from "../components/UI/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import Placeholder from "../components/UI/Placeholder/Placeholder";
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/TcMBFSGVi1c?&autoplay=1&loop=1https://www.youtube.com/embed/TcMBFSGVi1c?&autoplay=1&loop=1"
        title="Avengers Endgame"
        linkUrl="/movies/299534"
        type="front"
        
      />
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Series" type="small-v" />}
      >
        <MediaRow
          title="Series"
          type="small-v"
          mediaType="tv"
          endpoint="discover/tv?sort_by=popularity.desc"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="small-h" />}
      >
        <MediaRow
          title="Adventure"
          type="small-h"
          mediaType="movie"
          endpoint="discover/movie?with_genres=12&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="small-h" />}
      >
        <MediaRow
          title="Animation"
          type="small-h"
          mediaType="movie"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-80}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Comedy"
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=35&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
