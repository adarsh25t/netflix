import { Box, Button, Stack, Typography } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React from 'react'

const Profiles = () => {
  return (
    <Stack 
        direction="column"
        justifyContent={'center'}
        alignItems={'center'}
        spacing={4}
        className='profiles-page'
    >
        <Typography variant="h3" component="h3">Who's watching?</Typography>
        <Stack
            direction="row"
            spacing={2}
        >
            <Box className='profile-wrapper'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&usqp=CAU" alt="" />
                <Typography component="h5" color={'gray'}>adarsh 25t</Typography>
            </Box>
            <Box className='profile-wrapper'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&usqp=CAU" alt="" />
                <Typography component="h5" color={'gray'}>adarsh 25t</Typography>
            </Box>
            <Box className='profile-wrapper'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&usqp=CAU" alt="" />
                <Typography component="h5" color={'gray'}>adarsh 25t</Typography>
            </Box>
            <Box className='profile-wrapper'>
                <AddCircleRoundedIcon className='add-profile'/>
                <Typography component="h5" color={'gray'}>Add Profile</Typography>
            </Box>
        </Stack>
        <Button className='profiles-btn'>Manage Profiles</Button>
    </Stack>
  )
}

export default Profiles
