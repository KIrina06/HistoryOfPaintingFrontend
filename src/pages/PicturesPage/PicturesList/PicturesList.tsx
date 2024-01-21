import "./PicturesList.sass"
import PictureCard from "../../../components/PictureCard/PictureCard";
import {usePictures} from "../../../hooks/pictures/usePictures";
import {useQuery} from "react-query";
import PicturesFilters from "../PicturesFilters/PicturesFilters";
import { Pictures } from "../../../utils/types";

const PicturesList = () => {

    const {searchPictures} = usePictures()

    const { isLoading, data, refetch } = useQuery(
        ["pictures"],
        () => searchPictures(),
        {
            keepPreviousData: false,
        }
    )

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    const cards = data.map((picture: Pictures)  => (
        <PictureCard picture={picture} key={picture.id}/>
    ))

    return (
        <div className="audiences-list-wrapper">

            <PicturesFilters refetch={refetch}/>

            <div className="audiences-list">
                { cards }
            </div>

        </div>
    )
}

export default PicturesList;