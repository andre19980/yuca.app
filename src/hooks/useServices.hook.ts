import { useState, useCallback } from 'react';
import axios from 'axios';

import Service, { ServiceApi } from '../models/service/service.model';

const useServices = () => {
  const [services, setServices] = useState<Service[]>();

  const getServices = useCallback(async () => {
    const response = await axios
      .get<ServiceApi[]>('https://private-42e99d-yuca1.apiary-mock.com/services')
      .then(({ data }) => data);

    const apiServices = response.map(service => new Service(service));

    setServices(apiServices);
  }, []);

  const editServices = useCallback(async () => {
    await axios.put('https://private-42e99d-yuca1.apiary-mock.com/services');
  }, []);

  return {
    services,
    getServices,
  }
};

export default useServices;
