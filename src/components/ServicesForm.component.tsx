import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  ThemeProvider,
} from '@material-ui/core';

import { Line } from './common';
import ActionButtons from './ActionButtons.component';

import useYuker from '../context/useYuker';
import useServices from '../hooks/useServices.hook';

import { toCurrency, evalTotal } from './utils';

import { Service } from '../models/service';

import { checkboxTheme } from '../theme';

const Price = styled.p<{ checked: boolean }>`
  color: ${props => props.checked ? '#13C081' : 'black'};
`;

const ServicesForm: React.FC = () => {
  const history = useHistory();
  const { yuker, setYuker } = useYuker();
  const { services: yukerServices } = yuker;
  const { services: apiServices, getServices } = useServices();

  const [services, setServices] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
  });

  useEffect(() => {
    yukerServices?.forEach(service => {
      const key = service['id'];

      setServices(prevServices => ({ ...prevServices, [key]: true }));
    });
  }, [yukerServices]);

  useEffect(() => {
    getServices();
  }, [getServices]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setServices({ ...services, [event.target.id]: event.target.checked });
  }, [services]);

  const handleCancel = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleSubmit = useCallback(() => {
    const updatedServices = Object.entries(services).map(([key, value]) => {
      const updatedService = apiServices?.find(
        service => (key === service.id.toString() && value),
      );

      return updatedService;
    });

    const checkedServices = updatedServices.filter(Boolean) as Service[];

    const yukerServiceIds = yuker.services?.map(service => service.id);
    const yukerServices = yukerServiceIds?.map(id => {
      const yukerService = apiServices?.find(service => service.id.toString() === id.toString());

      return yukerService?.price as number;
    });

    const yukerServicesPrice = yukerServices.reduce((a, b) => a + b, 0);
    const rawPrice = yuker.apartment?.price - yukerServicesPrice;
    const updatedPrice = rawPrice + evalTotal(apiServices, services);

    const updatedApartment = { ...yuker.apartment, price: updatedPrice };

    setYuker(prevYuker => ({
      ...prevYuker,
      apartment: updatedApartment,
      services: checkedServices,
    }));

    history.goBack();
  }, [apiServices, history, services, setYuker, yuker]);

  return (
    <>
      <FormGroup>
        {apiServices?.map((service, index) => (
          <Line key={index}>
            <FormControlLabel
              control={
                <ThemeProvider theme={checkboxTheme}>
                  <Checkbox
                    checked={services[index + 1]}
                    onChange={handleChange}
                    id={service?.id.toString()}
                    color="primary"
                  />
                </ThemeProvider>
              }
              label={service?.name}
            />
            <Price checked={services[index + 1]}>{toCurrency(service?.price)}</Price>
          </Line>
        ))}
      </FormGroup>
      <Divider />
      <Line>
        <p>Total selecionado</p>
        <Price checked>{toCurrency(evalTotal(apiServices, services))}</Price>
      </Line>
      <ActionButtons
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </>
  );
}

export default ServicesForm;
