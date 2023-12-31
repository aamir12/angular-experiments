import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FileLoaderService } from '../services/file-loader.service';
import { JSConfig, LinkID, Style } from '../services/file-loader.model';
import { LazyModalService } from '../services/lazy-dialog.service';

@Component({
  template: `
    <ng-container *ngIf="isSetup">
      <h2 class="box">Welcome to Person Home</h2>
      <button type="button" (click)="openLazyModal()"> Open</button>
      <a [routerLink]="['person-list']" routerLinkActive="active"
        >View Person List</a
      >
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class PersonComponent implements OnInit, OnDestroy {
  isSetup = false;

  constructor(
    private fileLoaderService: FileLoaderService,
    private renderer2: Renderer2,
    private lazyModalService:LazyModalService
  ) {}

  ngOnInit(): void {
    this.setUp();
  }

  async setUp() {
    this.isSetup = await this.fileLoaderService.loadCssFile(
      Style.PERSON,
      this.renderer2,
	  LinkID
    );

    // await this.fileLoaderService.loadJSFile(JSConfig.custom.file,this.renderer2,JSConfig.custom.tagId);
    // (window as any).test();
  }

  openLazyModal() {
    this.lazyModalService.openPOCModel('testing-modal',{name:'aamir'}).subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    this.fileLoaderService.removeFile(this.renderer2,LinkID);
  }
}
