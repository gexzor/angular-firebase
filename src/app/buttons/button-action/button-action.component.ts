import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'ui-button-action',
    templateUrl: './button-action.component.html',
    styleUrls: ['./button-action.component.scss'],
})

export class ButtonActionComponent implements OnInit {
    @Input() public color: ThemePalette;
    @Input() public disabled: boolean;
    @Input() public disableRipple: boolean;

    constructor() { }

    public ngOnInit(): void {
    }
}
