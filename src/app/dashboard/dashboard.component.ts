import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../bid-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public router : Router, public bidService : BidService) { }
  public ItemDetails = [];

  ngOnInit() {
    this.bidService.publishItemArray().subscribe( res => {
      this.ItemDetails = res;
    });
  }
  
  public go(val){
    console.log('the value : ' , val);
    sessionStorage.setItem('SelectedBidItem' , val);
    this.router.navigate(['item']);

  }
}
