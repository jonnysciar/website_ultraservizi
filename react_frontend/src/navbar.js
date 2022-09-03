import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './logo.js'
import {pages} from "./page";
import {IconButton, Menu, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuAnchorEl: null,
        };
    }

    handleMenuOpen(event) {
        this.setState({
            menuAnchorEl: event.currentTarget
        })
    }

    handleMenuClose() {
        this.setState({
            menuAnchorEl: null
        })
    }

    menuItemOnClick(page) {
        this.props.onChangePage(page);
    }

    render() {
        return (
            <AppBar position='static' sx={{borderRadius: 2}}>
                    <Toolbar>
                        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}}>

                            <Box sx={{
                                justifyContent: 'flex-start',
                                flex: '1 1'
                            }}>
                                <Logo/>
                            </Box>

                            {/*Desktop*/}
                            <Box sx={{
                                display: {xs: 'none', md: 'flex'},
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: '1 1',
                                minWidth: 333
                            }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                        onClick={() => this.menuItemOnClick(page)}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{
                                flex: '1 1'
                            }}>
                            </Box>

                            {/*Mobile*/}
                            <Box sx={{
                                display: {xs: 'flex', md: 'none'},
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                flex: '1 1'
                            }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={(event) => this.handleMenuOpen(event)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.menuAnchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    open={Boolean(this.state.menuAnchorEl)}
                                    onClose={() => this.handleMenuClose()}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={() => {
                                            this.handleMenuClose();
                                            this.menuItemOnClick(page);
                                        }}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;
