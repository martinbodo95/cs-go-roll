import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeader } from 'src/components/header/header.component';
import { GraphQLModule } from 'src/graphql/graphql.module';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppBoxDetails } from 'src/components/boxDetails/box-details.component';
import { AppBoxList } from 'src/components/boxList/box-list.component';
import { AppBoxListItem } from 'src/components/boxListItem/box-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { boxReducer } from './state/box.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppBoxList,
    AppBoxListItem,
    AppBoxDetails,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot({ box: boxReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
