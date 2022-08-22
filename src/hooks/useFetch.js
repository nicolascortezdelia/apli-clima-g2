import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../components/Loading';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const { asd } = await axios(url);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div>
    {isLoading ? <Loading/> : getData() }
    </div>
  );
};

export default useFetch;
