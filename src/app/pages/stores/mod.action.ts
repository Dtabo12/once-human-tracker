import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Mod } from "../types/mods.type";

export const modActions = createActionGroup({
  source: 'mods',
  events: {
    loadMods: emptyProps(),
    loadModsSuccess: props<{ response: Mod[] }>(),
    loadModsFailure: props<{ errorMessage: string }>(),
  }
})