import {ICatFact} from './types';

export const filterByUser = (facts: ICatFact[], query: string) => {
  if (query.length) {
    return facts.filter(f =>
      f.user
        ? f.user.name.first.includes(query) || f.user.name.last.includes(query)
        : false,
    );
  }
  return facts;
};
