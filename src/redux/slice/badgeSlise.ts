import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IBadge } from '../../@types/types';
import data from '../../mock/data.json';

interface IBadgeState {
  cards: IBadge[];
  badges: string[];
  filterCards: IBadge[];
}

const initialState: IBadgeState = {
  cards: data,
  badges: [],
  filterCards: data,
};

const badgesSlise = createSlice({
  name: 'badge',
  initialState,
  reducers: {
    clearAll: () => {
      return initialState;
    },
    addBadge: (state, { payload }: PayloadAction<string>) => {
      if (!state.badges.find((badge) => badge === payload)) {
        state.badges.push(payload);
      }
      state.badges.map((badge) => {
        return (state.filterCards = state.filterCards.filter((card) =>
          ([] as string[])
            .concat(card.role, card.level, ...card.languages, ...card.tools)
            .includes(badge),
        ));
      });
    },
    removeBadge: (state, { payload }: PayloadAction<string>) => {
      state.badges = state.badges.filter((badge) => badge !== payload);
      state.badges.length
        ? state.badges.map((badge) => {
            return (state.filterCards = state.cards.filter((card) =>
              ([] as string[])
                .concat(card.role, card.level, ...card.languages, ...card.tools)
                .includes(badge),
            ));
          })
        : (state.filterCards = state.cards);
    },
  },
});
export const selectBadge = (state: RootState) => state.badge.badges;
export const selectCard = (state: RootState) => state.badge.filterCards;

export const { clearAll, addBadge, removeBadge } = badgesSlise.actions;
export default badgesSlise.reducer;
