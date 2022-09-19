import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { NewsletterSubscriptionsService } from '@peakitpt/ui-kyrios-api';
import { RequestError } from 'src/app/shared/reducers/error-handling.service';
import * as actions from './newsletter-subscriptions-modal.actions';
import { NewsletterSubscriptionsResponse } from '../newsletter-subscriptions-modal.model';

@Injectable()
export class NewsletterSubscriptionsModalEffects {
  @Effect()
  RequestGetAll = this.actions$.pipe(
    ofType(actions.NewsletterSubscriptionsActionTypes.RequestGetAll),
    map((action: actions.SuccessGetAll) => action.payload),
    switchMap((payload: any) => {
      return this.service.getAll(payload).pipe(
        map(
          (response: NewsletterSubscriptionsResponse) =>
            new actions.SuccessGetAll(response)
        ),
        catchError((error) =>
          of(
            new actions.RequestFail(
              new RequestError(
                actions.NewsletterSubscriptionsActionTypes.RequestGetAll,
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
    ofType(actions.NewsletterSubscriptionsActionTypes.RequestSetSelected),
    map((action: actions.SuccessSetSelected) => action.payload),
    switchMap((payload: any) => {
      return of(new actions.SuccessSetSelected(payload));
    })
  );

  constructor(
    private actions$: Actions,
    private service: NewsletterSubscriptionsService
  ) {}
}
