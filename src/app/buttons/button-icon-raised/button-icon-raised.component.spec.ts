import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material-module';
import { ButtonIconRaisedComponent } from './button-icon-raised.component';


describe('ButtonIconRaisedComponent', () => {
    let component: ButtonIconRaisedComponent;
    let fixture: ComponentFixture<ButtonIconRaisedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [ButtonIconRaisedComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonIconRaisedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
