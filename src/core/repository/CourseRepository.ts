import { Course } from "../entity/Course.js";

export interface CourseRepository {
    get(Course:any): Promise<Course>
}