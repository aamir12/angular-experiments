import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Style } from './file-loader.model';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }


  loadJSFile(jsFile:string,renderer2:Renderer2,linkId:string):Promise<boolean> {
    return new Promise((resolve,reject) => {
      const scriptElement = renderer2.createElement('script') as HTMLScriptElement;
      renderer2.appendChild(this.document.head, scriptElement);
      renderer2.setProperty(scriptElement, 'id', linkId);
      renderer2.setProperty(scriptElement, 'src', `${jsFile}`);
      scriptElement.onload = () => {
        resolve(true);
      }
      scriptElement.onerror = () => {
        resolve(false);
      }
      
    })
  }

  loadCssFile(cssFile:Style,renderer2:Renderer2,linkId:string):Promise<boolean> {
    return new Promise((resolve,reject) => {
      const linkElement = renderer2.createElement('link') as HTMLLinkElement;
      renderer2.appendChild(this.document.head, linkElement);
      renderer2.setProperty(linkElement, 'rel', 'stylesheet');
      renderer2.setProperty(linkElement, 'id', linkId);
      renderer2.setProperty(linkElement, 'href', `${cssFile}`);
      linkElement.onload = () => {
        resolve(true);
      }
      linkElement.onerror = () => {
        resolve(false);
      }
    })
  }

  removeFile(renderer2:Renderer2,linkId:string) {
    const linkElement = this.document.getElementById(linkId);
    if (linkElement) {
      renderer2.removeChild(this.document.head, linkElement);
    }
  }
}