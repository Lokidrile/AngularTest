export interface TvShow {
    id: number,
    name: string,
    type: string,
    language: string,
    genres: string[];
    image: Image,
    externals: Externals,
    isFavourite: boolean
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