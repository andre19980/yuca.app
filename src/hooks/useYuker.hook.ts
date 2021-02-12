import { useState, useCallback } from 'react';
import axios from 'axios';

const useYuker = () => {
  const [yuker, setYuker] = useState();

  const getYuker = useCallback(async () => {
    const response = await axios.get('https://private-42e99d-yuca1.apiary-mock.com/me');

    console.log(response);
  }, []);

  return {
    getYuker
  };
}

export default useYuker;
