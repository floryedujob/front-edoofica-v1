
export type ISocialLink = {
    name: string;
    icon: string;
    url: string;
}


export type IFooter = {
    info?: string,
    logo: string
    altLogo: string
    socialLinks?: ISocialLink[]
}