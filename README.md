# Angular Experiment
## Features

- Load CSS and Javascript file dynamically.
- Dynamic load modal/dialog component (LazyDialogService).

## Installation
angular.json

```
"build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              {
                "input":"src/assets/country.css",
                "bundleName": "country",
                "inject": false
              },
              {
                "input":"src/assets/person.css",
                "bundleName": "person",
                "inject": false
              }  
            ],
            "scripts": [
              {
                "input":"src/assets/custom.js",
                "bundleName": "custom",
                "inject": false
              }
            ]
          }
        }
```
- Rest of the thing is reside in file loader service and filer loader config