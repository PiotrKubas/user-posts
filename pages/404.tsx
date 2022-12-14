import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NoFound() {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Page not found</title>
            </Head>
            <main>
                <Box justifyContent="center" display="grid">
                    <Typography m={4}>Page not found</Typography>
                    <Box display="flex" gap={2}>
                        <Button onClick={() => router.back()}>Go Back</Button>
                        <Button onClick={() => router.replace('/')}>
                            Go Home
                        </Button>
                    </Box>
                </Box>
            </main>
        </div>
    );
}
