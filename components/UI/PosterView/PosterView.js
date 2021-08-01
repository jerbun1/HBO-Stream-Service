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
                  <img  alt="Avengers Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh-X6NZ7WsTS-Luz8r-rWW3vBCXFaZhsC12DNB4n-PUy8sIon0S1JmE-_1np0Tzvthl4&usqp=CAU"/>

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