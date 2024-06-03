import { Enrollment } from "../entity/Enrollment.js";

export interface EnrollmentRepository {
    get(enrollmentIndentification: any): Promise<Enrollment>
}