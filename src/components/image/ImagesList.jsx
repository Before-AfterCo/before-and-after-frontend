import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TitleTypography from "../favourites/TitleTypography";
import ImageCard from "./ImageCard";

const ImagesList = ({ images, onToggleFavourite }) => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container sx={{ py: 8 }} maxWidth="md">
                <TitleTypography/>
                <Grid container spacing={4}>
                    {images.map((image) => (
                        <Grid item key={image.id} xs={12} sm={6} md={4}>
                            <ImageCard
                                image={image}
                                onToggleFavourite={onToggleFavourite}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ImagesList;