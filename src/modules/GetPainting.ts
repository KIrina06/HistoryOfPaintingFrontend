import mockPaintings from '../assets/MockPaintings';
import Painting from '../routes/PaintingPage';

export interface Painting {
    id: number;
    picture: string;
    title: string;
    context: string;
    price: string;
    status: string;
}

export interface PaintingResult {
    data: Painting[] | null;
}

export const GetPainting = async (id: number): Promise<PaintingResult> => {
    if (id < mockPaintings.length + 1 && id > 0){
        return{
            data: mockPaintings
        }};
    try {
        const response = await fetch(`http://127.0.0.1:8000/paintings/${id}/`);
        
        if (!response.ok) {
            throw new Error('Запрос незадался!');
        }
        const data: Painting = await response.json();
        return {
           data: [data],
        };
    } catch (error) {
        console.error('Ошибка запроса штрафа:', error);
        return {
            data: null,
        };
    }
};