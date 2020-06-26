import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3),
    },
    mainGrid: {
        margin: theme.spacing(0, 12),
    },
}));

const featuredPosts = [
    {
        title: 'Organization Info',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        url: '#/organization-info',
    },
    {
        title: 'Product Info',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        url: '#/product-info',
    },
];

export const Dashboard = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar className={classes.title} title="Legendary Tacos" />
                <main>
                    <div className={classes.title}>
                        <Typography variant="h4" component="h4">
                            Account Settings
                        </Typography>
                    </div>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    );
};
