import { Component } from '@angular/core';
import {Location, NgIf} from '@angular/common'
import {NumbersOnlyDirective} from "../Directives/numbers-only-directive.directive";
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NumbersOnlyDirective, NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor( private location:Location ) { }

  getBack():void{
    this.location.back();
  }


}
