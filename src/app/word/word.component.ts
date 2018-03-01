import { Component } from '@angular/core';
@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
    
})

export class WordComponent {
    en :string = 'Hello';
    vn :string = 'Xin chao';
    imgUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
    forgot = false;
    toggleFunction() {
        this.forgot = !this.forgot;
    }
}

