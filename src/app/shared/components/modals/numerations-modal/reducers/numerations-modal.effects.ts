import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { NumerationsService } from '@peakitpt/ui-kyrios-api';
import { RequestError } from 'src/app/shared/reducers/error-handling.service';
import * as actions from './numerations-modal.actions';
import { NumerationsResponse } from '../numeration-modal.model';

@Injectable()
export class NumerationsModalEffects {
  @Effect()
  RequestGetAll = this.actions$.pipe(
    ofType(actions.NumerationsActionTypes.RequestGetAll),
    map((action: actions.SuccessGetAll) => action.payload),
    switchMap((payload: any) => {
      return this.service.getAll(payload).pipe(
        map(
          (response: NumerationsResponse) => new actions.SuccessGetAll(response)
        ),
        catchError((error) =>
          of(
            new actions.RequestFail(
              new RequestError(
                actions.NumerationsActionTypes.RequestGetAll,
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
    ofType(actions.NumerationsActionTypes.RequestSetSelected),
    map((action: actions.SuccessSetSelected) => action.payload),
    switchMap((payload: any) => {
      return of(new actions.SuccessSetSelected(payload));
    })
  );

  constructor(private actions$: Actions, private service: NumerationsService) {}
}
