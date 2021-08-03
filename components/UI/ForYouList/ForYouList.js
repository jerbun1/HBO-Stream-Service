import Image from 'next/image'

const ForYouList = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list_title">For You</h3>
            <div className="foryou-list_thumbnails">

                {loopComp(
                    (<div className="foryou-list_thumbnail">
                       <Image alt="Star Wars The Bad Batch" src="/public\img\BadBatch.jpg" width={450} height={250}/>

                        <div className="foryou-list_top-layer">
                        <i className="fa fa-play"/>
                        </div>

                    </div>), 10

                )}



            </div>

        </div>
    )
}
export default ForYouList;