import React from "react";
import "./ExpertisesTable.sass"
import {STATUSES, variables} from "../../../utils/consts";
import {ru} from "../../../utils/momentLocalization";
import moment from "moment";
import {useQuery} from "react-query";
import {useExpertises} from "../../../hooks/expertises/useExpertises";
import {useCustomTable} from "../../../hooks/other/useCustomTable";
import CustomTable from "../../../components/CustomTable/CustomTable";
import {useNavigate} from "react-router-dom"
import ExpertisesFilters from "../ExpertisesFilters/ExpertisesFilters";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {useAuth} from "../../../hooks/users/useAuth";
import {useToken} from "../../../hooks/users/useToken";
import {api} from "../../../utils/api";
import {pluralDeliveryDate} from "../../../utils/plural";
import {pluralFreePictures} from "../../../utils/plural";

const ExpertisesTable = () => {

    const {access_token} = useToken()

    const {is_moderator} = useAuth()

    const navigate = useNavigate()

    const {searchExpertises} = useExpertises()

    const columns = [
        {
            Header: "№",
            accessor: "id"
        },
        {
            Header: "Статус",
            accessor: "status",
            Cell: ({ value }) => { return STATUSES.find(status => status.id == value).name }
        },
        {
            Header: "Пользователь",
            accessor: "owner",
            Cell: ({ value }) => { return value.name }
        },
        {
            Header: "Дата формирования",
            accessor: "date_of_formation",
            Cell: ({ value }) => { return moment(value).locale(ru()).format("D MMMM HH:mm") }
        }
    ]

    if (is_moderator) {
        columns.push({
            Header: "Действие",
            accessor: "accept_button",
            Cell: ({ cell }) => (
                is_moderator && cell.row.values.status == 2 && <CustomButton bg={variables.green} onClick={(e) => acceptExpertise(cell.row.values.id)}>Принять</CustomButton>
            )
        })

        columns.push({
            Header: "Действие",
            accessor: "dismiss_button",
            Cell: ({ cell }) => (
                is_moderator && cell.row.values.status == 2 && <CustomButton bg={variables.red} onClick={(e) => dismissExpertises(cell.row.values.id)}>Отклонить</CustomButton>
            )
        })
    }

    const acceptExpertise = async (expertise_id) => {

        const formData = new FormData()

        formData.append("status", "3")

        const response = await api.put(`expertises/${expertise_id}/update_status_admin/`, formData, {
            headers: {
                'authorization': access_token
            }
        });

        if (response.status == 200) {
            refetch()
        }
    }

    const dismissExpertises = async (expertise_id) => {

        const formData = new FormData()

        formData.append("status", "4")

        const response = await api.put(`expertises/${expertise_id}/update_status_admin/`, formData, {
            headers: {
                'authorization': access_token
            }
        });

        if (response.status == 200) {
            refetch()
        }
    }
    
    const { isLoading, data, isSuccess, refetch } = useQuery(
        ["expertises"],
        () => searchExpertises(),
        {
            refetchInterval: 2000,
            refetchOnWindowFocus: false,
            cacheTime: 0,
            keepPreviousData: false,
        }
    );

    const {
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow
    } = useCustomTable(
        columns,
        isSuccess,
        data
    )

    const handleClick = (expertise_id) => {
        navigate(`/expertises/${expertise_id}`)
    }

    return (
        <div className="bookings-table-wrapper">

            <CustomTable
                getTableBodyProps={getTableBodyProps}
                headerGroups={headerGroups}
                page={page}
                prepareRow={prepareRow}
                isLoading={isLoading}
                onClick={handleClick}
            >
                <ExpertisesFilters refetch={refetch}/>
            </CustomTable>

        </div>
    )
}

export default ExpertisesTable