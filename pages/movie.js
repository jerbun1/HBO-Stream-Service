import MainLayout from '../components/layouts/MainLayout'
import Header from '../components/UI/Header/Header'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import PosterView from '../components/UI/PosterView/PosterView'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import MediaRow from '../components/UI/MediaRow/MediaRow'


export default function Home() {
    return (
        <MainLayout>
            <Header />
            <FeaturedMedia />
            <MediaRow title="More Like This" type="smal-v"/>
            <CastInfo />
        </MainLayout>
    )
}