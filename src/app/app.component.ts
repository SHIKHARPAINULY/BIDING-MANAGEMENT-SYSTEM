import { Component, AfterViewChecked, OnChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {
 public title = 'Bid-Management';
 public status = false;

 ngOnChanges(){}
  ngDoCheck(){
    window.sessionStorage.getItem('isLoggedIn') == 'true' ? this.status = true : false;
  }

  public logout(){
    window.sessionStorage.removeItem('isLoggedIn');
    window.sessionStorage.removeItem('SelectedBidItem');
    this.status = false
  }
}
