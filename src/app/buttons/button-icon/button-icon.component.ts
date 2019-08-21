import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'ui-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
    @Input() public color: ThemePalette;
    @Input() public basic: boolean;
    @Input() public disabled: boolean;
    @Input() public disableRipple: boolean;
    @Input() public round: boolean;

    constructor() { }

    public ngOnInit(): void {
    }

}
