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

