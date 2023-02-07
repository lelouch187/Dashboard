import { combineReducers } from "@reduxjs/toolkit";
import badge from './slice/badgeSlise'
import cards from './slice/cardSlice'

export const rootReducer = combineReducers({
    badge,
    cards
})