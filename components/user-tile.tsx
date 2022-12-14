import { Grid, Paper, Typography } from '@mui/material';
import { UserDto } from 'api/user';
import Link from 'next/link';

export const UserTile = ({ name, email, phone, website, id }: UserDto) => {
    return (
        <Grid item columns={2} xs={6}>
            <Link href={`user/${id}`}>
                <Paper
                    style={{
                        padding: 40,
                        background: 'lightgrey',
                    }}
                >
                    <Typography variant="h5">{name}</Typography>
                    <Typography>Email: {email}</Typography>
                    <Typography>Phone: {phone}</Typography>
                    <Typography>Website: {website}</Typography>
                </Paper>
            </Link>
        </Grid>
    );
};
