import Image from "next/image";

const MediaRow = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row_title">{props.title}</h3>
            <div className="media-row_thumbnails">

                {loopComp(
                    (<div className="media-row_thumbnail">
                  <Image alt="BlackPanther Movie Poster" src={require("/public/img/BadBatch.jpg").default} objectFit='cover'   width={400} height={600}/>
                        <div className="media-row_top-layer">
                        <i className="fa fa-play"/>

                        </div>

                    </div>), 10

                )}



            </div>

        </div>
    )
}
export default MediaRow;