import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import { Content, ContentMobile } from '../../components/styled/Content.styled';
import { Divider } from '../../components/common';
import ServicesForm from '../../components/ServicesForm.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '60px 40px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    checked: {},
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
    }
  })
);

const Services: React.FC = () => {
  const classes = useStyles();

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Divider color="#FAA446" />
        <h1>Serviços Contratados</h1>
        {isDesktopOrLaptop &&
          <Content>
            <ServicesForm />
          </Content>
        }
        {isTabletOrMobileDevice &&
          <ContentMobile>
            <ServicesForm />
          </ContentMobile>
        }
      </Grid>
    </Grid>
  );
}

export default Services;
