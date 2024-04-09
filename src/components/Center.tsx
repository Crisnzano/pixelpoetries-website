import Box from '@mui/material/Box';

type CenteredProps ={
    children: React.ReactNode;
}


const Centered = ({children}: CenteredProps) => {
    return (
        <Box
            height={200}
            width={1170}
            my={4}
            display="flex"
            alignItems="center"
            gap={0}
            p={2}
            sx={{}}
            marginLeft={0}
            marginTop={0}
        >
        {children}
        </Box>
    );
};

export default Centered;