import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuriaBaptism } from '../../curia-baptism.model';

@Component({
  selector: 'kyr-curia-baptisms-details-godparents-tab',
  templateUrl: './curia-baptisms-details-godparents-tab.component.html',
})
export class CuriaBaptismsDetailsGodparentsTabComponent {
  @Input() modulePath: string;
  @Input() model: CuriaBaptism;

  openDetails(modulePath: string, id: number, railsApp = false) {
    if (railsApp) {
      window.open(`${environment.railsAppUrl}/${modulePath}/${id}`, '_blank');
    } else {
      window.open(`${modulePath}/${id}/details`, '_blank');
    }
  }
}
