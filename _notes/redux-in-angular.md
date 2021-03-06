## Define the store, reducer
  /app/store

## Using redux in angular component
  /app/courses/course-list.component.ts

  ```
  ngOnInit() {
    this.updateFromState();   // load courses
    
    store.subscribe(()=>{      // update when store changed.
      this.updateFromState();
    });
    
    componentHandler.upgradeDom();
  }


  // Bind component to state
  updateFromState(){
    const allState = store.getState();
    this.courses = allState.courses;
    this.filteredCourses = allState.courses
  }
  ```

## Using NgRedux
  app.module.ts
  ```
  import {NgReduxModule, NgRedux } from 'ng2-redux';
  import {store, IAppState } from './store';

  export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>){
      ngRedux.provideStore(store);
    }
  }
  ```