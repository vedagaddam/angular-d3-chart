import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataChartOne: Observable<DataModel>;
  dataChartTwo: Observable<DataModel>;
  selectedTab = 1;

  constructor(private http: HttpClient) {
    this.dataChartOne = this.http.get<DataModel>('./assets/data-chart-1.json');
    
    this.dataChartTwo = this.http.get<DataModel>('./assets/data-chart-2.json');
  }
  public setSelectedTab(tabNum: number){
    this.selectedTab = tabNum;
  }
}
