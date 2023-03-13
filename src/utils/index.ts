import { colors, variantsButton } from "@types"

export const urlConfig = 'http://localhost:1337'

export async function fetchData(params:string) {
    const response = await fetch(`http://localhost:1337/api/${params}?populate=deep`, {
        next: {
            revalidate: 5
    },
        cache: 'no-store'
    })

    const json = await response.json()

    return json.data
}

export const seeMoreText = (text: string, total: number = 90) => {
    if (text?.length > total) {
        return `${text.slice(0, total)}...`
    } else {
        return text
    }
}

export const variantsColors = (variant: colors) => {
    switch (variant) {
        case "light":
            return `text-primary-gray`
        case "primary":
            return `text-primary`
        
        default:
            return `text-primary-dark`
    }
}

export const borderColor = (variant: colors) => {
    switch (variant) {
        case "light":
            return `border-primary-gray`
        case "primary":
            return `border-primary`
        
        default:
            return `border-primary-dark`
    }
}

export const bgColor = (variant: colors) => {
    switch (variant) {
        case "light":
            return `bg-primary-gray`
        case "primary":
            return `bg-primary`
        
        default:
            return `bg-primary-dark`
    }
}

export const variantButton = (variant: variantsButton, color: colors) => {
    const colorClass = variantsColors(color)
    const borderClass = borderColor(color)
    const bgClass = bgColor(color)

    const variantClass = {
        solid: `${colorClass} bg-primary text-primary-gray shadow-md py-2 hover:opacity-80`,
        dark: `${colorClass} bg-black text-primary-gray shadow-md py-2`,
        light: `${colorClass} bg-white text-primary-dark shadow-md py-2 hover:opacity-95`,
        outline: `${colorClass} ${borderClass} border`,
        none: `${colorClass} `, 
        default: `${colorClass} rounded-md py-1.5 px-4 active:opacity-100`
    }

    switch (variant) {
        case "solid":
            return `${variantClass.default} ${variantClass.solid}`
        case "dark":
            return `${variantClass.default} ${variantClass.dark}`
        case "light":
            return `${variantClass.default} ${variantClass.light}`
        case "outline":
            return `${variantClass.default} ${variantClass.outline}`
    
        default:
            return `${variantClass.none}`
    }
}
