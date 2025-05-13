import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule, HttpClientTestingModule], // ✅ standalone component in imports
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method', () => {
    spyOn(component, 'onSubmit'); // ✅ Set up the spy
    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    button.click(); // Simulate click
    expect(component.onSubmit).toHaveBeenCalled(); // ✅ Test the spy
  });
});
