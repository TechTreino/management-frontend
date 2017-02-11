import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from "@angular/http";

import { routing } from "./routes";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { TrainingsComponent } from "./pages/trainings/trainings.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        CustomersComponent,
        TrainingsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }