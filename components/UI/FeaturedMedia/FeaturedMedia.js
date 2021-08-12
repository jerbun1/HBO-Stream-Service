import Image from "next/dist/client/image"
const FeaturedMedia = (props) => {

    //ClickedPlay function to send the user to the movie info page
    const clickedPlay=()=>{
        router.push(props.linkUrl)
    }
    //Function to show some type of media either a video trailler or a  movie poster/ backdrop 
    const showMedia = () =>{
        //if props are a certain type display the video else display the movie poster/back drop 
        if(props.type == 'front'){
            return ( <iframe className="featured-media_video" width="100%" height="100%" 
            src={props.mediaUrl}
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>)
        }else{
            return(
                //Return image component with API movie poster img/ info 
                <Image src={props.mediaUrl} className="featured-media_img" layout='fill'/>
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