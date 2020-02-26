export interface ICatFactUserName {
  first: string;
  last: string;
}

export interface ICatFactUser {
  _id: string;
  name: ICatFactUserName;
}

export interface ICatFact {
  _id: string;
  text: string;
  type: 'cat';
  user: ICatFactUser | undefined;
  upvotes: number;
}

export type RootStackParamList = {
  CatFacts: undefined;
  Detail: ICatFact;
};
