import { List, ListItem, ListItemText } from '@mui/material';
import { usePosts } from 'contexts/posts/posts-context';
import { trimText } from 'utils/trimText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DeletePostModal } from './delete-post-modal';
import { LoadingContainer } from './loading-container';

interface PostListProps {
    onDelete: (id: number) => void;
}
export const PostList = ({ onDelete }: PostListProps) => {
    const { posts, isLoading, isFetched } = usePosts();
    const { asPath } = useRouter();

    return (
        <LoadingContainer
            isLoading={isLoading}
            noContent={isFetched && posts.length < 1}
            noContentMessage="No posts found"
        >
            <List>
                {posts.map((post) => (
                    <ListItem
                        disablePadding
                        key={post.id}
                        style={{
                            background: 'lightgrey',
                            margin: '10px 0',
                            display: 'flex',
                        }}
                    >
                        <DeletePostModal onDelete={onDelete} id={post.id} />
                        <Link
                            href={`${asPath}/${post.id}`}
                            style={{
                                minWidth: 200,
                                textAlign: 'center',
                                width: '100%',
                                padding: '0 10px',
                            }}
                        >
                            <ListItemText primary={trimText(post.title)} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </LoadingContainer>
    );
};
