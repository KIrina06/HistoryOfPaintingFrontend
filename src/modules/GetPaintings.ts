import defaultImage1 from '../assets/Default1.jpeg';
import defaultImage2 from '../assets/Default2.jpeg';
import defaultImage3 from '../assets/Default3.jpeg';
import defaultImage4 from '../assets/Default4.jpeg';
import defaultImage5 from '../assets/Default5.jpeg';
import defaultImage6 from '../assets/Default6.jpeg';
import { getMockPaintings } from '../assets/MockPaintings';

export interface Painting {
    id: number;
    picture: string;
    title: string;
    context: string;
    price: string;
    status: string;
}

export interface PaintingsResult {
    id: number | null;
    paintings: Painting[];
}

export const GetFilteredPaintings = async (titleData: string): Promise<PaintingsResult> => {
    const mockPaintings = getMockPaintings();

    try {
        const params = new URLSearchParams({
            title: titleData,
        });

        let url = '';
        if(titleData == null){
            url = `http://127.0.0.1:8000/paintings/`;
        } else{
            url = `http://127.0.0.1:8000/paintings/${params}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
            return {
                id: null,
                // @ts-ignore
                paintings: mockPaintings.paintings
            }
        }

        const List: PaintingsResult = await response.json();
        const Paintings = List.paintings;
        const picturies = [defaultImage1, defaultImage2, defaultImage3, defaultImage4, defaultImage5, defaultImage6];
        if (Array.isArray(Paintings)) {
            Paintings.forEach(item => {
                if (!item.picture) {
                    item.picture = picturies[item.id - 1];
                }
            });
        }

        return {
            id: List.id,   
            paintings: Paintings,
        };
    } catch (error) {
        return {
            id: null,
            // @ts-ignore
            paintings: mockPaintings.paintings
        }
    }
};