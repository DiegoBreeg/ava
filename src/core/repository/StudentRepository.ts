import { Student } from "../entity/Student.js";

export interface StudentRepository {
    get(StudentIdentification: any): Promise<Student>
}