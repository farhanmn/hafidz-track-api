
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  salt: 'salt',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  musyrif_id: 'musyrif_id',
  name: 'name',
  gender: 'gender',
  grade: 'grade',
  grade_status: 'grade_status',
  birth_date: 'birth_date',
  join_date: 'join_date',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  date: 'date',
  status: 'status',
  remark: 'remark',
  recorded_by: 'recorded_by',
  created_at: 'created_at'
};

exports.Prisma.ParentScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  name: 'name',
  gender: 'gender',
  phone: 'phone',
  parent_status: 'parent_status',
  description: 'description',
  address: 'address'
};

exports.Prisma.MemorizingLogsScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  musyrif_id: 'musyrif_id',
  juz: 'juz',
  surah: 'surah',
  from_ayah: 'from_ayah',
  to_ayah: 'to_ayah',
  submission_date: 'submission_date',
  assessment: 'assessment',
  notes: 'notes',
  isRepeat: 'isRepeat',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MurojaahLogsScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  musyrif_id: 'musyrif_id',
  juz: 'juz',
  surah: 'surah',
  from_ayah: 'from_ayah',
  to_ayah: 'to_ayah',
  submission_date: 'submission_date',
  assessment: 'assessment',
  notes: 'notes',
  isRepeat: 'isRepeat',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SurahScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surah_number: 'surah_number',
  arabic_name: 'arabic_name',
  ayah_counts: 'ayah_counts',
  revelation_type: 'revelation_type',
  juz: 'juz'
};

exports.Prisma.AyahScalarFieldEnum = {
  id: 'id',
  surah_id: 'surah_id',
  ayah_number: 'ayah_number',
  juz_number: 'juz_number',
  text: 'text'
};

exports.Prisma.JuzScalarFieldEnum = {
  id: 'id',
  juz: 'juz',
  start_surah: 'start_surah',
  start_ayah: 'start_ayah',
  end_surah: 'end_surah',
  end_ayah: 'end_ayah'
};

exports.Prisma.JuzEvaluationScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  juz_number: 'juz_number',
  evaluation_date: 'evaluation_date',
  assessment: 'assessment',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MemorizationPlanScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  plan_type: 'plan_type',
  juz_number: 'juz_number',
  surah_id: 'surah_id',
  page_number: 'page_number',
  start_ayah: 'start_ayah',
  end_ayah: 'end_ayah',
  target_date: 'target_date',
  assigned_by: 'assigned_by',
  notes: 'notes',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  MUSYRIF: 'MUSYRIF'
};

exports.Gender = exports.$Enums.Gender = {
  L: 'L',
  P: 'P'
};

exports.GradeStatus = exports.$Enums.GradeStatus = {
  ELEMENTARY_SCHOOL: 'ELEMENTARY_SCHOOL',
  JUNIOR_HIGH_SCHOOL: 'JUNIOR_HIGH_SCHOOL',
  SENIOR_HIGH_SCHOOL: 'SENIOR_HIGH_SCHOOL'
};

exports.StudentStatus = exports.$Enums.StudentStatus = {
  ACTIVE: 'ACTIVE',
  GRADUATION: 'GRADUATION',
  NONACTIVE: 'NONACTIVE'
};

exports.AttendanceStatus = exports.$Enums.AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

exports.ParentStatus = exports.$Enums.ParentStatus = {
  PARENTS: 'PARENTS',
  NEAR_FAMILY: 'NEAR_FAMILY'
};

exports.Assessment = exports.$Enums.Assessment = {
  PASS: 'PASS',
  FAIL: 'FAIL'
};

exports.Revelation = exports.$Enums.Revelation = {
  MECCAN: 'MECCAN',
  MEDINAN: 'MEDINAN'
};

exports.PlanType = exports.$Enums.PlanType = {
  JUZ: 'JUZ',
  SURAH: 'SURAH',
  PAGE: 'PAGE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Student: 'Student',
  Attendance: 'Attendance',
  Parent: 'Parent',
  MemorizingLogs: 'MemorizingLogs',
  MurojaahLogs: 'MurojaahLogs',
  Surah: 'Surah',
  Ayah: 'Ayah',
  Juz: 'Juz',
  JuzEvaluation: 'JuzEvaluation',
  MemorizationPlan: 'MemorizationPlan'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
