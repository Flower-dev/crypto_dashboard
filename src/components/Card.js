import {Paper, Box, Typography}  from '@mui/material';

const Card = ({name}) => {

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
                backgroundColor: 'lightblue'
            },
            }}
        >
            <Paper elevation={3}>
                <Typography variant="body">
                    {name}
                </Typography>
            </Paper>
            
        </Box>
    )
}

export default Card;