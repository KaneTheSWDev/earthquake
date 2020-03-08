import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { DataMapComponent } from './data-map.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [DataMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBvu5D94WBkPYj3mFD9pl8rwwIIM_8ulQ'
    })
    // api key = AIzaSyDBvu5D94WBkPYj3mFD9pl8rwwIIM_8ulQ
  ]
})
export class MapModule { }
