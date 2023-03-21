import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnChanges {

 

  @Input() dataGraph?:number[]=[];
  @Input() labelsGraph?:string[]=[];


  ngOnChanges(changes: SimpleChanges): void {
    var myChart=new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.labelsGraph,
        datasets: [{
          label: '# amount of customers',
          borderColor:"#5085C7",
          backgroundColor:"transparent",
          data: this.dataGraph,
          borderWidth: 2
        }]
      },
      
      })
  }


  }
 
   // console.log("data",this.dataGraph);
   // console.log("labels",this.labelsGraph)
   
 

