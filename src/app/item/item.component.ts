import { Component, OnInit } from '@angular/core';
import { BidService } from '../bid-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( public bidService : BidService , public router : Router) { 

  }

  public ItemArray = [];
  public ItemBidPrice = 0;
  public ItemImageSrc = '';
  public  Cancel = " Quit Biding"
  ngOnInit() {
   this.bidService.publishItemArray().subscribe(data =>{
    this.ItemArray =  data.filter( element => sessionStorage.getItem('SelectedBidItem') == element.itemName);
    this.ItemBidPrice = this.ItemArray[0].itemBasePrice;
    this.ItemImageSrc = this.ItemArray[0].itemName;
     console.log(' data : ' , this.ItemArray);
    });
  }

  public handleEvent(event , name){
    if(event.action == "done" && event.left == 0) {
      this.bidService.enableBiding(name);
      this.Cancel = 'Go Back';
    }
  }

  public changePrice() {
    this.ItemBidPrice += 1530;
  }

  public Quit(){
    this.router.navigate(['board']);
  }

}
