import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FileLoaderService } from '../services/file-loader.service';
import { LinkID, Style } from '../services/file-loader.model';
@Component({
	template: `
	   <ng-container *ngIf="isSetup">
		   <h2 class="box">Welcome to Country Home</h2>
		   <a [routerLink]="['country-list']" routerLinkActive="active">View Country List</a>
		   <router-outlet></router-outlet>	
	   </ng-container>
  `,
})
export class CountryComponent implements OnInit,OnDestroy { 
	isSetup = false;
	constructor(
		private fileLoaderService:FileLoaderService,
		private renderer2:Renderer2) {}

	ngOnInit(): void {
		this.setUp();
	}		

	async setUp() {
		this.isSetup = await this.fileLoaderService.loadCssFile(Style.COUNTRY,this.renderer2,LinkID);
	}

	ngOnDestroy(): void {
		console.log(`Country module --ngOnDestroy`)
		this.fileLoaderService.removeFile(this.renderer2,LinkID);
	}

}
    