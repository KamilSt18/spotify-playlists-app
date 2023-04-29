import { Component, Input } from '@angular/core';
import { Album } from '../../model/Album';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent {

  @Input() results: Album[] = []

}
