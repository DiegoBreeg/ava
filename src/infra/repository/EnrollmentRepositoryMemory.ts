import { Enrollment } from "../../core/entity/Enrollment.js";
import { EnrollmentRepository } from "../../core/repository/EnrollmentRepository.js";

export class EnrollmentRepositoryMemory implements EnrollmentRepository {
    get(enrollmentIndentification: any): Promise<Enrollment> {
        const enrollment = new Enrollment("ENR_123456", ["FILOSOFIA"], new Date())
        return Promise.resolve(enrollment)
    }
}