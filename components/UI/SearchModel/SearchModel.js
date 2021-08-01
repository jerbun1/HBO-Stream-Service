const SearchModel = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className="search-model ">
            <div className="search-model_input-group">
                <input className="search-model_input" type="text" placeholder="Search for a Title of a Movie" value="" />
                <div className="search-model_close-btn">
                    <i className="fas fa-times"/>
                </div>
            </div>
            <div className="search-model_title">
                <h3>Popular Searches</h3>

            </div>
            <div className="search-model_thumbnails">

                {loopComp(
                    (<div className="search-model_thumbnail">
                            <img alt="Rick and Morty Poster" src="https://images8.alphacoders.com/625/thumb-350-625910.png"/>
                        <div className="search-model_top-layer">
                            <i className="fa fa-play"/>
                       </div>

                    </div>), 10

                )}


            </div>

        </div>
    )
}
export default SearchModel;