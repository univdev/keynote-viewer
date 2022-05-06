import { MutationTree } from 'vuex/types';
import { ThemeType } from '../types/theme';

export type StateType = {
  theme: ThemeType,
};

export const state = (): StateType => ({
  theme: 'light',
});

export const mutations: MutationTree<StateType> = {
  SET_THEME(state: StateType, theme: ThemeType) {
    state.theme = theme;
  },
};