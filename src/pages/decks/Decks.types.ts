export interface DecksListResponse {
  items: Card[];
  maxCardsCount: number;
  pagination: Pagination;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Deck {
  author: Author;
  cardsCount: number;
  cover?: string;
  created: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updated: string;
  userId: string;
}

export interface Author {
  id: string;
  name: string;
}

export type GetDeckById = {
  id: string;
};

export interface GetDecksArgs {
  authorId?: string;
  currentPage?: number;
  itemsPerPage?: number;
  maxCardsCount?: number;
  minCardsCount?: number;
  name?: string;
  orderBy?: string;
}

export type GetDeckCards = {
  answer?: string;
  currentPage?: number;
  id: string;
  itemsPerPage?: number;
  orderBy?: string;
  question?: string;
};

export interface Card {
  answer: string;
  answerImg: string;
  answerVideo: any;
  created: string;
  deckId: string;
  grade: number;
  id: string;
  question: string;
  questionImg: string;
  questionVideo: any;
  shots: number;
  updated: string;
  userId: string;
}

export type MinMaxCardsInDeck = {
  maxCards: number;
  minCards: number;
};

export interface CreateDecksArgs {
  cover?: string;
  isPrivate?: boolean;
  name: string;
}

/*-----------------------------------------------*/

export type ErrorsField = {
  message: string;
  path: string;
  statusCode: number;
  timestamp: string;
};

export type ErrorResponseField = {
  data: ErrorsField;
  status: number;
};
