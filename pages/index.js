import Head from 'next/head'
import { useEffect } from 'react'
import { useStateContext } from '../components/UI/HBOProvider'
import { useRouter } from 'next/router'
import Login from '../components/UI/Login/Login'
import MainLayout from '../components/layouts/MainLayout'
import Image from 'next/image'
import Header from '../components/UI/Header/Header'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'

import AuthCheck from '../components/UI/AuthCheck'
import MediaRow from '../components/UI/MediaRow/MediaRow'
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(()=>{
 
  }, [])
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v"/>
      <MediaRow title="Series" type="small-h"/>
      <MediaRow title="Action" type="small-v"/>
      <MediaRow title="Adventure" type="small-h"/>
      <MediaRow title="Horror" type="small-v"/>


     
    </MainLayout>
  )
}
