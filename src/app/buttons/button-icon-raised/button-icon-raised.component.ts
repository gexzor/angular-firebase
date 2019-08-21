import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'ui-button-icon-raised',
    templateUrl: './button-icon-raised.component.html',
    styleUrls: ['./button-icon-raised.component.scss'],
})
export class ButtonIconRaisedComponent implements OnInit {

    @Input() public color: ThemePalette;
    @Input() public disabled: boolean;
    @Input() public disableRipple: boolean;
    @Input() public round: boolean;

    constructor() { }

    public ngOnInit(): void {
    }

}
