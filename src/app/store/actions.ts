export const FILTER_COURSES = "courses/FILTER";

export function filterCourse(searchText:string){
    return {
      type: FILTER_COURSES,
      searchText
    }
}
