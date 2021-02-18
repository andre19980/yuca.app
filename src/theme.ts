import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
} from '@material-ui/core';

export const checkboxTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#13C081',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '60px 40px',
    },
    primaryText: {
      fontSize: '0.9em',
    },
    list: {
      position: 'absolute',
      width: '100%',
      maxWidth: 220,
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
    },
    active: {
      color: '#13C081',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
    },
    actionButtonsMobile: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '50%',
    },
    buttonContainerMobile: {
      display: 'flex',
      justifyContent: 'center',
    },
    checked: {},
  }),
);

export default useStyles;