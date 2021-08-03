import Image from 'next/image'


const PosterView = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className="posterview-list">
            <h3 className="posterview-list_title">Movies </h3>
            <div className="posterview-list_thumbnails">

                {loopComp(
                    (<div className="posterview-list_thumbnail">
                  <Image  alt="Avengers Poster" src="/public\img\Avengers.jpg" layout='fixed' width={240} height={360}/>

                        <div className="posterview-list_top-layer">
                        <i className="fa fa-play"/>

                        </div>

                    </div>), 10

                )}



            </div>

        </div>
    )
}
export default PosterView;