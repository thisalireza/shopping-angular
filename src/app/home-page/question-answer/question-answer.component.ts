import { Component } from '@angular/core';
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {NgStyle} from "@angular/common";

@Component({
    selector: 'app-question-answer',
    imports: [
        MdbAccordionModule,
        NgStyle
    ],
    templateUrl: './question-answer.component.html',
    styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {

}
