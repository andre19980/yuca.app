import { useState, useCallback } from 'react';
import axios from 'axios';

import { YuckerState } from '../types/yuker.type';
import { UserApi } from '../models/user/user.model';
import { Apartment } from '../models/apartment';
import { ApartmentApi } from '../models/apartment/apartment.model';
import { ServiceApi } from '../models/service/service.model';

interface IndexResponse {
  user: UserApi;
  apartment: ApartmentApi;
  services: ServiceApi[];
}

const useYuker = () => {
  const [yuker, setYuker] = useState({} as YuckerState);

  const getYuker = useCallback(async () => {
    try {
      await axios
        .get<IndexResponse>('https://private-42e99d-yuca1.apiary-mock.com/me')
        .then(response => {
          const { user, apartment, services } = response.data;
          setYuker({
            user,
            apartment,
            services,
          })
        });

    } catch (error) {
      console.log(error);
    }

  }, []);

  return {
    yuker,
    getYuker
  };
}

export default useYuker;
