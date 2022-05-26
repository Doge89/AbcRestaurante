//*Angular imports
import { Component, OnInit } from '@angular/core';

//*Service imports
import { ReceptionService } from 'src/app/services/restaurant/reception.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor(
    private Reception: ReceptionService
  ) { }

  ngOnInit(): void {
    this.Reception.GetMenu().subscribe(response =>{
      return console.info(response);
    })
  }

}
