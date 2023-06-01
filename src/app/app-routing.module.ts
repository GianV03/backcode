import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/pages/home-page/home-page.component";

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path:'servicios',
        loadChildren: () => import('./main-services/main-services.module').then(m=>m.MainServicesModule)
    },
    {
        path:'nosotros',
        loadChildren:()=> import('./about-us/about-us.module').then(m=>m.AboutUsModule)
    },
    {
        path:'contacto',
        loadChildren:()=> import('./contact-us/contact-us.module'). then(m=>m.ContactUsModule)
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}