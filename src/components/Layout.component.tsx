import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import Drawer from './Drawer.component';

import logo from '../logo.svg';

import useYuker from '../context/useYuker';
import { toInitials } from './utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userAccount: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    appBar: {
      backgroundColor: '#FFFFFF',
      borderBottom: '#F2F2F2 solid 2px',
      boxShadow: '0 0 0 0',
    },
    appBarMobile: {
      backgroundColor: '#FFFFFF',
      height: '56px',
      width: '100%',
      borderBottom: '#F2F2F2 solid 2px',
      boxShadow: '0 0 0 0',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      marginLeft: '0.7em',
      display: 'inline',
      color: 'black',
    },
  }),
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const { yuker } = useYuker();

  return (
    <Grid container>
      {isDesktopOrLaptop && <>
        <Grid item xs={12}>
          <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <img src={logo} alt="logo" />

              <div className={classes.userAccount}>
                <Avatar>{toInitials(yuker.user?.firstName, yuker.user?.lastName)}</Avatar>
                <Typography className={classes.title} variant='h6'>{yuker.user?.firstName}</Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={4}>
          <Drawer />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </>
      }
      {isTabletOrMobileDevice && <>
        <Grid item xs={12}>
          <AppBar position='static' className={classes.appBarMobile}>
            <Toolbar className={classes.toolbar}>
              <img src={logo} alt="logo" />

              <div className={classes.userAccount}>
                <Avatar>{toInitials(yuker.user?.firstName, yuker.user?.lastName)}</Avatar>
                <Typography className={classes.title} variant='h6'>{yuker.user?.firstName}</Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </>
      }
    </Grid>

  );
};

export default Layout;
