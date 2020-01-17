import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItemsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}));

function Menu() {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuItemsContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Minhas Séries
              </Typography>
            </div>
            <div>
              <Button color="inherit">Generos</Button>
              <Button color="inherit">Categorias</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Menu;