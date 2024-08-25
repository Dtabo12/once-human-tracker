import { createFeature, createReducer, on } from "@ngrx/store";
import { ModResponse } from "../types/mod-response.type";
import { Mod } from "../types/mods.type";
import { modActions } from "./mod.action";

const initialModState: ModResponse<Mod[]> = {
  isLoading: false,
  errorMessage: null,
  message: null,
  data: []
}

const modFeature = createFeature({
  name: 'mod',
  reducer: createReducer(
    initialModState,
    on(modActions.loadMods, (state) => ({ ...state, isLoading: true })),
    on(modActions.loadModsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      message: '🟢Mods Fetched Successfully',
      data: action.response,
    })),
    on(modActions.loadModsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: '🔴Failed to fetch the mods!',
    }))
  ),
});

export const {
  name: modFeatureKey,
  reducer: modReducer,
  selectData,
  selectErrorMessage,
  selectIsLoading,
  selectModState,
  selectMessage,
} = modFeature;