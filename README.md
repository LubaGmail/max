# Max Angular 7

## Bookmark
https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655924?start=0

## Git
git commit -m 'some change'
git push -u origin master
git pull origin master

## APIs
https://angular.io/guide/template-syntax

## install
See files/commands.png
PS C:\ws\ng\max> npm i --save bootstrap

## Why Angular?
- It updates dom reactively [()]

## How Ng app gets bootstrapped?
    src/index.html   	    <app-root></app-route>
                            </script><script type="text/javascript" src="main.js">
    
    src/app.component.ts  	selector: 'app-route'
    src/main.ts  		    bootstrapModule(AppModule)
    src/app.module.ts	    bootstrap: [AppComponent]

## Tuts
intro:  https://www.youtube.com/watch?v=AaNZBrP26LQ&t=19s
course: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content

## Notes

* To user banana in the box [(ngModule)]='name', import FormsModule in app.module.ts 


============================================================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
