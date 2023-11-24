import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { getUserIdFromToken } from '../../utils/jwtUtils';
import useUser from '../../hooks/useUser';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";

const Header = () => {
    const navigate = useNavigate();
    const [isUserLogged, setIsUserLogged] = useState(false);

    const userId = getUserIdFromToken();
    const { avatar } = useUser(userId);

    const renderUserAvatar = () => {
        if (avatar) {
            return `data:image/jpeg;base64,${avatar}`;
        } else {
            return "https://source.unsplash.com/random?company";
        }
    };

    useEffect(() => {
        console.log('Jwt: ' + sessionStorage.getItem('jwt'));
        if (sessionStorage.getItem('jwt')) {
            setIsUserLogged(true);
        } else {
            console.log('Is user logged: ' + isUserLogged);
            setIsUserLogged(false);
        }
    }, [sessionStorage.getItem('jwt')]);

    const handleLogout = () => {
        sessionStorage.removeItem('jwt');
        console.log('User has been successfully logged out.');
        navigate('/');
    };

    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#202830',
                    boxShadow: '0px 4px 45px rgba(0, 0, 0, 0.8)',
                }}
            > {isUserLogged && (
                <Avatar
                    alt="Logo Firmy"
                    src={renderUserAvatar()}
                    sx={{
                        width: 70,
                        height: 70,
                        border: '4px solid black',
                        marginBottom: 0,
                    }}
                />
            )}
                {/*<CameraIcon sx={{ mr: 2 }} />*/}
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Marck Script, cursive',
                            fontSize: '24px',
                            color: '#EA9215',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginLeft: 'auto', // Centering the Typography
                            marginRight: 'auto',
                        }}
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        Before And After
                    </Typography>
                </div>
                {isUserLogged && (
                    <>
                        <Box sx={{ marginLeft: 'auto', marginRight: 1 }}>
                            <Typography>{/* Add any additional text here */}</Typography>
                        </Box>
                        <Fab color="primary" aria-label="home" onClick={handleLogout}>
                            <LogoutIcon onClick={handleLogout} />
                        </Fab>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
