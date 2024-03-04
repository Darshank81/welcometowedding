import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { PlaceComponent } from './place/place.component';
import { VidComponent } from './vid/vid.component';

const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'image', component:ImageComponent},
  {'path': 'place', component:PlaceComponent},
  {'path': 'vid', component:VidComponent},
  {'path': '**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
