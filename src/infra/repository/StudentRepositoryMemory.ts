import { Student } from "../../core/entity/Student.js";
import { StudentRepository } from "../../core/repository/StudentRepository.js";

export class StudentRepositoryMemory implements StudentRepository {
    get(StudentIdentification: any): Promise<Student> {
        const student = new Student("DIEGO", ["FILOSOFIA"], "STUD_123456")
        return Promise.resolve(student)
    }
}