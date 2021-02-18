import {
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

import { DrawerContainer } from './styled/Drawer.styled';
import useStyles from '../theme';

const Drawer: React.FC = () => {
  const classes = useStyles();

  return (
    <DrawerContainer>
      <List className={classes.list}>
        <ListItem button alignItems="center">
          <Typography className={`${classes.primaryText} ${classes.active}`}>
            MEU YUCA
          </Typography>
        </ListItem>
        <ListItem button alignItems="center">
          <Typography className={classes.primaryText}>
            MINHA CONTA
          </Typography>
        </ListItem>
      </List>
    </DrawerContainer>
  );
}

export default Drawer;
