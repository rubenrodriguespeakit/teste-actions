import { BaseSearchComponent } from 'src/app/shared/components/base-search-component';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { I18NextPipe } from 'angular-i18next';
import { Store } from '@ngrx/store';
import { State } from 'src/app/components/base/reducers/base.reducer';
import { RequestPostSearch } from 'src/app/components/base/reducers/base.actions';
import { getMecs } from '../reducers/mecs.selectors';
import * as actions from '../reducers/mecs.actions';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeDetectorRef } from '@angular/core';
import * as WorshipplacesState from '../../../shared/components/modals/worshipplaces-modal/reducers/worshipplaces-modal.reducer';
import * as WorshipplacesSelectors from '../../../shared/components/modals/worshipplaces-modal/reducers/worshipplaces-modal.selectors';
import { SelectedModalRow } from 'src/app/shared/shared.model';

@Component({
  selector: 'kyr-mecs-search',
  templateUrl: './mecs-search.component.html',
})
export class MecsSearchComponent
  extends BaseSearchComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  modulePath = 'mecs';

  actionRequestPostSearch = RequestPostSearch;

  selectorGetList = getMecs;
  actionRequestGetAll = actions.RequestGetAll;

  constructor(
    public fb: FormBuilder,
    public i18nextPipe: I18NextPipe,
    public store: Store<State>,
    public sharedModule: SharedModule,
    public cdr: ChangeDetectorRef,
    public worshipplacesStore: Store<WorshipplacesState.State>
  ) {
    super(fb, i18nextPipe, store, sharedModule, cdr);
  }

  buildForm() {
    this.form = this.fb.group({
      searchWord: [],
      searchFields: this.fb.group({
        name: this.fb.group({
          searchWordLabel: this.i18nextPipe.transform(
            `${this.modulePath}:model.entity.name`
          ),
          mainField: true,
          value: null,
        }),
        mec_number: this.fb.group({
          searchWordLabel: this.i18nextPipe.transform(
            `${this.modulePath}:model.mec_number`
          ),
          value: null,
        }),
        worshipplace: this.fb.group({
          searchWordLabel: this.i18nextPipe.transform(
            `${this.modulePath}:model.institution_center_worshipplace_description`
          ),
          value: null,
        }),
        institution_date_start: this.fb.group({
          searchWordLabel:
            this.i18nextPipe.transform(
              `${this.modulePath}:model.institution_date`
            ) + ` ${this.i18nextPipe.transform('translation:range.min')}`,
          value: null,
        }),
        institution_date_end: this.fb.group({
          searchWordLabel:
            this.i18nextPipe.transform(
              `${this.modulePath}:model.institution_date`
            ) + ` ${this.i18nextPipe.transform('translation:range.max')}`,
          value: null,
        }),
        reappointment_date_start: this.fb.group({
          searchWordLabel:
            this.i18nextPipe.transform(
              `${this.modulePath}:model.reappointment_date`
            ) + ` ${this.i18nextPipe.transform('translation:range.min')}`,
          value: null,
        }),
        reappointment_date_end: this.fb.group({
          searchWordLabel:
            this.i18nextPipe.transform(
              `${this.modulePath}:model.reappointment_date`
            ) + ` ${this.i18nextPipe.transform('translation:range.max')}`,
          value: null,
        }),
      }),
    });
  }

  // SPECIAL FIELDS SHOULD BE MANAGED HERE (ex.: Dates)
  searchStringBuilder(
    searchWordLabel: string,
    value: any,
    field?: string
  ): string {
    switch (field) {
      case 'institution_date_start':
      case 'institution_date_end':
      case 'reappointment_date_start':
      case 'reappointment_date_end':
        return `${searchWordLabel}:(${this.sharedModule.parseDateToString(
          value
        )}) `;
      default:
        return super.searchStringBuilder(searchWordLabel, value, field);
    }
  }

  // SPECIAL FIELDS SHOULD BE MANAGED HERE (ex.: Dates)
  updateField(field: string, newValue: any) {
    switch (field) {
      case 'institution_date_start':
      case 'institution_date_end':
      case 'reappointment_date_start':
      case 'reappointment_date_end':
        super.updateField(field, this.sharedModule.dateToUtc(newValue));
        break;
      default:
        super.updateField(field, newValue);
        break;
    }
  }
}
