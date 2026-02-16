import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin:auto;
`

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: ${({ responsiveTop }) => responsiveTop};
        padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
        padding-left: ${({ responsiveLeft }) => responsiveLeft};
        padding-right: ${({ responsiveRight }) => responsiveRight};

    }
`

export const FlexContainer = styled.div`
    display:flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => wrap};

    & > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: ${({ responsiveFlex }) => responsiveFlex ? 'flex': 'block'};
        flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    }
`

export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ align }) => align};
    letter-spacing: 0.3px;
    line-height: 1.3;
    font-size: ${({ size }) => {
        switch(size){
            case 'h1':
                return '4.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            default:
                return;
        }
    }};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ size }) => {
            switch(size){
                case 'h1':
                    return '2.5rem';
                case 'h2':
                    return '2rem';
                case 'h3':
                    return '1.5rem';
                case 'h4':
                    return '1rem';
                default:
                    return;
            }
        }}
    }

`

export const GreyText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 1.8;
    letter-spacing: 0.2px;
`

export const IconContainer = styled.div`
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: ${({ color, theme}) => {
        switch(color){
            case 'white':
                return theme.colors.white;
            case 'grey':
                return theme.colors.secondary;
            default:
                return;
        }
    }};
`

export const Button = styled.a`
    display: inline-block;
    width: max-content;
    padding: 0.875rem 2rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};  
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    letter-spacing: 0.3px;

    &:hover{
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary};
    }
`