import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Grid } from '@material-ui/core';
import LocationCard from '../../components/LocationCard.component';
import { Divider, Button } from '../../components/common';
import { Content, ContentMobile } from '../../components/styled/Content.styled';
import MobileDrawer from '../../components/MobileDrawer.component';

import useStyles from '../../theme';


const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

  const handleClick = () => {
    history.push('/services');
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Divider color="#13C081" />
        {isDesktopOrLaptop && <>
          <h1>Bem vindo, Bernardo!</h1>
          <Content>
            <p>Atualmente você está morando em:</p>

            <LocationCard />

            <div className={classes.buttonContainer}>
              <Button primary noMargin onClick={handleClick}>CONTRATAR SERVIÇOS</Button>
            </div>
          </Content>
        </>}
        {isTabletOrMobileDevice && <>
          <h2>Bem vindo, Bernardo!</h2>

          <ContentMobile>
            <p>Atualmente você está morando em:</p>

            <LocationCard />

            <div className={classes.buttonContainerMobile}>
              <Button primary noMargin onClick={handleClick}>CONTRATAR SERVIÇOS</Button>
            </div>
          </ContentMobile>
          <MobileDrawer />
        </>}
      </Grid>
    </Grid>
  );
};

export default Home;
