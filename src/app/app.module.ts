import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TaskComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCbWO7S8gq1JnCHqSzKiZJqgJ26XP63enk",
      authDomain: "projectname-7f858.firebaseapp.com",
      projectId: "projectname-7f858",
      storageBucket: "projectname-7f858.appspot.com",
      messagingSenderId: "409459227783",
      appId: "1:409459227783:web:1bd14681e788b1e3870c22",
      measurementId: "G-JJJ5GMCFCR"
    }),
    AngularFirestoreModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,


    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }