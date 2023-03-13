import styled, { css } from "styled-components";
import { IContainer } from "./d";

export const Container = styled.div`
    display: flex;
    ${({ w, h }: IContainer) => {
        return css`
            width: ${() => w ?? '100%'};
            height: ${() => h ?? 'none'};
        `
    }}
`