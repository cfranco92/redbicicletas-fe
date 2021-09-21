import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicyclesListComponent } from './components/bicycles-list/bicycles-list.component';

const routes: Routes = [
    {
        path: '',
        component: BicyclesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BicyclesRoutingModule { }
