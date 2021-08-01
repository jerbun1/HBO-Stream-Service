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
                       <img alt="Star Wars The Bad Batch" src="https://phantom-marca.unidadeditorial.es/5a750390f957d08f6a90ccb688c493b2/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/04/16201382336736.jpg"/>

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