export interface Pictures {
    id: number,
    name: string,
    status: number,
    info: string,
    price: number,
    corpus: string,
    image: string
}

export interface User {
    id: number,
    name: string,
    email: string
}

export interface Expertise {
    id: number,
    status: number,
    owner: User,
    moderator: User,
    free_audiences:number,
    date_created: string,
    date_formation: string,
    date_complete: string,
    artist: string,
}

export interface Option {
    id: number,
    name: string
}