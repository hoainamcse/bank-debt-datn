import { useState, useEffect } from 'react';

const useFetch = (fetcher, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const onSuccess = _data => {
    setData(_data);
    options?.onSuccess?.(_data);
  };

  const onError = _error => {
    setError(_error);
    options?.onError?.(_error);
  };

  const mutation = async () => {
    setIsLoading(true);
    setIsValidating(true);
    try {
      const _data = await fetcher();
      onSuccess(_data);
    } catch (_error) {
      onError(_error);
    } finally {
      setIsLoading(false);
      setIsValidating(false);
    }
  };

  useEffect(() => {
    mutation();
  }, []);

  return { data, isLoading, error, mutation, isValidating };
};

export default useFetch;
