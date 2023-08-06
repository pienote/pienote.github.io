import React from 'react';
import {AppBar, Toolbar, Button, Link} from '@mui/material';

export default function Navigation() {
    return (
        <AppBar position="static" style={{background: "#0f0"}}>
            <Toolbar variant="dense">
                <Button href="/" component={Link} color="inherit"> Home </Button>
                <Button href="#/projects/" component={Link} color="inherit"> Projects </Button>
            </Toolbar>
        </AppBar>
    );
}
