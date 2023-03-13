import { variantsButton, colors } from "@types"
import lib from 'react-icons/all'


interface INavigate {
    pathname?: string,
    query?: {}
}

export type IButtonType = 'default' | 'iconAdd'


export type IButton = {
    onClick?: () => void,
    children?: React.ReactNode,
    icon?: keyof typeof lib,
    color?: colors,
    variant?: variantsButton,
    full?: boolean,
    href?: string,
    title?: string,
    toSlug?: string,
    navigate?: INavigate,
    buttonType?: IButtonType
}