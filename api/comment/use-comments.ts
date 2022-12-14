import { client } from 'api/axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CommentDto } from './types';

export const useComments = (enabled = false) => {
    const { query } = useRouter();
    const [comments, setComments] = useState<CommentDto[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isFetched, setFetched] = useState(false);

    useEffect(() => {
        if (enabled) {
            setFetched(false);
            setLoading(true);
            client
                .get(`posts/${query.post_id}/comments`)
                .then((res) => setComments(res.data))
                .catch(() => null)
                .finally(() => {
                    setLoading(false);
                    setFetched(true);
                });
        }
    }, [enabled]);

    return { comments, isLoading, isFetched };
};
