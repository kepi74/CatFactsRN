import React from 'react';

interface NoData {
  type: 'NoData';
}

interface Loading {
  type: 'Loading';
}

interface Data<T> {
  type: 'Data';
  data: T;
}

interface Error {
  type: 'Error';
  error: string;
}

export type ApiResponse<T> = NoData | Loading | Data<T> | Error;

export default function useApi<T>(
  input: RequestInfo,
  init?: RequestInit,
): [ApiResponse<T>, () => void] {
  const [requestState, setRequestState] = React.useState<ApiResponse<T>>({
    type: 'NoData',
  });
  const [refreshIndex, setRefreshIndex] = React.useState(0);

  const refresh = () => setRefreshIndex(index => index + 1);

  const fetchData = async () => {
    setRequestState(() => ({type: 'Loading'}));
    try {
      const response = await fetch(input, init);
      const data = await response.json();
      setRequestState(() => ({type: 'Data', data}));
    } catch (err) {
      console.log(err);
      setRequestState(() => ({type: 'Error', error: 'API error'}));
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [refreshIndex]);

  return [requestState, refresh];
}
