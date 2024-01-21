import {usePictures} from "../../../hooks/pictures/usePictures";
import {useQuery} from "react-query";
import PicturesTable from "./PicturesTable/PicturesTable";

const PicturesTableWrapper = () => {

    const {searchPictures} = usePictures()

    const { isLoading, data, isSuccess, refetch } = useQuery(
        ["pictures"],
        () => searchPictures(),
        {
            keepPreviousData: true,
        }
    )

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <PicturesTable isLoading={isLoading} data={data} isSuccess={isSuccess} refetch={refetch} />
        </div>
    )
}

export default PicturesTableWrapper