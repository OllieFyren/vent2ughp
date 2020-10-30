import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-component',
  templateUrl: './temperature-component.component.html',
  styleUrls: ['./temperature-component.component.scss']
})
export class TemperatureComponentComponent implements OnInit {

  constructor() { 
    this.loadScripts();
  }
  loadScripts() { 
  
    // This array contains all the files/CDNs 
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
