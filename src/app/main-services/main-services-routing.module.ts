import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainServicesComponent } from "./pages/main-services/main-services.component";

const routes : Routes = [
    {
        path:'',
        component: MainServicesComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MainServicesRoutingModule{

}