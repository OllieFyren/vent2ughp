import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
