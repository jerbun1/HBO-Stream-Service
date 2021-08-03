import Image from "next/image";

const JustAdded = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index <= digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails;
    }
    return (
        <div className="justadded-list">
            <h3 className="justadded-list_title">Just Added </h3>
            <div className="justadded-list_thumbnails">

                {loopComp(
                    (<div className="justadded-list_thumbnail">
                  <Image alt="BlackPanther Movie Poster" src="/public\img\BlackPanther.jpg" width={400} height={600}/>
                        <div className="justadded-list_top-layer">
                        <i className="fa fa-play"/>

                        </div>

                    </div>), 10

                )}



            </div>

        </div>
    )
}
export default JustAdded;