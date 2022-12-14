import { Grid, IconButton } from '@mui/material';
import { ReactNode } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

interface TopBarProps {
    title?: string;
    children?: ReactNode;
}

export const TopBar = ({ title, children }: TopBarProps) => {
    const router = useRouter();
    return (
        <Grid container p={1}>
            <Grid item xs={4}>
                <IconButton onClick={() => router.back()}>
                    <ArrowBackIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" align="center">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {children && (
                    <Box justifyContent="end" display="flex">
                        {children}
                    </Box>
                )}
            </Grid>
        </Grid>
    );
};
