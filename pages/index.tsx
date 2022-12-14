import { Grid } from '@mui/material';
import { fetchProps } from 'api/fetch-props';
import { UserDto } from 'api/user/types';
import { UserTile } from 'components/user-tile';
import Head from 'next/head';

export async function getServerSideProps() {
    return await fetchProps<UserDto[]>('users');
}

interface HomePageProps {
    data?: UserDto[];
}

export default function HomePage(props: HomePageProps) {
    return (
        <div>
            <Head>
                <title>Users</title>
            </Head>
            <main>
                <Grid container spacing={2} p={2}>
                    {props.data?.map((user) => (
                        <UserTile key={user.id} {...user} />
                    ))}
                </Grid>
            </main>
        </div>
    );
}
