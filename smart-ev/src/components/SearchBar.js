import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { inputFiltered } from '../store/actions/carAction'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


const SearchBar = () => {
    const [ search, setSearch ] = useState()
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setSearch({...search, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(inputFiltered(search))
    }
    
    return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
        </div>
        <InputBase
          placeholder="Search…"
          name="search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => handleChange(e)}
          />
          <SearchIcon onClick={handleSubmit}/>
      </div>
      )
}

export default SearchBar