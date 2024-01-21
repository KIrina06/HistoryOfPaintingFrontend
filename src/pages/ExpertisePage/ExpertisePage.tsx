import {useEffect} from "react";
import {useExpertise} from "../../hooks/expertises/useExpertise";
import {useNavigate, useParams} from "react-router-dom"
import PictureCard from "../../components/PictureCard/PictureCard";
import "./ExpertisePage.sass"
import {useAuth} from "../../hooks/users/useAuth";
import {STATUSES, variables} from "../../utils/consts";
import {ru} from "../../utils/momentLocalization";
import moment from "moment";
import CustomButton from "../../components/CustomButton/CustomButton";
import {pluralDeliveryDate} from "../../utils/plural";
import {pluralFreePictures } from "../../utils/plural";
import { Pictures } from "../../utils/types";

const ExpertisePage = () => {

    const {is_moderator} = useAuth()

    const navigate = useNavigate()

    const { id } = useParams<{id: string}>();

    const {expertise, fetchExpertise, saveExpertise, sendExpertise, deleteExpertise, setExpertise} = useExpertise()

    useEffect(() => {
        id && fetchExpertise(id)
        
        return () => {
            setExpertise(undefined)
        };
    }, [])

    if (id == undefined || expertise == undefined)
    {
        return (
            <div className="booking-page-wrapper">
                <h1>Пусто</h1>
            </div>
        )
    }

    const onSendExpertise = async() => {
        await saveExpertise()
        await sendExpertise()
        navigate("/expertises")
    }

    const onDeleteExpertise = async () => {
        await deleteExpertise()
        navigate("/pictures")
    }

    const cards = expertise.pictures.map((picture: Pictures)  => (
        <PictureCard picture={picture} key={picture.id} />
    ))


    const ButtonsContainer = () => {
        return (
            <div className="buttons-wrapper">

                <CustomButton onClick={onSendExpertise} bg={variables.green}>Отправить</CustomButton>

                <CustomButton onClick={onDeleteExpertise} bg={variables.red}>Удалить</CustomButton>

            </div>
        )
    }

    const is_draft = expertise.status == 1

    const completed = [3, 4].includes(expertise.status)

   

    return (
        <div className="booking-page-wrapper">

            <div className="booking-audiences-wrapper">
                <div className="top">
                    <h3>{is_draft ? "Новая заявка на экспертизу" : "Экспертиза №" + expertise.id}</h3>
                </div>

                <div className="booking-info-container">
                    <span>Статус: {STATUSES.find(status => status.id == expertise.status).name}</span>
                    <span>Дата создания: {moment(expertise.date_created).locale(ru()).format("D MMMM HH:mm")}</span>
                    {[2, 3, 4].includes(expertise.status) && <span>Дата формирования: {moment(expertise.date_formation).locale(ru()).format("D MMMM HH:mm")}</span>}
                    {completed && <span>Дата завершения: {moment(expertise.date_complete).locale(ru()).format("D MMMM HH:mm")}</span> }
                    {is_moderator && <span>Пользователь: {expertise.owner.name}</span> }
                    {/* {[2, 3, 4].includes(cosmetic.status) && <span>Результаты клинических испытаний: {pluralClinicalTrial(cosmetic.clinical_trial)}</span>} */}
                    {/* {[2, 3, 4].includes(booking.status) && <span>Свободна аудитория: {booking.free_audiences > 0 ? pluralFreeAudiences(booking.free_audiences): "Нет"}</span>} */}
                    
                    {[2, 3, 4].includes(expertise.status) && <span>Свободна аудитория: {pluralFreePictures(expertise.free_audiences)}</span>}
                </div>

                <div className="title">
                    <h3>Картины</h3>
                </div>

                <div className="bottom">

                    {cards}

                </div>
            </div>

            {!is_moderator && is_draft && <ButtonsContainer />}

        </div>
    )
}

export default ExpertisePage