import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IBadge } from '../../@types/types';
import data from '../../mock/data.json';

interface ICardState {
  cards: IBadge[];
  badges: string[];
}

const initialState: ICardState = {
  cards: data,
  badges: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    filterCard: (state, { payload }: PayloadAction<string>) => {
      state.badges.push(payload);
      state.badges.map((badge) => {
        return (state.cards = state.cards.filter((card) =>
          ([] as string[])
            .concat(card.role, card.level, ...card.languages, ...card.tools)
            .includes(badge),
        ));
      });
    },
  },
});

export const selectCard = (state: RootState) => state.cards.cards;

export const { filterCard } = cardSlice.actions;
export default cardSlice.reducer;
