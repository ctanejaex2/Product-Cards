import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCardListComponent } from "./components/product-card-list/product-card-list.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductIdResolver } from "./resolvers/product-id.resolver";

const routes: Routes = [
    { path: '', component: ProductCardListComponent },
    { path: ':productId', component: ProductCardComponent, resolve: { products: ProductIdResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}