
import { Injectable } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LazyModalService {
  constructor(
    private modalService:NgbModal,
    private ngbModelConfig: NgbModalConfig ) {}
 
  openDialog(modalName: string,options:any,transformCallback?:any):Observable<any> {
    return new Observable((observer) => {
      this.loadComponent(modalName).then((dialogComponent) => {
        const ngbConfigObjBackup = {
          backdrop: this.ngbModelConfig.backdrop,
          keyboard: this.ngbModelConfig.keyboard
        };
        this.ngbModelConfig.backdrop = 'static';
        this.ngbModelConfig.keyboard = false;

        const modalRef = this.modalService.open(dialogComponent,options);
        if(transformCallback) {
          transformCallback(modalRef);
        }
        modalRef.closed.subscribe(result => {
          this.ngbModelConfig.backdrop = ngbConfigObjBackup.backdrop;
          this.ngbModelConfig.keyboard = ngbConfigObjBackup.keyboard;
          observer.next(result);
          observer.complete();
        });
        modalRef.dismissed.subscribe(reason => {
          console.log('File attach dialog is dismissed.');
          this.ngbModelConfig.backdrop = ngbConfigObjBackup.backdrop;
          this.ngbModelConfig.keyboard = ngbConfigObjBackup.keyboard;
          observer.next();
          observer.complete();
        });
      })
    });
  }

  async loadComponent(modalName:string):Promise<any> {
    const chunk = await import(
      `../dialogs/${modalName}/${modalName}.component`
      );
    return Object.values(chunk)[0] as any;
  }

  openPOCModel(modalName: string,data:any,options:any = {}) {
    const tranform = (modalRef:any) => {
      modalRef.componentInstance.data = data;
    }
    return this.openDialog(modalName,{},tranform)
  }

  
}