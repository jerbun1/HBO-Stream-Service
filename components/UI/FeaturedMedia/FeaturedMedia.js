const FeaturedMedia = (props) => {
    return (
        <div className="featured-media">
            <iframe className="featured-media_video" width="100%" height="100%" 
            src="https://www.youtube.com/embed/TcMBFSGVi1c?&autoplay=1&loop=1"
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            <div className="featured-media_background">
                <div className="featured-media_container">
                    <div className="featured-media_title">
                        Avengers Endgame
                    </div>
                    <div className="featured-media_playing">
                        Now Playing
                    </div>
                    <div className="featured-media_location">
                        Location
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