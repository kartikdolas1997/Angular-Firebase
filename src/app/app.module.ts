import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ScratchComponent } from './scratch/scratch.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScratchComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
