import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //event generating with EventEmitter() 
  @Output() onMenuBtnClick = new EventEmitter()

  menubtnClicked() 
  {
    //creating user defined event
    //to occur event
    this.onMenuBtnClick.emit()

    //to resize screen
    setTimeout(() =>{
      window.dispatchEvent(
        new Event('resize')
      )

    },100)
  }
}
