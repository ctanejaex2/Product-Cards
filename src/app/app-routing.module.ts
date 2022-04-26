import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ImagefilterComponent } from './core/components/imagefilter/imagefilter.component';
import { ProductNotFoundComponent } from './core/components/product-not-found/product-not-found.component';
const routes: Routes = [
  { path: '', component: ButtonComponent },

  {
    path: 'products',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'images',
    component: ImagefilterComponent
  },
  {
    path: '404',
    component: ProductNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
