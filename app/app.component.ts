import { Component } from '@angular/core'
import { Router, CanActivateChild } from '@angular/router'

@Component({
    selector: 'flug-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    info = "FlugApp!!";
    showInfo = false;

    constructor(private router: Router) {
    }

    activateInfo() {
        this.router.navigate([{outlets: { aux: 'info' }}]);
    }

    deactivateInfo() {
        this.router.navigate([{outlets: { aux: null }}]);
    }


    navigateToFlugSuchen() {
        this.router.navigate(['flug-suchen']);
    }



    toggleShowInfo() {
        if (!this.showInfo) {
            this.showInfo = true;
            this.router.navigate([{outlets: { aux: 'info' }}]);
        }
        else {
            this.showInfo = false;
            this.router.navigate([{outlets: { aux: null }}]);
        }
    }

    get toggleShowInfoLabel() {
        if (!this.showInfo) return "Info einblenden!";
        return "Info ausblenden";
    }
}