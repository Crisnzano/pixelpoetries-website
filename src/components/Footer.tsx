import { CenterFocusStrong, X } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

export default function Footer () {
    return(
    <Box
    gap={7}

    sx={{
        alignItems: "center",
        maxWidth: 800,
        marginLeft: 25,
        marginTop:7,
        

    }}>
        <p>pixelpoetries90210@gmail.com</p>
        <InstagramIcon>Instagram</InstagramIcon>
        <XIcon>Twitter</XIcon>
        <LinkedInIcon>Linkedin</LinkedInIcon>
        <p>©2024 by Pixel Poetries</p>

    </Box>
    );
};