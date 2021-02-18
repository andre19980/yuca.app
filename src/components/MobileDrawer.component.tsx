import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { DrawerContainerMobile } from './styled/Drawer.styled';
import useStyles from '../theme';

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: fit-content;
`;

const Bar = styled.div`
  position: absolute;
  background: #13C081;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 6px;
`;

const DrawerMobile: React.FC = () => {
  const classes = useStyles();

  return (
    <DrawerContainerMobile>
      <Item>
        <Typography className={`${classes.primaryText}`}>
          MEU YUCA
              </Typography>
        <Bar />
      </Item>
      <Item>
        <Typography className={classes.primaryText}>
          MINHA CONTA
        </Typography>
      </Item>
    </DrawerContainerMobile>
  );
}

export default DrawerMobile;
