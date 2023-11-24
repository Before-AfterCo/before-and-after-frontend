import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useNavigate} from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="fixed" sx={{top: 'auto', bottom: 0}}>
            <Toolbar sx={{
                justifyContent: 'center', display: 'flex',
                alignItems: 'center',
                backgroundColor: '#202830',
                boxShadow: '0px 4px 45px rgba(0, 0, 0, 0.8)',
            }}>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{background:'#EA9215'}} color="primary" aria-label="home" onClick={() => navigate('/')}>
                        <HomeOutlinedIcon/>
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab color="secondary" aria-label="like"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/favourites' : '/signin')}>
                        <FavoriteBorderIcon/>
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{background:'#EEEEEE'}}  color="black" aria-label="add"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/add' : '/signin')}>
                        <AddIcon/>
                    </Fab>
                </div>
                <div style={{padding: '0 1.5%'}}>
                    <Fab sx={{background:'#EEEEEE'}}  color="black" aria-label="profile"
                         onClick={() => navigate(sessionStorage.getItem("jwt") ? '/profile' : '/signin')}>
                        <PersonOutlineIcon/>
                    </Fab>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNav;
