import { client } from './axios';

export const fetchProps = async <T>(url: string) => {
    try {
        const res = await client.get<T>(url);
        return { props: { data: res.data } };
    } catch {
        return {
            notFound: true,
        };
    }
};
