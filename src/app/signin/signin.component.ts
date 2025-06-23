import { Component } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor( private location:Location) { }

  getBack():void{
    this.location.back();
  }


}
