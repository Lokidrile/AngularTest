export interface TvShow {
    id: number,
    name: string,
    type: string,
    language: string,
    genres: string[];
    image: Image,
    externals: Externals,
    isFavourite: boolean
    summary: string
}

export interface Image {
    medium: string,
    original: string
}

export interface Externals {
    tvrage: number,
    thetvdb: number,
    imdb: string
}

export interface ModalTvShow {
    title: string;
    poster: string;
    summary: string;
    imbdLink: string;
    genres: string[];
    isFavourite: boolean;
}