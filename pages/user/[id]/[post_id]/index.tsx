import { Box, Button, Typography } from '@mui/material';
import { fetchProps } from 'api/fetch-props';
import { UserDto } from 'api/user';
import { CommentList } from 'components/comment-list';
import { TopBar } from 'components/top-bar';
import { usePosts } from 'contexts/posts/posts-context';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return await fetchProps<UserDto>(`users/${ctx.query.id}`);
}

interface PostPageProps {
    data?: UserDto;
}

const PostPage = ({ data }: PostPageProps) => {
    const { posts } = usePosts();
    const { query } = useRouter();
    const [enabled, setEnabled] = useState(false);

    const displayPost = posts.find((post) => post.id === Number(query.post_id));

    return (
        <div>
            <Head>
                <title>{data?.name} post</title>
            </Head>
            <main>
                <TopBar title={data?.name}></TopBar>
                <Box display="grid" justifyContent="center">
                    <article style={{ maxWidth: 500 }}>
                        <Typography variant="h6" style={{ fontWeight: 700 }}>
                            {displayPost?.title}
                        </Typography>
                        <Typography style={{ whiteSpace: 'pre-line' }}>
                            {displayPost?.body}
                        </Typography>
                    </article>
                    {!enabled && (
                        <Button
                            style={{
                                marginTop: 20,
                                justifySelf: 'center',
                            }}
                            onClick={() => setEnabled(true)}
                        >
                            show comments
                        </Button>
                    )}
                    <CommentList enabled={enabled} />
                </Box>
            </main>
        </div>
    );
};

export default PostPage;
