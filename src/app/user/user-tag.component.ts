import { Component, Input } from '@angular/core';
import { User } from './user.model'

@Component({
    selector: 'user-tag',
    templateUrl: 'user-tag.component.html',
    styleUrls: [ 'user-tag.component.css' ]
})
export class UserTagComponent {
    @Input()
    user: User;
}