import { useContext } from 'react';

import YukerContext, { YukerContextData } from './context';

const useYuker = (): YukerContextData => {
  const context = useContext(YukerContext);

  return context;
}

export default useYuker;
