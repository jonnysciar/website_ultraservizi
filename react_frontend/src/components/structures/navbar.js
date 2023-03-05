import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {pages} from "../page";
import {IconButton, Menu, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';

function Logo(props) {
    let string = '/';
    if (props.link != null) {
        string = props.link;
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 0.5,
            }}
        >
            <a href={string}>
                <img className="logo" src='/images/logo/logo_navbar.png' alt='Logo' width={'70px'}/>
            </a>
        </Box>
    );
}

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
        const offset = document.getElementById('navbar').offsetHeight + 10;
        const element = document.getElementById(page);
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    render() {
        return (
                <AppBar
                    sx={{
                        position: 'fixed',
                        bgcolor: 'white',
                        borderColor: 'transparent',
                        boxShadow: 0,
                    }}
                    {...this.props}
                >
                    <Toolbar
                        sx={{
                            bgcolor: 'primary.main',
                            margin: 2,
                            mb: 0,
                            borderRadius: 10,
                            boxShadow: 5,
                    }}>

                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            alignContent: 'space-around',
                        }}>
                            {/*Desktop*/}

                            <Box sx={{
                                display: {xs: 'none', md: 'flex'},
                                flex: '1 1',
                            }}>
                            </Box>

                            <Box sx={{
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                alignContent: 'space-around',
                                display: {xs: 'none', md: 'flex'},
                                flex: '2 1',
                            }}>
                                <Logo />
                            </Box>

                            <Box sx={{
                                display: {xs: 'none', md: 'flex'},
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                flex: '3 1',
                                minWidth: 500,
                                pl: 2,
                                pr: 2,
                            }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page.name}
                                        sx={{my: 2, color: 'white'}}
                                        onClick={() => this.menuItemOnClick(page.section)}
                                    >
                                        <Typography
                                            variant="h5"
                                            align="center"
                                            color="white"
                                            component="p"
                                            sx={{
                                                fontWeight: 'regular',
                                            }}
                                        >
                                            {page.name}
                                        </Typography>
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{
                                flex: '1 1',
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
                                        <MenuItem key={page.name} onClick={() => {
                                            this.handleMenuClose();
                                            this.menuItemOnClick(page.section);
                                        }}>
                                            <Typography textAlign="center">{page.name}</Typography>
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
