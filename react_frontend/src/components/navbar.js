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
        let props2 = JSON.parse(JSON.stringify(this.props))
        return (
                <AppBar

                    sx={{
                        position: 'fixed',
                        bgcolor: 'white',
                        borderColor: 'transparent',
                        boxShadow: 0,
                    }}
                    {...props2}
                >
                    <Toolbar
                        sx={{
                            bgcolor: 'primary.main',
                            margin: 2,
                            marginBottom: 0,
                            borderRadius: 2,
                            boxShadow: 5,
                    }}>
                        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}}>

                            {/*Desktop*/}
                            <Box sx={{
                                justifyContent: 'flex-start',
                                flex: '1 1',
                                display: {xs: 'none', md: 'flex'}
                            }}>
                                <Logo />
                            </Box>

                            <Box sx={{
                                display: {xs: 'none', md: 'flex'},
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: '1 1',
                                minWidth: 333,
                            }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        sx={{my: 2, color: 'white'}}
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
                                justifyContent: 'center',
                                flex: '1 1',
                            }}>
                                <Logo sx={{
                                    display: {md: 'none'}
                                }}/>
                            </Box>

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
