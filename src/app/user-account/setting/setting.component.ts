import { Component } from '@angular/core';
import {DarkModeComponent} from "../../shared/dark-mode/dark-mode.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    DarkModeComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

}
