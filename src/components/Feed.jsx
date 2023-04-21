import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import  SideBar  from './SideBar'


const Feed = () => (
  <Stack sx={{ flexDirection: {sx: 'column', md: "row" }}}>
    <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}>

      <SideBar />

      <Typography className='copy-right' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
        Copyright 2023 WaveTube
      </Typography>
    </Box>


  </Stack>
)

export default Feed