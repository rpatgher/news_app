import Card  from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const News = ({news}) => {
    const { urlToImage, url, title, description, source } = news;
    return (
        <Grid
            item
            md={6}
            xs={12}
            lg={4}
        >
            <Card>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Image of ${title}`}
                        image={urlToImage}
                        height='200'
                    />
                )}
                <CardContent>
                    <Typography
                        variant='body1'
                        color='error'
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        component='div'
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant="button"
                        width='100%'
                        textAlign='center'
                        sx={{ textDecoration: 'none' }}
                    >
                      Read News
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default News
