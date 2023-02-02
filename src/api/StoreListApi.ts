import axios, { Axios, AxiosPromise } from 'axios';
import { useEffect, useState } from 'react';
import UseUniqueArray from '../hook/UseUniqueArray';
import { List } from '../constant';

const StoreList = ({ type }: { type: number }) => {
  const url = '/api/' + String(type);
  const [data, setData] = useState<List[] | undefined>([]);
  const [errormsg, setErrorMsg] = useState<string>('');
  const [isError, setisError] = useState<boolean>(false);
  const getResponse = async () => {
    try {
      const { data, status } = await axios.get(url);
      if (typeof data !== 'undefined') {
        setData(data);
      }
      const uniqueData = UseUniqueArray({ listobject: data });
      setData(uniqueData);
    } catch (error) {
      setisError(true);
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.message);
      }
      setErrorMsg(String(error));
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return { data, isError, errormsg };
};

export default StoreList;
