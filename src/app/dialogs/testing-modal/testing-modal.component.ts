import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgbActiveModal,NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-testing-modal',
  templateUrl: './testing-modal.component.html',
  styleUrls: ['./testing-modal.component.css']
})
export class TestingModalComponent implements OnInit {
  data!:any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [TestingModalComponent],
  imports: [NgbModule,CommonModule],
})
export class TestingModalModule {}
