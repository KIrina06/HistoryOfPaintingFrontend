import "./PicturesPage.sass"
import {useAuth} from "../../hooks/users/useAuth";
import PicturesList from "./PicturesList/PicturesList";
import PicturesTableWrapper from "./PicturesTableWrapper/PicturesTableWrapper";

const PicturesPage = () => {

    const {is_moderator} = useAuth()

    return (
        <div className="audiences-wrapper">

            {!is_moderator && <PicturesList />}
            {is_moderator && <PicturesTableWrapper />}

        </div>
    )
}

export default PicturesPage;