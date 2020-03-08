import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { DataMapComponent } from './data-map.component';
import {AgmCoreModule} from '@agm/core';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {environment} from '../../environments/environment';


@NgModule({
  declarations: [DataMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    })
    // api key = AIzaSyDBvu5D94WBkPYj3mFD9pl8rwwIIM_8ulQ
  ]
})
export class MapModule { }
