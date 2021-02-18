import { useMediaQuery } from 'react-responsive';

import useStyles from '../theme';
import { Button } from './common';
import { DrawerContainerMobile } from './styled/Drawer.styled';

interface ActionButtonsProps {
  handleCancel: () => void;
  handleSubmit: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ handleCancel, handleSubmit }) => {
  const classes = useStyles();
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

  return (
    <>
      {isDesktopOrLaptop &&
        <div className={classes.buttonContainer}>
          <Button secundary onClick={handleCancel}>
            Cancelar
          </Button>
          <Button primary onClick={handleSubmit}>
            Salvar
          </Button>
        </div>
      }
      {isTabletOrMobileDevice &&
        <DrawerContainerMobile>
          <div className={classes.actionButtonsMobile}>
            <Button secundary noMargin onClick={handleCancel}>
              Cancelar
            </Button>
            <Button primary noMargin onClick={handleSubmit}>
              Salvar
          </Button>
          </div>
        </DrawerContainerMobile>
      }
    </>
  );
}

export default ActionButtons;
