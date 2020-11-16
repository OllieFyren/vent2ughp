import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-temperature-component',
  templateUrl: './temperature-component.component.html',
  styleUrls: ['./temperature-component.component.scss']
})
export class TemperatureComponentComponent implements OnInit {
  unit = {
    target_temp_new: '',
    room_id: '',
    unit_id: ''
  }
  submitted = false;
  constructor(private unitService: UnitService) { 
    this.loadScripts();
  }
  saveData(){
    const data = {
      target_temp_new: this.unit.target_temp_new,
      room_id: '1',
      unit_id: '1'
    }
    this.unitService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  loadScripts() { 
    const dynamicScripts = [ 
       'assets/load.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
 } 

  ngOnInit(): void {
  }

}
