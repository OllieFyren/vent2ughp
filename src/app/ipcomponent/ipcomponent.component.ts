import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-ipcomponent',
  templateUrl: './ipcomponent.component.html',
  styleUrls: ['./ipcomponent.component.scss']
})
export class IPComponentComponent implements OnInit {
  room = {
    room_id: '',
    room_no: '',
    temperature: '',
    humidity: '',
    oxygen: '',
  }
  submitted = false;

  constructor(private unitService: UnitService) { }
  getAll(){
    const data = {
      room_no: this.room.room_no
    }
    this.unitService.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  ngOnInit(): void {
  }

}
