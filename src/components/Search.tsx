import {useEffect, useState} from 'react'
import {GetFilteredPaintings, PaintingsResult} from '../modules/GetPaintings.ts'


function SearchPaintings({
    setPaintingData,
    setTitleData,
}: {
setPaintingData: (data: PaintingsResult) => void;
setTitleData: (data: any) => void;
}) {
// Для фильтрации услуг
const [titleData, settitleData] = useState<string>('');

const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    settitleData(event.target.value);
};

const handleFilterSubmit = async (event: React.FormEvent) => {
event.preventDefault();
};

useEffect(() => {
// Функция, которая будет выполнять фильтрацию данных
const fetchTitledData = async () => {
try {
const response = await GetFilteredPaintings(titleData);
setPaintingData(response);
setTitleData(titleData);
} catch (error) {
console.error('Error filtering fines:', error);
}
};
// Вызываем фильтрацию данных при изменении filterKeyword
fetchTitledData();
// Этот useEffect будет выполнен при изменении filterKeyword или currentPage
}, [titleData]);


return (
<>
    <form className="form-s" action="{% url 'order_url' %}" method="get" onSubmit={handleFilterSubmit}>
        <input className="input_text" name="text" type="search"
            value={titleData}
            onChange={handleFilterChange}
            placeholder="Заголовок..."
        />
    </form>
</>
);
};

export default SearchPaintings;