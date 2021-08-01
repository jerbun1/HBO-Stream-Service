import MainLayout from '../components/layouts/MainLayout'
import Header from '../components/UI/Header/Header'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import PosterView from '../components/UI/PosterView/PosterView'
import CastInfo from '../components/UI/CastInfo/CastInfo'


export default function Home(){
    return(
    <MainLayout>
        <Header/>
            <FeaturedMedia/>
           
            <PosterView/>
            <CastInfo/>
          
          
        </MainLayout>
          )
}