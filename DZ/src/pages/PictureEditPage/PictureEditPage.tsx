import "./PictureEditPage.sass"
import {useParams, useNavigate} from "react-router-dom";
import {usePicture} from "../../hooks/pictures/usePicture";
import React, {useEffect, useState} from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomTextarea from "../../components/CustomTextarea/CustomTextarea";
import CustomButton from "../../components/CustomButton/CustomButton";
import {api} from "../../utils/api";
import {useToken} from "../../hooks/users/useToken";
import UploadButton from "../../components/UploadButton/UploadButton";
import {variables} from "../../utils/consts";

const PictureEditPage = () => {

    const navigate = useNavigate()

    const {access_token} = useToken()

    const { id } = useParams<{id: string}>();

    const {
        picture,
        fetchPicture,
        setName,
        setDescription,
        setPrice,
        setImage
    } = usePicture()

    useEffect(() => {
        id && fetchPicture(id)
    }, [])

    const [img, setImg] = useState<File | undefined>(undefined)

    const handleFileChange = (e) => {
        if (e.target.files) {
            const img = e.target?.files[0]
            setImg(img)
            setImage(URL.createObjectURL(img))
        }
    }

    const savePicture = async() => {
        let form_data = new FormData()

        form_data.append('name', picture.name)
        form_data.append('description', picture.description)
        form_data.append('price', picture.price)

        if (img != undefined) {
            form_data.append('image', img, img.name)
        }

        const response = await api.put(`pictures/${picture.id}/update/`, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': access_token
            }
        })

        if (response.status == 200) {
            setImg(undefined)
            navigate("/pictures/")
        }
    }

    const deletePicture = async () => {

        const response = await api.delete(`pictures/${picture.id}/delete/`, {
            headers: {
                'authorization': access_token
            }
        })

        if (response.status == 200) {
            setImg(undefined)
            navigate("/pictures/")
        }

    }

    if (id == undefined) {
        return (
            <div>

            </div>
        )
    }

    if (picture == undefined) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="edit-page-wrapper">

            <div className="left">

                <img src={picture.image} alt=""/>

                <UploadButton handleFileChange={handleFileChange} />

            </div>

            <div className="right">

                <div className="info-container">

                    <CustomInput placeholder="Название" value={picture.name} setValue={setName} />

                    <CustomTextarea placeholder="Информация" value={picture.description} setValue={setDescription} />

                    <CustomInput placeholder="Цена" value={picture.price} setValue={setPrice} />

                    <div className="buttons-container">

                        <CustomButton bg={variables.green} onClick={savePicture}>
                            Сохранить
                        </CustomButton>

                        <CustomButton bg={variables.red} onClick={deletePicture}>
                            Удалить
                        </CustomButton>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PictureEditPage