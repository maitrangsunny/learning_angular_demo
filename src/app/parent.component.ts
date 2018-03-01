import { Component } from '@angular/core';
@Component({
    selector: 'app-parent',
    template: `
        <h3>{{ value }}</h3>
        <app-child (myClick) = 'changeValue($event);'></app-child>
        <br/>
        <h3>refer from parent to child</h3>
        <button (click) = 'child.value = child.value + 1'>Add</button>
        <app-child #child></app-child>
    `
})
export class ParentComponent {
    value = 0;
    // changeValue(isAdd : boolean) {
    //     if(isAdd) {
    //         this.value = this.value + 1;
    //     }else {
    //         this.value = this.value - 1;
    //     }
        
    // }
}