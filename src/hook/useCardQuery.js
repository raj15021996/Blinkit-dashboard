import { useCubeQuery } from '@cubejs-client/react';

const useCardQuery = (query) => {
  const { resultSet, isLoading, error } = useCubeQuery({
    query: JSON.parse(query), 
  });

  return {
    resultSet,
    isLoading,
    error,
  };
};

export default useCardQuery;
