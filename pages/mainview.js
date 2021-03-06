import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Image from 'next/image'
import Header from '../components/UI/Header/Header'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'

//This used to be how the main layout componet used to look until more features was added 
export default function CreateUser() {
  return (
    <MainLayout>
      <Header />
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  )
}
