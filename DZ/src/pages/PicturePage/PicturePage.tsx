import "./PicturePage.sass"
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {usePicture} from "../../hooks/pictures/usePicture";

const PicturePage = () => {

    const { id } = useParams<{id: string}>();
    
    const {picture, fetchPicture} = usePicture()
    
    useEffect(() => {
        id && fetchPicture(id)
    }, [])

    if (picture == undefined) {
        return (
            <div>

            </div>
        )
    }


    return (
        <div className="page-details-wrapper">

            <Link className="return-link" to="/">
                Назад
            </Link>

            <div className="left">

                <img src={"src/assets/default.jpg"}  alt=""/>

            </div>

            <div className="right">

                <div className="info-container">

                    <h1>{picture.name}</h1>

                    <br />

                    <span>Описание: {picture.info}</span>

                    <br />

                    <span>Цена за копию: {picture.price},00 руб.</span>

                </div>

            </div>

        </div>
    )
}

export default PicturePage;