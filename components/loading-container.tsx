import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface LoadingContainerProps {
    isLoading: boolean;
    children: ReactNode;
    noContent?: boolean;
    noContentMessage?: string;
}
export const LoadingContainer = ({
    isLoading,
    noContent = false,
    noContentMessage,
    children,
}: LoadingContainerProps) => {
    if (isLoading) return <Typography>Loading...</Typography>;
    if (noContent) return <Typography>{noContentMessage}</Typography>;
    return <>{children}</>;
};
