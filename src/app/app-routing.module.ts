import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EgyptComponent } from "./egypt/egypt.component";
import { UsaComponent } from "./usa/usa.component";

const routes: Routes = [
  { path: "", component: EgyptComponent },
  { path: "usa", component: UsaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
