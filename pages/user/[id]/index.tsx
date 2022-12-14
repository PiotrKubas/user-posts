import { fetchProps } from 'api/fetch-props';
import { UserDto } from 'api/user/types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { TopBar } from 'components/top-bar';
import { AddPostModal } from 'components/add-post-modal';
import { AddPostForm } from 'api/post';
import { client } from 'api/axios';
import { useRouter } from 'next/router';
import { usePosts } from 'contexts/posts/posts-context';
import { Box } from '@mui/material';
import { PostList } from 'components/post-list';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return await fetchProps<UserDto>(`users/${ctx.query.id}`);
}

interface UserPageProps {
    data?: UserDto;
}

const UserPage = (props: UserPageProps) => {
    const { query } = useRouter();
    const { addPost, deletePost } = usePosts();

    const handlePostSubmit = (values: AddPostForm) => {
        client
            .post('posts', {
                ...values,
                userId: Number(query.id),
            })
            .then((res) => addPost(res.data))
            .catch(() => null);
    };

    const handlePostDelete = (id: number) => {
        client
            .delete(`posts/${id}`)
            .then(() => deletePost(id))
            .catch(() => null);
    };

    return (
        <div>
            <Head>
                <title>{props?.data?.name}</title>
            </Head>
            <main>
                <TopBar title={props?.data?.name}>
                    <AddPostModal onSubmit={handlePostSubmit} />
                </TopBar>
                <Box display="grid" justifyContent="center">
                    <PostList onDelete={handlePostDelete} />
                </Box>
            </main>
        </div>
    );
};

export default UserPage;
