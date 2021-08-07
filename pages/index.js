import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/UI/HBOProvider";
import { useRouter } from "next/router";
import Login from "../components/UI/Login/Login";
import MainLayout from "../components/layouts/MainLayout";
import Image from "next/image";
import Header from "../components/UI/Header/Header";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";

import AuthCheck from "../components/UI/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
           <MediaRow
        title="Series"
        type="large-v"
        endpoint="discover/tv?sort_by=popularity.desc&primary_release_year=2021"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2021"
      />
       <MediaRow
        title="Adventure"
        type="small-h"
        endpoint="discover/movie?with_genres=12&primary_release_year=2021"
      />
      <MediaRow
        title="Animation"
        type="small-h"
        endpoint="discover/movie?with_genres=16&primary_release_year=2021"
      />
      <MediaRow
        title="Horror"
        type="large-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2021"
      />
        <MediaRow
        title="Comedy"
        type="large-v"
        endpoint="discover/movie?with_genres=35&primary_release_year=2021"
      />
    </MainLayout>
  );
}
