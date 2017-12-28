import { Component, Input, EventEmitter, Output } from "@angular/core";
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent{
    @Input() rating:number;
    starWidth:number;
     @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth=this.rating*86/5;
        // console.log('ok');
    }
    onClick():void{
        console.log('The rating'+this.rating+' was clicked')
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}