import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'ui-button-standard',
    templateUrl: './button-standard.component.html',
    styleUrls: ['./button-standard.component.scss'],
})
export class ButtonStandardComponent implements OnInit {
    @Input() public color: ThemePalette;
    @Input() public disableRipple: boolean;
    @Input() public disabled: boolean;
    @Input() public basic: boolean;

    constructor() { }

    public ngOnInit(): void {
    }

}
