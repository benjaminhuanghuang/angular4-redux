import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourse, IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    // dispatch an action
    store.dispatch(filterCourse(searchText));
  }

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
    // this.courseActions.getCourses();
    // this.filteredCourses$ = allState.filteredCourses;
  }
}
