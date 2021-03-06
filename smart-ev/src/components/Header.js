import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));


const Header = ( props ) => {
    const { page } = props 
    const classes = useStyles();
    const history = useHistory()

    const handleHome = () => {
        history.push('/cars')
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleHome}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              { page }
            </Typography>
          </Toolbar>
          <SearchBar/>
          </AppBar>
      </div>
    )
}

export default Header
