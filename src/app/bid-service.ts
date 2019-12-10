import {Injectable } from'@angular/core';
import {Observable, BehaviorSubject,Subject } from 'rxjs';
import { element } from 'protractor';

@Injectable({
    providedIn:'root'
})

export class BidService {

    constructor(){
        this.pushItemsInArray();
    }
    private Array = new BehaviorSubject([]);

    public item = [
       {
            itemId : 11,
            itemName: 'Creative Art',
            itemBasePrice : 11000,
            itemDetails : ' This is Creative Art created by a reknown artist from the Africa country region',
            leftTime: "{leftTime: 200, format:'m:s' }" ,
            status : true
       },
       {
            itemId : 12,
            itemName: 'Sketch Art',
            itemBasePrice : 12000,
            itemDetails : ' This is Food Art created by a reknown artist from the Africa country region',
            leftTime: "{leftTime: 300, format:'m:s' }" ,
            status : true
       },
       {
            itemId : 13,
            itemName: 'Brush Art',
            itemBasePrice : 13000,
            itemDetails : ' This is New Art created by a reknown artist from the Africa country region',
            leftTime: "{leftTime: 400, format:'m:s' }" ,
            status : true
       },
       {
            itemId : 14,
            itemName: 'Painting',
            itemBasePrice : 14000,
            itemDetails : ' This is Painting Art created by a reknown artist from the Africa country region',
            leftTime: "{leftTime: 500, format:'m:s' }" ,
            status : true
       }
    ]

     
    pushItemsInArray() {
        this.Array.next(this.item);
        console.log(this.Array);
    }


    publishItemArray(): Observable<any> {
        return this.Array.asObservable();

    }

    enableBiding(val){
        this.item.filter(element => { element.itemName == val ? element.status = false : false ;  });
        this.Array.next(this.item);
    }
    
}