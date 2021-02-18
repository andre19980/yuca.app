import React from 'react';
import { YukerState } from '../types/yuker.type';

export type YukerContextData = {
  yuker: YukerState;
  setYuker: React.Dispatch<React.SetStateAction<YukerState>>
}

const YukerContext = React.createContext<YukerContextData>({} as YukerContextData);

export default YukerContext;
