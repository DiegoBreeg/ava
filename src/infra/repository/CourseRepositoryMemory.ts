import { Course } from "../../core/entity/Course.js";
import { CourseRepository } from "../../core/repository/CourseRepository.js";

export class CourseRepositoryMemory implements CourseRepository {
    private cache: Array<Course>

    constructor() {
        this.cache = []
        this.cache.push(new Course("COUR_123456", "FILOSOFIA", "GRADUAÇÃO", "HISTÓRIA DO CONHECIMENTO HUMANO"))
    }
    get(courseIndentification: any): Promise<Course> {
        const course = this.cache[0]
        return Promise.resolve(course)
    }
}