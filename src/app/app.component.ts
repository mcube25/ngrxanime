import { Component } from '@angular/core';
import { trigger, state , style, transition, animate} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState', [
state('normal', style({
  backgroundColor : 'red',
  transform: 'translateX(0)'
})),
state('highlighted', style({
  backgroundColor: 'blue',
  transform: 'translateX(100px)'
})),
transition('normal <=> highlighted', animate(300)),
//transition(' highlighted => normal ', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor : 'red',
        transform: 'translateX(0) scale (1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(0)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition(' highlighted => normal ', animate(800)),
      transition(' shrunken <=> *', [
        style({
          'background-color':'orange,'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ]),
      trigger('list1', [
        state('in', style({
          opacity : 1,
          transform: 'translateX(0)'
        })),
        transition('void => *',[
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),  
          animate(300)
        ]),
        //transition(' highlighted => normal ', animate(800)),
          ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

onAnimate (){
this.state =='normal' ? this.state ='highlighted':   this.state = 'normal';
this.wildState== 'normal' ? this.state ='highlighted':   this.state = 'normal';
}

onShrink(){
  this.wildState = 'shrunken';
}

onDelete(item){
  this.list.splice(this.list.indexOf(item),1);
}
    onAdd(item) {
      this.list.push(item);
    }
}
