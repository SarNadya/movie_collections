interface MovieBudget {
  currency: string;
  value: number;
}

interface MovieDistributors {
  distributor: string;
  distributorRelease: null;
}

type Fees = {
  value: number;
  currency: string;
};

interface MovieFees {
  usa: Fees;
  world: Fees;
}

interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface MoviePerson {
  id: number;
  name: string;
  enName: string;
  description: string;
  enProfession:
    | 'director'
    | 'actor'
    | 'design'
    | 'producer'
    | 'composer'
    | 'editor';
  photo: string;
}

export interface MoviePoster {
  previewUrl: string;
  url: string;
}

interface MoviePremiere {
  cinema: Date;
  country: string;
  russia: Date;
  world: Date;
}

interface MovieProdComp {
  name: string;
  previewUrl: string;
  url: string;
}

export interface MovieRating {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}

interface MovieSeasonsInfo {
  number: number;
  episodesCount: number;
}

interface MovieSequels {
  alternativeName: string;
  enName: string;
  id: number;
  poster: MoviePoster;
  type: string;
}

interface MovieLang {
  name: string;
  nameEn: string;
}

interface MovieTechnology {
  has3D: boolean;
  hasImax: boolean;
}

interface MovieTrailer {
  name: string;
  site: string;
  url: string;
}

export interface Movie {
  ageRating: number;
  alternativeName: string;
  backdrop: { url: string };
  budget: MovieBudget;
  countries: { name: string }[];
  createDate: Date;
  description: string;
  distributors: MovieDistributors;
  fees: MovieFees;
  facts: Fact[];
  genres?: { name: string }[];
  id: number;
  enName: string;
  images: { framesCount: number };
  lists: [];
  logo: { url: string };
  movieLength: number;
  name: string;
  names: { name: string }[];
  persons: MoviePerson[];
  poster: MoviePoster;
  premiere: MoviePremiere;
  productionCompanies: MovieProdComp[];
  rating?: MovieRating;
  ratingMpaa: string;
  seasonsInfo?: MovieSeasonsInfo[];
  sequelsAndPrequels: MovieSequels[];
  shortDescription: string;
  similarMovies: Movie[];
  slogan: string;
  spokenLanguages: MovieLang[];
  status: string;
  technology: MovieTechnology;
  ticketsOnSale: boolean;
  type: string;
  typeNumber: number;
  updateDates: Date[];
  updatedAt: Date;
  videos: { trailers: MovieTrailer[] };
  votes: MovieRating;
  year: number;
}

export interface TransformedMovie {
  ageRating?: number;
  alternativeName: string;
  countries?: { name: string }[];
  description?: string;
  genres?: { name: string }[];
  id: number;
  name: string;
  poster: MoviePoster;
  rating?: MovieRating;
  videos?: { trailers: MovieTrailer[] };
  year?: number;
}
