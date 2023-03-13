import { ICardCourse } from "../Card/d";

export type IContent ={
    title: string
}

export type ICarouselContent = {
    data: IContent[];
    content?: () => void
} 

export type ICarousel = {
    title?: string;
    border?: boolean;
    data: any[];
    link?: string;
    module?: boolean;
}