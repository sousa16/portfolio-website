import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PaddingContainer,
    FlexContainer,
    Container,
} from '../styles/Global.styled';
import {
    BlogContainer,
    BlogGrid,
    BlogCard,
    BlogCardTitle,
    BlogCardDate,
    BlogCardExcerpt,
    BlogCardTags,
    BlogTag,
    ReadMoreButton,
    SortContainer,
    SortButton,
} from '../styles/Blog.styled';
import { blogPosts } from '../utils/Data';

const Blog = () => {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState(null);

    // Get all unique tags
    const allTags = [...new Set(blogPosts.flatMap(post => post.tags || []))];

    const sortedPosts = [...blogPosts]
        .filter(post => !selectedTag || (post.tags && post.tags.includes(selectedTag)))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleReadMore = (postSlug) => {
        navigate(`/blog/${postSlug}`);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <BlogContainer>
            <PaddingContainer top='5rem' bottom='5rem' responsive>
                <Container>
                    {allTags.length > 0 && (
                        <SortContainer>
                            <SortButton 
                                active={selectedTag === null} 
                                onClick={() => setSelectedTag(null)}
                            >
                                All Posts
                            </SortButton>
                            {allTags.map(tag => (
                                <SortButton 
                                    key={tag}
                                    active={selectedTag === tag} 
                                    onClick={() => setSelectedTag(tag)}
                                >
                                    {tag}
                                </SortButton>
                            ))}
                        </SortContainer>
                    )}

                    <BlogGrid>
                        {sortedPosts.map((post) => (
                            <BlogCard key={post.id} onClick={() => handleReadMore(post.slug)}>
                                <BlogCardDate>{formatDate(post.date)}</BlogCardDate>
                                <BlogCardTitle>{post.title}</BlogCardTitle>
                                <BlogCardExcerpt>{post.excerpt}</BlogCardExcerpt>
                                
                                {post.tags && post.tags.length > 0 && (
                                    <BlogCardTags>
                                        {post.tags.map((tag, idx) => (
                                            <BlogTag key={idx}>{tag}</BlogTag>
                                        ))}
                                    </BlogCardTags>
                                )}

                                <ReadMoreButton onClick={(e) => e.stopPropagation()}>
                                    Read More →
                                </ReadMoreButton>
                            </BlogCard>
                        ))}
                    </BlogGrid>
                </Container>
            </PaddingContainer>
        </BlogContainer>
    );
};

export default Blog;
