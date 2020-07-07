import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UniverseComponent} from './components/universe/universe.component';
import {StartMenuComponent} from './components/start-menu/start-menu.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "start-menu", component: StartMenuComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "universe", component: UniverseComponent},
  {path: "universe/:mode", component: UniverseComponent},
  {path: "universe/:mode/:selection", component: UniverseComponent},
  {path: "**", redirectTo: "welcome"},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})
export class AppRoutingModule {
}
