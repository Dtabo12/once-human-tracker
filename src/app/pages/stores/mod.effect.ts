import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ModsService } from "../services/mods.service";
import { modActions } from "./mod.action";

export const modEffects = createEffect(
  (action$ = inject(Actions), modService = inject(ModsService)) => {
    return action$.pipe(
      ofType(modActions.loadMods),
      switchMap(() =>
        modService.getMods().pipe(
          map((res) => {
            console.log('🔎res fetching the mods:', res);
            return modActions.loadModsSuccess({ response: res });
          }),
          catchError((error) => {
            console.log('🚩Error fetching the mods:', error);
            return of(
              modActions.loadModsFailure({ errorMessage: error.error })
            )
          })
        )
      )
    )
  },
  {
    functional: true
  }
);