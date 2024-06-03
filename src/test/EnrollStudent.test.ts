import { EnrollStudent } from "../core/useCase/EnrollStudent.js";
import { CourseRepositoryMemory } from "../infra/repository/CourseRepositoryMemory.js";
import { EnrollmentRepositoryMemory } from "../infra/repository/EnrollmentRepositoryMemory.js";
import { StudentRepositoryMemory } from "../infra/repository/StudentRepositoryMemory.js";





const studentRepositoryMemory = new StudentRepositoryMemory()
const courseRepositoryMemory = new CourseRepositoryMemory()
const enrollmentRepositoryMemory = new EnrollmentRepositoryMemory()

const enrollStudent = new EnrollStudent(studentRepositoryMemory, courseRepositoryMemory, enrollmentRepositoryMemory)

console.log(enrollStudent.execute("123456", "123456", "123456"))
