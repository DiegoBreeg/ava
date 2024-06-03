import { CourseRepositoryMemory } from "../../infra/repository/CourseRepositoryMemory.js"
import { EnrollmentRepositoryMemory } from "../../infra/repository/EnrollmentRepositoryMemory.js"
import { StudentRepositoryMemory } from "../../infra/repository/StudentRepositoryMemory.js"
import { Student } from "../entity/Student"

export class EnrollStudent {

    public studentRepositoryMemory: StudentRepositoryMemory
    public courseRepositoryMemory: CourseRepositoryMemory
    public enrollmentRepositoryMemory: EnrollmentRepositoryMemory

    constructor(
        studentRepositoryMemory: StudentRepositoryMemory,
        courseRepositoryMemory: CourseRepositoryMemory,
        enrollmentRepositoryMemory: EnrollmentRepositoryMemory
    ) {
        this.studentRepositoryMemory = new StudentRepositoryMemory()
        this.courseRepositoryMemory = new CourseRepositoryMemory()
        this.enrollmentRepositoryMemory = new EnrollmentRepositoryMemory()
    }

    execute(studentIndentification: any, courseIndentification: any, enrollmentIndentification: any) {
        const student = this.studentRepositoryMemory.get(studentIndentification)
        const course = this.courseRepositoryMemory.get(courseIndentification)
        const enrollment = this.enrollmentRepositoryMemory.get(enrollmentIndentification)
        return [student, course, enrollment]
    }
}