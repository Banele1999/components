import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
[x: string]: any;

  score1:string = '';
  score2:string = '';
  score3:string = '';
  result:number=0;
  avg:number=0.0;

  StudentTot(){
    this.result = parseInt(this.score1) + parseInt(this.score2) + parseInt(this.score3);
    this.avg = (this.result) / 3 ;
  }

  ngOnInit(): void {
  }
}
