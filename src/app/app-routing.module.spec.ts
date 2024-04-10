import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_ROUTES } from './app-routing.module';

@Component({
    template: ''
})
class TestComponent {}

describe('Testing routing - ', () => {
    let router: Router;
    let location: Location;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(APP_ROUTES),
            ]
        }).compileComponents();
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    }));

    it(`should redirect to Dashboard on NOT FOUND route`, waitForAsync(() => {
        fixture.ngZone!.run(() => {
            fixture.whenStable()
                .then(() => router.navigate(['/random-route']))
                .then(() => { expect(location.path()).toEqual('/dashboard'); });
        });
    }));

    it(`should redirect to Dashboard on '/dashboard' route`, waitForAsync(() => {
        fixture.ngZone!.run(() => {
            fixture.whenStable()
                .then(() => router.navigate(['/dashboard']))
                .then(() => { expect(location.path()).toEqual('/dashboard'); });
        });
    }));

    it(`should redirect to Products on '/products' route`, waitForAsync(() => {
        fixture.ngZone!.run(() => {
            fixture.whenStable()
                .then(() => router.navigate(['/products']))
                .then(() => { expect(location.path()).toEqual('/products'); });
        });
    }));
});
