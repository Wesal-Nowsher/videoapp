import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { FormsModule } from '@angular/forms';
import  {mathminStrengthPipe, mathsecStrengthPipe} from './math.pipe';

@NgModule({
  declarations: [
    AppComponent,
    mathminStrengthPipe,
    mathsecStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    VgCoreModule,
    VgControlsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
