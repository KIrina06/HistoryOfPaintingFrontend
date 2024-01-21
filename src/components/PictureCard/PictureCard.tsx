import "./PictureCard.sass"
import {Pictures} from "../../utils/types";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/users/useAuth";
import {useExpertise} from "../../hooks/expertises/useExpertise";
import CustomButton from "../CustomButton/CustomButton";
import {variables} from "../../utils/consts";
import {api} from "../../utils/api";
import {useEffect, useState} from "react";
import {useToken} from "../../hooks/users/useToken";
import CustomInput from "../CustomInput/CustomInput";
import {usePictures} from "../../hooks/pictures/usePictures";


const PictureCard = ({ picture }: {picture:Pictures}) => {
    
    const {is_authenticated, is_moderator} = useAuth()

    const {searchPictures} = usePictures()


    // state  is_draft проверка черновика
    const {expertise, is_draft, addPictureToExpertise, deletePictureFromExpertise} = useExpertise()

    const handleAddPicture = (e) => {
        e.preventDefault()
        addPictureToExpertise(picture)
        searchPictures()
    }

    const handleDeletePicture = (e) => {
        deletePictureFromExpertise(picture)
        searchPictures()
    }

    const is_chosen = expertise?.pictures.find(g => g.id == picture.id)

    return (
        <div className="card-wrapper">

            <div className="preview">
                <img src={picture.image}  alt=""/>
            </div>

            <div className="card-content">

                <div className="content-top">

                    <h3 className="title"> {picture.name} </h3>

                </div>

                <div className="content-bottom">

                    <Link to={`/pictures/${picture.id}`}>
                        <CustomButton bg={variables.primary}>
                            Подробнее
                        </CustomButton>
                    </Link>
                    
                    {is_authenticated && !is_chosen && !is_moderator && location.pathname.includes("pictures") &&
                        <CustomButton onClick={handleAddPicture} bg={variables.green}>Добавить</CustomButton>
                    }

                    {is_authenticated && is_chosen && location.pathname.includes("pictures") &&
                        <CustomButton onClick={handleDeletePicture} bg={variables.red} >Удалить</CustomButton>
                    }

                    {is_authenticated && !is_moderator && is_draft && location.pathname.includes("expertises") &&
                        <CustomButton onClick={handleDeletePicture} bg={variables.red}>Удалить...</CustomButton>
                    }

                </div>

            </div>

        </div>
    )
}

export default PictureCard;