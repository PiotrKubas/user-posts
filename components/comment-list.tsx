import { List, ListItem, Typography, Grid, Paper } from '@mui/material';
import { useComments } from 'api/comment';
import { trimText } from 'utils/trimText';
import { LoadingContainer } from './loading-container';

export const CommentList = ({ enabled }: { enabled: boolean }) => {
    const { comments, isLoading, isFetched } = useComments(enabled);

    return (
        <LoadingContainer
            isLoading={isLoading}
            noContent={isFetched && comments.length < 1}
            noContentMessage="No comments found"
        >
            <List>
                {comments.map((comment) => (
                    <ListItem
                        disablePadding
                        key={comment.id}
                        style={{
                            margin: '10px 0',
                            display: 'block',
                            maxWidth: 500,
                        }}
                    >
                        <Paper
                            style={{ padding: 10, background: 'ghostwhite' }}
                        >
                            <Grid
                                container
                                style={{
                                    borderBottom: '1px solid black',
                                    marginBottom: 10,
                                    paddingBottom: 5,
                                }}
                            >
                                <Grid item xs={6}>
                                    {trimText(comment.name, 20)}
                                </Grid>
                                <Grid item>{comment.email}</Grid>
                            </Grid>
                            <Typography>{comment.body}</Typography>
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </LoadingContainer>
    );
};
