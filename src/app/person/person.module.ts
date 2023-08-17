import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { PersonComponent }  from './person.component';
import { PersonListComponent }  from './person-list/person.list.component';
import { PersonService } from './services/person.service';
import { PersonRoutingModule }  from './person-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [     
    CommonModule,
		ReactiveFormsModule,
    NgbModule,
		PersonRoutingModule
  ], 
  declarations: [
		PersonComponent,
		PersonListComponent
  ],
  providers: [ PersonService ]
})
export class PersonModule { 
  constructor() {
    console.log('PersonModule loaded.');
  }
}
