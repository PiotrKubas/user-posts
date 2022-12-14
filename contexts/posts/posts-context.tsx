import { client } from 'api/axios';
import { PostDto } from 'api/post';
import { useRouter } from 'next/router';
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useCallback } from 'react';

type PostsContextType = {
    posts: PostDto[];
    addPost: (post: PostDto) => void;
    deletePost: (postId: number) => void;
    isLoading: boolean;
    isFetched: boolean;
};

const PostsContext = createContext<PostsContextType>({
    posts: [],
    addPost: () => null,
    deletePost: () => null,
    isLoading: false,
    isFetched: false,
});

type PostsProviderProps = {
    children: ReactNode;
};

const usePosts = () => useContext(PostsContext);

const PostsProvider = ({ children }: PostsProviderProps) => {
    const { query } = useRouter();
    const [posts, setPosts] = useState<PostDto[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isFetched, setFetched] = useState(false);

    useEffect(() => {
        setPosts([]);
        if (query?.id) {
            setLoading(true);
            setFetched(false);
            client
                .get(`users/${query.id}/posts`)
                .then((res) => setPosts(res?.data))
                .catch(() => null)
                .finally(() => {
                    setLoading(false);
                    setFetched(true);
                });
        }
    }, [query?.id]);

    const addPost = useCallback(
        (post: PostDto) =>
            setPosts((prev) => [
                ...prev,
                { ...post, id: prev.length + post.id },
            ]),
        []
    );

    const deletePost = useCallback(
        (postId: number) =>
            setPosts((prev) => prev.filter((post) => post.id !== postId)),
        []
    );

    const contextValue: PostsContextType = {
        posts,
        addPost,
        deletePost,
        isLoading,
        isFetched,
    };

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
};

export { usePosts, PostsProvider };
