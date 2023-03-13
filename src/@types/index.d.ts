export type IReactNode = {
    children: React.ReactNode
}

export type variantsButton = 'solid' | 'outline' | 'none' | 'light' | 'dark' | 'icon'
export type colors = 'dark' | 'light' | 'primary'

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.jpeg" {
    const path: string;
    export default path;
}