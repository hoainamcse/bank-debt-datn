import { useState, useCallback } from 'react';

const useMutation = (fetcher, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isMutating, setIsMutating] = useState(false);

  const onSuccess = (_data, _arg) => {
    setData(_data);
    options?.onSuccess?.(_data, _arg);
  };

  const onError = (_error, _arg) => {
    setError(_error);
    options?.onError?.(_error, _arg);
  };

  const trigger = useCallback(
    async arg => {
      setIsMutating(true);
      try {
        const _data = await fetcher(arg);
        onSuccess(_data, arg);
      } catch (_error) {
        onError(_error, arg);
      } finally {
        setIsMutating(false);
      }
    },
    [fetcher, options]
  );

  return { data, error, trigger, isMutating };
};

export default useMutation;
