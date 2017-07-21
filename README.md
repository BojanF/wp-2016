#wp-starter-angular

## Потребни инсталации

 - [node.js](https://nodejs.org/en/download/)
 - [git клиент](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 - инсталација на [bower](https://www.npmjs.com/package/bower) со извршување на командата `npm install -g bower`
 - инсталација на [gulp](https://www.npmjs.com/package/gulp) извршување на командата `npm install -g gulp-cli`

## Иницијализација

Пристапете во директориумот со `cd wp-starter-angular`.

Иницијализацијата на алатките се извршува со командата: 
```npm install```

    Оваа команда треба да се изврши секоагаш кога има промена во package.json
 
 <hr/>

Потоа треба да се превземат зависностите со помош на командата:
```bower install```



По оваа команда треба да се креира директориумот `bower_components` во кој ќе бидат зачувани сите зависности кои се 
 конфигурирани во `bower.json` датотеката. 
 
     Оваа команда треба да се изврши секогаш кога се додава нова библиотека преку bower.json

Следно треба да се изврши командата 
```bower install angular-smart-table```
за да се преземе [smart-table](https://lorenzofox3.github.io/smart-table-website/) библиотеката


Следно треба да се изврши командата 
```bower install angular-resource#1.5.9```
за да се преземе [ngResource](https://docs.angularjs.org/api/ngResource) библиотеката потребна за [$resource] (https://docs.angularjs.org/api/ngResource/service/$resource) сервисот.
<hr/>

Следно извршете ја командата
```bower install c3-angular --save```
за да се преземе [c3-angular](http://jettro.github.io/c3-angular-directive/) AngularJS директивите за библиотеката [c3js](c3js.orf) библиотеката.
<hr/>

Потоа извршете `gulp build` да извршите иницијално составување на библиотеките и кодовите конфигурирани во `gulpfile.js`. 

    Оваа команда треба да се изврши секогаш кога ќе се додаде нова Javascript или CSS библиотека или пак фонтови

    Доколку користите Intellij, за оптимизација на перформансите при работењето, исклучете го процесирањето на 
    директориумот dest (десен клик на него -> Mark Directory As -> Exclueded)    

## Стартување
    
За да ја стартувате Angular апликацијата извршете ја командата `gulp`, со која се стартува основен HTTP сервер кој 
опслужува барања со сервирање на статички датотеки на портата 8000. За да го пристаптете кликнете на линкот 
[http://localhost:8000/](http://localhost:8000/). 


     
 
      
 
