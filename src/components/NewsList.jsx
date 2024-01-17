import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import useNews from '../hooks/useNews';
import News from './News';

const NewsList = () => {
    const { news, totalNews, handleChangePage, page } = useNews();
    const totalPages = Math.ceil(totalNews / 20);
    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant='h3'
                component='h2'
            >
                Latest News
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {news.map(n => (
                    <News 
                        key={n.url}
                        news={n}
                    />
                ))}
            </Grid>
            <Stack 
                sx={{ marginY: '5rem' }}
                spacing={2}
                justifyContent={'center'}
                alignItems={'center'}
                direction={'row'}
            >
                <Pagination 
                    count={totalPages} 
                    color="primary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default NewsList
