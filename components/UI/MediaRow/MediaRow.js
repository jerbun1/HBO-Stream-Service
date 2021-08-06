import Image from "next/image";
import { useState, useEffect } from "react";


const MediaRow = (props) => {
    const [loadingData, setLoadingData] = useState(true);

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    //Should Simulate loading up an image for the thumbnails 
    const showThumbNails = () => {
        setTimeout(() => setLoadingData(false), 400);
        return loadingData ? loopComp(<Skeleton />, 10) :
                            loopComp(<Thumbnail />, 10)

    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row_title">{props.title}</h3>
            <div className="media-row_thumbnails">
                {showThumbNails()}
                {/* {loopComp(
                    (<Thumbnail />), 10

                )} */}




            </div>

        </div>
    )
}

const Thumbnail = () => {
    return (<div className="media-row_thumbnail">
        <Image alt="BlackPanther Movie Poster" src={require("/public/img/BadBatch.jpg").default} objectFit='cover' width={400} height={600} />
        <div className="media-row_top-layer">
            <i className="fa fa-play" />

        </div>

    </div>)
}

const Skeleton = () => {
    return (<div className="media-row_thumbnail-skeleton">
        <div className="media-row_thumbnail-skeleton-img">

        </div>
    </div>)
}
export default MediaRow;