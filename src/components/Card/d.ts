
export type ICardCourse = {
    onClick?: () => void,
    id?: number | string,
    title: string,
    description: string,
    cover?: any,
    last_activity?: {date: string, time: string} | boolean,
    progress: string,
    link?: string,
    module?: boolean,
}
