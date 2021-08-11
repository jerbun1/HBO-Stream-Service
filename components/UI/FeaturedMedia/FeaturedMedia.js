const FeaturedMedia = (props) => {
    const clickedPlay=()=>{
        router,push(props.linkUrl)
    }
    const showMedia = () =>{
        if(props.type == 'front'){
            return ( <iframe className="featured-media_video" width="100%" height="100%" 
            src={props.mediaUrl}
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>)
        }else{
            return(
                <img src={props.mediaUrl} className="featured-media_img"/>
            )
        }
    }
    return (
        <div className="featured-media">
           {showMedia()}
            <div className="featured-media_background">
                <div className="featured-media_container">
                    <div className="featured-media_title">
                        {props.title}
                    </div>
                    <div className="featured-media_playing">
                        Release Date: {props.playing}
                    </div>
                    <div className="featured-media_overview">
                        {props.overview}
                    </div>
                    <div className="featured-media_buttons">
                     <div className="featured-media_play-btn">
                     <i className="fa fa-play"/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
            )

}

            export default FeaturedMedia;