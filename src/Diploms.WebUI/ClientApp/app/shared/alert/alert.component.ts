import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from './models/alert';
import { AlertService } from './services/alert.service';

@Component({
    selector: 'alert',
    template: `
    <div *ngFor="let alert of alerts" class="{{ cssClass(alert) }} alert-dismissable">
        {{alert.message}}
        <a class="close" (click)="removeAlert(alert)">&times;</a>
    </div>
    `
})

export class AlertComponent {
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);
        });
    }

    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-global alert-success';
            case AlertType.Error:
                return 'alert alert-global alert-danger';
            case AlertType.Info:
                return 'alert alert-global alert-info';
            case AlertType.Warning:
                return 'alert alert-global alert-warning';
        }
    }
}