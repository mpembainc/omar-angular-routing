import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UsersComponent } from '../users/users.component';
import { CustomersComponent } from '../customers/customers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'customers', component: CustomersComponent },
    ],
  },
];

@NgModule({
  declarations: [LayoutComponent, UsersComponent, CustomersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LayoutModule {}
