import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitDataComponent } from './init-data.component';

const routes: Routes = [
  {path: '', component: InitDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitDataRoutingModule {
}
