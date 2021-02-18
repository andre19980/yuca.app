import { useState, useEffect } from 'react';
import axios from 'axios';

import { YukerState } from '../types/yuker.type';
import { UserApi } from '../models/user/user.model';
import { ApartmentApi } from '../models/apartment/apartment.model';
import { ServiceApi } from '../models/service/service.model';

import YukerContext from './context';

interface IndexResponse {
  user: UserApi;
  apartment: ApartmentApi;
  services: ServiceApi[];
}

const YukerProvider = ({ children }) => {
  const [yuker, setYuker] = useState({} as YukerState);

  useEffect(() => {
    (async () => await axios
      .get<IndexResponse>('https://private-42e99d-yuca1.apiary-mock.com/me')
      .then(response => {
        const { user, apartment, services } = response.data;
        setYuker({
          user,
          apartment,
          services,
        })
      }))();
  }, []);

  const contextValues = {
    yuker,
    setYuker,
  }

  return (
    <YukerContext.Provider value={contextValues}>
      {children}
    </YukerContext.Provider>
  );
};

export default YukerProvider;
