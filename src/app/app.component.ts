
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
		 <li><a routerLink="/country" routerLinkActive="active">Country</a></li>
		 <li><a routerLink="/person" routerLinkActive="active">Person</a></li>
		 <li><a routerLink="/address" routerLinkActive="active">Address</a></li>
	  </ul> 
	</nav>  
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class AppComponent{ 

	

	// loadStyle(styleName: string) {
	// 	const head = this.document.getElementsByTagName('head')[0];
	
	// 	let themeLink = this.document.getElementById(
	// 	  'client-theme'
	// 	) as HTMLLinkElement;
	// 	if (themeLink) {
	// 	  themeLink.href = `assets/${styleName}`; //<--add assets
	// 	} else {
	// 	  const style = this.document.createElement('link');
	// 	  style.id = 'client-theme';
	// 	  style.rel = 'stylesheet';
	// 	  style.type = 'text/css';
	// 	  style.href = `assets/${styleName}`; //<--add assets
	
	// 	  head.appendChild(style);
	// 	}
	// }

	// loadByRenderer() {
	// 	const cssPath = 'person.css';
    
    // // Create a link element via Angular's renderer to avoid SSR troubles
    // this.style = this.renderer.createElement('link') as HTMLLinkElement;

    // // Add the style to the head section
    // this.renderer.appendChild(this.document.head, this.style);

    // // Set type of the link item and path to the css file
    // this.renderer.setProperty(this.style, 'rel', 'stylesheet');
    // this.renderer.setProperty(this.style, 'href', cssPath);
	// }
	  
	
}
    