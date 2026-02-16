import styled from 'styled-components';

export const BlogContainer = styled.div`
    min-height: 100vh;
    padding-top: 6rem;
    font-family: ${({ theme }) => theme.fonts.family};
`;

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const BlogCard = styled.div`
    background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        border-color: #0ea5e9;
        box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

export const BlogCardDate = styled.span`
    color: #0ea5e9;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const BlogCardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin: 0.5rem 0;
    line-height: 1.4;
`;

export const BlogCardExcerpt = styled.p`
    color: #bbb;
    font-size: 0.95rem;
    line-height: 1.6;
    flex-grow: 1;
`;

export const BlogCardTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const BlogTag = styled.span`
    background: rgba(14, 165, 233, 0.15);
    color: #0ea5e9;
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(14, 165, 233, 0.3);
`;

export const ReadMoreButton = styled.button`
    align-self: flex-start;
    background: none;
    border: none;
    color: #0ea5e9;
    font-weight: 600;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: all 0.2s ease;
    font-size: 0.95rem;

    &:hover {
        color: #0284c7;
        transform: translateX(5px);
    }
`;

export const BlogPostContainer = styled.div`
    min-height: 100vh;
    padding-top: 6rem;
    font-family: ${({ theme }) => theme.fonts.family};
`;

export const BlogPostHeader = styled.div`
    margin-bottom: 3rem;
    border-bottom: 2px solid #333;
    padding-bottom: 2rem;
`;

export const BlogPostDate = styled.span`
    color: #0ea5e9;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 1rem;
`;

export const BlogPostContent = styled.div`
    font-size: 1.05rem;
    line-height: 1.8;
    color: #ddd;
    max-width: 800px;
    font-family: ${({ theme }) => theme.fonts.family};

    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    ul {
        margin-left: 2rem;
        margin-bottom: 1.5rem;

        li {
            margin-bottom: 0.75rem;
            color: #bbb;
        }
    }

    ol {
        margin-left: 2rem;
        margin-bottom: 1.5rem;

        li {
            margin-bottom: 0.75rem;
            color: #bbb;
        }
    }

    code {
        background: rgba(14, 165, 233, 0.1);
        color: #0ea5e9;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.95rem;
    }

    blockquote {
        border-left: 4px solid #0ea5e9;
        padding-left: 1.5rem;
        margin-left: 0;
        margin-bottom: 1.5rem;
        color: #999;
        font-style: italic;
    }

    a {
        color: #0ea5e9;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: #0284c7;
            text-decoration: underline;
        }
    }
`;

export const BlogPostTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    color: #0ea5e9;
    font-weight: 600;
    cursor: pointer;
    padding: 0.75rem 1rem;
    transition: all 0.2s ease;
    font-size: 1rem;
    margin-bottom: 2rem;

    &:hover {
        color: #0284c7;
        transform: translateX(-5px);
    }
`;

export const SortContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 0.75rem;
    }
`;

export const SortButton = styled.button`
    padding: 0.75rem 1.5rem;
    background: ${({ active }) => active ? 'rgba(14, 165, 233, 0.2)' : 'transparent'};
    border: 2px solid ${({ active }) => active ? '#0ea5e9' : '#333'};
    color: ${({ active }) => active ? '#0ea5e9' : '#999'};
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
    font-family: ${({ theme }) => theme.fonts.family};

    &:hover {
        border-color: #0ea5e9;
        color: #0ea5e9;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem 1rem;
        font-size: 0.85rem;
    }
`;
