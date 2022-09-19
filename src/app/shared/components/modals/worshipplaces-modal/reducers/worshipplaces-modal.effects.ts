import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { WorshipplacesModalService } from '@peakitpt/ui-kyrios-api';
import { RequestError } from 'src/app/shared/reducers/error-handling.service';
import * as actions from './worshipplaces-modal.actions';
import { WorshipplacesResponse } from '../worshipplaces-modal.model';

@Injectable()
export class WorshipplacesModalEffects {
  @Effect()
  RequestGetAll = this.actions$.pipe(
    ofType(actions.WorshipplacesActionTypes.RequestGetAll),
    map((action: actions.SuccessGetAll) => action.payload),
    switchMap((payload: any) => {
      return this.service.getAll(payload).pipe(
        map(
          (response: WorshipplacesResponse) => new actions.SuccessGetAll(response)
        ),
        catchError((error) =>
          of(
            new actions.RequestFail(
              new RequestError(
                actions.WorshipplacesActionTypes.RequestGetAll,
                error
              )
            )
          )
        )
      );
    })
  );

  @Effect()
  RequestSetSelected = this.actions$.pipe(
    ofType(actions.WorshipplacesActionTypes.RequestSetSelected),
    map((action: actions.SuccessSetSelected) => action.payload),
    switchMap((payload: any) => {
      return of(new actions.SuccessSetSelected(payload));
    })
  );

  constructor(private actions$: Actions, private service: WorshipplacesModalService) { }
}
