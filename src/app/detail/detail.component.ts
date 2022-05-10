import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details = {} as any;
  constructor() { }

  ngOnInit(): void {
   this.details=JSON.stringify(localStorage.getItem('detailsBient'));
    console.log("gggg", this.details)
  }


  
}
