import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
 
@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.css']
})
export class CardStatisticComponent{

 @Input() titleCard:string="";
 @Input() valueCard:number=0;



}
