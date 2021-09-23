import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicycleDetailsComponent } from './components/bicycle-details/bicycle-details.component';
import { BicycleNewComponent } from './components/bicycle-new/bicycle-new.component';
import { BicycleUpdateComponent } from './components/bicycle-update/bicycle-update.component';
import { BicyclesListComponent } from './components/bicycles-list/bicycles-list.component';

const routes: Routes = [
    {
        path: '',
        component: BicyclesListComponent
    },
    {
        path: ':id/show',
        component: BicycleDetailsComponent
    },
    {
        path: ':id/update',
        component: BicycleUpdateComponent
    },
    {
        path: 'create',
        component: BicycleNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BicyclesRoutingModule { }
