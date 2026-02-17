import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    PaddingContainer,
    Container,
    Heading,
} from '../styles/Global.styled';
import {
    BlogPostContainer,
    BlogPostHeader,
    BlogPostDate,
    BlogPostContent,
    BlogPostTags,
    BlogTag,
    BackButton,
} from '../styles/Blog.styled';
import { blogPosts } from '../utils/Data';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <BlogPostContainer>
                <PaddingContainer top='5rem' bottom='5rem' responsive>
                    <Container>
                        <Heading>Post Not Found</Heading>
                        <BackButton onClick={() => navigate('/blog')}>
                            ← Back to Blog
                        </BackButton>
                    </Container>
                </PaddingContainer>
            </BlogPostContainer>
        );
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <BlogPostContainer>
            <PaddingContainer top='5rem' bottom='5rem' responsive>
                <Container>
                    <BackButton onClick={() => navigate('/blog')}>
                        ← Back to Blog
                    </BackButton>

                    <BlogPostHeader>
                        <BlogPostDate>{formatDate(post.date)}</BlogPostDate>
                        <Heading>{post.title}</Heading>
                        {post.tags && post.tags.length > 0 && (
                            <BlogPostTags>
                                {post.tags.map((tag, idx) => (
                                    <BlogTag key={idx}>{tag}</BlogTag>
                                ))}
                            </BlogPostTags>
                        )}
                    </BlogPostHeader>

                    <BlogPostContent>
                        {typeof post.content === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            post.content
                        )}
                    </BlogPostContent>
                </Container>
            </PaddingContainer>
        </BlogPostContainer>
    );
};

export default BlogPost;
