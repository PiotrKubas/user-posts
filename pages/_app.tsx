import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostsProvider } from 'contexts/posts/posts-context';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PostsProvider>
            <Component {...pageProps} />
        </PostsProvider>
    );
}
