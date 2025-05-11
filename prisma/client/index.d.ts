
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model MemorizingLogs
 * 
 */
export type MemorizingLogs = $Result.DefaultSelection<Prisma.$MemorizingLogsPayload>
/**
 * Model MurojaahLogs
 * 
 */
export type MurojaahLogs = $Result.DefaultSelection<Prisma.$MurojaahLogsPayload>
/**
 * Model Surah
 * 
 */
export type Surah = $Result.DefaultSelection<Prisma.$SurahPayload>
/**
 * Model Ayah
 * 
 */
export type Ayah = $Result.DefaultSelection<Prisma.$AyahPayload>
/**
 * Model Juz
 * 
 */
export type Juz = $Result.DefaultSelection<Prisma.$JuzPayload>
/**
 * Model JuzEvaluation
 * 
 */
export type JuzEvaluation = $Result.DefaultSelection<Prisma.$JuzEvaluationPayload>
/**
 * Model MemorizationPlan
 * 
 */
export type MemorizationPlan = $Result.DefaultSelection<Prisma.$MemorizationPlanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MUSYRIF: 'MUSYRIF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  L: 'L',
  P: 'P'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const StudentStatus: {
  ACTIVE: 'ACTIVE',
  GRADUATION: 'GRADUATION',
  NONACTIVE: 'NONACTIVE'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const GradeStatus: {
  ELEMENTARY_SCHOOL: 'ELEMENTARY_SCHOOL',
  JUNIOR_HIGH_SCHOOL: 'JUNIOR_HIGH_SCHOOL',
  SENIOR_HIGH_SCHOOL: 'SENIOR_HIGH_SCHOOL'
};

export type GradeStatus = (typeof GradeStatus)[keyof typeof GradeStatus]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const ParentStatus: {
  PARENTS: 'PARENTS',
  NEAR_FAMILY: 'NEAR_FAMILY'
};

export type ParentStatus = (typeof ParentStatus)[keyof typeof ParentStatus]


export const Assessment: {
  PASS: 'PASS',
  FAIL: 'FAIL'
};

export type Assessment = (typeof Assessment)[keyof typeof Assessment]


export const Revelation: {
  MECCAN: 'MECCAN',
  MEDINAN: 'MEDINAN'
};

export type Revelation = (typeof Revelation)[keyof typeof Revelation]


export const PlanType: {
  JUZ: 'JUZ',
  SURAH: 'SURAH',
  PAGE: 'PAGE'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type GradeStatus = $Enums.GradeStatus

export const GradeStatus: typeof $Enums.GradeStatus

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type ParentStatus = $Enums.ParentStatus

export const ParentStatus: typeof $Enums.ParentStatus

export type Assessment = $Enums.Assessment

export const Assessment: typeof $Enums.Assessment

export type Revelation = $Enums.Revelation

export const Revelation: typeof $Enums.Revelation

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memorizingLogs`: Exposes CRUD operations for the **MemorizingLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemorizingLogs
    * const memorizingLogs = await prisma.memorizingLogs.findMany()
    * ```
    */
  get memorizingLogs(): Prisma.MemorizingLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.murojaahLogs`: Exposes CRUD operations for the **MurojaahLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MurojaahLogs
    * const murojaahLogs = await prisma.murojaahLogs.findMany()
    * ```
    */
  get murojaahLogs(): Prisma.MurojaahLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surah`: Exposes CRUD operations for the **Surah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surahs
    * const surahs = await prisma.surah.findMany()
    * ```
    */
  get surah(): Prisma.SurahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayah`: Exposes CRUD operations for the **Ayah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayahs
    * const ayahs = await prisma.ayah.findMany()
    * ```
    */
  get ayah(): Prisma.AyahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juz`: Exposes CRUD operations for the **Juz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juzs
    * const juzs = await prisma.juz.findMany()
    * ```
    */
  get juz(): Prisma.JuzDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juzEvaluation`: Exposes CRUD operations for the **JuzEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JuzEvaluations
    * const juzEvaluations = await prisma.juzEvaluation.findMany()
    * ```
    */
  get juzEvaluation(): Prisma.JuzEvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memorizationPlan`: Exposes CRUD operations for the **MemorizationPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemorizationPlans
    * const memorizationPlans = await prisma.memorizationPlan.findMany()
    * ```
    */
  get memorizationPlan(): Prisma.MemorizationPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "attendance" | "parent" | "memorizingLogs" | "murojaahLogs" | "surah" | "ayah" | "juz" | "juzEvaluation" | "memorizationPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      MemorizingLogs: {
        payload: Prisma.$MemorizingLogsPayload<ExtArgs>
        fields: Prisma.MemorizingLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemorizingLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemorizingLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          findFirst: {
            args: Prisma.MemorizingLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemorizingLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          findMany: {
            args: Prisma.MemorizingLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>[]
          }
          create: {
            args: Prisma.MemorizingLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          createMany: {
            args: Prisma.MemorizingLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemorizingLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>[]
          }
          delete: {
            args: Prisma.MemorizingLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          update: {
            args: Prisma.MemorizingLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          deleteMany: {
            args: Prisma.MemorizingLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemorizingLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemorizingLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>[]
          }
          upsert: {
            args: Prisma.MemorizingLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizingLogsPayload>
          }
          aggregate: {
            args: Prisma.MemorizingLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemorizingLogs>
          }
          groupBy: {
            args: Prisma.MemorizingLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemorizingLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemorizingLogsCountArgs<ExtArgs>
            result: $Utils.Optional<MemorizingLogsCountAggregateOutputType> | number
          }
        }
      }
      MurojaahLogs: {
        payload: Prisma.$MurojaahLogsPayload<ExtArgs>
        fields: Prisma.MurojaahLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MurojaahLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MurojaahLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          findFirst: {
            args: Prisma.MurojaahLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MurojaahLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          findMany: {
            args: Prisma.MurojaahLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>[]
          }
          create: {
            args: Prisma.MurojaahLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          createMany: {
            args: Prisma.MurojaahLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MurojaahLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>[]
          }
          delete: {
            args: Prisma.MurojaahLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          update: {
            args: Prisma.MurojaahLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          deleteMany: {
            args: Prisma.MurojaahLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MurojaahLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MurojaahLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>[]
          }
          upsert: {
            args: Prisma.MurojaahLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MurojaahLogsPayload>
          }
          aggregate: {
            args: Prisma.MurojaahLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMurojaahLogs>
          }
          groupBy: {
            args: Prisma.MurojaahLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MurojaahLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MurojaahLogsCountArgs<ExtArgs>
            result: $Utils.Optional<MurojaahLogsCountAggregateOutputType> | number
          }
        }
      }
      Surah: {
        payload: Prisma.$SurahPayload<ExtArgs>
        fields: Prisma.SurahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findFirst: {
            args: Prisma.SurahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findMany: {
            args: Prisma.SurahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          create: {
            args: Prisma.SurahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          createMany: {
            args: Prisma.SurahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          delete: {
            args: Prisma.SurahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          update: {
            args: Prisma.SurahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          deleteMany: {
            args: Prisma.SurahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          upsert: {
            args: Prisma.SurahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          aggregate: {
            args: Prisma.SurahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurah>
          }
          groupBy: {
            args: Prisma.SurahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurahGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurahCountArgs<ExtArgs>
            result: $Utils.Optional<SurahCountAggregateOutputType> | number
          }
        }
      }
      Ayah: {
        payload: Prisma.$AyahPayload<ExtArgs>
        fields: Prisma.AyahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findFirst: {
            args: Prisma.AyahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findMany: {
            args: Prisma.AyahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          create: {
            args: Prisma.AyahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          createMany: {
            args: Prisma.AyahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AyahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          delete: {
            args: Prisma.AyahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          update: {
            args: Prisma.AyahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          deleteMany: {
            args: Prisma.AyahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AyahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          upsert: {
            args: Prisma.AyahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          aggregate: {
            args: Prisma.AyahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyah>
          }
          groupBy: {
            args: Prisma.AyahGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyahGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyahCountArgs<ExtArgs>
            result: $Utils.Optional<AyahCountAggregateOutputType> | number
          }
        }
      }
      Juz: {
        payload: Prisma.$JuzPayload<ExtArgs>
        fields: Prisma.JuzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          findFirst: {
            args: Prisma.JuzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          findMany: {
            args: Prisma.JuzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>[]
          }
          create: {
            args: Prisma.JuzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          createMany: {
            args: Prisma.JuzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuzCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>[]
          }
          delete: {
            args: Prisma.JuzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          update: {
            args: Prisma.JuzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          deleteMany: {
            args: Prisma.JuzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuzUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>[]
          }
          upsert: {
            args: Prisma.JuzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzPayload>
          }
          aggregate: {
            args: Prisma.JuzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuz>
          }
          groupBy: {
            args: Prisma.JuzGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuzGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuzCountArgs<ExtArgs>
            result: $Utils.Optional<JuzCountAggregateOutputType> | number
          }
        }
      }
      JuzEvaluation: {
        payload: Prisma.$JuzEvaluationPayload<ExtArgs>
        fields: Prisma.JuzEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuzEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuzEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          findFirst: {
            args: Prisma.JuzEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuzEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          findMany: {
            args: Prisma.JuzEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>[]
          }
          create: {
            args: Prisma.JuzEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          createMany: {
            args: Prisma.JuzEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuzEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>[]
          }
          delete: {
            args: Prisma.JuzEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          update: {
            args: Prisma.JuzEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.JuzEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuzEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuzEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.JuzEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuzEvaluationPayload>
          }
          aggregate: {
            args: Prisma.JuzEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuzEvaluation>
          }
          groupBy: {
            args: Prisma.JuzEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuzEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuzEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<JuzEvaluationCountAggregateOutputType> | number
          }
        }
      }
      MemorizationPlan: {
        payload: Prisma.$MemorizationPlanPayload<ExtArgs>
        fields: Prisma.MemorizationPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemorizationPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemorizationPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          findFirst: {
            args: Prisma.MemorizationPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemorizationPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          findMany: {
            args: Prisma.MemorizationPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>[]
          }
          create: {
            args: Prisma.MemorizationPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          createMany: {
            args: Prisma.MemorizationPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemorizationPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>[]
          }
          delete: {
            args: Prisma.MemorizationPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          update: {
            args: Prisma.MemorizationPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          deleteMany: {
            args: Prisma.MemorizationPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemorizationPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemorizationPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>[]
          }
          upsert: {
            args: Prisma.MemorizationPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorizationPlanPayload>
          }
          aggregate: {
            args: Prisma.MemorizationPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemorizationPlan>
          }
          groupBy: {
            args: Prisma.MemorizationPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemorizationPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemorizationPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MemorizationPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    attendance?: AttendanceOmit
    parent?: ParentOmit
    memorizingLogs?: MemorizingLogsOmit
    murojaahLogs?: MurojaahLogsOmit
    surah?: SurahOmit
    ayah?: AyahOmit
    juz?: JuzOmit
    juzEvaluation?: JuzEvaluationOmit
    memorizationPlan?: MemorizationPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Student: number
    MemorizingLogs: number
    MurojaahLogs: number
    MemorizationPlan: number
    Attendance: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | UserCountOutputTypeCountStudentArgs
    MemorizingLogs?: boolean | UserCountOutputTypeCountMemorizingLogsArgs
    MurojaahLogs?: boolean | UserCountOutputTypeCountMurojaahLogsArgs
    MemorizationPlan?: boolean | UserCountOutputTypeCountMemorizationPlanArgs
    Attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemorizingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizingLogsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMurojaahLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MurojaahLogsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemorizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizationPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    MemorizingLogs: number
    Parent: number
    MurojaahLogs: number
    JuzEvaluation: number
    MemorizationPlan: number
    Attendance: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingLogs?: boolean | StudentCountOutputTypeCountMemorizingLogsArgs
    Parent?: boolean | StudentCountOutputTypeCountParentArgs
    MurojaahLogs?: boolean | StudentCountOutputTypeCountMurojaahLogsArgs
    JuzEvaluation?: boolean | StudentCountOutputTypeCountJuzEvaluationArgs
    MemorizationPlan?: boolean | StudentCountOutputTypeCountMemorizationPlanArgs
    Attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMemorizingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizingLogsWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMurojaahLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MurojaahLogsWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountJuzEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuzEvaluationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMemorizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizationPlanWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type SurahCountOutputType
   */

  export type SurahCountOutputType = {
    Ayah: number
  }

  export type SurahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ayah?: boolean | SurahCountOutputTypeCountAyahArgs
  }

  // Custom InputTypes
  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahCountOutputType
     */
    select?: SurahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeCountAyahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    salt: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    salt: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    salt?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    salt: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    Student?: boolean | User$StudentArgs<ExtArgs>
    MemorizingLogs?: boolean | User$MemorizingLogsArgs<ExtArgs>
    MurojaahLogs?: boolean | User$MurojaahLogsArgs<ExtArgs>
    MemorizationPlan?: boolean | User$MemorizationPlanArgs<ExtArgs>
    Attendance?: boolean | User$AttendanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "salt" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | User$StudentArgs<ExtArgs>
    MemorizingLogs?: boolean | User$MemorizingLogsArgs<ExtArgs>
    MurojaahLogs?: boolean | User$MurojaahLogsArgs<ExtArgs>
    MemorizationPlan?: boolean | User$MemorizationPlanArgs<ExtArgs>
    Attendance?: boolean | User$AttendanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>[]
      MemorizingLogs: Prisma.$MemorizingLogsPayload<ExtArgs>[]
      MurojaahLogs: Prisma.$MurojaahLogsPayload<ExtArgs>[]
      MemorizationPlan: Prisma.$MemorizationPlanPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      salt: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MemorizingLogs<T extends User$MemorizingLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$MemorizingLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MurojaahLogs<T extends User$MurojaahLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$MurojaahLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MemorizationPlan<T extends User$MemorizationPlanArgs<ExtArgs> = {}>(args?: Subset<T, User$MemorizationPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends User$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.MemorizingLogs
   */
  export type User$MemorizingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    where?: MemorizingLogsWhereInput
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    cursor?: MemorizingLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemorizingLogsScalarFieldEnum | MemorizingLogsScalarFieldEnum[]
  }

  /**
   * User.MurojaahLogs
   */
  export type User$MurojaahLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    where?: MurojaahLogsWhereInput
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    cursor?: MurojaahLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MurojaahLogsScalarFieldEnum | MurojaahLogsScalarFieldEnum[]
  }

  /**
   * User.MemorizationPlan
   */
  export type User$MemorizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    where?: MemorizationPlanWhereInput
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    cursor?: MemorizationPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemorizationPlanScalarFieldEnum | MemorizationPlanScalarFieldEnum[]
  }

  /**
   * User.Attendance
   */
  export type User$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    musyrif_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    grade: string | null
    grade_status: $Enums.GradeStatus | null
    birth_date: Date | null
    join_date: Date | null
    status: $Enums.StudentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    musyrif_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    grade: string | null
    grade_status: $Enums.GradeStatus | null
    birth_date: Date | null
    join_date: Date | null
    status: $Enums.StudentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    musyrif_id: number
    name: number
    gender: number
    grade: number
    grade_status: number
    birth_date: number
    join_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    musyrif_id?: true
    name?: true
    gender?: true
    grade?: true
    grade_status?: true
    birth_date?: true
    join_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    musyrif_id?: true
    name?: true
    gender?: true
    grade?: true
    grade_status?: true
    birth_date?: true
    join_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    musyrif_id?: true
    name?: true
    gender?: true
    grade?: true
    grade_status?: true
    birth_date?: true
    join_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    musyrif_id: string
    name: string
    gender: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date
    join_date: Date | null
    status: $Enums.StudentStatus
    created_at: Date
    updated_at: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    musyrif_id?: boolean
    name?: boolean
    gender?: boolean
    grade?: boolean
    grade_status?: boolean
    birth_date?: boolean
    join_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
    MemorizingLogs?: boolean | Student$MemorizingLogsArgs<ExtArgs>
    Parent?: boolean | Student$ParentArgs<ExtArgs>
    MurojaahLogs?: boolean | Student$MurojaahLogsArgs<ExtArgs>
    JuzEvaluation?: boolean | Student$JuzEvaluationArgs<ExtArgs>
    MemorizationPlan?: boolean | Student$MemorizationPlanArgs<ExtArgs>
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    musyrif_id?: boolean
    name?: boolean
    gender?: boolean
    grade?: boolean
    grade_status?: boolean
    birth_date?: boolean
    join_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    musyrif_id?: boolean
    name?: boolean
    gender?: boolean
    grade?: boolean
    grade_status?: boolean
    birth_date?: boolean
    join_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    musyrif_id?: boolean
    name?: boolean
    gender?: boolean
    grade?: boolean
    grade_status?: boolean
    birth_date?: boolean
    join_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "musyrif_id" | "name" | "gender" | "grade" | "grade_status" | "birth_date" | "join_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
    MemorizingLogs?: boolean | Student$MemorizingLogsArgs<ExtArgs>
    Parent?: boolean | Student$ParentArgs<ExtArgs>
    MurojaahLogs?: boolean | Student$MurojaahLogsArgs<ExtArgs>
    JuzEvaluation?: boolean | Student$JuzEvaluationArgs<ExtArgs>
    MemorizationPlan?: boolean | Student$MemorizationPlanArgs<ExtArgs>
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MusyrifUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      MusyrifUser: Prisma.$UserPayload<ExtArgs>
      MemorizingLogs: Prisma.$MemorizingLogsPayload<ExtArgs>[]
      Parent: Prisma.$ParentPayload<ExtArgs>[]
      MurojaahLogs: Prisma.$MurojaahLogsPayload<ExtArgs>[]
      JuzEvaluation: Prisma.$JuzEvaluationPayload<ExtArgs>[]
      MemorizationPlan: Prisma.$MemorizationPlanPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      musyrif_id: string
      name: string
      gender: $Enums.Gender
      grade: string
      grade_status: $Enums.GradeStatus
      birth_date: Date
      join_date: Date | null
      status: $Enums.StudentStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MusyrifUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MemorizingLogs<T extends Student$MemorizingLogsArgs<ExtArgs> = {}>(args?: Subset<T, Student$MemorizingLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Parent<T extends Student$ParentArgs<ExtArgs> = {}>(args?: Subset<T, Student$ParentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MurojaahLogs<T extends Student$MurojaahLogsArgs<ExtArgs> = {}>(args?: Subset<T, Student$MurojaahLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JuzEvaluation<T extends Student$JuzEvaluationArgs<ExtArgs> = {}>(args?: Subset<T, Student$JuzEvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MemorizationPlan<T extends Student$MemorizationPlanArgs<ExtArgs> = {}>(args?: Subset<T, Student$MemorizationPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends Student$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Student$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly musyrif_id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly grade: FieldRef<"Student", 'String'>
    readonly grade_status: FieldRef<"Student", 'GradeStatus'>
    readonly birth_date: FieldRef<"Student", 'DateTime'>
    readonly join_date: FieldRef<"Student", 'DateTime'>
    readonly status: FieldRef<"Student", 'StudentStatus'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly updated_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.MemorizingLogs
   */
  export type Student$MemorizingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    where?: MemorizingLogsWhereInput
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    cursor?: MemorizingLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemorizingLogsScalarFieldEnum | MemorizingLogsScalarFieldEnum[]
  }

  /**
   * Student.Parent
   */
  export type Student$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    cursor?: ParentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Student.MurojaahLogs
   */
  export type Student$MurojaahLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    where?: MurojaahLogsWhereInput
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    cursor?: MurojaahLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MurojaahLogsScalarFieldEnum | MurojaahLogsScalarFieldEnum[]
  }

  /**
   * Student.JuzEvaluation
   */
  export type Student$JuzEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    where?: JuzEvaluationWhereInput
    orderBy?: JuzEvaluationOrderByWithRelationInput | JuzEvaluationOrderByWithRelationInput[]
    cursor?: JuzEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuzEvaluationScalarFieldEnum | JuzEvaluationScalarFieldEnum[]
  }

  /**
   * Student.MemorizationPlan
   */
  export type Student$MemorizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    where?: MemorizationPlanWhereInput
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    cursor?: MemorizationPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemorizationPlanScalarFieldEnum | MemorizationPlanScalarFieldEnum[]
  }

  /**
   * Student.Attendance
   */
  export type Student$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    remark: string | null
    recorded_by: string | null
    created_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    remark: string | null
    recorded_by: string | null
    created_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    student_id: number
    date: number
    status: number
    remark: number
    recorded_by: number
    created_at: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    student_id?: true
    date?: true
    status?: true
    remark?: true
    recorded_by?: true
    created_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    student_id?: true
    date?: true
    status?: true
    remark?: true
    recorded_by?: true
    created_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    student_id?: true
    date?: true
    status?: true
    remark?: true
    recorded_by?: true
    created_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    student_id: string
    date: Date
    status: $Enums.AttendanceStatus
    remark: string
    recorded_by: string
    created_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    date?: boolean
    status?: boolean
    remark?: boolean
    recorded_by?: boolean
    created_at?: boolean
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    date?: boolean
    status?: boolean
    remark?: boolean
    recorded_by?: boolean
    created_at?: boolean
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    date?: boolean
    status?: boolean
    remark?: boolean
    recorded_by?: boolean
    created_at?: boolean
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    student_id?: boolean
    date?: boolean
    status?: boolean
    remark?: boolean
    recorded_by?: boolean
    created_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "date" | "status" | "remark" | "recorded_by" | "created_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AttendanceStudent?: boolean | StudentDefaultArgs<ExtArgs>
    AttendaceMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      AttendanceStudent: Prisma.$StudentPayload<ExtArgs>
      AttendaceMusyrif: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      date: Date
      status: $Enums.AttendanceStatus
      remark: string
      recorded_by: string
      created_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AttendanceStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AttendaceMusyrif<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly student_id: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly remark: FieldRef<"Attendance", 'String'>
    readonly recorded_by: FieldRef<"Attendance", 'String'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    phone: string | null
    parent_status: $Enums.ParentStatus | null
    description: string | null
    address: string | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    phone: string | null
    parent_status: $Enums.ParentStatus | null
    description: string | null
    address: string | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    student_id: number
    name: number
    gender: number
    phone: number
    parent_status: number
    description: number
    address: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    id?: true
    student_id?: true
    name?: true
    gender?: true
    phone?: true
    parent_status?: true
    description?: true
    address?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    student_id?: true
    name?: true
    gender?: true
    phone?: true
    parent_status?: true
    description?: true
    address?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    student_id?: true
    name?: true
    gender?: true
    phone?: true
    parent_status?: true
    description?: true
    address?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    student_id: string
    name: string
    gender: $Enums.Gender
    phone: string | null
    parent_status: $Enums.ParentStatus
    description: string | null
    address: string | null
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    parent_status?: boolean
    description?: boolean
    address?: boolean
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    parent_status?: boolean
    description?: boolean
    address?: boolean
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    parent_status?: boolean
    description?: boolean
    address?: boolean
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    student_id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    parent_status?: boolean
    description?: boolean
    address?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "name" | "gender" | "phone" | "parent_status" | "description" | "address", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParentStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      ParentStudent: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      name: string
      gender: $Enums.Gender
      phone: string | null
      parent_status: $Enums.ParentStatus
      description: string | null
      address: string | null
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ParentStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly student_id: FieldRef<"Parent", 'String'>
    readonly name: FieldRef<"Parent", 'String'>
    readonly gender: FieldRef<"Parent", 'Gender'>
    readonly phone: FieldRef<"Parent", 'String'>
    readonly parent_status: FieldRef<"Parent", 'ParentStatus'>
    readonly description: FieldRef<"Parent", 'String'>
    readonly address: FieldRef<"Parent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model MemorizingLogs
   */

  export type AggregateMemorizingLogs = {
    _count: MemorizingLogsCountAggregateOutputType | null
    _avg: MemorizingLogsAvgAggregateOutputType | null
    _sum: MemorizingLogsSumAggregateOutputType | null
    _min: MemorizingLogsMinAggregateOutputType | null
    _max: MemorizingLogsMaxAggregateOutputType | null
  }

  export type MemorizingLogsAvgAggregateOutputType = {
    juz: number | null
    from_ayah: number | null
    to_ayah: number | null
    isRepeat: number | null
  }

  export type MemorizingLogsSumAggregateOutputType = {
    juz: number | null
    from_ayah: number | null
    to_ayah: number | null
    isRepeat: number | null
  }

  export type MemorizingLogsMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    musyrif_id: string | null
    juz: number | null
    surah: string | null
    from_ayah: number | null
    to_ayah: number | null
    submission_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    isRepeat: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MemorizingLogsMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    musyrif_id: string | null
    juz: number | null
    surah: string | null
    from_ayah: number | null
    to_ayah: number | null
    submission_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    isRepeat: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MemorizingLogsCountAggregateOutputType = {
    id: number
    student_id: number
    musyrif_id: number
    juz: number
    surah: number
    from_ayah: number
    to_ayah: number
    submission_date: number
    assessment: number
    notes: number
    isRepeat: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MemorizingLogsAvgAggregateInputType = {
    juz?: true
    from_ayah?: true
    to_ayah?: true
    isRepeat?: true
  }

  export type MemorizingLogsSumAggregateInputType = {
    juz?: true
    from_ayah?: true
    to_ayah?: true
    isRepeat?: true
  }

  export type MemorizingLogsMinAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
  }

  export type MemorizingLogsMaxAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
  }

  export type MemorizingLogsCountAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MemorizingLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorizingLogs to aggregate.
     */
    where?: MemorizingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizingLogs to fetch.
     */
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemorizingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemorizingLogs
    **/
    _count?: true | MemorizingLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemorizingLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemorizingLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemorizingLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemorizingLogsMaxAggregateInputType
  }

  export type GetMemorizingLogsAggregateType<T extends MemorizingLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemorizingLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemorizingLogs[P]>
      : GetScalarType<T[P], AggregateMemorizingLogs[P]>
  }




  export type MemorizingLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizingLogsWhereInput
    orderBy?: MemorizingLogsOrderByWithAggregationInput | MemorizingLogsOrderByWithAggregationInput[]
    by: MemorizingLogsScalarFieldEnum[] | MemorizingLogsScalarFieldEnum
    having?: MemorizingLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemorizingLogsCountAggregateInputType | true
    _avg?: MemorizingLogsAvgAggregateInputType
    _sum?: MemorizingLogsSumAggregateInputType
    _min?: MemorizingLogsMinAggregateInputType
    _max?: MemorizingLogsMaxAggregateInputType
  }

  export type MemorizingLogsGroupByOutputType = {
    id: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date
    assessment: $Enums.Assessment
    notes: string | null
    isRepeat: number
    created_at: Date
    updated_at: Date
    _count: MemorizingLogsCountAggregateOutputType | null
    _avg: MemorizingLogsAvgAggregateOutputType | null
    _sum: MemorizingLogsSumAggregateOutputType | null
    _min: MemorizingLogsMinAggregateOutputType | null
    _max: MemorizingLogsMaxAggregateOutputType | null
  }

  type GetMemorizingLogsGroupByPayload<T extends MemorizingLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemorizingLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemorizingLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemorizingLogsGroupByOutputType[P]>
            : GetScalarType<T[P], MemorizingLogsGroupByOutputType[P]>
        }
      >
    >


  export type MemorizingLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizingLogs"]>

  export type MemorizingLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizingLogs"]>

  export type MemorizingLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizingLogs"]>

  export type MemorizingLogsSelectScalar = {
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MemorizingLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "musyrif_id" | "juz" | "surah" | "from_ayah" | "to_ayah" | "submission_date" | "assessment" | "notes" | "isRepeat" | "created_at" | "updated_at", ExtArgs["result"]["memorizingLogs"]>
  export type MemorizingLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemorizingLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemorizingLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemorizingLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemorizingLogs"
    objects: {
      MemorizingLogsStudent: Prisma.$StudentPayload<ExtArgs>
      MemorizingLogsMusyrif: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      musyrif_id: string
      juz: number
      surah: string
      from_ayah: number
      to_ayah: number
      submission_date: Date
      assessment: $Enums.Assessment
      notes: string | null
      isRepeat: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["memorizingLogs"]>
    composites: {}
  }

  type MemorizingLogsGetPayload<S extends boolean | null | undefined | MemorizingLogsDefaultArgs> = $Result.GetResult<Prisma.$MemorizingLogsPayload, S>

  type MemorizingLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemorizingLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemorizingLogsCountAggregateInputType | true
    }

  export interface MemorizingLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemorizingLogs'], meta: { name: 'MemorizingLogs' } }
    /**
     * Find zero or one MemorizingLogs that matches the filter.
     * @param {MemorizingLogsFindUniqueArgs} args - Arguments to find a MemorizingLogs
     * @example
     * // Get one MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemorizingLogsFindUniqueArgs>(args: SelectSubset<T, MemorizingLogsFindUniqueArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemorizingLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemorizingLogsFindUniqueOrThrowArgs} args - Arguments to find a MemorizingLogs
     * @example
     * // Get one MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemorizingLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, MemorizingLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemorizingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsFindFirstArgs} args - Arguments to find a MemorizingLogs
     * @example
     * // Get one MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemorizingLogsFindFirstArgs>(args?: SelectSubset<T, MemorizingLogsFindFirstArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemorizingLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsFindFirstOrThrowArgs} args - Arguments to find a MemorizingLogs
     * @example
     * // Get one MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemorizingLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, MemorizingLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemorizingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findMany()
     * 
     * // Get first 10 MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memorizingLogsWithIdOnly = await prisma.memorizingLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemorizingLogsFindManyArgs>(args?: SelectSubset<T, MemorizingLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemorizingLogs.
     * @param {MemorizingLogsCreateArgs} args - Arguments to create a MemorizingLogs.
     * @example
     * // Create one MemorizingLogs
     * const MemorizingLogs = await prisma.memorizingLogs.create({
     *   data: {
     *     // ... data to create a MemorizingLogs
     *   }
     * })
     * 
     */
    create<T extends MemorizingLogsCreateArgs>(args: SelectSubset<T, MemorizingLogsCreateArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemorizingLogs.
     * @param {MemorizingLogsCreateManyArgs} args - Arguments to create many MemorizingLogs.
     * @example
     * // Create many MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemorizingLogsCreateManyArgs>(args?: SelectSubset<T, MemorizingLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemorizingLogs and returns the data saved in the database.
     * @param {MemorizingLogsCreateManyAndReturnArgs} args - Arguments to create many MemorizingLogs.
     * @example
     * // Create many MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemorizingLogs and only return the `id`
     * const memorizingLogsWithIdOnly = await prisma.memorizingLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemorizingLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, MemorizingLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemorizingLogs.
     * @param {MemorizingLogsDeleteArgs} args - Arguments to delete one MemorizingLogs.
     * @example
     * // Delete one MemorizingLogs
     * const MemorizingLogs = await prisma.memorizingLogs.delete({
     *   where: {
     *     // ... filter to delete one MemorizingLogs
     *   }
     * })
     * 
     */
    delete<T extends MemorizingLogsDeleteArgs>(args: SelectSubset<T, MemorizingLogsDeleteArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemorizingLogs.
     * @param {MemorizingLogsUpdateArgs} args - Arguments to update one MemorizingLogs.
     * @example
     * // Update one MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemorizingLogsUpdateArgs>(args: SelectSubset<T, MemorizingLogsUpdateArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemorizingLogs.
     * @param {MemorizingLogsDeleteManyArgs} args - Arguments to filter MemorizingLogs to delete.
     * @example
     * // Delete a few MemorizingLogs
     * const { count } = await prisma.memorizingLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemorizingLogsDeleteManyArgs>(args?: SelectSubset<T, MemorizingLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemorizingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemorizingLogsUpdateManyArgs>(args: SelectSubset<T, MemorizingLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemorizingLogs and returns the data updated in the database.
     * @param {MemorizingLogsUpdateManyAndReturnArgs} args - Arguments to update many MemorizingLogs.
     * @example
     * // Update many MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemorizingLogs and only return the `id`
     * const memorizingLogsWithIdOnly = await prisma.memorizingLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemorizingLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, MemorizingLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemorizingLogs.
     * @param {MemorizingLogsUpsertArgs} args - Arguments to update or create a MemorizingLogs.
     * @example
     * // Update or create a MemorizingLogs
     * const memorizingLogs = await prisma.memorizingLogs.upsert({
     *   create: {
     *     // ... data to create a MemorizingLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemorizingLogs we want to update
     *   }
     * })
     */
    upsert<T extends MemorizingLogsUpsertArgs>(args: SelectSubset<T, MemorizingLogsUpsertArgs<ExtArgs>>): Prisma__MemorizingLogsClient<$Result.GetResult<Prisma.$MemorizingLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemorizingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsCountArgs} args - Arguments to filter MemorizingLogs to count.
     * @example
     * // Count the number of MemorizingLogs
     * const count = await prisma.memorizingLogs.count({
     *   where: {
     *     // ... the filter for the MemorizingLogs we want to count
     *   }
     * })
    **/
    count<T extends MemorizingLogsCountArgs>(
      args?: Subset<T, MemorizingLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemorizingLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemorizingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemorizingLogsAggregateArgs>(args: Subset<T, MemorizingLogsAggregateArgs>): Prisma.PrismaPromise<GetMemorizingLogsAggregateType<T>>

    /**
     * Group by MemorizingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizingLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemorizingLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemorizingLogsGroupByArgs['orderBy'] }
        : { orderBy?: MemorizingLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemorizingLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemorizingLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemorizingLogs model
   */
  readonly fields: MemorizingLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemorizingLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemorizingLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MemorizingLogsStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MemorizingLogsMusyrif<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemorizingLogs model
   */
  interface MemorizingLogsFieldRefs {
    readonly id: FieldRef<"MemorizingLogs", 'String'>
    readonly student_id: FieldRef<"MemorizingLogs", 'String'>
    readonly musyrif_id: FieldRef<"MemorizingLogs", 'String'>
    readonly juz: FieldRef<"MemorizingLogs", 'Int'>
    readonly surah: FieldRef<"MemorizingLogs", 'String'>
    readonly from_ayah: FieldRef<"MemorizingLogs", 'Int'>
    readonly to_ayah: FieldRef<"MemorizingLogs", 'Int'>
    readonly submission_date: FieldRef<"MemorizingLogs", 'DateTime'>
    readonly assessment: FieldRef<"MemorizingLogs", 'Assessment'>
    readonly notes: FieldRef<"MemorizingLogs", 'String'>
    readonly isRepeat: FieldRef<"MemorizingLogs", 'Int'>
    readonly created_at: FieldRef<"MemorizingLogs", 'DateTime'>
    readonly updated_at: FieldRef<"MemorizingLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemorizingLogs findUnique
   */
  export type MemorizingLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemorizingLogs to fetch.
     */
    where: MemorizingLogsWhereUniqueInput
  }

  /**
   * MemorizingLogs findUniqueOrThrow
   */
  export type MemorizingLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemorizingLogs to fetch.
     */
    where: MemorizingLogsWhereUniqueInput
  }

  /**
   * MemorizingLogs findFirst
   */
  export type MemorizingLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemorizingLogs to fetch.
     */
    where?: MemorizingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizingLogs to fetch.
     */
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorizingLogs.
     */
    cursor?: MemorizingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorizingLogs.
     */
    distinct?: MemorizingLogsScalarFieldEnum | MemorizingLogsScalarFieldEnum[]
  }

  /**
   * MemorizingLogs findFirstOrThrow
   */
  export type MemorizingLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemorizingLogs to fetch.
     */
    where?: MemorizingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizingLogs to fetch.
     */
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorizingLogs.
     */
    cursor?: MemorizingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorizingLogs.
     */
    distinct?: MemorizingLogsScalarFieldEnum | MemorizingLogsScalarFieldEnum[]
  }

  /**
   * MemorizingLogs findMany
   */
  export type MemorizingLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemorizingLogs to fetch.
     */
    where?: MemorizingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizingLogs to fetch.
     */
    orderBy?: MemorizingLogsOrderByWithRelationInput | MemorizingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemorizingLogs.
     */
    cursor?: MemorizingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizingLogs.
     */
    skip?: number
    distinct?: MemorizingLogsScalarFieldEnum | MemorizingLogsScalarFieldEnum[]
  }

  /**
   * MemorizingLogs create
   */
  export type MemorizingLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a MemorizingLogs.
     */
    data: XOR<MemorizingLogsCreateInput, MemorizingLogsUncheckedCreateInput>
  }

  /**
   * MemorizingLogs createMany
   */
  export type MemorizingLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemorizingLogs.
     */
    data: MemorizingLogsCreateManyInput | MemorizingLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemorizingLogs createManyAndReturn
   */
  export type MemorizingLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * The data used to create many MemorizingLogs.
     */
    data: MemorizingLogsCreateManyInput | MemorizingLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemorizingLogs update
   */
  export type MemorizingLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a MemorizingLogs.
     */
    data: XOR<MemorizingLogsUpdateInput, MemorizingLogsUncheckedUpdateInput>
    /**
     * Choose, which MemorizingLogs to update.
     */
    where: MemorizingLogsWhereUniqueInput
  }

  /**
   * MemorizingLogs updateMany
   */
  export type MemorizingLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemorizingLogs.
     */
    data: XOR<MemorizingLogsUpdateManyMutationInput, MemorizingLogsUncheckedUpdateManyInput>
    /**
     * Filter which MemorizingLogs to update
     */
    where?: MemorizingLogsWhereInput
    /**
     * Limit how many MemorizingLogs to update.
     */
    limit?: number
  }

  /**
   * MemorizingLogs updateManyAndReturn
   */
  export type MemorizingLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * The data used to update MemorizingLogs.
     */
    data: XOR<MemorizingLogsUpdateManyMutationInput, MemorizingLogsUncheckedUpdateManyInput>
    /**
     * Filter which MemorizingLogs to update
     */
    where?: MemorizingLogsWhereInput
    /**
     * Limit how many MemorizingLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemorizingLogs upsert
   */
  export type MemorizingLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the MemorizingLogs to update in case it exists.
     */
    where: MemorizingLogsWhereUniqueInput
    /**
     * In case the MemorizingLogs found by the `where` argument doesn't exist, create a new MemorizingLogs with this data.
     */
    create: XOR<MemorizingLogsCreateInput, MemorizingLogsUncheckedCreateInput>
    /**
     * In case the MemorizingLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemorizingLogsUpdateInput, MemorizingLogsUncheckedUpdateInput>
  }

  /**
   * MemorizingLogs delete
   */
  export type MemorizingLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
    /**
     * Filter which MemorizingLogs to delete.
     */
    where: MemorizingLogsWhereUniqueInput
  }

  /**
   * MemorizingLogs deleteMany
   */
  export type MemorizingLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorizingLogs to delete
     */
    where?: MemorizingLogsWhereInput
    /**
     * Limit how many MemorizingLogs to delete.
     */
    limit?: number
  }

  /**
   * MemorizingLogs without action
   */
  export type MemorizingLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizingLogs
     */
    select?: MemorizingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizingLogs
     */
    omit?: MemorizingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizingLogsInclude<ExtArgs> | null
  }


  /**
   * Model MurojaahLogs
   */

  export type AggregateMurojaahLogs = {
    _count: MurojaahLogsCountAggregateOutputType | null
    _avg: MurojaahLogsAvgAggregateOutputType | null
    _sum: MurojaahLogsSumAggregateOutputType | null
    _min: MurojaahLogsMinAggregateOutputType | null
    _max: MurojaahLogsMaxAggregateOutputType | null
  }

  export type MurojaahLogsAvgAggregateOutputType = {
    juz: number | null
    from_ayah: number | null
    to_ayah: number | null
    isRepeat: number | null
  }

  export type MurojaahLogsSumAggregateOutputType = {
    juz: number | null
    from_ayah: number | null
    to_ayah: number | null
    isRepeat: number | null
  }

  export type MurojaahLogsMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    musyrif_id: string | null
    juz: number | null
    surah: string | null
    from_ayah: number | null
    to_ayah: number | null
    submission_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    isRepeat: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MurojaahLogsMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    musyrif_id: string | null
    juz: number | null
    surah: string | null
    from_ayah: number | null
    to_ayah: number | null
    submission_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    isRepeat: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MurojaahLogsCountAggregateOutputType = {
    id: number
    student_id: number
    musyrif_id: number
    juz: number
    surah: number
    from_ayah: number
    to_ayah: number
    submission_date: number
    assessment: number
    notes: number
    isRepeat: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MurojaahLogsAvgAggregateInputType = {
    juz?: true
    from_ayah?: true
    to_ayah?: true
    isRepeat?: true
  }

  export type MurojaahLogsSumAggregateInputType = {
    juz?: true
    from_ayah?: true
    to_ayah?: true
    isRepeat?: true
  }

  export type MurojaahLogsMinAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
  }

  export type MurojaahLogsMaxAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
  }

  export type MurojaahLogsCountAggregateInputType = {
    id?: true
    student_id?: true
    musyrif_id?: true
    juz?: true
    surah?: true
    from_ayah?: true
    to_ayah?: true
    submission_date?: true
    assessment?: true
    notes?: true
    isRepeat?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MurojaahLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MurojaahLogs to aggregate.
     */
    where?: MurojaahLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MurojaahLogs to fetch.
     */
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MurojaahLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MurojaahLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MurojaahLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MurojaahLogs
    **/
    _count?: true | MurojaahLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MurojaahLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MurojaahLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MurojaahLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MurojaahLogsMaxAggregateInputType
  }

  export type GetMurojaahLogsAggregateType<T extends MurojaahLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateMurojaahLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMurojaahLogs[P]>
      : GetScalarType<T[P], AggregateMurojaahLogs[P]>
  }




  export type MurojaahLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MurojaahLogsWhereInput
    orderBy?: MurojaahLogsOrderByWithAggregationInput | MurojaahLogsOrderByWithAggregationInput[]
    by: MurojaahLogsScalarFieldEnum[] | MurojaahLogsScalarFieldEnum
    having?: MurojaahLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MurojaahLogsCountAggregateInputType | true
    _avg?: MurojaahLogsAvgAggregateInputType
    _sum?: MurojaahLogsSumAggregateInputType
    _min?: MurojaahLogsMinAggregateInputType
    _max?: MurojaahLogsMaxAggregateInputType
  }

  export type MurojaahLogsGroupByOutputType = {
    id: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date
    assessment: $Enums.Assessment
    notes: string | null
    isRepeat: number
    created_at: Date
    updated_at: Date
    _count: MurojaahLogsCountAggregateOutputType | null
    _avg: MurojaahLogsAvgAggregateOutputType | null
    _sum: MurojaahLogsSumAggregateOutputType | null
    _min: MurojaahLogsMinAggregateOutputType | null
    _max: MurojaahLogsMaxAggregateOutputType | null
  }

  type GetMurojaahLogsGroupByPayload<T extends MurojaahLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MurojaahLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MurojaahLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MurojaahLogsGroupByOutputType[P]>
            : GetScalarType<T[P], MurojaahLogsGroupByOutputType[P]>
        }
      >
    >


  export type MurojaahLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["murojaahLogs"]>

  export type MurojaahLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["murojaahLogs"]>

  export type MurojaahLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["murojaahLogs"]>

  export type MurojaahLogsSelectScalar = {
    id?: boolean
    student_id?: boolean
    musyrif_id?: boolean
    juz?: boolean
    surah?: boolean
    from_ayah?: boolean
    to_ayah?: boolean
    submission_date?: boolean
    assessment?: boolean
    notes?: boolean
    isRepeat?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MurojaahLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "musyrif_id" | "juz" | "surah" | "from_ayah" | "to_ayah" | "submission_date" | "assessment" | "notes" | "isRepeat" | "created_at" | "updated_at", ExtArgs["result"]["murojaahLogs"]>
  export type MurojaahLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MurojaahLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MurojaahLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MurojaahLogsStudent?: boolean | StudentDefaultArgs<ExtArgs>
    MurojaahLogsMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MurojaahLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MurojaahLogs"
    objects: {
      MurojaahLogsStudent: Prisma.$StudentPayload<ExtArgs>
      MurojaahLogsMusyrif: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      musyrif_id: string
      juz: number
      surah: string
      from_ayah: number
      to_ayah: number
      submission_date: Date
      assessment: $Enums.Assessment
      notes: string | null
      isRepeat: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["murojaahLogs"]>
    composites: {}
  }

  type MurojaahLogsGetPayload<S extends boolean | null | undefined | MurojaahLogsDefaultArgs> = $Result.GetResult<Prisma.$MurojaahLogsPayload, S>

  type MurojaahLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MurojaahLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MurojaahLogsCountAggregateInputType | true
    }

  export interface MurojaahLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MurojaahLogs'], meta: { name: 'MurojaahLogs' } }
    /**
     * Find zero or one MurojaahLogs that matches the filter.
     * @param {MurojaahLogsFindUniqueArgs} args - Arguments to find a MurojaahLogs
     * @example
     * // Get one MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MurojaahLogsFindUniqueArgs>(args: SelectSubset<T, MurojaahLogsFindUniqueArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MurojaahLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MurojaahLogsFindUniqueOrThrowArgs} args - Arguments to find a MurojaahLogs
     * @example
     * // Get one MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MurojaahLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, MurojaahLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MurojaahLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsFindFirstArgs} args - Arguments to find a MurojaahLogs
     * @example
     * // Get one MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MurojaahLogsFindFirstArgs>(args?: SelectSubset<T, MurojaahLogsFindFirstArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MurojaahLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsFindFirstOrThrowArgs} args - Arguments to find a MurojaahLogs
     * @example
     * // Get one MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MurojaahLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, MurojaahLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MurojaahLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findMany()
     * 
     * // Get first 10 MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const murojaahLogsWithIdOnly = await prisma.murojaahLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MurojaahLogsFindManyArgs>(args?: SelectSubset<T, MurojaahLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MurojaahLogs.
     * @param {MurojaahLogsCreateArgs} args - Arguments to create a MurojaahLogs.
     * @example
     * // Create one MurojaahLogs
     * const MurojaahLogs = await prisma.murojaahLogs.create({
     *   data: {
     *     // ... data to create a MurojaahLogs
     *   }
     * })
     * 
     */
    create<T extends MurojaahLogsCreateArgs>(args: SelectSubset<T, MurojaahLogsCreateArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MurojaahLogs.
     * @param {MurojaahLogsCreateManyArgs} args - Arguments to create many MurojaahLogs.
     * @example
     * // Create many MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MurojaahLogsCreateManyArgs>(args?: SelectSubset<T, MurojaahLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MurojaahLogs and returns the data saved in the database.
     * @param {MurojaahLogsCreateManyAndReturnArgs} args - Arguments to create many MurojaahLogs.
     * @example
     * // Create many MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MurojaahLogs and only return the `id`
     * const murojaahLogsWithIdOnly = await prisma.murojaahLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MurojaahLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, MurojaahLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MurojaahLogs.
     * @param {MurojaahLogsDeleteArgs} args - Arguments to delete one MurojaahLogs.
     * @example
     * // Delete one MurojaahLogs
     * const MurojaahLogs = await prisma.murojaahLogs.delete({
     *   where: {
     *     // ... filter to delete one MurojaahLogs
     *   }
     * })
     * 
     */
    delete<T extends MurojaahLogsDeleteArgs>(args: SelectSubset<T, MurojaahLogsDeleteArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MurojaahLogs.
     * @param {MurojaahLogsUpdateArgs} args - Arguments to update one MurojaahLogs.
     * @example
     * // Update one MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MurojaahLogsUpdateArgs>(args: SelectSubset<T, MurojaahLogsUpdateArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MurojaahLogs.
     * @param {MurojaahLogsDeleteManyArgs} args - Arguments to filter MurojaahLogs to delete.
     * @example
     * // Delete a few MurojaahLogs
     * const { count } = await prisma.murojaahLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MurojaahLogsDeleteManyArgs>(args?: SelectSubset<T, MurojaahLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MurojaahLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MurojaahLogsUpdateManyArgs>(args: SelectSubset<T, MurojaahLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MurojaahLogs and returns the data updated in the database.
     * @param {MurojaahLogsUpdateManyAndReturnArgs} args - Arguments to update many MurojaahLogs.
     * @example
     * // Update many MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MurojaahLogs and only return the `id`
     * const murojaahLogsWithIdOnly = await prisma.murojaahLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MurojaahLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, MurojaahLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MurojaahLogs.
     * @param {MurojaahLogsUpsertArgs} args - Arguments to update or create a MurojaahLogs.
     * @example
     * // Update or create a MurojaahLogs
     * const murojaahLogs = await prisma.murojaahLogs.upsert({
     *   create: {
     *     // ... data to create a MurojaahLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MurojaahLogs we want to update
     *   }
     * })
     */
    upsert<T extends MurojaahLogsUpsertArgs>(args: SelectSubset<T, MurojaahLogsUpsertArgs<ExtArgs>>): Prisma__MurojaahLogsClient<$Result.GetResult<Prisma.$MurojaahLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MurojaahLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsCountArgs} args - Arguments to filter MurojaahLogs to count.
     * @example
     * // Count the number of MurojaahLogs
     * const count = await prisma.murojaahLogs.count({
     *   where: {
     *     // ... the filter for the MurojaahLogs we want to count
     *   }
     * })
    **/
    count<T extends MurojaahLogsCountArgs>(
      args?: Subset<T, MurojaahLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MurojaahLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MurojaahLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MurojaahLogsAggregateArgs>(args: Subset<T, MurojaahLogsAggregateArgs>): Prisma.PrismaPromise<GetMurojaahLogsAggregateType<T>>

    /**
     * Group by MurojaahLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MurojaahLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MurojaahLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MurojaahLogsGroupByArgs['orderBy'] }
        : { orderBy?: MurojaahLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MurojaahLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMurojaahLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MurojaahLogs model
   */
  readonly fields: MurojaahLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MurojaahLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MurojaahLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MurojaahLogsStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MurojaahLogsMusyrif<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MurojaahLogs model
   */
  interface MurojaahLogsFieldRefs {
    readonly id: FieldRef<"MurojaahLogs", 'String'>
    readonly student_id: FieldRef<"MurojaahLogs", 'String'>
    readonly musyrif_id: FieldRef<"MurojaahLogs", 'String'>
    readonly juz: FieldRef<"MurojaahLogs", 'Int'>
    readonly surah: FieldRef<"MurojaahLogs", 'String'>
    readonly from_ayah: FieldRef<"MurojaahLogs", 'Int'>
    readonly to_ayah: FieldRef<"MurojaahLogs", 'Int'>
    readonly submission_date: FieldRef<"MurojaahLogs", 'DateTime'>
    readonly assessment: FieldRef<"MurojaahLogs", 'Assessment'>
    readonly notes: FieldRef<"MurojaahLogs", 'String'>
    readonly isRepeat: FieldRef<"MurojaahLogs", 'Int'>
    readonly created_at: FieldRef<"MurojaahLogs", 'DateTime'>
    readonly updated_at: FieldRef<"MurojaahLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MurojaahLogs findUnique
   */
  export type MurojaahLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter, which MurojaahLogs to fetch.
     */
    where: MurojaahLogsWhereUniqueInput
  }

  /**
   * MurojaahLogs findUniqueOrThrow
   */
  export type MurojaahLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter, which MurojaahLogs to fetch.
     */
    where: MurojaahLogsWhereUniqueInput
  }

  /**
   * MurojaahLogs findFirst
   */
  export type MurojaahLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter, which MurojaahLogs to fetch.
     */
    where?: MurojaahLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MurojaahLogs to fetch.
     */
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MurojaahLogs.
     */
    cursor?: MurojaahLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MurojaahLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MurojaahLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MurojaahLogs.
     */
    distinct?: MurojaahLogsScalarFieldEnum | MurojaahLogsScalarFieldEnum[]
  }

  /**
   * MurojaahLogs findFirstOrThrow
   */
  export type MurojaahLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter, which MurojaahLogs to fetch.
     */
    where?: MurojaahLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MurojaahLogs to fetch.
     */
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MurojaahLogs.
     */
    cursor?: MurojaahLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MurojaahLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MurojaahLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MurojaahLogs.
     */
    distinct?: MurojaahLogsScalarFieldEnum | MurojaahLogsScalarFieldEnum[]
  }

  /**
   * MurojaahLogs findMany
   */
  export type MurojaahLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter, which MurojaahLogs to fetch.
     */
    where?: MurojaahLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MurojaahLogs to fetch.
     */
    orderBy?: MurojaahLogsOrderByWithRelationInput | MurojaahLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MurojaahLogs.
     */
    cursor?: MurojaahLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MurojaahLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MurojaahLogs.
     */
    skip?: number
    distinct?: MurojaahLogsScalarFieldEnum | MurojaahLogsScalarFieldEnum[]
  }

  /**
   * MurojaahLogs create
   */
  export type MurojaahLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a MurojaahLogs.
     */
    data: XOR<MurojaahLogsCreateInput, MurojaahLogsUncheckedCreateInput>
  }

  /**
   * MurojaahLogs createMany
   */
  export type MurojaahLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MurojaahLogs.
     */
    data: MurojaahLogsCreateManyInput | MurojaahLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MurojaahLogs createManyAndReturn
   */
  export type MurojaahLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * The data used to create many MurojaahLogs.
     */
    data: MurojaahLogsCreateManyInput | MurojaahLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MurojaahLogs update
   */
  export type MurojaahLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a MurojaahLogs.
     */
    data: XOR<MurojaahLogsUpdateInput, MurojaahLogsUncheckedUpdateInput>
    /**
     * Choose, which MurojaahLogs to update.
     */
    where: MurojaahLogsWhereUniqueInput
  }

  /**
   * MurojaahLogs updateMany
   */
  export type MurojaahLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MurojaahLogs.
     */
    data: XOR<MurojaahLogsUpdateManyMutationInput, MurojaahLogsUncheckedUpdateManyInput>
    /**
     * Filter which MurojaahLogs to update
     */
    where?: MurojaahLogsWhereInput
    /**
     * Limit how many MurojaahLogs to update.
     */
    limit?: number
  }

  /**
   * MurojaahLogs updateManyAndReturn
   */
  export type MurojaahLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * The data used to update MurojaahLogs.
     */
    data: XOR<MurojaahLogsUpdateManyMutationInput, MurojaahLogsUncheckedUpdateManyInput>
    /**
     * Filter which MurojaahLogs to update
     */
    where?: MurojaahLogsWhereInput
    /**
     * Limit how many MurojaahLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MurojaahLogs upsert
   */
  export type MurojaahLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the MurojaahLogs to update in case it exists.
     */
    where: MurojaahLogsWhereUniqueInput
    /**
     * In case the MurojaahLogs found by the `where` argument doesn't exist, create a new MurojaahLogs with this data.
     */
    create: XOR<MurojaahLogsCreateInput, MurojaahLogsUncheckedCreateInput>
    /**
     * In case the MurojaahLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MurojaahLogsUpdateInput, MurojaahLogsUncheckedUpdateInput>
  }

  /**
   * MurojaahLogs delete
   */
  export type MurojaahLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
    /**
     * Filter which MurojaahLogs to delete.
     */
    where: MurojaahLogsWhereUniqueInput
  }

  /**
   * MurojaahLogs deleteMany
   */
  export type MurojaahLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MurojaahLogs to delete
     */
    where?: MurojaahLogsWhereInput
    /**
     * Limit how many MurojaahLogs to delete.
     */
    limit?: number
  }

  /**
   * MurojaahLogs without action
   */
  export type MurojaahLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MurojaahLogs
     */
    select?: MurojaahLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MurojaahLogs
     */
    omit?: MurojaahLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MurojaahLogsInclude<ExtArgs> | null
  }


  /**
   * Model Surah
   */

  export type AggregateSurah = {
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  export type SurahAvgAggregateOutputType = {
    surah_number: number | null
    ayah_counts: number | null
    juz: number | null
  }

  export type SurahSumAggregateOutputType = {
    surah_number: number | null
    ayah_counts: number | null
    juz: number[]
  }

  export type SurahMinAggregateOutputType = {
    id: string | null
    name: string | null
    surah_number: number | null
    arabic_name: string | null
    ayah_counts: number | null
    revelation_type: $Enums.Revelation | null
  }

  export type SurahMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surah_number: number | null
    arabic_name: string | null
    ayah_counts: number | null
    revelation_type: $Enums.Revelation | null
  }

  export type SurahCountAggregateOutputType = {
    id: number
    name: number
    surah_number: number
    arabic_name: number
    ayah_counts: number
    revelation_type: number
    juz: number
    _all: number
  }


  export type SurahAvgAggregateInputType = {
    surah_number?: true
    ayah_counts?: true
    juz?: true
  }

  export type SurahSumAggregateInputType = {
    surah_number?: true
    ayah_counts?: true
    juz?: true
  }

  export type SurahMinAggregateInputType = {
    id?: true
    name?: true
    surah_number?: true
    arabic_name?: true
    ayah_counts?: true
    revelation_type?: true
  }

  export type SurahMaxAggregateInputType = {
    id?: true
    name?: true
    surah_number?: true
    arabic_name?: true
    ayah_counts?: true
    revelation_type?: true
  }

  export type SurahCountAggregateInputType = {
    id?: true
    name?: true
    surah_number?: true
    arabic_name?: true
    ayah_counts?: true
    revelation_type?: true
    juz?: true
    _all?: true
  }

  export type SurahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surah to aggregate.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surahs
    **/
    _count?: true | SurahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurahMaxAggregateInputType
  }

  export type GetSurahAggregateType<T extends SurahAggregateArgs> = {
        [P in keyof T & keyof AggregateSurah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurah[P]>
      : GetScalarType<T[P], AggregateSurah[P]>
  }




  export type SurahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurahWhereInput
    orderBy?: SurahOrderByWithAggregationInput | SurahOrderByWithAggregationInput[]
    by: SurahScalarFieldEnum[] | SurahScalarFieldEnum
    having?: SurahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurahCountAggregateInputType | true
    _avg?: SurahAvgAggregateInputType
    _sum?: SurahSumAggregateInputType
    _min?: SurahMinAggregateInputType
    _max?: SurahMaxAggregateInputType
  }

  export type SurahGroupByOutputType = {
    id: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type: $Enums.Revelation
    juz: number[]
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  type GetSurahGroupByPayload<T extends SurahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurahGroupByOutputType[P]>
            : GetScalarType<T[P], SurahGroupByOutputType[P]>
        }
      >
    >


  export type SurahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surah_number?: boolean
    arabic_name?: boolean
    ayah_counts?: boolean
    revelation_type?: boolean
    juz?: boolean
    Ayah?: boolean | Surah$AyahArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surah_number?: boolean
    arabic_name?: boolean
    ayah_counts?: boolean
    revelation_type?: boolean
    juz?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surah_number?: boolean
    arabic_name?: boolean
    ayah_counts?: boolean
    revelation_type?: boolean
    juz?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectScalar = {
    id?: boolean
    name?: boolean
    surah_number?: boolean
    arabic_name?: boolean
    ayah_counts?: boolean
    revelation_type?: boolean
    juz?: boolean
  }

  export type SurahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surah_number" | "arabic_name" | "ayah_counts" | "revelation_type" | "juz", ExtArgs["result"]["surah"]>
  export type SurahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ayah?: boolean | Surah$AyahArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SurahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SurahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surah"
    objects: {
      Ayah: Prisma.$AyahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      surah_number: number
      arabic_name: string
      ayah_counts: number
      revelation_type: $Enums.Revelation
      juz: number[]
    }, ExtArgs["result"]["surah"]>
    composites: {}
  }

  type SurahGetPayload<S extends boolean | null | undefined | SurahDefaultArgs> = $Result.GetResult<Prisma.$SurahPayload, S>

  type SurahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurahCountAggregateInputType | true
    }

  export interface SurahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surah'], meta: { name: 'Surah' } }
    /**
     * Find zero or one Surah that matches the filter.
     * @param {SurahFindUniqueArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurahFindUniqueArgs>(args: SelectSubset<T, SurahFindUniqueArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurahFindUniqueOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurahFindUniqueOrThrowArgs>(args: SelectSubset<T, SurahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurahFindFirstArgs>(args?: SelectSubset<T, SurahFindFirstArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurahFindFirstOrThrowArgs>(args?: SelectSubset<T, SurahFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surahs
     * const surahs = await prisma.surah.findMany()
     * 
     * // Get first 10 Surahs
     * const surahs = await prisma.surah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surahWithIdOnly = await prisma.surah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurahFindManyArgs>(args?: SelectSubset<T, SurahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surah.
     * @param {SurahCreateArgs} args - Arguments to create a Surah.
     * @example
     * // Create one Surah
     * const Surah = await prisma.surah.create({
     *   data: {
     *     // ... data to create a Surah
     *   }
     * })
     * 
     */
    create<T extends SurahCreateArgs>(args: SelectSubset<T, SurahCreateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surahs.
     * @param {SurahCreateManyArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurahCreateManyArgs>(args?: SelectSubset<T, SurahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surahs and returns the data saved in the database.
     * @param {SurahCreateManyAndReturnArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurahCreateManyAndReturnArgs>(args?: SelectSubset<T, SurahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Surah.
     * @param {SurahDeleteArgs} args - Arguments to delete one Surah.
     * @example
     * // Delete one Surah
     * const Surah = await prisma.surah.delete({
     *   where: {
     *     // ... filter to delete one Surah
     *   }
     * })
     * 
     */
    delete<T extends SurahDeleteArgs>(args: SelectSubset<T, SurahDeleteArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surah.
     * @param {SurahUpdateArgs} args - Arguments to update one Surah.
     * @example
     * // Update one Surah
     * const surah = await prisma.surah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurahUpdateArgs>(args: SelectSubset<T, SurahUpdateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surahs.
     * @param {SurahDeleteManyArgs} args - Arguments to filter Surahs to delete.
     * @example
     * // Delete a few Surahs
     * const { count } = await prisma.surah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurahDeleteManyArgs>(args?: SelectSubset<T, SurahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurahUpdateManyArgs>(args: SelectSubset<T, SurahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs and returns the data updated in the database.
     * @param {SurahUpdateManyAndReturnArgs} args - Arguments to update many Surahs.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurahUpdateManyAndReturnArgs>(args: SelectSubset<T, SurahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Surah.
     * @param {SurahUpsertArgs} args - Arguments to update or create a Surah.
     * @example
     * // Update or create a Surah
     * const surah = await prisma.surah.upsert({
     *   create: {
     *     // ... data to create a Surah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surah we want to update
     *   }
     * })
     */
    upsert<T extends SurahUpsertArgs>(args: SelectSubset<T, SurahUpsertArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahCountArgs} args - Arguments to filter Surahs to count.
     * @example
     * // Count the number of Surahs
     * const count = await prisma.surah.count({
     *   where: {
     *     // ... the filter for the Surahs we want to count
     *   }
     * })
    **/
    count<T extends SurahCountArgs>(
      args?: Subset<T, SurahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurahAggregateArgs>(args: Subset<T, SurahAggregateArgs>): Prisma.PrismaPromise<GetSurahAggregateType<T>>

    /**
     * Group by Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurahGroupByArgs['orderBy'] }
        : { orderBy?: SurahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surah model
   */
  readonly fields: SurahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ayah<T extends Surah$AyahArgs<ExtArgs> = {}>(args?: Subset<T, Surah$AyahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surah model
   */
  interface SurahFieldRefs {
    readonly id: FieldRef<"Surah", 'String'>
    readonly name: FieldRef<"Surah", 'String'>
    readonly surah_number: FieldRef<"Surah", 'Int'>
    readonly arabic_name: FieldRef<"Surah", 'String'>
    readonly ayah_counts: FieldRef<"Surah", 'Int'>
    readonly revelation_type: FieldRef<"Surah", 'Revelation'>
    readonly juz: FieldRef<"Surah", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * Surah findUnique
   */
  export type SurahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findUniqueOrThrow
   */
  export type SurahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findFirst
   */
  export type SurahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findFirstOrThrow
   */
  export type SurahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findMany
   */
  export type SurahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surahs to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah create
   */
  export type SurahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to create a Surah.
     */
    data: XOR<SurahCreateInput, SurahUncheckedCreateInput>
  }

  /**
   * Surah createMany
   */
  export type SurahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah createManyAndReturn
   */
  export type SurahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah update
   */
  export type SurahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to update a Surah.
     */
    data: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
    /**
     * Choose, which Surah to update.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah updateMany
   */
  export type SurahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah updateManyAndReturn
   */
  export type SurahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah upsert
   */
  export type SurahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The filter to search for the Surah to update in case it exists.
     */
    where: SurahWhereUniqueInput
    /**
     * In case the Surah found by the `where` argument doesn't exist, create a new Surah with this data.
     */
    create: XOR<SurahCreateInput, SurahUncheckedCreateInput>
    /**
     * In case the Surah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
  }

  /**
   * Surah delete
   */
  export type SurahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter which Surah to delete.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah deleteMany
   */
  export type SurahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surahs to delete
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to delete.
     */
    limit?: number
  }

  /**
   * Surah.Ayah
   */
  export type Surah$AyahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    cursor?: AyahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Surah without action
   */
  export type SurahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
  }


  /**
   * Model Ayah
   */

  export type AggregateAyah = {
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  export type AyahAvgAggregateOutputType = {
    ayah_number: number | null
    juz_number: number | null
  }

  export type AyahSumAggregateOutputType = {
    ayah_number: number | null
    juz_number: number | null
  }

  export type AyahMinAggregateOutputType = {
    id: string | null
    surah_id: string | null
    ayah_number: number | null
    juz_number: number | null
    text: string | null
  }

  export type AyahMaxAggregateOutputType = {
    id: string | null
    surah_id: string | null
    ayah_number: number | null
    juz_number: number | null
    text: string | null
  }

  export type AyahCountAggregateOutputType = {
    id: number
    surah_id: number
    ayah_number: number
    juz_number: number
    text: number
    _all: number
  }


  export type AyahAvgAggregateInputType = {
    ayah_number?: true
    juz_number?: true
  }

  export type AyahSumAggregateInputType = {
    ayah_number?: true
    juz_number?: true
  }

  export type AyahMinAggregateInputType = {
    id?: true
    surah_id?: true
    ayah_number?: true
    juz_number?: true
    text?: true
  }

  export type AyahMaxAggregateInputType = {
    id?: true
    surah_id?: true
    ayah_number?: true
    juz_number?: true
    text?: true
  }

  export type AyahCountAggregateInputType = {
    id?: true
    surah_id?: true
    ayah_number?: true
    juz_number?: true
    text?: true
    _all?: true
  }

  export type AyahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayah to aggregate.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayahs
    **/
    _count?: true | AyahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyahMaxAggregateInputType
  }

  export type GetAyahAggregateType<T extends AyahAggregateArgs> = {
        [P in keyof T & keyof AggregateAyah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyah[P]>
      : GetScalarType<T[P], AggregateAyah[P]>
  }




  export type AyahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithAggregationInput | AyahOrderByWithAggregationInput[]
    by: AyahScalarFieldEnum[] | AyahScalarFieldEnum
    having?: AyahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyahCountAggregateInputType | true
    _avg?: AyahAvgAggregateInputType
    _sum?: AyahSumAggregateInputType
    _min?: AyahMinAggregateInputType
    _max?: AyahMaxAggregateInputType
  }

  export type AyahGroupByOutputType = {
    id: string
    surah_id: string
    ayah_number: number
    juz_number: number
    text: string
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  type GetAyahGroupByPayload<T extends AyahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyahGroupByOutputType[P]>
            : GetScalarType<T[P], AyahGroupByOutputType[P]>
        }
      >
    >


  export type AyahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_id?: boolean
    ayah_number?: boolean
    juz_number?: boolean
    text?: boolean
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_id?: boolean
    ayah_number?: boolean
    juz_number?: boolean
    text?: boolean
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surah_id?: boolean
    ayah_number?: boolean
    juz_number?: boolean
    text?: boolean
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectScalar = {
    id?: boolean
    surah_id?: boolean
    ayah_number?: boolean
    juz_number?: boolean
    text?: boolean
  }

  export type AyahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surah_id" | "ayah_number" | "juz_number" | "text", ExtArgs["result"]["ayah"]>
  export type AyahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AyahSurah?: boolean | SurahDefaultArgs<ExtArgs>
  }

  export type $AyahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayah"
    objects: {
      AyahSurah: Prisma.$SurahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surah_id: string
      ayah_number: number
      juz_number: number
      text: string
    }, ExtArgs["result"]["ayah"]>
    composites: {}
  }

  type AyahGetPayload<S extends boolean | null | undefined | AyahDefaultArgs> = $Result.GetResult<Prisma.$AyahPayload, S>

  type AyahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyahCountAggregateInputType | true
    }

  export interface AyahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayah'], meta: { name: 'Ayah' } }
    /**
     * Find zero or one Ayah that matches the filter.
     * @param {AyahFindUniqueArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyahFindUniqueArgs>(args: SelectSubset<T, AyahFindUniqueArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ayah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyahFindUniqueOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyahFindUniqueOrThrowArgs>(args: SelectSubset<T, AyahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyahFindFirstArgs>(args?: SelectSubset<T, AyahFindFirstArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyahFindFirstOrThrowArgs>(args?: SelectSubset<T, AyahFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ayahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayahs
     * const ayahs = await prisma.ayah.findMany()
     * 
     * // Get first 10 Ayahs
     * const ayahs = await prisma.ayah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayahWithIdOnly = await prisma.ayah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyahFindManyArgs>(args?: SelectSubset<T, AyahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ayah.
     * @param {AyahCreateArgs} args - Arguments to create a Ayah.
     * @example
     * // Create one Ayah
     * const Ayah = await prisma.ayah.create({
     *   data: {
     *     // ... data to create a Ayah
     *   }
     * })
     * 
     */
    create<T extends AyahCreateArgs>(args: SelectSubset<T, AyahCreateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ayahs.
     * @param {AyahCreateManyArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyahCreateManyArgs>(args?: SelectSubset<T, AyahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ayahs and returns the data saved in the database.
     * @param {AyahCreateManyAndReturnArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AyahCreateManyAndReturnArgs>(args?: SelectSubset<T, AyahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ayah.
     * @param {AyahDeleteArgs} args - Arguments to delete one Ayah.
     * @example
     * // Delete one Ayah
     * const Ayah = await prisma.ayah.delete({
     *   where: {
     *     // ... filter to delete one Ayah
     *   }
     * })
     * 
     */
    delete<T extends AyahDeleteArgs>(args: SelectSubset<T, AyahDeleteArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ayah.
     * @param {AyahUpdateArgs} args - Arguments to update one Ayah.
     * @example
     * // Update one Ayah
     * const ayah = await prisma.ayah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyahUpdateArgs>(args: SelectSubset<T, AyahUpdateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ayahs.
     * @param {AyahDeleteManyArgs} args - Arguments to filter Ayahs to delete.
     * @example
     * // Delete a few Ayahs
     * const { count } = await prisma.ayah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyahDeleteManyArgs>(args?: SelectSubset<T, AyahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyahUpdateManyArgs>(args: SelectSubset<T, AyahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs and returns the data updated in the database.
     * @param {AyahUpdateManyAndReturnArgs} args - Arguments to update many Ayahs.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AyahUpdateManyAndReturnArgs>(args: SelectSubset<T, AyahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ayah.
     * @param {AyahUpsertArgs} args - Arguments to update or create a Ayah.
     * @example
     * // Update or create a Ayah
     * const ayah = await prisma.ayah.upsert({
     *   create: {
     *     // ... data to create a Ayah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayah we want to update
     *   }
     * })
     */
    upsert<T extends AyahUpsertArgs>(args: SelectSubset<T, AyahUpsertArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahCountArgs} args - Arguments to filter Ayahs to count.
     * @example
     * // Count the number of Ayahs
     * const count = await prisma.ayah.count({
     *   where: {
     *     // ... the filter for the Ayahs we want to count
     *   }
     * })
    **/
    count<T extends AyahCountArgs>(
      args?: Subset<T, AyahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AyahAggregateArgs>(args: Subset<T, AyahAggregateArgs>): Prisma.PrismaPromise<GetAyahAggregateType<T>>

    /**
     * Group by Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AyahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyahGroupByArgs['orderBy'] }
        : { orderBy?: AyahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AyahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayah model
   */
  readonly fields: AyahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AyahSurah<T extends SurahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurahDefaultArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ayah model
   */
  interface AyahFieldRefs {
    readonly id: FieldRef<"Ayah", 'String'>
    readonly surah_id: FieldRef<"Ayah", 'String'>
    readonly ayah_number: FieldRef<"Ayah", 'Int'>
    readonly juz_number: FieldRef<"Ayah", 'Int'>
    readonly text: FieldRef<"Ayah", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ayah findUnique
   */
  export type AyahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findUniqueOrThrow
   */
  export type AyahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findFirst
   */
  export type AyahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findFirstOrThrow
   */
  export type AyahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findMany
   */
  export type AyahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayahs to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah create
   */
  export type AyahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to create a Ayah.
     */
    data: XOR<AyahCreateInput, AyahUncheckedCreateInput>
  }

  /**
   * Ayah createMany
   */
  export type AyahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayah createManyAndReturn
   */
  export type AyahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah update
   */
  export type AyahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to update a Ayah.
     */
    data: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
    /**
     * Choose, which Ayah to update.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah updateMany
   */
  export type AyahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
  }

  /**
   * Ayah updateManyAndReturn
   */
  export type AyahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah upsert
   */
  export type AyahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The filter to search for the Ayah to update in case it exists.
     */
    where: AyahWhereUniqueInput
    /**
     * In case the Ayah found by the `where` argument doesn't exist, create a new Ayah with this data.
     */
    create: XOR<AyahCreateInput, AyahUncheckedCreateInput>
    /**
     * In case the Ayah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
  }

  /**
   * Ayah delete
   */
  export type AyahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter which Ayah to delete.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah deleteMany
   */
  export type AyahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayahs to delete
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to delete.
     */
    limit?: number
  }

  /**
   * Ayah without action
   */
  export type AyahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
  }


  /**
   * Model Juz
   */

  export type AggregateJuz = {
    _count: JuzCountAggregateOutputType | null
    _avg: JuzAvgAggregateOutputType | null
    _sum: JuzSumAggregateOutputType | null
    _min: JuzMinAggregateOutputType | null
    _max: JuzMaxAggregateOutputType | null
  }

  export type JuzAvgAggregateOutputType = {
    juz: number | null
    start_ayah: number | null
    end_ayah: number | null
  }

  export type JuzSumAggregateOutputType = {
    juz: number | null
    start_ayah: number | null
    end_ayah: number | null
  }

  export type JuzMinAggregateOutputType = {
    id: string | null
    juz: number | null
    start_surah: string | null
    start_ayah: number | null
    end_surah: string | null
    end_ayah: number | null
  }

  export type JuzMaxAggregateOutputType = {
    id: string | null
    juz: number | null
    start_surah: string | null
    start_ayah: number | null
    end_surah: string | null
    end_ayah: number | null
  }

  export type JuzCountAggregateOutputType = {
    id: number
    juz: number
    start_surah: number
    start_ayah: number
    end_surah: number
    end_ayah: number
    _all: number
  }


  export type JuzAvgAggregateInputType = {
    juz?: true
    start_ayah?: true
    end_ayah?: true
  }

  export type JuzSumAggregateInputType = {
    juz?: true
    start_ayah?: true
    end_ayah?: true
  }

  export type JuzMinAggregateInputType = {
    id?: true
    juz?: true
    start_surah?: true
    start_ayah?: true
    end_surah?: true
    end_ayah?: true
  }

  export type JuzMaxAggregateInputType = {
    id?: true
    juz?: true
    start_surah?: true
    start_ayah?: true
    end_surah?: true
    end_ayah?: true
  }

  export type JuzCountAggregateInputType = {
    id?: true
    juz?: true
    start_surah?: true
    start_ayah?: true
    end_surah?: true
    end_ayah?: true
    _all?: true
  }

  export type JuzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juz to aggregate.
     */
    where?: JuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juzs to fetch.
     */
    orderBy?: JuzOrderByWithRelationInput | JuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juzs
    **/
    _count?: true | JuzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuzMaxAggregateInputType
  }

  export type GetJuzAggregateType<T extends JuzAggregateArgs> = {
        [P in keyof T & keyof AggregateJuz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuz[P]>
      : GetScalarType<T[P], AggregateJuz[P]>
  }




  export type JuzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuzWhereInput
    orderBy?: JuzOrderByWithAggregationInput | JuzOrderByWithAggregationInput[]
    by: JuzScalarFieldEnum[] | JuzScalarFieldEnum
    having?: JuzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuzCountAggregateInputType | true
    _avg?: JuzAvgAggregateInputType
    _sum?: JuzSumAggregateInputType
    _min?: JuzMinAggregateInputType
    _max?: JuzMaxAggregateInputType
  }

  export type JuzGroupByOutputType = {
    id: string
    juz: number
    start_surah: string
    start_ayah: number
    end_surah: string
    end_ayah: number
    _count: JuzCountAggregateOutputType | null
    _avg: JuzAvgAggregateOutputType | null
    _sum: JuzSumAggregateOutputType | null
    _min: JuzMinAggregateOutputType | null
    _max: JuzMaxAggregateOutputType | null
  }

  type GetJuzGroupByPayload<T extends JuzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuzGroupByOutputType[P]>
            : GetScalarType<T[P], JuzGroupByOutputType[P]>
        }
      >
    >


  export type JuzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    juz?: boolean
    start_surah?: boolean
    start_ayah?: boolean
    end_surah?: boolean
    end_ayah?: boolean
  }, ExtArgs["result"]["juz"]>

  export type JuzSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    juz?: boolean
    start_surah?: boolean
    start_ayah?: boolean
    end_surah?: boolean
    end_ayah?: boolean
  }, ExtArgs["result"]["juz"]>

  export type JuzSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    juz?: boolean
    start_surah?: boolean
    start_ayah?: boolean
    end_surah?: boolean
    end_ayah?: boolean
  }, ExtArgs["result"]["juz"]>

  export type JuzSelectScalar = {
    id?: boolean
    juz?: boolean
    start_surah?: boolean
    start_ayah?: boolean
    end_surah?: boolean
    end_ayah?: boolean
  }

  export type JuzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "juz" | "start_surah" | "start_ayah" | "end_surah" | "end_ayah", ExtArgs["result"]["juz"]>

  export type $JuzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Juz"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      juz: number
      start_surah: string
      start_ayah: number
      end_surah: string
      end_ayah: number
    }, ExtArgs["result"]["juz"]>
    composites: {}
  }

  type JuzGetPayload<S extends boolean | null | undefined | JuzDefaultArgs> = $Result.GetResult<Prisma.$JuzPayload, S>

  type JuzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuzCountAggregateInputType | true
    }

  export interface JuzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Juz'], meta: { name: 'Juz' } }
    /**
     * Find zero or one Juz that matches the filter.
     * @param {JuzFindUniqueArgs} args - Arguments to find a Juz
     * @example
     * // Get one Juz
     * const juz = await prisma.juz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuzFindUniqueArgs>(args: SelectSubset<T, JuzFindUniqueArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuzFindUniqueOrThrowArgs} args - Arguments to find a Juz
     * @example
     * // Get one Juz
     * const juz = await prisma.juz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuzFindUniqueOrThrowArgs>(args: SelectSubset<T, JuzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzFindFirstArgs} args - Arguments to find a Juz
     * @example
     * // Get one Juz
     * const juz = await prisma.juz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuzFindFirstArgs>(args?: SelectSubset<T, JuzFindFirstArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzFindFirstOrThrowArgs} args - Arguments to find a Juz
     * @example
     * // Get one Juz
     * const juz = await prisma.juz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuzFindFirstOrThrowArgs>(args?: SelectSubset<T, JuzFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juzs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juzs
     * const juzs = await prisma.juz.findMany()
     * 
     * // Get first 10 Juzs
     * const juzs = await prisma.juz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juzWithIdOnly = await prisma.juz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuzFindManyArgs>(args?: SelectSubset<T, JuzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juz.
     * @param {JuzCreateArgs} args - Arguments to create a Juz.
     * @example
     * // Create one Juz
     * const Juz = await prisma.juz.create({
     *   data: {
     *     // ... data to create a Juz
     *   }
     * })
     * 
     */
    create<T extends JuzCreateArgs>(args: SelectSubset<T, JuzCreateArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juzs.
     * @param {JuzCreateManyArgs} args - Arguments to create many Juzs.
     * @example
     * // Create many Juzs
     * const juz = await prisma.juz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuzCreateManyArgs>(args?: SelectSubset<T, JuzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juzs and returns the data saved in the database.
     * @param {JuzCreateManyAndReturnArgs} args - Arguments to create many Juzs.
     * @example
     * // Create many Juzs
     * const juz = await prisma.juz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juzs and only return the `id`
     * const juzWithIdOnly = await prisma.juz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuzCreateManyAndReturnArgs>(args?: SelectSubset<T, JuzCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juz.
     * @param {JuzDeleteArgs} args - Arguments to delete one Juz.
     * @example
     * // Delete one Juz
     * const Juz = await prisma.juz.delete({
     *   where: {
     *     // ... filter to delete one Juz
     *   }
     * })
     * 
     */
    delete<T extends JuzDeleteArgs>(args: SelectSubset<T, JuzDeleteArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juz.
     * @param {JuzUpdateArgs} args - Arguments to update one Juz.
     * @example
     * // Update one Juz
     * const juz = await prisma.juz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuzUpdateArgs>(args: SelectSubset<T, JuzUpdateArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juzs.
     * @param {JuzDeleteManyArgs} args - Arguments to filter Juzs to delete.
     * @example
     * // Delete a few Juzs
     * const { count } = await prisma.juz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuzDeleteManyArgs>(args?: SelectSubset<T, JuzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juzs
     * const juz = await prisma.juz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuzUpdateManyArgs>(args: SelectSubset<T, JuzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juzs and returns the data updated in the database.
     * @param {JuzUpdateManyAndReturnArgs} args - Arguments to update many Juzs.
     * @example
     * // Update many Juzs
     * const juz = await prisma.juz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juzs and only return the `id`
     * const juzWithIdOnly = await prisma.juz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JuzUpdateManyAndReturnArgs>(args: SelectSubset<T, JuzUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juz.
     * @param {JuzUpsertArgs} args - Arguments to update or create a Juz.
     * @example
     * // Update or create a Juz
     * const juz = await prisma.juz.upsert({
     *   create: {
     *     // ... data to create a Juz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juz we want to update
     *   }
     * })
     */
    upsert<T extends JuzUpsertArgs>(args: SelectSubset<T, JuzUpsertArgs<ExtArgs>>): Prisma__JuzClient<$Result.GetResult<Prisma.$JuzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzCountArgs} args - Arguments to filter Juzs to count.
     * @example
     * // Count the number of Juzs
     * const count = await prisma.juz.count({
     *   where: {
     *     // ... the filter for the Juzs we want to count
     *   }
     * })
    **/
    count<T extends JuzCountArgs>(
      args?: Subset<T, JuzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JuzAggregateArgs>(args: Subset<T, JuzAggregateArgs>): Prisma.PrismaPromise<GetJuzAggregateType<T>>

    /**
     * Group by Juz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JuzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuzGroupByArgs['orderBy'] }
        : { orderBy?: JuzGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JuzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Juz model
   */
  readonly fields: JuzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Juz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Juz model
   */
  interface JuzFieldRefs {
    readonly id: FieldRef<"Juz", 'String'>
    readonly juz: FieldRef<"Juz", 'Int'>
    readonly start_surah: FieldRef<"Juz", 'String'>
    readonly start_ayah: FieldRef<"Juz", 'Int'>
    readonly end_surah: FieldRef<"Juz", 'String'>
    readonly end_ayah: FieldRef<"Juz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Juz findUnique
   */
  export type JuzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter, which Juz to fetch.
     */
    where: JuzWhereUniqueInput
  }

  /**
   * Juz findUniqueOrThrow
   */
  export type JuzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter, which Juz to fetch.
     */
    where: JuzWhereUniqueInput
  }

  /**
   * Juz findFirst
   */
  export type JuzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter, which Juz to fetch.
     */
    where?: JuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juzs to fetch.
     */
    orderBy?: JuzOrderByWithRelationInput | JuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juzs.
     */
    cursor?: JuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juzs.
     */
    distinct?: JuzScalarFieldEnum | JuzScalarFieldEnum[]
  }

  /**
   * Juz findFirstOrThrow
   */
  export type JuzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter, which Juz to fetch.
     */
    where?: JuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juzs to fetch.
     */
    orderBy?: JuzOrderByWithRelationInput | JuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juzs.
     */
    cursor?: JuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juzs.
     */
    distinct?: JuzScalarFieldEnum | JuzScalarFieldEnum[]
  }

  /**
   * Juz findMany
   */
  export type JuzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter, which Juzs to fetch.
     */
    where?: JuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juzs to fetch.
     */
    orderBy?: JuzOrderByWithRelationInput | JuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juzs.
     */
    cursor?: JuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juzs.
     */
    skip?: number
    distinct?: JuzScalarFieldEnum | JuzScalarFieldEnum[]
  }

  /**
   * Juz create
   */
  export type JuzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * The data needed to create a Juz.
     */
    data: XOR<JuzCreateInput, JuzUncheckedCreateInput>
  }

  /**
   * Juz createMany
   */
  export type JuzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juzs.
     */
    data: JuzCreateManyInput | JuzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juz createManyAndReturn
   */
  export type JuzCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * The data used to create many Juzs.
     */
    data: JuzCreateManyInput | JuzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juz update
   */
  export type JuzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * The data needed to update a Juz.
     */
    data: XOR<JuzUpdateInput, JuzUncheckedUpdateInput>
    /**
     * Choose, which Juz to update.
     */
    where: JuzWhereUniqueInput
  }

  /**
   * Juz updateMany
   */
  export type JuzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juzs.
     */
    data: XOR<JuzUpdateManyMutationInput, JuzUncheckedUpdateManyInput>
    /**
     * Filter which Juzs to update
     */
    where?: JuzWhereInput
    /**
     * Limit how many Juzs to update.
     */
    limit?: number
  }

  /**
   * Juz updateManyAndReturn
   */
  export type JuzUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * The data used to update Juzs.
     */
    data: XOR<JuzUpdateManyMutationInput, JuzUncheckedUpdateManyInput>
    /**
     * Filter which Juzs to update
     */
    where?: JuzWhereInput
    /**
     * Limit how many Juzs to update.
     */
    limit?: number
  }

  /**
   * Juz upsert
   */
  export type JuzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * The filter to search for the Juz to update in case it exists.
     */
    where: JuzWhereUniqueInput
    /**
     * In case the Juz found by the `where` argument doesn't exist, create a new Juz with this data.
     */
    create: XOR<JuzCreateInput, JuzUncheckedCreateInput>
    /**
     * In case the Juz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuzUpdateInput, JuzUncheckedUpdateInput>
  }

  /**
   * Juz delete
   */
  export type JuzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
    /**
     * Filter which Juz to delete.
     */
    where: JuzWhereUniqueInput
  }

  /**
   * Juz deleteMany
   */
  export type JuzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juzs to delete
     */
    where?: JuzWhereInput
    /**
     * Limit how many Juzs to delete.
     */
    limit?: number
  }

  /**
   * Juz without action
   */
  export type JuzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juz
     */
    select?: JuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juz
     */
    omit?: JuzOmit<ExtArgs> | null
  }


  /**
   * Model JuzEvaluation
   */

  export type AggregateJuzEvaluation = {
    _count: JuzEvaluationCountAggregateOutputType | null
    _avg: JuzEvaluationAvgAggregateOutputType | null
    _sum: JuzEvaluationSumAggregateOutputType | null
    _min: JuzEvaluationMinAggregateOutputType | null
    _max: JuzEvaluationMaxAggregateOutputType | null
  }

  export type JuzEvaluationAvgAggregateOutputType = {
    juz_number: number | null
  }

  export type JuzEvaluationSumAggregateOutputType = {
    juz_number: number | null
  }

  export type JuzEvaluationMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    juz_number: number | null
    evaluation_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JuzEvaluationMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    juz_number: number | null
    evaluation_date: Date | null
    assessment: $Enums.Assessment | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JuzEvaluationCountAggregateOutputType = {
    id: number
    student_id: number
    juz_number: number
    evaluation_date: number
    assessment: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JuzEvaluationAvgAggregateInputType = {
    juz_number?: true
  }

  export type JuzEvaluationSumAggregateInputType = {
    juz_number?: true
  }

  export type JuzEvaluationMinAggregateInputType = {
    id?: true
    student_id?: true
    juz_number?: true
    evaluation_date?: true
    assessment?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type JuzEvaluationMaxAggregateInputType = {
    id?: true
    student_id?: true
    juz_number?: true
    evaluation_date?: true
    assessment?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type JuzEvaluationCountAggregateInputType = {
    id?: true
    student_id?: true
    juz_number?: true
    evaluation_date?: true
    assessment?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JuzEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuzEvaluation to aggregate.
     */
    where?: JuzEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuzEvaluations to fetch.
     */
    orderBy?: JuzEvaluationOrderByWithRelationInput | JuzEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuzEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuzEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuzEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JuzEvaluations
    **/
    _count?: true | JuzEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuzEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuzEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuzEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuzEvaluationMaxAggregateInputType
  }

  export type GetJuzEvaluationAggregateType<T extends JuzEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateJuzEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuzEvaluation[P]>
      : GetScalarType<T[P], AggregateJuzEvaluation[P]>
  }




  export type JuzEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuzEvaluationWhereInput
    orderBy?: JuzEvaluationOrderByWithAggregationInput | JuzEvaluationOrderByWithAggregationInput[]
    by: JuzEvaluationScalarFieldEnum[] | JuzEvaluationScalarFieldEnum
    having?: JuzEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuzEvaluationCountAggregateInputType | true
    _avg?: JuzEvaluationAvgAggregateInputType
    _sum?: JuzEvaluationSumAggregateInputType
    _min?: JuzEvaluationMinAggregateInputType
    _max?: JuzEvaluationMaxAggregateInputType
  }

  export type JuzEvaluationGroupByOutputType = {
    id: string
    student_id: string
    juz_number: number
    evaluation_date: Date
    assessment: $Enums.Assessment
    notes: string
    created_at: Date
    updated_at: Date
    _count: JuzEvaluationCountAggregateOutputType | null
    _avg: JuzEvaluationAvgAggregateOutputType | null
    _sum: JuzEvaluationSumAggregateOutputType | null
    _min: JuzEvaluationMinAggregateOutputType | null
    _max: JuzEvaluationMaxAggregateOutputType | null
  }

  type GetJuzEvaluationGroupByPayload<T extends JuzEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuzEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuzEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuzEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], JuzEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type JuzEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    juz_number?: boolean
    evaluation_date?: boolean
    assessment?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juzEvaluation"]>

  export type JuzEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    juz_number?: boolean
    evaluation_date?: boolean
    assessment?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juzEvaluation"]>

  export type JuzEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    juz_number?: boolean
    evaluation_date?: boolean
    assessment?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juzEvaluation"]>

  export type JuzEvaluationSelectScalar = {
    id?: boolean
    student_id?: boolean
    juz_number?: boolean
    evaluation_date?: boolean
    assessment?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type JuzEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "juz_number" | "evaluation_date" | "assessment" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["juzEvaluation"]>
  export type JuzEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type JuzEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type JuzEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EvaluationStudent?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $JuzEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JuzEvaluation"
    objects: {
      EvaluationStudent: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      juz_number: number
      evaluation_date: Date
      assessment: $Enums.Assessment
      notes: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["juzEvaluation"]>
    composites: {}
  }

  type JuzEvaluationGetPayload<S extends boolean | null | undefined | JuzEvaluationDefaultArgs> = $Result.GetResult<Prisma.$JuzEvaluationPayload, S>

  type JuzEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuzEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuzEvaluationCountAggregateInputType | true
    }

  export interface JuzEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JuzEvaluation'], meta: { name: 'JuzEvaluation' } }
    /**
     * Find zero or one JuzEvaluation that matches the filter.
     * @param {JuzEvaluationFindUniqueArgs} args - Arguments to find a JuzEvaluation
     * @example
     * // Get one JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuzEvaluationFindUniqueArgs>(args: SelectSubset<T, JuzEvaluationFindUniqueArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JuzEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuzEvaluationFindUniqueOrThrowArgs} args - Arguments to find a JuzEvaluation
     * @example
     * // Get one JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuzEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, JuzEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuzEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationFindFirstArgs} args - Arguments to find a JuzEvaluation
     * @example
     * // Get one JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuzEvaluationFindFirstArgs>(args?: SelectSubset<T, JuzEvaluationFindFirstArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuzEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationFindFirstOrThrowArgs} args - Arguments to find a JuzEvaluation
     * @example
     * // Get one JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuzEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, JuzEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JuzEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JuzEvaluations
     * const juzEvaluations = await prisma.juzEvaluation.findMany()
     * 
     * // Get first 10 JuzEvaluations
     * const juzEvaluations = await prisma.juzEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juzEvaluationWithIdOnly = await prisma.juzEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuzEvaluationFindManyArgs>(args?: SelectSubset<T, JuzEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JuzEvaluation.
     * @param {JuzEvaluationCreateArgs} args - Arguments to create a JuzEvaluation.
     * @example
     * // Create one JuzEvaluation
     * const JuzEvaluation = await prisma.juzEvaluation.create({
     *   data: {
     *     // ... data to create a JuzEvaluation
     *   }
     * })
     * 
     */
    create<T extends JuzEvaluationCreateArgs>(args: SelectSubset<T, JuzEvaluationCreateArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JuzEvaluations.
     * @param {JuzEvaluationCreateManyArgs} args - Arguments to create many JuzEvaluations.
     * @example
     * // Create many JuzEvaluations
     * const juzEvaluation = await prisma.juzEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuzEvaluationCreateManyArgs>(args?: SelectSubset<T, JuzEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JuzEvaluations and returns the data saved in the database.
     * @param {JuzEvaluationCreateManyAndReturnArgs} args - Arguments to create many JuzEvaluations.
     * @example
     * // Create many JuzEvaluations
     * const juzEvaluation = await prisma.juzEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JuzEvaluations and only return the `id`
     * const juzEvaluationWithIdOnly = await prisma.juzEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuzEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, JuzEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JuzEvaluation.
     * @param {JuzEvaluationDeleteArgs} args - Arguments to delete one JuzEvaluation.
     * @example
     * // Delete one JuzEvaluation
     * const JuzEvaluation = await prisma.juzEvaluation.delete({
     *   where: {
     *     // ... filter to delete one JuzEvaluation
     *   }
     * })
     * 
     */
    delete<T extends JuzEvaluationDeleteArgs>(args: SelectSubset<T, JuzEvaluationDeleteArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JuzEvaluation.
     * @param {JuzEvaluationUpdateArgs} args - Arguments to update one JuzEvaluation.
     * @example
     * // Update one JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuzEvaluationUpdateArgs>(args: SelectSubset<T, JuzEvaluationUpdateArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JuzEvaluations.
     * @param {JuzEvaluationDeleteManyArgs} args - Arguments to filter JuzEvaluations to delete.
     * @example
     * // Delete a few JuzEvaluations
     * const { count } = await prisma.juzEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuzEvaluationDeleteManyArgs>(args?: SelectSubset<T, JuzEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuzEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JuzEvaluations
     * const juzEvaluation = await prisma.juzEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuzEvaluationUpdateManyArgs>(args: SelectSubset<T, JuzEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuzEvaluations and returns the data updated in the database.
     * @param {JuzEvaluationUpdateManyAndReturnArgs} args - Arguments to update many JuzEvaluations.
     * @example
     * // Update many JuzEvaluations
     * const juzEvaluation = await prisma.juzEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JuzEvaluations and only return the `id`
     * const juzEvaluationWithIdOnly = await prisma.juzEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JuzEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, JuzEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JuzEvaluation.
     * @param {JuzEvaluationUpsertArgs} args - Arguments to update or create a JuzEvaluation.
     * @example
     * // Update or create a JuzEvaluation
     * const juzEvaluation = await prisma.juzEvaluation.upsert({
     *   create: {
     *     // ... data to create a JuzEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JuzEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends JuzEvaluationUpsertArgs>(args: SelectSubset<T, JuzEvaluationUpsertArgs<ExtArgs>>): Prisma__JuzEvaluationClient<$Result.GetResult<Prisma.$JuzEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JuzEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationCountArgs} args - Arguments to filter JuzEvaluations to count.
     * @example
     * // Count the number of JuzEvaluations
     * const count = await prisma.juzEvaluation.count({
     *   where: {
     *     // ... the filter for the JuzEvaluations we want to count
     *   }
     * })
    **/
    count<T extends JuzEvaluationCountArgs>(
      args?: Subset<T, JuzEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuzEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JuzEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JuzEvaluationAggregateArgs>(args: Subset<T, JuzEvaluationAggregateArgs>): Prisma.PrismaPromise<GetJuzEvaluationAggregateType<T>>

    /**
     * Group by JuzEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuzEvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JuzEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuzEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: JuzEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JuzEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuzEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JuzEvaluation model
   */
  readonly fields: JuzEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JuzEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuzEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EvaluationStudent<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JuzEvaluation model
   */
  interface JuzEvaluationFieldRefs {
    readonly id: FieldRef<"JuzEvaluation", 'String'>
    readonly student_id: FieldRef<"JuzEvaluation", 'String'>
    readonly juz_number: FieldRef<"JuzEvaluation", 'Int'>
    readonly evaluation_date: FieldRef<"JuzEvaluation", 'DateTime'>
    readonly assessment: FieldRef<"JuzEvaluation", 'Assessment'>
    readonly notes: FieldRef<"JuzEvaluation", 'String'>
    readonly created_at: FieldRef<"JuzEvaluation", 'DateTime'>
    readonly updated_at: FieldRef<"JuzEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JuzEvaluation findUnique
   */
  export type JuzEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JuzEvaluation to fetch.
     */
    where: JuzEvaluationWhereUniqueInput
  }

  /**
   * JuzEvaluation findUniqueOrThrow
   */
  export type JuzEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JuzEvaluation to fetch.
     */
    where: JuzEvaluationWhereUniqueInput
  }

  /**
   * JuzEvaluation findFirst
   */
  export type JuzEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JuzEvaluation to fetch.
     */
    where?: JuzEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuzEvaluations to fetch.
     */
    orderBy?: JuzEvaluationOrderByWithRelationInput | JuzEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuzEvaluations.
     */
    cursor?: JuzEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuzEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuzEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuzEvaluations.
     */
    distinct?: JuzEvaluationScalarFieldEnum | JuzEvaluationScalarFieldEnum[]
  }

  /**
   * JuzEvaluation findFirstOrThrow
   */
  export type JuzEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JuzEvaluation to fetch.
     */
    where?: JuzEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuzEvaluations to fetch.
     */
    orderBy?: JuzEvaluationOrderByWithRelationInput | JuzEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuzEvaluations.
     */
    cursor?: JuzEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuzEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuzEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuzEvaluations.
     */
    distinct?: JuzEvaluationScalarFieldEnum | JuzEvaluationScalarFieldEnum[]
  }

  /**
   * JuzEvaluation findMany
   */
  export type JuzEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which JuzEvaluations to fetch.
     */
    where?: JuzEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuzEvaluations to fetch.
     */
    orderBy?: JuzEvaluationOrderByWithRelationInput | JuzEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JuzEvaluations.
     */
    cursor?: JuzEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuzEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuzEvaluations.
     */
    skip?: number
    distinct?: JuzEvaluationScalarFieldEnum | JuzEvaluationScalarFieldEnum[]
  }

  /**
   * JuzEvaluation create
   */
  export type JuzEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a JuzEvaluation.
     */
    data: XOR<JuzEvaluationCreateInput, JuzEvaluationUncheckedCreateInput>
  }

  /**
   * JuzEvaluation createMany
   */
  export type JuzEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JuzEvaluations.
     */
    data: JuzEvaluationCreateManyInput | JuzEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JuzEvaluation createManyAndReturn
   */
  export type JuzEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many JuzEvaluations.
     */
    data: JuzEvaluationCreateManyInput | JuzEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuzEvaluation update
   */
  export type JuzEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a JuzEvaluation.
     */
    data: XOR<JuzEvaluationUpdateInput, JuzEvaluationUncheckedUpdateInput>
    /**
     * Choose, which JuzEvaluation to update.
     */
    where: JuzEvaluationWhereUniqueInput
  }

  /**
   * JuzEvaluation updateMany
   */
  export type JuzEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JuzEvaluations.
     */
    data: XOR<JuzEvaluationUpdateManyMutationInput, JuzEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which JuzEvaluations to update
     */
    where?: JuzEvaluationWhereInput
    /**
     * Limit how many JuzEvaluations to update.
     */
    limit?: number
  }

  /**
   * JuzEvaluation updateManyAndReturn
   */
  export type JuzEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update JuzEvaluations.
     */
    data: XOR<JuzEvaluationUpdateManyMutationInput, JuzEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which JuzEvaluations to update
     */
    where?: JuzEvaluationWhereInput
    /**
     * Limit how many JuzEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuzEvaluation upsert
   */
  export type JuzEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the JuzEvaluation to update in case it exists.
     */
    where: JuzEvaluationWhereUniqueInput
    /**
     * In case the JuzEvaluation found by the `where` argument doesn't exist, create a new JuzEvaluation with this data.
     */
    create: XOR<JuzEvaluationCreateInput, JuzEvaluationUncheckedCreateInput>
    /**
     * In case the JuzEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuzEvaluationUpdateInput, JuzEvaluationUncheckedUpdateInput>
  }

  /**
   * JuzEvaluation delete
   */
  export type JuzEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
    /**
     * Filter which JuzEvaluation to delete.
     */
    where: JuzEvaluationWhereUniqueInput
  }

  /**
   * JuzEvaluation deleteMany
   */
  export type JuzEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuzEvaluations to delete
     */
    where?: JuzEvaluationWhereInput
    /**
     * Limit how many JuzEvaluations to delete.
     */
    limit?: number
  }

  /**
   * JuzEvaluation without action
   */
  export type JuzEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuzEvaluation
     */
    select?: JuzEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuzEvaluation
     */
    omit?: JuzEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuzEvaluationInclude<ExtArgs> | null
  }


  /**
   * Model MemorizationPlan
   */

  export type AggregateMemorizationPlan = {
    _count: MemorizationPlanCountAggregateOutputType | null
    _avg: MemorizationPlanAvgAggregateOutputType | null
    _sum: MemorizationPlanSumAggregateOutputType | null
    _min: MemorizationPlanMinAggregateOutputType | null
    _max: MemorizationPlanMaxAggregateOutputType | null
  }

  export type MemorizationPlanAvgAggregateOutputType = {
    juz_number: number | null
    page_number: number | null
    start_ayah: number | null
    end_ayah: number | null
  }

  export type MemorizationPlanSumAggregateOutputType = {
    juz_number: number | null
    page_number: number | null
    start_ayah: number | null
    end_ayah: number | null
  }

  export type MemorizationPlanMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    plan_type: $Enums.PlanType | null
    juz_number: number | null
    surah_id: string | null
    page_number: number | null
    start_ayah: number | null
    end_ayah: number | null
    target_date: Date | null
    assigned_by: string | null
    notes: string | null
    created_at: Date | null
  }

  export type MemorizationPlanMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    plan_type: $Enums.PlanType | null
    juz_number: number | null
    surah_id: string | null
    page_number: number | null
    start_ayah: number | null
    end_ayah: number | null
    target_date: Date | null
    assigned_by: string | null
    notes: string | null
    created_at: Date | null
  }

  export type MemorizationPlanCountAggregateOutputType = {
    id: number
    student_id: number
    plan_type: number
    juz_number: number
    surah_id: number
    page_number: number
    start_ayah: number
    end_ayah: number
    target_date: number
    assigned_by: number
    notes: number
    created_at: number
    _all: number
  }


  export type MemorizationPlanAvgAggregateInputType = {
    juz_number?: true
    page_number?: true
    start_ayah?: true
    end_ayah?: true
  }

  export type MemorizationPlanSumAggregateInputType = {
    juz_number?: true
    page_number?: true
    start_ayah?: true
    end_ayah?: true
  }

  export type MemorizationPlanMinAggregateInputType = {
    id?: true
    student_id?: true
    plan_type?: true
    juz_number?: true
    surah_id?: true
    page_number?: true
    start_ayah?: true
    end_ayah?: true
    target_date?: true
    assigned_by?: true
    notes?: true
    created_at?: true
  }

  export type MemorizationPlanMaxAggregateInputType = {
    id?: true
    student_id?: true
    plan_type?: true
    juz_number?: true
    surah_id?: true
    page_number?: true
    start_ayah?: true
    end_ayah?: true
    target_date?: true
    assigned_by?: true
    notes?: true
    created_at?: true
  }

  export type MemorizationPlanCountAggregateInputType = {
    id?: true
    student_id?: true
    plan_type?: true
    juz_number?: true
    surah_id?: true
    page_number?: true
    start_ayah?: true
    end_ayah?: true
    target_date?: true
    assigned_by?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type MemorizationPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorizationPlan to aggregate.
     */
    where?: MemorizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizationPlans to fetch.
     */
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemorizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemorizationPlans
    **/
    _count?: true | MemorizationPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemorizationPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemorizationPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemorizationPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemorizationPlanMaxAggregateInputType
  }

  export type GetMemorizationPlanAggregateType<T extends MemorizationPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMemorizationPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemorizationPlan[P]>
      : GetScalarType<T[P], AggregateMemorizationPlan[P]>
  }




  export type MemorizationPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorizationPlanWhereInput
    orderBy?: MemorizationPlanOrderByWithAggregationInput | MemorizationPlanOrderByWithAggregationInput[]
    by: MemorizationPlanScalarFieldEnum[] | MemorizationPlanScalarFieldEnum
    having?: MemorizationPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemorizationPlanCountAggregateInputType | true
    _avg?: MemorizationPlanAvgAggregateInputType
    _sum?: MemorizationPlanSumAggregateInputType
    _min?: MemorizationPlanMinAggregateInputType
    _max?: MemorizationPlanMaxAggregateInputType
  }

  export type MemorizationPlanGroupByOutputType = {
    id: string
    student_id: string
    plan_type: $Enums.PlanType
    juz_number: number | null
    surah_id: string | null
    page_number: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date
    assigned_by: string
    notes: string
    created_at: Date
    _count: MemorizationPlanCountAggregateOutputType | null
    _avg: MemorizationPlanAvgAggregateOutputType | null
    _sum: MemorizationPlanSumAggregateOutputType | null
    _min: MemorizationPlanMinAggregateOutputType | null
    _max: MemorizationPlanMaxAggregateOutputType | null
  }

  type GetMemorizationPlanGroupByPayload<T extends MemorizationPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemorizationPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemorizationPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemorizationPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MemorizationPlanGroupByOutputType[P]>
        }
      >
    >


  export type MemorizationPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    plan_type?: boolean
    juz_number?: boolean
    surah_id?: boolean
    page_number?: boolean
    start_ayah?: boolean
    end_ayah?: boolean
    target_date?: boolean
    assigned_by?: boolean
    notes?: boolean
    created_at?: boolean
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizationPlan"]>

  export type MemorizationPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    plan_type?: boolean
    juz_number?: boolean
    surah_id?: boolean
    page_number?: boolean
    start_ayah?: boolean
    end_ayah?: boolean
    target_date?: boolean
    assigned_by?: boolean
    notes?: boolean
    created_at?: boolean
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizationPlan"]>

  export type MemorizationPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    plan_type?: boolean
    juz_number?: boolean
    surah_id?: boolean
    page_number?: boolean
    start_ayah?: boolean
    end_ayah?: boolean
    target_date?: boolean
    assigned_by?: boolean
    notes?: boolean
    created_at?: boolean
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memorizationPlan"]>

  export type MemorizationPlanSelectScalar = {
    id?: boolean
    student_id?: boolean
    plan_type?: boolean
    juz_number?: boolean
    surah_id?: boolean
    page_number?: boolean
    start_ayah?: boolean
    end_ayah?: boolean
    target_date?: boolean
    assigned_by?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type MemorizationPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "plan_type" | "juz_number" | "surah_id" | "page_number" | "start_ayah" | "end_ayah" | "target_date" | "assigned_by" | "notes" | "created_at", ExtArgs["result"]["memorizationPlan"]>
  export type MemorizationPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemorizationPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemorizationPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MemorizingPlanStudents?: boolean | StudentDefaultArgs<ExtArgs>
    MemorizingPlanMusyrif?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemorizationPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemorizationPlan"
    objects: {
      MemorizingPlanStudents: Prisma.$StudentPayload<ExtArgs>
      MemorizingPlanMusyrif: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      plan_type: $Enums.PlanType
      juz_number: number | null
      surah_id: string | null
      page_number: number | null
      start_ayah: number
      end_ayah: number
      target_date: Date
      assigned_by: string
      notes: string
      created_at: Date
    }, ExtArgs["result"]["memorizationPlan"]>
    composites: {}
  }

  type MemorizationPlanGetPayload<S extends boolean | null | undefined | MemorizationPlanDefaultArgs> = $Result.GetResult<Prisma.$MemorizationPlanPayload, S>

  type MemorizationPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemorizationPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemorizationPlanCountAggregateInputType | true
    }

  export interface MemorizationPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemorizationPlan'], meta: { name: 'MemorizationPlan' } }
    /**
     * Find zero or one MemorizationPlan that matches the filter.
     * @param {MemorizationPlanFindUniqueArgs} args - Arguments to find a MemorizationPlan
     * @example
     * // Get one MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemorizationPlanFindUniqueArgs>(args: SelectSubset<T, MemorizationPlanFindUniqueArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemorizationPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemorizationPlanFindUniqueOrThrowArgs} args - Arguments to find a MemorizationPlan
     * @example
     * // Get one MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemorizationPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MemorizationPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemorizationPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanFindFirstArgs} args - Arguments to find a MemorizationPlan
     * @example
     * // Get one MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemorizationPlanFindFirstArgs>(args?: SelectSubset<T, MemorizationPlanFindFirstArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemorizationPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanFindFirstOrThrowArgs} args - Arguments to find a MemorizationPlan
     * @example
     * // Get one MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemorizationPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MemorizationPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemorizationPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemorizationPlans
     * const memorizationPlans = await prisma.memorizationPlan.findMany()
     * 
     * // Get first 10 MemorizationPlans
     * const memorizationPlans = await prisma.memorizationPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memorizationPlanWithIdOnly = await prisma.memorizationPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemorizationPlanFindManyArgs>(args?: SelectSubset<T, MemorizationPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemorizationPlan.
     * @param {MemorizationPlanCreateArgs} args - Arguments to create a MemorizationPlan.
     * @example
     * // Create one MemorizationPlan
     * const MemorizationPlan = await prisma.memorizationPlan.create({
     *   data: {
     *     // ... data to create a MemorizationPlan
     *   }
     * })
     * 
     */
    create<T extends MemorizationPlanCreateArgs>(args: SelectSubset<T, MemorizationPlanCreateArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemorizationPlans.
     * @param {MemorizationPlanCreateManyArgs} args - Arguments to create many MemorizationPlans.
     * @example
     * // Create many MemorizationPlans
     * const memorizationPlan = await prisma.memorizationPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemorizationPlanCreateManyArgs>(args?: SelectSubset<T, MemorizationPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemorizationPlans and returns the data saved in the database.
     * @param {MemorizationPlanCreateManyAndReturnArgs} args - Arguments to create many MemorizationPlans.
     * @example
     * // Create many MemorizationPlans
     * const memorizationPlan = await prisma.memorizationPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemorizationPlans and only return the `id`
     * const memorizationPlanWithIdOnly = await prisma.memorizationPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemorizationPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MemorizationPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemorizationPlan.
     * @param {MemorizationPlanDeleteArgs} args - Arguments to delete one MemorizationPlan.
     * @example
     * // Delete one MemorizationPlan
     * const MemorizationPlan = await prisma.memorizationPlan.delete({
     *   where: {
     *     // ... filter to delete one MemorizationPlan
     *   }
     * })
     * 
     */
    delete<T extends MemorizationPlanDeleteArgs>(args: SelectSubset<T, MemorizationPlanDeleteArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemorizationPlan.
     * @param {MemorizationPlanUpdateArgs} args - Arguments to update one MemorizationPlan.
     * @example
     * // Update one MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemorizationPlanUpdateArgs>(args: SelectSubset<T, MemorizationPlanUpdateArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemorizationPlans.
     * @param {MemorizationPlanDeleteManyArgs} args - Arguments to filter MemorizationPlans to delete.
     * @example
     * // Delete a few MemorizationPlans
     * const { count } = await prisma.memorizationPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemorizationPlanDeleteManyArgs>(args?: SelectSubset<T, MemorizationPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemorizationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemorizationPlans
     * const memorizationPlan = await prisma.memorizationPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemorizationPlanUpdateManyArgs>(args: SelectSubset<T, MemorizationPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemorizationPlans and returns the data updated in the database.
     * @param {MemorizationPlanUpdateManyAndReturnArgs} args - Arguments to update many MemorizationPlans.
     * @example
     * // Update many MemorizationPlans
     * const memorizationPlan = await prisma.memorizationPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemorizationPlans and only return the `id`
     * const memorizationPlanWithIdOnly = await prisma.memorizationPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemorizationPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MemorizationPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemorizationPlan.
     * @param {MemorizationPlanUpsertArgs} args - Arguments to update or create a MemorizationPlan.
     * @example
     * // Update or create a MemorizationPlan
     * const memorizationPlan = await prisma.memorizationPlan.upsert({
     *   create: {
     *     // ... data to create a MemorizationPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemorizationPlan we want to update
     *   }
     * })
     */
    upsert<T extends MemorizationPlanUpsertArgs>(args: SelectSubset<T, MemorizationPlanUpsertArgs<ExtArgs>>): Prisma__MemorizationPlanClient<$Result.GetResult<Prisma.$MemorizationPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemorizationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanCountArgs} args - Arguments to filter MemorizationPlans to count.
     * @example
     * // Count the number of MemorizationPlans
     * const count = await prisma.memorizationPlan.count({
     *   where: {
     *     // ... the filter for the MemorizationPlans we want to count
     *   }
     * })
    **/
    count<T extends MemorizationPlanCountArgs>(
      args?: Subset<T, MemorizationPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemorizationPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemorizationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemorizationPlanAggregateArgs>(args: Subset<T, MemorizationPlanAggregateArgs>): Prisma.PrismaPromise<GetMemorizationPlanAggregateType<T>>

    /**
     * Group by MemorizationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorizationPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemorizationPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemorizationPlanGroupByArgs['orderBy'] }
        : { orderBy?: MemorizationPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemorizationPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemorizationPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemorizationPlan model
   */
  readonly fields: MemorizationPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemorizationPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemorizationPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MemorizingPlanStudents<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MemorizingPlanMusyrif<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemorizationPlan model
   */
  interface MemorizationPlanFieldRefs {
    readonly id: FieldRef<"MemorizationPlan", 'String'>
    readonly student_id: FieldRef<"MemorizationPlan", 'String'>
    readonly plan_type: FieldRef<"MemorizationPlan", 'PlanType'>
    readonly juz_number: FieldRef<"MemorizationPlan", 'Int'>
    readonly surah_id: FieldRef<"MemorizationPlan", 'String'>
    readonly page_number: FieldRef<"MemorizationPlan", 'Int'>
    readonly start_ayah: FieldRef<"MemorizationPlan", 'Int'>
    readonly end_ayah: FieldRef<"MemorizationPlan", 'Int'>
    readonly target_date: FieldRef<"MemorizationPlan", 'DateTime'>
    readonly assigned_by: FieldRef<"MemorizationPlan", 'String'>
    readonly notes: FieldRef<"MemorizationPlan", 'String'>
    readonly created_at: FieldRef<"MemorizationPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemorizationPlan findUnique
   */
  export type MemorizationPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which MemorizationPlan to fetch.
     */
    where: MemorizationPlanWhereUniqueInput
  }

  /**
   * MemorizationPlan findUniqueOrThrow
   */
  export type MemorizationPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which MemorizationPlan to fetch.
     */
    where: MemorizationPlanWhereUniqueInput
  }

  /**
   * MemorizationPlan findFirst
   */
  export type MemorizationPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which MemorizationPlan to fetch.
     */
    where?: MemorizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizationPlans to fetch.
     */
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorizationPlans.
     */
    cursor?: MemorizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorizationPlans.
     */
    distinct?: MemorizationPlanScalarFieldEnum | MemorizationPlanScalarFieldEnum[]
  }

  /**
   * MemorizationPlan findFirstOrThrow
   */
  export type MemorizationPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which MemorizationPlan to fetch.
     */
    where?: MemorizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizationPlans to fetch.
     */
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorizationPlans.
     */
    cursor?: MemorizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorizationPlans.
     */
    distinct?: MemorizationPlanScalarFieldEnum | MemorizationPlanScalarFieldEnum[]
  }

  /**
   * MemorizationPlan findMany
   */
  export type MemorizationPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which MemorizationPlans to fetch.
     */
    where?: MemorizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorizationPlans to fetch.
     */
    orderBy?: MemorizationPlanOrderByWithRelationInput | MemorizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemorizationPlans.
     */
    cursor?: MemorizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorizationPlans.
     */
    skip?: number
    distinct?: MemorizationPlanScalarFieldEnum | MemorizationPlanScalarFieldEnum[]
  }

  /**
   * MemorizationPlan create
   */
  export type MemorizationPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MemorizationPlan.
     */
    data: XOR<MemorizationPlanCreateInput, MemorizationPlanUncheckedCreateInput>
  }

  /**
   * MemorizationPlan createMany
   */
  export type MemorizationPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemorizationPlans.
     */
    data: MemorizationPlanCreateManyInput | MemorizationPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemorizationPlan createManyAndReturn
   */
  export type MemorizationPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MemorizationPlans.
     */
    data: MemorizationPlanCreateManyInput | MemorizationPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemorizationPlan update
   */
  export type MemorizationPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MemorizationPlan.
     */
    data: XOR<MemorizationPlanUpdateInput, MemorizationPlanUncheckedUpdateInput>
    /**
     * Choose, which MemorizationPlan to update.
     */
    where: MemorizationPlanWhereUniqueInput
  }

  /**
   * MemorizationPlan updateMany
   */
  export type MemorizationPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemorizationPlans.
     */
    data: XOR<MemorizationPlanUpdateManyMutationInput, MemorizationPlanUncheckedUpdateManyInput>
    /**
     * Filter which MemorizationPlans to update
     */
    where?: MemorizationPlanWhereInput
    /**
     * Limit how many MemorizationPlans to update.
     */
    limit?: number
  }

  /**
   * MemorizationPlan updateManyAndReturn
   */
  export type MemorizationPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * The data used to update MemorizationPlans.
     */
    data: XOR<MemorizationPlanUpdateManyMutationInput, MemorizationPlanUncheckedUpdateManyInput>
    /**
     * Filter which MemorizationPlans to update
     */
    where?: MemorizationPlanWhereInput
    /**
     * Limit how many MemorizationPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemorizationPlan upsert
   */
  export type MemorizationPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MemorizationPlan to update in case it exists.
     */
    where: MemorizationPlanWhereUniqueInput
    /**
     * In case the MemorizationPlan found by the `where` argument doesn't exist, create a new MemorizationPlan with this data.
     */
    create: XOR<MemorizationPlanCreateInput, MemorizationPlanUncheckedCreateInput>
    /**
     * In case the MemorizationPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemorizationPlanUpdateInput, MemorizationPlanUncheckedUpdateInput>
  }

  /**
   * MemorizationPlan delete
   */
  export type MemorizationPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
    /**
     * Filter which MemorizationPlan to delete.
     */
    where: MemorizationPlanWhereUniqueInput
  }

  /**
   * MemorizationPlan deleteMany
   */
  export type MemorizationPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorizationPlans to delete
     */
    where?: MemorizationPlanWhereInput
    /**
     * Limit how many MemorizationPlans to delete.
     */
    limit?: number
  }

  /**
   * MemorizationPlan without action
   */
  export type MemorizationPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorizationPlan
     */
    select?: MemorizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemorizationPlan
     */
    omit?: MemorizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemorizationPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    salt: 'salt',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
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

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    date: 'date',
    status: 'status',
    remark: 'remark',
    recorded_by: 'recorded_by',
    created_at: 'created_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    name: 'name',
    gender: 'gender',
    phone: 'phone',
    parent_status: 'parent_status',
    description: 'description',
    address: 'address'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const MemorizingLogsScalarFieldEnum: {
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

  export type MemorizingLogsScalarFieldEnum = (typeof MemorizingLogsScalarFieldEnum)[keyof typeof MemorizingLogsScalarFieldEnum]


  export const MurojaahLogsScalarFieldEnum: {
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

  export type MurojaahLogsScalarFieldEnum = (typeof MurojaahLogsScalarFieldEnum)[keyof typeof MurojaahLogsScalarFieldEnum]


  export const SurahScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surah_number: 'surah_number',
    arabic_name: 'arabic_name',
    ayah_counts: 'ayah_counts',
    revelation_type: 'revelation_type',
    juz: 'juz'
  };

  export type SurahScalarFieldEnum = (typeof SurahScalarFieldEnum)[keyof typeof SurahScalarFieldEnum]


  export const AyahScalarFieldEnum: {
    id: 'id',
    surah_id: 'surah_id',
    ayah_number: 'ayah_number',
    juz_number: 'juz_number',
    text: 'text'
  };

  export type AyahScalarFieldEnum = (typeof AyahScalarFieldEnum)[keyof typeof AyahScalarFieldEnum]


  export const JuzScalarFieldEnum: {
    id: 'id',
    juz: 'juz',
    start_surah: 'start_surah',
    start_ayah: 'start_ayah',
    end_surah: 'end_surah',
    end_ayah: 'end_ayah'
  };

  export type JuzScalarFieldEnum = (typeof JuzScalarFieldEnum)[keyof typeof JuzScalarFieldEnum]


  export const JuzEvaluationScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    juz_number: 'juz_number',
    evaluation_date: 'evaluation_date',
    assessment: 'assessment',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JuzEvaluationScalarFieldEnum = (typeof JuzEvaluationScalarFieldEnum)[keyof typeof JuzEvaluationScalarFieldEnum]


  export const MemorizationPlanScalarFieldEnum: {
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

  export type MemorizationPlanScalarFieldEnum = (typeof MemorizationPlanScalarFieldEnum)[keyof typeof MemorizationPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'GradeStatus'
   */
  export type EnumGradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeStatus'>
    


  /**
   * Reference to a field of type 'GradeStatus[]'
   */
  export type ListEnumGradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeStatus[]'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus[]'
   */
  export type ListEnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'ParentStatus'
   */
  export type EnumParentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentStatus'>
    


  /**
   * Reference to a field of type 'ParentStatus[]'
   */
  export type ListEnumParentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Assessment'
   */
  export type EnumAssessmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Assessment'>
    


  /**
   * Reference to a field of type 'Assessment[]'
   */
  export type ListEnumAssessmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Assessment[]'>
    


  /**
   * Reference to a field of type 'Revelation'
   */
  export type EnumRevelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Revelation'>
    


  /**
   * Reference to a field of type 'Revelation[]'
   */
  export type ListEnumRevelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Revelation[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Student?: StudentListRelationFilter
    MemorizingLogs?: MemorizingLogsListRelationFilter
    MurojaahLogs?: MurojaahLogsListRelationFilter
    MemorizationPlan?: MemorizationPlanListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Student?: StudentOrderByRelationAggregateInput
    MemorizingLogs?: MemorizingLogsOrderByRelationAggregateInput
    MurojaahLogs?: MurojaahLogsOrderByRelationAggregateInput
    MemorizationPlan?: MemorizationPlanOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Student?: StudentListRelationFilter
    MemorizingLogs?: MemorizingLogsListRelationFilter
    MurojaahLogs?: MurojaahLogsListRelationFilter
    MemorizationPlan?: MemorizationPlanListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    musyrif_id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    grade?: StringFilter<"Student"> | string
    grade_status?: EnumGradeStatusFilter<"Student"> | $Enums.GradeStatus
    birth_date?: DateTimeFilter<"Student"> | Date | string
    join_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    MusyrifUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    MemorizingLogs?: MemorizingLogsListRelationFilter
    Parent?: ParentListRelationFilter
    MurojaahLogs?: MurojaahLogsListRelationFilter
    JuzEvaluation?: JuzEvaluationListRelationFilter
    MemorizationPlan?: MemorizationPlanListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    musyrif_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    grade?: SortOrder
    grade_status?: SortOrder
    birth_date?: SortOrder
    join_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    MusyrifUser?: UserOrderByWithRelationInput
    MemorizingLogs?: MemorizingLogsOrderByRelationAggregateInput
    Parent?: ParentOrderByRelationAggregateInput
    MurojaahLogs?: MurojaahLogsOrderByRelationAggregateInput
    JuzEvaluation?: JuzEvaluationOrderByRelationAggregateInput
    MemorizationPlan?: MemorizationPlanOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    musyrif_id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    grade?: StringFilter<"Student"> | string
    grade_status?: EnumGradeStatusFilter<"Student"> | $Enums.GradeStatus
    birth_date?: DateTimeFilter<"Student"> | Date | string
    join_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    MusyrifUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    MemorizingLogs?: MemorizingLogsListRelationFilter
    Parent?: ParentListRelationFilter
    MurojaahLogs?: MurojaahLogsListRelationFilter
    JuzEvaluation?: JuzEvaluationListRelationFilter
    MemorizationPlan?: MemorizationPlanListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    musyrif_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    grade?: SortOrder
    grade_status?: SortOrder
    birth_date?: SortOrder
    join_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    musyrif_id?: UuidWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    grade?: StringWithAggregatesFilter<"Student"> | string
    grade_status?: EnumGradeStatusWithAggregatesFilter<"Student"> | $Enums.GradeStatus
    birth_date?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    join_date?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    status?: EnumStudentStatusWithAggregatesFilter<"Student"> | $Enums.StudentStatus
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    student_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    remark?: StringFilter<"Attendance"> | string
    recorded_by?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    AttendanceStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    AttendaceMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    recorded_by?: SortOrder
    created_at?: SortOrder
    AttendanceStudent?: StudentOrderByWithRelationInput
    AttendaceMusyrif?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    student_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    remark?: StringFilter<"Attendance"> | string
    recorded_by?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    AttendanceStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    AttendaceMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    recorded_by?: SortOrder
    created_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    student_id?: UuidWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    remark?: StringWithAggregatesFilter<"Attendance"> | string
    recorded_by?: UuidWithAggregatesFilter<"Attendance"> | string
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: UuidFilter<"Parent"> | string
    student_id?: UuidFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    gender?: EnumGenderFilter<"Parent"> | $Enums.Gender
    phone?: StringNullableFilter<"Parent"> | string | null
    parent_status?: EnumParentStatusFilter<"Parent"> | $Enums.ParentStatus
    description?: StringNullableFilter<"Parent"> | string | null
    address?: StringNullableFilter<"Parent"> | string | null
    ParentStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrderInput | SortOrder
    parent_status?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    ParentStudent?: StudentOrderByWithRelationInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    student_id?: UuidFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    gender?: EnumGenderFilter<"Parent"> | $Enums.Gender
    phone?: StringNullableFilter<"Parent"> | string | null
    parent_status?: EnumParentStatusFilter<"Parent"> | $Enums.ParentStatus
    description?: StringNullableFilter<"Parent"> | string | null
    address?: StringNullableFilter<"Parent"> | string | null
    ParentStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrderInput | SortOrder
    parent_status?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: ParentCountOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Parent"> | string
    student_id?: UuidWithAggregatesFilter<"Parent"> | string
    name?: StringWithAggregatesFilter<"Parent"> | string
    gender?: EnumGenderWithAggregatesFilter<"Parent"> | $Enums.Gender
    phone?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    parent_status?: EnumParentStatusWithAggregatesFilter<"Parent"> | $Enums.ParentStatus
    description?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    address?: StringNullableWithAggregatesFilter<"Parent"> | string | null
  }

  export type MemorizingLogsWhereInput = {
    AND?: MemorizingLogsWhereInput | MemorizingLogsWhereInput[]
    OR?: MemorizingLogsWhereInput[]
    NOT?: MemorizingLogsWhereInput | MemorizingLogsWhereInput[]
    id?: UuidFilter<"MemorizingLogs"> | string
    student_id?: UuidFilter<"MemorizingLogs"> | string
    musyrif_id?: UuidFilter<"MemorizingLogs"> | string
    juz?: IntFilter<"MemorizingLogs"> | number
    surah?: StringFilter<"MemorizingLogs"> | string
    from_ayah?: IntFilter<"MemorizingLogs"> | number
    to_ayah?: IntFilter<"MemorizingLogs"> | number
    submission_date?: DateTimeFilter<"MemorizingLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MemorizingLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MemorizingLogs"> | string | null
    isRepeat?: IntFilter<"MemorizingLogs"> | number
    created_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
    updated_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
    MemorizingLogsStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MemorizingLogsMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MemorizingLogsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrderInput | SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    MemorizingLogsStudent?: StudentOrderByWithRelationInput
    MemorizingLogsMusyrif?: UserOrderByWithRelationInput
  }

  export type MemorizingLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemorizingLogsWhereInput | MemorizingLogsWhereInput[]
    OR?: MemorizingLogsWhereInput[]
    NOT?: MemorizingLogsWhereInput | MemorizingLogsWhereInput[]
    student_id?: UuidFilter<"MemorizingLogs"> | string
    musyrif_id?: UuidFilter<"MemorizingLogs"> | string
    juz?: IntFilter<"MemorizingLogs"> | number
    surah?: StringFilter<"MemorizingLogs"> | string
    from_ayah?: IntFilter<"MemorizingLogs"> | number
    to_ayah?: IntFilter<"MemorizingLogs"> | number
    submission_date?: DateTimeFilter<"MemorizingLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MemorizingLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MemorizingLogs"> | string | null
    isRepeat?: IntFilter<"MemorizingLogs"> | number
    created_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
    updated_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
    MemorizingLogsStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MemorizingLogsMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MemorizingLogsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrderInput | SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MemorizingLogsCountOrderByAggregateInput
    _avg?: MemorizingLogsAvgOrderByAggregateInput
    _max?: MemorizingLogsMaxOrderByAggregateInput
    _min?: MemorizingLogsMinOrderByAggregateInput
    _sum?: MemorizingLogsSumOrderByAggregateInput
  }

  export type MemorizingLogsScalarWhereWithAggregatesInput = {
    AND?: MemorizingLogsScalarWhereWithAggregatesInput | MemorizingLogsScalarWhereWithAggregatesInput[]
    OR?: MemorizingLogsScalarWhereWithAggregatesInput[]
    NOT?: MemorizingLogsScalarWhereWithAggregatesInput | MemorizingLogsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MemorizingLogs"> | string
    student_id?: UuidWithAggregatesFilter<"MemorizingLogs"> | string
    musyrif_id?: UuidWithAggregatesFilter<"MemorizingLogs"> | string
    juz?: IntWithAggregatesFilter<"MemorizingLogs"> | number
    surah?: StringWithAggregatesFilter<"MemorizingLogs"> | string
    from_ayah?: IntWithAggregatesFilter<"MemorizingLogs"> | number
    to_ayah?: IntWithAggregatesFilter<"MemorizingLogs"> | number
    submission_date?: DateTimeWithAggregatesFilter<"MemorizingLogs"> | Date | string
    assessment?: EnumAssessmentWithAggregatesFilter<"MemorizingLogs"> | $Enums.Assessment
    notes?: StringNullableWithAggregatesFilter<"MemorizingLogs"> | string | null
    isRepeat?: IntWithAggregatesFilter<"MemorizingLogs"> | number
    created_at?: DateTimeWithAggregatesFilter<"MemorizingLogs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MemorizingLogs"> | Date | string
  }

  export type MurojaahLogsWhereInput = {
    AND?: MurojaahLogsWhereInput | MurojaahLogsWhereInput[]
    OR?: MurojaahLogsWhereInput[]
    NOT?: MurojaahLogsWhereInput | MurojaahLogsWhereInput[]
    id?: UuidFilter<"MurojaahLogs"> | string
    student_id?: UuidFilter<"MurojaahLogs"> | string
    musyrif_id?: UuidFilter<"MurojaahLogs"> | string
    juz?: IntFilter<"MurojaahLogs"> | number
    surah?: StringFilter<"MurojaahLogs"> | string
    from_ayah?: IntFilter<"MurojaahLogs"> | number
    to_ayah?: IntFilter<"MurojaahLogs"> | number
    submission_date?: DateTimeFilter<"MurojaahLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MurojaahLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MurojaahLogs"> | string | null
    isRepeat?: IntFilter<"MurojaahLogs"> | number
    created_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
    updated_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
    MurojaahLogsStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MurojaahLogsMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MurojaahLogsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrderInput | SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    MurojaahLogsStudent?: StudentOrderByWithRelationInput
    MurojaahLogsMusyrif?: UserOrderByWithRelationInput
  }

  export type MurojaahLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MurojaahLogsWhereInput | MurojaahLogsWhereInput[]
    OR?: MurojaahLogsWhereInput[]
    NOT?: MurojaahLogsWhereInput | MurojaahLogsWhereInput[]
    student_id?: UuidFilter<"MurojaahLogs"> | string
    musyrif_id?: UuidFilter<"MurojaahLogs"> | string
    juz?: IntFilter<"MurojaahLogs"> | number
    surah?: StringFilter<"MurojaahLogs"> | string
    from_ayah?: IntFilter<"MurojaahLogs"> | number
    to_ayah?: IntFilter<"MurojaahLogs"> | number
    submission_date?: DateTimeFilter<"MurojaahLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MurojaahLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MurojaahLogs"> | string | null
    isRepeat?: IntFilter<"MurojaahLogs"> | number
    created_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
    updated_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
    MurojaahLogsStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MurojaahLogsMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MurojaahLogsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrderInput | SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MurojaahLogsCountOrderByAggregateInput
    _avg?: MurojaahLogsAvgOrderByAggregateInput
    _max?: MurojaahLogsMaxOrderByAggregateInput
    _min?: MurojaahLogsMinOrderByAggregateInput
    _sum?: MurojaahLogsSumOrderByAggregateInput
  }

  export type MurojaahLogsScalarWhereWithAggregatesInput = {
    AND?: MurojaahLogsScalarWhereWithAggregatesInput | MurojaahLogsScalarWhereWithAggregatesInput[]
    OR?: MurojaahLogsScalarWhereWithAggregatesInput[]
    NOT?: MurojaahLogsScalarWhereWithAggregatesInput | MurojaahLogsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MurojaahLogs"> | string
    student_id?: UuidWithAggregatesFilter<"MurojaahLogs"> | string
    musyrif_id?: UuidWithAggregatesFilter<"MurojaahLogs"> | string
    juz?: IntWithAggregatesFilter<"MurojaahLogs"> | number
    surah?: StringWithAggregatesFilter<"MurojaahLogs"> | string
    from_ayah?: IntWithAggregatesFilter<"MurojaahLogs"> | number
    to_ayah?: IntWithAggregatesFilter<"MurojaahLogs"> | number
    submission_date?: DateTimeWithAggregatesFilter<"MurojaahLogs"> | Date | string
    assessment?: EnumAssessmentWithAggregatesFilter<"MurojaahLogs"> | $Enums.Assessment
    notes?: StringNullableWithAggregatesFilter<"MurojaahLogs"> | string | null
    isRepeat?: IntWithAggregatesFilter<"MurojaahLogs"> | number
    created_at?: DateTimeWithAggregatesFilter<"MurojaahLogs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MurojaahLogs"> | Date | string
  }

  export type SurahWhereInput = {
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    id?: UuidFilter<"Surah"> | string
    name?: StringFilter<"Surah"> | string
    surah_number?: IntFilter<"Surah"> | number
    arabic_name?: StringFilter<"Surah"> | string
    ayah_counts?: IntFilter<"Surah"> | number
    revelation_type?: EnumRevelationFilter<"Surah"> | $Enums.Revelation
    juz?: IntNullableListFilter<"Surah">
    Ayah?: AyahListRelationFilter
  }

  export type SurahOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surah_number?: SortOrder
    arabic_name?: SortOrder
    ayah_counts?: SortOrder
    revelation_type?: SortOrder
    juz?: SortOrder
    Ayah?: AyahOrderByRelationAggregateInput
  }

  export type SurahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    name?: StringFilter<"Surah"> | string
    surah_number?: IntFilter<"Surah"> | number
    arabic_name?: StringFilter<"Surah"> | string
    ayah_counts?: IntFilter<"Surah"> | number
    revelation_type?: EnumRevelationFilter<"Surah"> | $Enums.Revelation
    juz?: IntNullableListFilter<"Surah">
    Ayah?: AyahListRelationFilter
  }, "id">

  export type SurahOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surah_number?: SortOrder
    arabic_name?: SortOrder
    ayah_counts?: SortOrder
    revelation_type?: SortOrder
    juz?: SortOrder
    _count?: SurahCountOrderByAggregateInput
    _avg?: SurahAvgOrderByAggregateInput
    _max?: SurahMaxOrderByAggregateInput
    _min?: SurahMinOrderByAggregateInput
    _sum?: SurahSumOrderByAggregateInput
  }

  export type SurahScalarWhereWithAggregatesInput = {
    AND?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    OR?: SurahScalarWhereWithAggregatesInput[]
    NOT?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Surah"> | string
    name?: StringWithAggregatesFilter<"Surah"> | string
    surah_number?: IntWithAggregatesFilter<"Surah"> | number
    arabic_name?: StringWithAggregatesFilter<"Surah"> | string
    ayah_counts?: IntWithAggregatesFilter<"Surah"> | number
    revelation_type?: EnumRevelationWithAggregatesFilter<"Surah"> | $Enums.Revelation
    juz?: IntNullableListFilter<"Surah">
  }

  export type AyahWhereInput = {
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    id?: UuidFilter<"Ayah"> | string
    surah_id?: UuidFilter<"Ayah"> | string
    ayah_number?: IntFilter<"Ayah"> | number
    juz_number?: IntFilter<"Ayah"> | number
    text?: StringFilter<"Ayah"> | string
    AyahSurah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }

  export type AyahOrderByWithRelationInput = {
    id?: SortOrder
    surah_id?: SortOrder
    ayah_number?: SortOrder
    juz_number?: SortOrder
    text?: SortOrder
    AyahSurah?: SurahOrderByWithRelationInput
  }

  export type AyahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    surah_id_ayah_number?: AyahSurah_idAyah_numberCompoundUniqueInput
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    surah_id?: UuidFilter<"Ayah"> | string
    ayah_number?: IntFilter<"Ayah"> | number
    juz_number?: IntFilter<"Ayah"> | number
    text?: StringFilter<"Ayah"> | string
    AyahSurah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
  }, "id" | "surah_id_ayah_number">

  export type AyahOrderByWithAggregationInput = {
    id?: SortOrder
    surah_id?: SortOrder
    ayah_number?: SortOrder
    juz_number?: SortOrder
    text?: SortOrder
    _count?: AyahCountOrderByAggregateInput
    _avg?: AyahAvgOrderByAggregateInput
    _max?: AyahMaxOrderByAggregateInput
    _min?: AyahMinOrderByAggregateInput
    _sum?: AyahSumOrderByAggregateInput
  }

  export type AyahScalarWhereWithAggregatesInput = {
    AND?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    OR?: AyahScalarWhereWithAggregatesInput[]
    NOT?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ayah"> | string
    surah_id?: UuidWithAggregatesFilter<"Ayah"> | string
    ayah_number?: IntWithAggregatesFilter<"Ayah"> | number
    juz_number?: IntWithAggregatesFilter<"Ayah"> | number
    text?: StringWithAggregatesFilter<"Ayah"> | string
  }

  export type JuzWhereInput = {
    AND?: JuzWhereInput | JuzWhereInput[]
    OR?: JuzWhereInput[]
    NOT?: JuzWhereInput | JuzWhereInput[]
    id?: UuidFilter<"Juz"> | string
    juz?: IntFilter<"Juz"> | number
    start_surah?: StringFilter<"Juz"> | string
    start_ayah?: IntFilter<"Juz"> | number
    end_surah?: StringFilter<"Juz"> | string
    end_ayah?: IntFilter<"Juz"> | number
  }

  export type JuzOrderByWithRelationInput = {
    id?: SortOrder
    juz?: SortOrder
    start_surah?: SortOrder
    start_ayah?: SortOrder
    end_surah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JuzWhereInput | JuzWhereInput[]
    OR?: JuzWhereInput[]
    NOT?: JuzWhereInput | JuzWhereInput[]
    juz?: IntFilter<"Juz"> | number
    start_surah?: StringFilter<"Juz"> | string
    start_ayah?: IntFilter<"Juz"> | number
    end_surah?: StringFilter<"Juz"> | string
    end_ayah?: IntFilter<"Juz"> | number
  }, "id">

  export type JuzOrderByWithAggregationInput = {
    id?: SortOrder
    juz?: SortOrder
    start_surah?: SortOrder
    start_ayah?: SortOrder
    end_surah?: SortOrder
    end_ayah?: SortOrder
    _count?: JuzCountOrderByAggregateInput
    _avg?: JuzAvgOrderByAggregateInput
    _max?: JuzMaxOrderByAggregateInput
    _min?: JuzMinOrderByAggregateInput
    _sum?: JuzSumOrderByAggregateInput
  }

  export type JuzScalarWhereWithAggregatesInput = {
    AND?: JuzScalarWhereWithAggregatesInput | JuzScalarWhereWithAggregatesInput[]
    OR?: JuzScalarWhereWithAggregatesInput[]
    NOT?: JuzScalarWhereWithAggregatesInput | JuzScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Juz"> | string
    juz?: IntWithAggregatesFilter<"Juz"> | number
    start_surah?: StringWithAggregatesFilter<"Juz"> | string
    start_ayah?: IntWithAggregatesFilter<"Juz"> | number
    end_surah?: StringWithAggregatesFilter<"Juz"> | string
    end_ayah?: IntWithAggregatesFilter<"Juz"> | number
  }

  export type JuzEvaluationWhereInput = {
    AND?: JuzEvaluationWhereInput | JuzEvaluationWhereInput[]
    OR?: JuzEvaluationWhereInput[]
    NOT?: JuzEvaluationWhereInput | JuzEvaluationWhereInput[]
    id?: UuidFilter<"JuzEvaluation"> | string
    student_id?: UuidFilter<"JuzEvaluation"> | string
    juz_number?: IntFilter<"JuzEvaluation"> | number
    evaluation_date?: DateTimeFilter<"JuzEvaluation"> | Date | string
    assessment?: EnumAssessmentFilter<"JuzEvaluation"> | $Enums.Assessment
    notes?: StringFilter<"JuzEvaluation"> | string
    created_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
    updated_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
    EvaluationStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type JuzEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    juz_number?: SortOrder
    evaluation_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    EvaluationStudent?: StudentOrderByWithRelationInput
  }

  export type JuzEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JuzEvaluationWhereInput | JuzEvaluationWhereInput[]
    OR?: JuzEvaluationWhereInput[]
    NOT?: JuzEvaluationWhereInput | JuzEvaluationWhereInput[]
    student_id?: UuidFilter<"JuzEvaluation"> | string
    juz_number?: IntFilter<"JuzEvaluation"> | number
    evaluation_date?: DateTimeFilter<"JuzEvaluation"> | Date | string
    assessment?: EnumAssessmentFilter<"JuzEvaluation"> | $Enums.Assessment
    notes?: StringFilter<"JuzEvaluation"> | string
    created_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
    updated_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
    EvaluationStudent?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type JuzEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    juz_number?: SortOrder
    evaluation_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: JuzEvaluationCountOrderByAggregateInput
    _avg?: JuzEvaluationAvgOrderByAggregateInput
    _max?: JuzEvaluationMaxOrderByAggregateInput
    _min?: JuzEvaluationMinOrderByAggregateInput
    _sum?: JuzEvaluationSumOrderByAggregateInput
  }

  export type JuzEvaluationScalarWhereWithAggregatesInput = {
    AND?: JuzEvaluationScalarWhereWithAggregatesInput | JuzEvaluationScalarWhereWithAggregatesInput[]
    OR?: JuzEvaluationScalarWhereWithAggregatesInput[]
    NOT?: JuzEvaluationScalarWhereWithAggregatesInput | JuzEvaluationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"JuzEvaluation"> | string
    student_id?: UuidWithAggregatesFilter<"JuzEvaluation"> | string
    juz_number?: IntWithAggregatesFilter<"JuzEvaluation"> | number
    evaluation_date?: DateTimeWithAggregatesFilter<"JuzEvaluation"> | Date | string
    assessment?: EnumAssessmentWithAggregatesFilter<"JuzEvaluation"> | $Enums.Assessment
    notes?: StringWithAggregatesFilter<"JuzEvaluation"> | string
    created_at?: DateTimeWithAggregatesFilter<"JuzEvaluation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"JuzEvaluation"> | Date | string
  }

  export type MemorizationPlanWhereInput = {
    AND?: MemorizationPlanWhereInput | MemorizationPlanWhereInput[]
    OR?: MemorizationPlanWhereInput[]
    NOT?: MemorizationPlanWhereInput | MemorizationPlanWhereInput[]
    id?: UuidFilter<"MemorizationPlan"> | string
    student_id?: UuidFilter<"MemorizationPlan"> | string
    plan_type?: EnumPlanTypeFilter<"MemorizationPlan"> | $Enums.PlanType
    juz_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    surah_id?: UuidNullableFilter<"MemorizationPlan"> | string | null
    page_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    start_ayah?: IntFilter<"MemorizationPlan"> | number
    end_ayah?: IntFilter<"MemorizationPlan"> | number
    target_date?: DateTimeFilter<"MemorizationPlan"> | Date | string
    assigned_by?: UuidFilter<"MemorizationPlan"> | string
    notes?: StringFilter<"MemorizationPlan"> | string
    created_at?: DateTimeFilter<"MemorizationPlan"> | Date | string
    MemorizingPlanStudents?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MemorizingPlanMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MemorizationPlanOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    plan_type?: SortOrder
    juz_number?: SortOrderInput | SortOrder
    surah_id?: SortOrderInput | SortOrder
    page_number?: SortOrderInput | SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
    target_date?: SortOrder
    assigned_by?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    MemorizingPlanStudents?: StudentOrderByWithRelationInput
    MemorizingPlanMusyrif?: UserOrderByWithRelationInput
  }

  export type MemorizationPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemorizationPlanWhereInput | MemorizationPlanWhereInput[]
    OR?: MemorizationPlanWhereInput[]
    NOT?: MemorizationPlanWhereInput | MemorizationPlanWhereInput[]
    student_id?: UuidFilter<"MemorizationPlan"> | string
    plan_type?: EnumPlanTypeFilter<"MemorizationPlan"> | $Enums.PlanType
    juz_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    surah_id?: UuidNullableFilter<"MemorizationPlan"> | string | null
    page_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    start_ayah?: IntFilter<"MemorizationPlan"> | number
    end_ayah?: IntFilter<"MemorizationPlan"> | number
    target_date?: DateTimeFilter<"MemorizationPlan"> | Date | string
    assigned_by?: UuidFilter<"MemorizationPlan"> | string
    notes?: StringFilter<"MemorizationPlan"> | string
    created_at?: DateTimeFilter<"MemorizationPlan"> | Date | string
    MemorizingPlanStudents?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    MemorizingPlanMusyrif?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MemorizationPlanOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    plan_type?: SortOrder
    juz_number?: SortOrderInput | SortOrder
    surah_id?: SortOrderInput | SortOrder
    page_number?: SortOrderInput | SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
    target_date?: SortOrder
    assigned_by?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    _count?: MemorizationPlanCountOrderByAggregateInput
    _avg?: MemorizationPlanAvgOrderByAggregateInput
    _max?: MemorizationPlanMaxOrderByAggregateInput
    _min?: MemorizationPlanMinOrderByAggregateInput
    _sum?: MemorizationPlanSumOrderByAggregateInput
  }

  export type MemorizationPlanScalarWhereWithAggregatesInput = {
    AND?: MemorizationPlanScalarWhereWithAggregatesInput | MemorizationPlanScalarWhereWithAggregatesInput[]
    OR?: MemorizationPlanScalarWhereWithAggregatesInput[]
    NOT?: MemorizationPlanScalarWhereWithAggregatesInput | MemorizationPlanScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MemorizationPlan"> | string
    student_id?: UuidWithAggregatesFilter<"MemorizationPlan"> | string
    plan_type?: EnumPlanTypeWithAggregatesFilter<"MemorizationPlan"> | $Enums.PlanType
    juz_number?: IntNullableWithAggregatesFilter<"MemorizationPlan"> | number | null
    surah_id?: UuidNullableWithAggregatesFilter<"MemorizationPlan"> | string | null
    page_number?: IntNullableWithAggregatesFilter<"MemorizationPlan"> | number | null
    start_ayah?: IntWithAggregatesFilter<"MemorizationPlan"> | number
    end_ayah?: IntWithAggregatesFilter<"MemorizationPlan"> | number
    target_date?: DateTimeWithAggregatesFilter<"MemorizationPlan"> | Date | string
    assigned_by?: UuidWithAggregatesFilter<"MemorizationPlan"> | string
    notes?: StringWithAggregatesFilter<"MemorizationPlan"> | string
    created_at?: DateTimeWithAggregatesFilter<"MemorizationPlan"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    created_at?: Date | string
    AttendanceStudent: StudentCreateNestedOneWithoutAttendanceInput
    AttendaceMusyrif: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    student_id: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    recorded_by: string
    created_at?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AttendanceStudent?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
    AttendaceMusyrif?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    student_id: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    recorded_by: string
    created_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentCreateInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
    ParentStudent: StudentCreateNestedOneWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    student_id: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    ParentStudent?: StudentUpdateOneRequiredWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentCreateManyInput = {
    id?: string
    student_id: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemorizingLogsCreateInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogsStudent: StudentCreateNestedOneWithoutMemorizingLogsInput
    MemorizingLogsMusyrif: UserCreateNestedOneWithoutMemorizingLogsInput
  }

  export type MemorizingLogsUncheckedCreateInput = {
    id?: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizingLogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogsStudent?: StudentUpdateOneRequiredWithoutMemorizingLogsNestedInput
    MemorizingLogsMusyrif?: UserUpdateOneRequiredWithoutMemorizingLogsNestedInput
  }

  export type MemorizingLogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsCreateManyInput = {
    id?: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizingLogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsCreateInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MurojaahLogsStudent: StudentCreateNestedOneWithoutMurojaahLogsInput
    MurojaahLogsMusyrif: UserCreateNestedOneWithoutMurojaahLogsInput
  }

  export type MurojaahLogsUncheckedCreateInput = {
    id?: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MurojaahLogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MurojaahLogsStudent?: StudentUpdateOneRequiredWithoutMurojaahLogsNestedInput
    MurojaahLogsMusyrif?: UserUpdateOneRequiredWithoutMurojaahLogsNestedInput
  }

  export type MurojaahLogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsCreateManyInput = {
    id?: string
    student_id: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MurojaahLogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurahCreateInput = {
    id?: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type?: $Enums.Revelation
    juz?: SurahCreatejuzInput | number[]
    Ayah?: AyahCreateNestedManyWithoutAyahSurahInput
  }

  export type SurahUncheckedCreateInput = {
    id?: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type?: $Enums.Revelation
    juz?: SurahCreatejuzInput | number[]
    Ayah?: AyahUncheckedCreateNestedManyWithoutAyahSurahInput
  }

  export type SurahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
    Ayah?: AyahUpdateManyWithoutAyahSurahNestedInput
  }

  export type SurahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
    Ayah?: AyahUncheckedUpdateManyWithoutAyahSurahNestedInput
  }

  export type SurahCreateManyInput = {
    id?: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type?: $Enums.Revelation
    juz?: SurahCreatejuzInput | number[]
  }

  export type SurahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
  }

  export type SurahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
  }

  export type AyahCreateInput = {
    id?: string
    ayah_number: number
    juz_number: number
    text: string
    AyahSurah: SurahCreateNestedOneWithoutAyahInput
  }

  export type AyahUncheckedCreateInput = {
    id?: string
    surah_id: string
    ayah_number: number
    juz_number: number
    text: string
  }

  export type AyahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    AyahSurah?: SurahUpdateOneRequiredWithoutAyahNestedInput
  }

  export type AyahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surah_id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AyahCreateManyInput = {
    id?: string
    surah_id: string
    ayah_number: number
    juz_number: number
    text: string
  }

  export type AyahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surah_id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type JuzCreateInput = {
    id?: string
    juz: number
    start_surah: string
    start_ayah: number
    end_surah: string
    end_ayah: number
  }

  export type JuzUncheckedCreateInput = {
    id?: string
    juz: number
    start_surah: string
    start_ayah: number
    end_surah: string
    end_ayah: number
  }

  export type JuzUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    start_surah?: StringFieldUpdateOperationsInput | string
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_surah?: StringFieldUpdateOperationsInput | string
    end_ayah?: IntFieldUpdateOperationsInput | number
  }

  export type JuzUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    start_surah?: StringFieldUpdateOperationsInput | string
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_surah?: StringFieldUpdateOperationsInput | string
    end_ayah?: IntFieldUpdateOperationsInput | number
  }

  export type JuzCreateManyInput = {
    id?: string
    juz: number
    start_surah: string
    start_ayah: number
    end_surah: string
    end_ayah: number
  }

  export type JuzUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    start_surah?: StringFieldUpdateOperationsInput | string
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_surah?: StringFieldUpdateOperationsInput | string
    end_ayah?: IntFieldUpdateOperationsInput | number
  }

  export type JuzUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    start_surah?: StringFieldUpdateOperationsInput | string
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_surah?: StringFieldUpdateOperationsInput | string
    end_ayah?: IntFieldUpdateOperationsInput | number
  }

  export type JuzEvaluationCreateInput = {
    id?: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
    EvaluationStudent: StudentCreateNestedOneWithoutJuzEvaluationInput
  }

  export type JuzEvaluationUncheckedCreateInput = {
    id?: string
    student_id: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JuzEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EvaluationStudent?: StudentUpdateOneRequiredWithoutJuzEvaluationNestedInput
  }

  export type JuzEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuzEvaluationCreateManyInput = {
    id?: string
    student_id: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JuzEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuzEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanCreateInput = {
    id?: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    notes: string
    created_at?: Date | string
    MemorizingPlanStudents: StudentCreateNestedOneWithoutMemorizationPlanInput
    MemorizingPlanMusyrif: UserCreateNestedOneWithoutMemorizationPlanInput
  }

  export type MemorizationPlanUncheckedCreateInput = {
    id?: string
    student_id: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    assigned_by: string
    notes: string
    created_at?: Date | string
  }

  export type MemorizationPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingPlanStudents?: StudentUpdateOneRequiredWithoutMemorizationPlanNestedInput
    MemorizingPlanMusyrif?: UserUpdateOneRequiredWithoutMemorizationPlanNestedInput
  }

  export type MemorizationPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanCreateManyInput = {
    id?: string
    student_id: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    assigned_by: string
    notes: string
    created_at?: Date | string
  }

  export type MemorizationPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type MemorizingLogsListRelationFilter = {
    every?: MemorizingLogsWhereInput
    some?: MemorizingLogsWhereInput
    none?: MemorizingLogsWhereInput
  }

  export type MurojaahLogsListRelationFilter = {
    every?: MurojaahLogsWhereInput
    some?: MurojaahLogsWhereInput
    none?: MurojaahLogsWhereInput
  }

  export type MemorizationPlanListRelationFilter = {
    every?: MemorizationPlanWhereInput
    some?: MemorizationPlanWhereInput
    none?: MemorizationPlanWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemorizingLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MurojaahLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemorizationPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumGradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusFilter<$PrismaModel> | $Enums.GradeStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParentListRelationFilter = {
    every?: ParentWhereInput
    some?: ParentWhereInput
    none?: ParentWhereInput
  }

  export type JuzEvaluationListRelationFilter = {
    every?: JuzEvaluationWhereInput
    some?: JuzEvaluationWhereInput
    none?: JuzEvaluationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JuzEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    musyrif_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    grade?: SortOrder
    grade_status?: SortOrder
    birth_date?: SortOrder
    join_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    musyrif_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    grade?: SortOrder
    grade_status?: SortOrder
    birth_date?: SortOrder
    join_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    musyrif_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    grade?: SortOrder
    grade_status?: SortOrder
    birth_date?: SortOrder
    join_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumGradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeStatusFilter<$PrismaModel>
    _max?: NestedEnumGradeStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    recorded_by?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    recorded_by?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    recorded_by?: SortOrder
    created_at?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumParentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentStatus | EnumParentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentStatusFilter<$PrismaModel> | $Enums.ParentStatus
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    parent_status?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    parent_status?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    parent_status?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumParentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentStatus | EnumParentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentStatusFilter<$PrismaModel>
    _max?: NestedEnumParentStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAssessmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Assessment | EnumAssessmentFieldRefInput<$PrismaModel>
    in?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentFilter<$PrismaModel> | $Enums.Assessment
  }

  export type MemorizingLogsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MemorizingLogsAvgOrderByAggregateInput = {
    juz?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    isRepeat?: SortOrder
  }

  export type MemorizingLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MemorizingLogsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MemorizingLogsSumOrderByAggregateInput = {
    juz?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    isRepeat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAssessmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Assessment | EnumAssessmentFieldRefInput<$PrismaModel>
    in?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentWithAggregatesFilter<$PrismaModel> | $Enums.Assessment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentFilter<$PrismaModel>
    _max?: NestedEnumAssessmentFilter<$PrismaModel>
  }

  export type MurojaahLogsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MurojaahLogsAvgOrderByAggregateInput = {
    juz?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    isRepeat?: SortOrder
  }

  export type MurojaahLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MurojaahLogsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    musyrif_id?: SortOrder
    juz?: SortOrder
    surah?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    submission_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    isRepeat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MurojaahLogsSumOrderByAggregateInput = {
    juz?: SortOrder
    from_ayah?: SortOrder
    to_ayah?: SortOrder
    isRepeat?: SortOrder
  }

  export type EnumRevelationFilter<$PrismaModel = never> = {
    equals?: $Enums.Revelation | EnumRevelationFieldRefInput<$PrismaModel>
    in?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    not?: NestedEnumRevelationFilter<$PrismaModel> | $Enums.Revelation
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AyahListRelationFilter = {
    every?: AyahWhereInput
    some?: AyahWhereInput
    none?: AyahWhereInput
  }

  export type AyahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurahCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surah_number?: SortOrder
    arabic_name?: SortOrder
    ayah_counts?: SortOrder
    revelation_type?: SortOrder
    juz?: SortOrder
  }

  export type SurahAvgOrderByAggregateInput = {
    surah_number?: SortOrder
    ayah_counts?: SortOrder
    juz?: SortOrder
  }

  export type SurahMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surah_number?: SortOrder
    arabic_name?: SortOrder
    ayah_counts?: SortOrder
    revelation_type?: SortOrder
  }

  export type SurahMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surah_number?: SortOrder
    arabic_name?: SortOrder
    ayah_counts?: SortOrder
    revelation_type?: SortOrder
  }

  export type SurahSumOrderByAggregateInput = {
    surah_number?: SortOrder
    ayah_counts?: SortOrder
    juz?: SortOrder
  }

  export type EnumRevelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Revelation | EnumRevelationFieldRefInput<$PrismaModel>
    in?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    not?: NestedEnumRevelationWithAggregatesFilter<$PrismaModel> | $Enums.Revelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevelationFilter<$PrismaModel>
    _max?: NestedEnumRevelationFilter<$PrismaModel>
  }

  export type SurahScalarRelationFilter = {
    is?: SurahWhereInput
    isNot?: SurahWhereInput
  }

  export type AyahSurah_idAyah_numberCompoundUniqueInput = {
    surah_id: string
    ayah_number: number
  }

  export type AyahCountOrderByAggregateInput = {
    id?: SortOrder
    surah_id?: SortOrder
    ayah_number?: SortOrder
    juz_number?: SortOrder
    text?: SortOrder
  }

  export type AyahAvgOrderByAggregateInput = {
    ayah_number?: SortOrder
    juz_number?: SortOrder
  }

  export type AyahMaxOrderByAggregateInput = {
    id?: SortOrder
    surah_id?: SortOrder
    ayah_number?: SortOrder
    juz_number?: SortOrder
    text?: SortOrder
  }

  export type AyahMinOrderByAggregateInput = {
    id?: SortOrder
    surah_id?: SortOrder
    ayah_number?: SortOrder
    juz_number?: SortOrder
    text?: SortOrder
  }

  export type AyahSumOrderByAggregateInput = {
    ayah_number?: SortOrder
    juz_number?: SortOrder
  }

  export type JuzCountOrderByAggregateInput = {
    id?: SortOrder
    juz?: SortOrder
    start_surah?: SortOrder
    start_ayah?: SortOrder
    end_surah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzAvgOrderByAggregateInput = {
    juz?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzMaxOrderByAggregateInput = {
    id?: SortOrder
    juz?: SortOrder
    start_surah?: SortOrder
    start_ayah?: SortOrder
    end_surah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzMinOrderByAggregateInput = {
    id?: SortOrder
    juz?: SortOrder
    start_surah?: SortOrder
    start_ayah?: SortOrder
    end_surah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzSumOrderByAggregateInput = {
    juz?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
  }

  export type JuzEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    juz_number?: SortOrder
    evaluation_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JuzEvaluationAvgOrderByAggregateInput = {
    juz_number?: SortOrder
  }

  export type JuzEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    juz_number?: SortOrder
    evaluation_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JuzEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    juz_number?: SortOrder
    evaluation_date?: SortOrder
    assessment?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JuzEvaluationSumOrderByAggregateInput = {
    juz_number?: SortOrder
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type MemorizationPlanCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    plan_type?: SortOrder
    juz_number?: SortOrder
    surah_id?: SortOrder
    page_number?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
    target_date?: SortOrder
    assigned_by?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type MemorizationPlanAvgOrderByAggregateInput = {
    juz_number?: SortOrder
    page_number?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
  }

  export type MemorizationPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    plan_type?: SortOrder
    juz_number?: SortOrder
    surah_id?: SortOrder
    page_number?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
    target_date?: SortOrder
    assigned_by?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type MemorizationPlanMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    plan_type?: SortOrder
    juz_number?: SortOrder
    surah_id?: SortOrder
    page_number?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
    target_date?: SortOrder
    assigned_by?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type MemorizationPlanSumOrderByAggregateInput = {
    juz_number?: SortOrder
    page_number?: SortOrder
    start_ayah?: SortOrder
    end_ayah?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StudentCreateNestedManyWithoutMusyrifUserInput = {
    create?: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput> | StudentCreateWithoutMusyrifUserInput[] | StudentUncheckedCreateWithoutMusyrifUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMusyrifUserInput | StudentCreateOrConnectWithoutMusyrifUserInput[]
    createMany?: StudentCreateManyMusyrifUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput> | MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsMusyrifInputEnvelope
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
  }

  export type MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput> | MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsMusyrifInputEnvelope
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
  }

  export type MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput> | MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanMusyrifInputEnvelope
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutAttendaceMusyrifInput = {
    create?: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput> | AttendanceCreateWithoutAttendaceMusyrifInput[] | AttendanceUncheckedCreateWithoutAttendaceMusyrifInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendaceMusyrifInput | AttendanceCreateOrConnectWithoutAttendaceMusyrifInput[]
    createMany?: AttendanceCreateManyAttendaceMusyrifInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutMusyrifUserInput = {
    create?: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput> | StudentCreateWithoutMusyrifUserInput[] | StudentUncheckedCreateWithoutMusyrifUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMusyrifUserInput | StudentCreateOrConnectWithoutMusyrifUserInput[]
    createMany?: StudentCreateManyMusyrifUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput> | MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsMusyrifInputEnvelope
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
  }

  export type MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput> | MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsMusyrifInputEnvelope
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
  }

  export type MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput> | MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanMusyrifInputEnvelope
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput = {
    create?: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput> | AttendanceCreateWithoutAttendaceMusyrifInput[] | AttendanceUncheckedCreateWithoutAttendaceMusyrifInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendaceMusyrifInput | AttendanceCreateOrConnectWithoutAttendaceMusyrifInput[]
    createMany?: AttendanceCreateManyAttendaceMusyrifInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateManyWithoutMusyrifUserNestedInput = {
    create?: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput> | StudentCreateWithoutMusyrifUserInput[] | StudentUncheckedCreateWithoutMusyrifUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMusyrifUserInput | StudentCreateOrConnectWithoutMusyrifUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMusyrifUserInput | StudentUpsertWithWhereUniqueWithoutMusyrifUserInput[]
    createMany?: StudentCreateManyMusyrifUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMusyrifUserInput | StudentUpdateWithWhereUniqueWithoutMusyrifUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMusyrifUserInput | StudentUpdateManyWithWhereWithoutMusyrifUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput> | MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput[]
    upsert?: MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsMusyrifInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsMusyrifInputEnvelope
    set?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    disconnect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    delete?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    update?: MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsMusyrifInput[]
    updateMany?: MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsMusyrifInput[]
    deleteMany?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
  }

  export type MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput> | MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput[]
    upsert?: MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsMusyrifInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsMusyrifInputEnvelope
    set?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    disconnect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    delete?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    update?: MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsMusyrifInput[]
    updateMany?: MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsMusyrifInput[]
    deleteMany?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
  }

  export type MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput> | MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput[]
    upsert?: MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanMusyrifInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanMusyrifInputEnvelope
    set?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    disconnect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    delete?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    update?: MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanMusyrifInput[]
    updateMany?: MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanMusyrifInput[]
    deleteMany?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput> | AttendanceCreateWithoutAttendaceMusyrifInput[] | AttendanceUncheckedCreateWithoutAttendaceMusyrifInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendaceMusyrifInput | AttendanceCreateOrConnectWithoutAttendaceMusyrifInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendaceMusyrifInput | AttendanceUpsertWithWhereUniqueWithoutAttendaceMusyrifInput[]
    createMany?: AttendanceCreateManyAttendaceMusyrifInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendaceMusyrifInput | AttendanceUpdateWithWhereUniqueWithoutAttendaceMusyrifInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendaceMusyrifInput | AttendanceUpdateManyWithWhereWithoutAttendaceMusyrifInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput = {
    create?: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput> | StudentCreateWithoutMusyrifUserInput[] | StudentUncheckedCreateWithoutMusyrifUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMusyrifUserInput | StudentCreateOrConnectWithoutMusyrifUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMusyrifUserInput | StudentUpsertWithWhereUniqueWithoutMusyrifUserInput[]
    createMany?: StudentCreateManyMusyrifUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMusyrifUserInput | StudentUpdateWithWhereUniqueWithoutMusyrifUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMusyrifUserInput | StudentUpdateManyWithWhereWithoutMusyrifUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput> | MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput[]
    upsert?: MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsMusyrifInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsMusyrifInputEnvelope
    set?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    disconnect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    delete?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    update?: MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsMusyrifInput[]
    updateMany?: MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsMusyrifInput | MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsMusyrifInput[]
    deleteMany?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
  }

  export type MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput> | MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput[]
    upsert?: MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsMusyrifInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsMusyrifInputEnvelope
    set?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    disconnect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    delete?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    update?: MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsMusyrifInput[]
    updateMany?: MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsMusyrifInput | MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsMusyrifInput[]
    deleteMany?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
  }

  export type MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput> | MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput[]
    upsert?: MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanMusyrifInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanMusyrifInputEnvelope
    set?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    disconnect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    delete?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    update?: MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanMusyrifInput[]
    updateMany?: MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanMusyrifInput | MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanMusyrifInput[]
    deleteMany?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput> | AttendanceCreateWithoutAttendaceMusyrifInput[] | AttendanceUncheckedCreateWithoutAttendaceMusyrifInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendaceMusyrifInput | AttendanceCreateOrConnectWithoutAttendaceMusyrifInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendaceMusyrifInput | AttendanceUpsertWithWhereUniqueWithoutAttendaceMusyrifInput[]
    createMany?: AttendanceCreateManyAttendaceMusyrifInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendaceMusyrifInput | AttendanceUpdateWithWhereUniqueWithoutAttendaceMusyrifInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendaceMusyrifInput | AttendanceUpdateManyWithWhereWithoutAttendaceMusyrifInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput> | MemorizingLogsCreateWithoutMemorizingLogsStudentInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsStudentInputEnvelope
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
  }

  export type ParentCreateNestedManyWithoutParentStudentInput = {
    create?: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput> | ParentCreateWithoutParentStudentInput[] | ParentUncheckedCreateWithoutParentStudentInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutParentStudentInput | ParentCreateOrConnectWithoutParentStudentInput[]
    createMany?: ParentCreateManyParentStudentInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput> | MurojaahLogsCreateWithoutMurojaahLogsStudentInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsStudentInputEnvelope
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
  }

  export type JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput = {
    create?: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput> | JuzEvaluationCreateWithoutEvaluationStudentInput[] | JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput[]
    connectOrCreate?: JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput | JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput[]
    createMany?: JuzEvaluationCreateManyEvaluationStudentInputEnvelope
    connect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
  }

  export type MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput> | MemorizationPlanCreateWithoutMemorizingPlanStudentsInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanStudentsInputEnvelope
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutAttendanceStudentInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput> | AttendanceCreateWithoutAttendanceStudentInput[] | AttendanceUncheckedCreateWithoutAttendanceStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceStudentInput | AttendanceCreateOrConnectWithoutAttendanceStudentInput[]
    createMany?: AttendanceCreateManyAttendanceStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput> | MemorizingLogsCreateWithoutMemorizingLogsStudentInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsStudentInputEnvelope
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
  }

  export type ParentUncheckedCreateNestedManyWithoutParentStudentInput = {
    create?: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput> | ParentCreateWithoutParentStudentInput[] | ParentUncheckedCreateWithoutParentStudentInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutParentStudentInput | ParentCreateOrConnectWithoutParentStudentInput[]
    createMany?: ParentCreateManyParentStudentInputEnvelope
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
  }

  export type MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput> | MurojaahLogsCreateWithoutMurojaahLogsStudentInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsStudentInputEnvelope
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
  }

  export type JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput = {
    create?: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput> | JuzEvaluationCreateWithoutEvaluationStudentInput[] | JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput[]
    connectOrCreate?: JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput | JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput[]
    createMany?: JuzEvaluationCreateManyEvaluationStudentInputEnvelope
    connect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
  }

  export type MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput> | MemorizationPlanCreateWithoutMemorizingPlanStudentsInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanStudentsInputEnvelope
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput> | AttendanceCreateWithoutAttendanceStudentInput[] | AttendanceUncheckedCreateWithoutAttendanceStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceStudentInput | AttendanceCreateOrConnectWithoutAttendanceStudentInput[]
    createMany?: AttendanceCreateManyAttendanceStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumGradeStatusFieldUpdateOperationsInput = {
    set?: $Enums.GradeStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput> | MemorizingLogsCreateWithoutMemorizingLogsStudentInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput[]
    upsert?: MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsStudentInput | MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsStudentInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsStudentInputEnvelope
    set?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    disconnect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    delete?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    update?: MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsStudentInput | MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsStudentInput[]
    updateMany?: MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsStudentInput | MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsStudentInput[]
    deleteMany?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
  }

  export type ParentUpdateManyWithoutParentStudentNestedInput = {
    create?: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput> | ParentCreateWithoutParentStudentInput[] | ParentUncheckedCreateWithoutParentStudentInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutParentStudentInput | ParentCreateOrConnectWithoutParentStudentInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutParentStudentInput | ParentUpsertWithWhereUniqueWithoutParentStudentInput[]
    createMany?: ParentCreateManyParentStudentInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutParentStudentInput | ParentUpdateWithWhereUniqueWithoutParentStudentInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutParentStudentInput | ParentUpdateManyWithWhereWithoutParentStudentInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput> | MurojaahLogsCreateWithoutMurojaahLogsStudentInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput[]
    upsert?: MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsStudentInput | MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsStudentInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsStudentInputEnvelope
    set?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    disconnect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    delete?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    update?: MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsStudentInput | MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsStudentInput[]
    updateMany?: MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsStudentInput | MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsStudentInput[]
    deleteMany?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
  }

  export type JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput = {
    create?: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput> | JuzEvaluationCreateWithoutEvaluationStudentInput[] | JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput[]
    connectOrCreate?: JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput | JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput[]
    upsert?: JuzEvaluationUpsertWithWhereUniqueWithoutEvaluationStudentInput | JuzEvaluationUpsertWithWhereUniqueWithoutEvaluationStudentInput[]
    createMany?: JuzEvaluationCreateManyEvaluationStudentInputEnvelope
    set?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    disconnect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    delete?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    connect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    update?: JuzEvaluationUpdateWithWhereUniqueWithoutEvaluationStudentInput | JuzEvaluationUpdateWithWhereUniqueWithoutEvaluationStudentInput[]
    updateMany?: JuzEvaluationUpdateManyWithWhereWithoutEvaluationStudentInput | JuzEvaluationUpdateManyWithWhereWithoutEvaluationStudentInput[]
    deleteMany?: JuzEvaluationScalarWhereInput | JuzEvaluationScalarWhereInput[]
  }

  export type MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput> | MemorizationPlanCreateWithoutMemorizingPlanStudentsInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput[]
    upsert?: MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanStudentsInput | MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanStudentsInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanStudentsInputEnvelope
    set?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    disconnect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    delete?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    update?: MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanStudentsInput | MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanStudentsInput[]
    updateMany?: MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanStudentsInput | MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanStudentsInput[]
    deleteMany?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutAttendanceStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput> | AttendanceCreateWithoutAttendanceStudentInput[] | AttendanceUncheckedCreateWithoutAttendanceStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceStudentInput | AttendanceCreateOrConnectWithoutAttendanceStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendanceStudentInput | AttendanceUpsertWithWhereUniqueWithoutAttendanceStudentInput[]
    createMany?: AttendanceCreateManyAttendanceStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendanceStudentInput | AttendanceUpdateWithWhereUniqueWithoutAttendanceStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendanceStudentInput | AttendanceUpdateManyWithWhereWithoutAttendanceStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput = {
    create?: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput> | MemorizingLogsCreateWithoutMemorizingLogsStudentInput[] | MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput[]
    connectOrCreate?: MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput | MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput[]
    upsert?: MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsStudentInput | MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsStudentInput[]
    createMany?: MemorizingLogsCreateManyMemorizingLogsStudentInputEnvelope
    set?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    disconnect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    delete?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    connect?: MemorizingLogsWhereUniqueInput | MemorizingLogsWhereUniqueInput[]
    update?: MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsStudentInput | MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsStudentInput[]
    updateMany?: MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsStudentInput | MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsStudentInput[]
    deleteMany?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
  }

  export type ParentUncheckedUpdateManyWithoutParentStudentNestedInput = {
    create?: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput> | ParentCreateWithoutParentStudentInput[] | ParentUncheckedCreateWithoutParentStudentInput[]
    connectOrCreate?: ParentCreateOrConnectWithoutParentStudentInput | ParentCreateOrConnectWithoutParentStudentInput[]
    upsert?: ParentUpsertWithWhereUniqueWithoutParentStudentInput | ParentUpsertWithWhereUniqueWithoutParentStudentInput[]
    createMany?: ParentCreateManyParentStudentInputEnvelope
    set?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    disconnect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    delete?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    connect?: ParentWhereUniqueInput | ParentWhereUniqueInput[]
    update?: ParentUpdateWithWhereUniqueWithoutParentStudentInput | ParentUpdateWithWhereUniqueWithoutParentStudentInput[]
    updateMany?: ParentUpdateManyWithWhereWithoutParentStudentInput | ParentUpdateManyWithWhereWithoutParentStudentInput[]
    deleteMany?: ParentScalarWhereInput | ParentScalarWhereInput[]
  }

  export type MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput = {
    create?: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput> | MurojaahLogsCreateWithoutMurojaahLogsStudentInput[] | MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput[]
    connectOrCreate?: MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput | MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput[]
    upsert?: MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsStudentInput | MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsStudentInput[]
    createMany?: MurojaahLogsCreateManyMurojaahLogsStudentInputEnvelope
    set?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    disconnect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    delete?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    connect?: MurojaahLogsWhereUniqueInput | MurojaahLogsWhereUniqueInput[]
    update?: MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsStudentInput | MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsStudentInput[]
    updateMany?: MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsStudentInput | MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsStudentInput[]
    deleteMany?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
  }

  export type JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput = {
    create?: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput> | JuzEvaluationCreateWithoutEvaluationStudentInput[] | JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput[]
    connectOrCreate?: JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput | JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput[]
    upsert?: JuzEvaluationUpsertWithWhereUniqueWithoutEvaluationStudentInput | JuzEvaluationUpsertWithWhereUniqueWithoutEvaluationStudentInput[]
    createMany?: JuzEvaluationCreateManyEvaluationStudentInputEnvelope
    set?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    disconnect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    delete?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    connect?: JuzEvaluationWhereUniqueInput | JuzEvaluationWhereUniqueInput[]
    update?: JuzEvaluationUpdateWithWhereUniqueWithoutEvaluationStudentInput | JuzEvaluationUpdateWithWhereUniqueWithoutEvaluationStudentInput[]
    updateMany?: JuzEvaluationUpdateManyWithWhereWithoutEvaluationStudentInput | JuzEvaluationUpdateManyWithWhereWithoutEvaluationStudentInput[]
    deleteMany?: JuzEvaluationScalarWhereInput | JuzEvaluationScalarWhereInput[]
  }

  export type MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput = {
    create?: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput> | MemorizationPlanCreateWithoutMemorizingPlanStudentsInput[] | MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput[]
    connectOrCreate?: MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput | MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput[]
    upsert?: MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanStudentsInput | MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanStudentsInput[]
    createMany?: MemorizationPlanCreateManyMemorizingPlanStudentsInputEnvelope
    set?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    disconnect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    delete?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    connect?: MemorizationPlanWhereUniqueInput | MemorizationPlanWhereUniqueInput[]
    update?: MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanStudentsInput | MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanStudentsInput[]
    updateMany?: MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanStudentsInput | MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanStudentsInput[]
    deleteMany?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput> | AttendanceCreateWithoutAttendanceStudentInput[] | AttendanceUncheckedCreateWithoutAttendanceStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendanceStudentInput | AttendanceCreateOrConnectWithoutAttendanceStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendanceStudentInput | AttendanceUpsertWithWhereUniqueWithoutAttendanceStudentInput[]
    createMany?: AttendanceCreateManyAttendanceStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendanceStudentInput | AttendanceUpdateWithWhereUniqueWithoutAttendanceStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendanceStudentInput | AttendanceUpdateManyWithWhereWithoutAttendanceStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type StudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    upsert?: StudentUpsertWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceInput, StudentUpdateWithoutAttendanceInput>, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentCreateNestedOneWithoutParentInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumParentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParentStatus
  }

  export type StudentUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput
    upsert?: StudentUpsertWithoutParentInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutParentInput, StudentUpdateWithoutParentInput>, StudentUncheckedUpdateWithoutParentInput>
  }

  export type StudentCreateNestedOneWithoutMemorizingLogsInput = {
    create?: XOR<StudentCreateWithoutMemorizingLogsInput, StudentUncheckedCreateWithoutMemorizingLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMemorizingLogsInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMemorizingLogsInput = {
    create?: XOR<UserCreateWithoutMemorizingLogsInput, UserUncheckedCreateWithoutMemorizingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemorizingLogsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAssessmentFieldUpdateOperationsInput = {
    set?: $Enums.Assessment
  }

  export type StudentUpdateOneRequiredWithoutMemorizingLogsNestedInput = {
    create?: XOR<StudentCreateWithoutMemorizingLogsInput, StudentUncheckedCreateWithoutMemorizingLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMemorizingLogsInput
    upsert?: StudentUpsertWithoutMemorizingLogsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMemorizingLogsInput, StudentUpdateWithoutMemorizingLogsInput>, StudentUncheckedUpdateWithoutMemorizingLogsInput>
  }

  export type UserUpdateOneRequiredWithoutMemorizingLogsNestedInput = {
    create?: XOR<UserCreateWithoutMemorizingLogsInput, UserUncheckedCreateWithoutMemorizingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemorizingLogsInput
    upsert?: UserUpsertWithoutMemorizingLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemorizingLogsInput, UserUpdateWithoutMemorizingLogsInput>, UserUncheckedUpdateWithoutMemorizingLogsInput>
  }

  export type StudentCreateNestedOneWithoutMurojaahLogsInput = {
    create?: XOR<StudentCreateWithoutMurojaahLogsInput, StudentUncheckedCreateWithoutMurojaahLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMurojaahLogsInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMurojaahLogsInput = {
    create?: XOR<UserCreateWithoutMurojaahLogsInput, UserUncheckedCreateWithoutMurojaahLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMurojaahLogsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutMurojaahLogsNestedInput = {
    create?: XOR<StudentCreateWithoutMurojaahLogsInput, StudentUncheckedCreateWithoutMurojaahLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMurojaahLogsInput
    upsert?: StudentUpsertWithoutMurojaahLogsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMurojaahLogsInput, StudentUpdateWithoutMurojaahLogsInput>, StudentUncheckedUpdateWithoutMurojaahLogsInput>
  }

  export type UserUpdateOneRequiredWithoutMurojaahLogsNestedInput = {
    create?: XOR<UserCreateWithoutMurojaahLogsInput, UserUncheckedCreateWithoutMurojaahLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMurojaahLogsInput
    upsert?: UserUpsertWithoutMurojaahLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMurojaahLogsInput, UserUpdateWithoutMurojaahLogsInput>, UserUncheckedUpdateWithoutMurojaahLogsInput>
  }

  export type SurahCreatejuzInput = {
    set: number[]
  }

  export type AyahCreateNestedManyWithoutAyahSurahInput = {
    create?: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput> | AyahCreateWithoutAyahSurahInput[] | AyahUncheckedCreateWithoutAyahSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutAyahSurahInput | AyahCreateOrConnectWithoutAyahSurahInput[]
    createMany?: AyahCreateManyAyahSurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type AyahUncheckedCreateNestedManyWithoutAyahSurahInput = {
    create?: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput> | AyahCreateWithoutAyahSurahInput[] | AyahUncheckedCreateWithoutAyahSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutAyahSurahInput | AyahCreateOrConnectWithoutAyahSurahInput[]
    createMany?: AyahCreateManyAyahSurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type EnumRevelationFieldUpdateOperationsInput = {
    set?: $Enums.Revelation
  }

  export type SurahUpdatejuzInput = {
    set?: number[]
    push?: number | number[]
  }

  export type AyahUpdateManyWithoutAyahSurahNestedInput = {
    create?: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput> | AyahCreateWithoutAyahSurahInput[] | AyahUncheckedCreateWithoutAyahSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutAyahSurahInput | AyahCreateOrConnectWithoutAyahSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutAyahSurahInput | AyahUpsertWithWhereUniqueWithoutAyahSurahInput[]
    createMany?: AyahCreateManyAyahSurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutAyahSurahInput | AyahUpdateWithWhereUniqueWithoutAyahSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutAyahSurahInput | AyahUpdateManyWithWhereWithoutAyahSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type AyahUncheckedUpdateManyWithoutAyahSurahNestedInput = {
    create?: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput> | AyahCreateWithoutAyahSurahInput[] | AyahUncheckedCreateWithoutAyahSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutAyahSurahInput | AyahCreateOrConnectWithoutAyahSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutAyahSurahInput | AyahUpsertWithWhereUniqueWithoutAyahSurahInput[]
    createMany?: AyahCreateManyAyahSurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutAyahSurahInput | AyahUpdateWithWhereUniqueWithoutAyahSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutAyahSurahInput | AyahUpdateManyWithWhereWithoutAyahSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type SurahCreateNestedOneWithoutAyahInput = {
    create?: XOR<SurahCreateWithoutAyahInput, SurahUncheckedCreateWithoutAyahInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahInput
    connect?: SurahWhereUniqueInput
  }

  export type SurahUpdateOneRequiredWithoutAyahNestedInput = {
    create?: XOR<SurahCreateWithoutAyahInput, SurahUncheckedCreateWithoutAyahInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahInput
    upsert?: SurahUpsertWithoutAyahInput
    connect?: SurahWhereUniqueInput
    update?: XOR<XOR<SurahUpdateToOneWithWhereWithoutAyahInput, SurahUpdateWithoutAyahInput>, SurahUncheckedUpdateWithoutAyahInput>
  }

  export type StudentCreateNestedOneWithoutJuzEvaluationInput = {
    create?: XOR<StudentCreateWithoutJuzEvaluationInput, StudentUncheckedCreateWithoutJuzEvaluationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutJuzEvaluationInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutJuzEvaluationNestedInput = {
    create?: XOR<StudentCreateWithoutJuzEvaluationInput, StudentUncheckedCreateWithoutJuzEvaluationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutJuzEvaluationInput
    upsert?: StudentUpsertWithoutJuzEvaluationInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutJuzEvaluationInput, StudentUpdateWithoutJuzEvaluationInput>, StudentUncheckedUpdateWithoutJuzEvaluationInput>
  }

  export type StudentCreateNestedOneWithoutMemorizationPlanInput = {
    create?: XOR<StudentCreateWithoutMemorizationPlanInput, StudentUncheckedCreateWithoutMemorizationPlanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMemorizationPlanInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMemorizationPlanInput = {
    create?: XOR<UserCreateWithoutMemorizationPlanInput, UserUncheckedCreateWithoutMemorizationPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemorizationPlanInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutMemorizationPlanNestedInput = {
    create?: XOR<StudentCreateWithoutMemorizationPlanInput, StudentUncheckedCreateWithoutMemorizationPlanInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMemorizationPlanInput
    upsert?: StudentUpsertWithoutMemorizationPlanInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMemorizationPlanInput, StudentUpdateWithoutMemorizationPlanInput>, StudentUncheckedUpdateWithoutMemorizationPlanInput>
  }

  export type UserUpdateOneRequiredWithoutMemorizationPlanNestedInput = {
    create?: XOR<UserCreateWithoutMemorizationPlanInput, UserUncheckedCreateWithoutMemorizationPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemorizationPlanInput
    upsert?: UserUpsertWithoutMemorizationPlanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemorizationPlanInput, UserUpdateWithoutMemorizationPlanInput>, UserUncheckedUpdateWithoutMemorizationPlanInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusFilter<$PrismaModel> | $Enums.GradeStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeStatusFilter<$PrismaModel>
    _max?: NestedEnumGradeStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumParentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentStatus | EnumParentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentStatusFilter<$PrismaModel> | $Enums.ParentStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumParentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentStatus | EnumParentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentStatus[] | ListEnumParentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentStatusFilter<$PrismaModel>
    _max?: NestedEnumParentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Assessment | EnumAssessmentFieldRefInput<$PrismaModel>
    in?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentFilter<$PrismaModel> | $Enums.Assessment
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAssessmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Assessment | EnumAssessmentFieldRefInput<$PrismaModel>
    in?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Assessment[] | ListEnumAssessmentFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentWithAggregatesFilter<$PrismaModel> | $Enums.Assessment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentFilter<$PrismaModel>
    _max?: NestedEnumAssessmentFilter<$PrismaModel>
  }

  export type NestedEnumRevelationFilter<$PrismaModel = never> = {
    equals?: $Enums.Revelation | EnumRevelationFieldRefInput<$PrismaModel>
    in?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    not?: NestedEnumRevelationFilter<$PrismaModel> | $Enums.Revelation
  }

  export type NestedEnumRevelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Revelation | EnumRevelationFieldRefInput<$PrismaModel>
    in?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Revelation[] | ListEnumRevelationFieldRefInput<$PrismaModel>
    not?: NestedEnumRevelationWithAggregatesFilter<$PrismaModel> | $Enums.Revelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevelationFilter<$PrismaModel>
    _max?: NestedEnumRevelationFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StudentCreateWithoutMusyrifUserInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutMusyrifUserInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutMusyrifUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput>
  }

  export type StudentCreateManyMusyrifUserInputEnvelope = {
    data: StudentCreateManyMusyrifUserInput | StudentCreateManyMusyrifUserInput[]
    skipDuplicates?: boolean
  }

  export type MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogsStudent: StudentCreateNestedOneWithoutMemorizingLogsInput
  }

  export type MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput = {
    id?: string
    student_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizingLogsCreateOrConnectWithoutMemorizingLogsMusyrifInput = {
    where: MemorizingLogsWhereUniqueInput
    create: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput>
  }

  export type MemorizingLogsCreateManyMemorizingLogsMusyrifInputEnvelope = {
    data: MemorizingLogsCreateManyMemorizingLogsMusyrifInput | MemorizingLogsCreateManyMemorizingLogsMusyrifInput[]
    skipDuplicates?: boolean
  }

  export type MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MurojaahLogsStudent: StudentCreateNestedOneWithoutMurojaahLogsInput
  }

  export type MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput = {
    id?: string
    student_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MurojaahLogsCreateOrConnectWithoutMurojaahLogsMusyrifInput = {
    where: MurojaahLogsWhereUniqueInput
    create: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput>
  }

  export type MurojaahLogsCreateManyMurojaahLogsMusyrifInputEnvelope = {
    data: MurojaahLogsCreateManyMurojaahLogsMusyrifInput | MurojaahLogsCreateManyMurojaahLogsMusyrifInput[]
    skipDuplicates?: boolean
  }

  export type MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput = {
    id?: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    notes: string
    created_at?: Date | string
    MemorizingPlanStudents: StudentCreateNestedOneWithoutMemorizationPlanInput
  }

  export type MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput = {
    id?: string
    student_id: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    notes: string
    created_at?: Date | string
  }

  export type MemorizationPlanCreateOrConnectWithoutMemorizingPlanMusyrifInput = {
    where: MemorizationPlanWhereUniqueInput
    create: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput>
  }

  export type MemorizationPlanCreateManyMemorizingPlanMusyrifInputEnvelope = {
    data: MemorizationPlanCreateManyMemorizingPlanMusyrifInput | MemorizationPlanCreateManyMemorizingPlanMusyrifInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutAttendaceMusyrifInput = {
    id?: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    created_at?: Date | string
    AttendanceStudent: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutAttendaceMusyrifInput = {
    id?: string
    student_id: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutAttendaceMusyrifInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput>
  }

  export type AttendanceCreateManyAttendaceMusyrifInputEnvelope = {
    data: AttendanceCreateManyAttendaceMusyrifInput | AttendanceCreateManyAttendaceMusyrifInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutMusyrifUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutMusyrifUserInput, StudentUncheckedUpdateWithoutMusyrifUserInput>
    create: XOR<StudentCreateWithoutMusyrifUserInput, StudentUncheckedCreateWithoutMusyrifUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutMusyrifUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutMusyrifUserInput, StudentUncheckedUpdateWithoutMusyrifUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutMusyrifUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutMusyrifUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: UuidFilter<"Student"> | string
    musyrif_id?: UuidFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    grade?: StringFilter<"Student"> | string
    grade_status?: EnumGradeStatusFilter<"Student"> | $Enums.GradeStatus
    birth_date?: DateTimeFilter<"Student"> | Date | string
    join_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
  }

  export type MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsMusyrifInput = {
    where: MemorizingLogsWhereUniqueInput
    update: XOR<MemorizingLogsUpdateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedUpdateWithoutMemorizingLogsMusyrifInput>
    create: XOR<MemorizingLogsCreateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsMusyrifInput>
  }

  export type MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsMusyrifInput = {
    where: MemorizingLogsWhereUniqueInput
    data: XOR<MemorizingLogsUpdateWithoutMemorizingLogsMusyrifInput, MemorizingLogsUncheckedUpdateWithoutMemorizingLogsMusyrifInput>
  }

  export type MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsMusyrifInput = {
    where: MemorizingLogsScalarWhereInput
    data: XOR<MemorizingLogsUpdateManyMutationInput, MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifInput>
  }

  export type MemorizingLogsScalarWhereInput = {
    AND?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
    OR?: MemorizingLogsScalarWhereInput[]
    NOT?: MemorizingLogsScalarWhereInput | MemorizingLogsScalarWhereInput[]
    id?: UuidFilter<"MemorizingLogs"> | string
    student_id?: UuidFilter<"MemorizingLogs"> | string
    musyrif_id?: UuidFilter<"MemorizingLogs"> | string
    juz?: IntFilter<"MemorizingLogs"> | number
    surah?: StringFilter<"MemorizingLogs"> | string
    from_ayah?: IntFilter<"MemorizingLogs"> | number
    to_ayah?: IntFilter<"MemorizingLogs"> | number
    submission_date?: DateTimeFilter<"MemorizingLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MemorizingLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MemorizingLogs"> | string | null
    isRepeat?: IntFilter<"MemorizingLogs"> | number
    created_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
    updated_at?: DateTimeFilter<"MemorizingLogs"> | Date | string
  }

  export type MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsMusyrifInput = {
    where: MurojaahLogsWhereUniqueInput
    update: XOR<MurojaahLogsUpdateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedUpdateWithoutMurojaahLogsMusyrifInput>
    create: XOR<MurojaahLogsCreateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsMusyrifInput>
  }

  export type MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsMusyrifInput = {
    where: MurojaahLogsWhereUniqueInput
    data: XOR<MurojaahLogsUpdateWithoutMurojaahLogsMusyrifInput, MurojaahLogsUncheckedUpdateWithoutMurojaahLogsMusyrifInput>
  }

  export type MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsMusyrifInput = {
    where: MurojaahLogsScalarWhereInput
    data: XOR<MurojaahLogsUpdateManyMutationInput, MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifInput>
  }

  export type MurojaahLogsScalarWhereInput = {
    AND?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
    OR?: MurojaahLogsScalarWhereInput[]
    NOT?: MurojaahLogsScalarWhereInput | MurojaahLogsScalarWhereInput[]
    id?: UuidFilter<"MurojaahLogs"> | string
    student_id?: UuidFilter<"MurojaahLogs"> | string
    musyrif_id?: UuidFilter<"MurojaahLogs"> | string
    juz?: IntFilter<"MurojaahLogs"> | number
    surah?: StringFilter<"MurojaahLogs"> | string
    from_ayah?: IntFilter<"MurojaahLogs"> | number
    to_ayah?: IntFilter<"MurojaahLogs"> | number
    submission_date?: DateTimeFilter<"MurojaahLogs"> | Date | string
    assessment?: EnumAssessmentFilter<"MurojaahLogs"> | $Enums.Assessment
    notes?: StringNullableFilter<"MurojaahLogs"> | string | null
    isRepeat?: IntFilter<"MurojaahLogs"> | number
    created_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
    updated_at?: DateTimeFilter<"MurojaahLogs"> | Date | string
  }

  export type MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanMusyrifInput = {
    where: MemorizationPlanWhereUniqueInput
    update: XOR<MemorizationPlanUpdateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedUpdateWithoutMemorizingPlanMusyrifInput>
    create: XOR<MemorizationPlanCreateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanMusyrifInput>
  }

  export type MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanMusyrifInput = {
    where: MemorizationPlanWhereUniqueInput
    data: XOR<MemorizationPlanUpdateWithoutMemorizingPlanMusyrifInput, MemorizationPlanUncheckedUpdateWithoutMemorizingPlanMusyrifInput>
  }

  export type MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanMusyrifInput = {
    where: MemorizationPlanScalarWhereInput
    data: XOR<MemorizationPlanUpdateManyMutationInput, MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifInput>
  }

  export type MemorizationPlanScalarWhereInput = {
    AND?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
    OR?: MemorizationPlanScalarWhereInput[]
    NOT?: MemorizationPlanScalarWhereInput | MemorizationPlanScalarWhereInput[]
    id?: UuidFilter<"MemorizationPlan"> | string
    student_id?: UuidFilter<"MemorizationPlan"> | string
    plan_type?: EnumPlanTypeFilter<"MemorizationPlan"> | $Enums.PlanType
    juz_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    surah_id?: UuidNullableFilter<"MemorizationPlan"> | string | null
    page_number?: IntNullableFilter<"MemorizationPlan"> | number | null
    start_ayah?: IntFilter<"MemorizationPlan"> | number
    end_ayah?: IntFilter<"MemorizationPlan"> | number
    target_date?: DateTimeFilter<"MemorizationPlan"> | Date | string
    assigned_by?: UuidFilter<"MemorizationPlan"> | string
    notes?: StringFilter<"MemorizationPlan"> | string
    created_at?: DateTimeFilter<"MemorizationPlan"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutAttendaceMusyrifInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutAttendaceMusyrifInput, AttendanceUncheckedUpdateWithoutAttendaceMusyrifInput>
    create: XOR<AttendanceCreateWithoutAttendaceMusyrifInput, AttendanceUncheckedCreateWithoutAttendaceMusyrifInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutAttendaceMusyrifInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutAttendaceMusyrifInput, AttendanceUncheckedUpdateWithoutAttendaceMusyrifInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutAttendaceMusyrifInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    student_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    remark?: StringFilter<"Attendance"> | string
    recorded_by?: UuidFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type MemorizingLogsCreateWithoutMemorizingLogsStudentInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogsMusyrif: UserCreateNestedOneWithoutMemorizingLogsInput
  }

  export type MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput = {
    id?: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizingLogsCreateOrConnectWithoutMemorizingLogsStudentInput = {
    where: MemorizingLogsWhereUniqueInput
    create: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput>
  }

  export type MemorizingLogsCreateManyMemorizingLogsStudentInputEnvelope = {
    data: MemorizingLogsCreateManyMemorizingLogsStudentInput | MemorizingLogsCreateManyMemorizingLogsStudentInput[]
    skipDuplicates?: boolean
  }

  export type ParentCreateWithoutParentStudentInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
  }

  export type ParentUncheckedCreateWithoutParentStudentInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
  }

  export type ParentCreateOrConnectWithoutParentStudentInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput>
  }

  export type ParentCreateManyParentStudentInputEnvelope = {
    data: ParentCreateManyParentStudentInput | ParentCreateManyParentStudentInput[]
    skipDuplicates?: boolean
  }

  export type MurojaahLogsCreateWithoutMurojaahLogsStudentInput = {
    id?: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
    MurojaahLogsMusyrif: UserCreateNestedOneWithoutMurojaahLogsInput
  }

  export type MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput = {
    id?: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MurojaahLogsCreateOrConnectWithoutMurojaahLogsStudentInput = {
    where: MurojaahLogsWhereUniqueInput
    create: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput>
  }

  export type MurojaahLogsCreateManyMurojaahLogsStudentInputEnvelope = {
    data: MurojaahLogsCreateManyMurojaahLogsStudentInput | MurojaahLogsCreateManyMurojaahLogsStudentInput[]
    skipDuplicates?: boolean
  }

  export type JuzEvaluationCreateWithoutEvaluationStudentInput = {
    id?: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput = {
    id?: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JuzEvaluationCreateOrConnectWithoutEvaluationStudentInput = {
    where: JuzEvaluationWhereUniqueInput
    create: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput>
  }

  export type JuzEvaluationCreateManyEvaluationStudentInputEnvelope = {
    data: JuzEvaluationCreateManyEvaluationStudentInput | JuzEvaluationCreateManyEvaluationStudentInput[]
    skipDuplicates?: boolean
  }

  export type MemorizationPlanCreateWithoutMemorizingPlanStudentsInput = {
    id?: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    notes: string
    created_at?: Date | string
    MemorizingPlanMusyrif: UserCreateNestedOneWithoutMemorizationPlanInput
  }

  export type MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput = {
    id?: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    assigned_by: string
    notes: string
    created_at?: Date | string
  }

  export type MemorizationPlanCreateOrConnectWithoutMemorizingPlanStudentsInput = {
    where: MemorizationPlanWhereUniqueInput
    create: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput>
  }

  export type MemorizationPlanCreateManyMemorizingPlanStudentsInputEnvelope = {
    data: MemorizationPlanCreateManyMemorizingPlanStudentsInput | MemorizationPlanCreateManyMemorizingPlanStudentsInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutAttendanceStudentInput = {
    id?: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    created_at?: Date | string
    AttendaceMusyrif: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutAttendanceStudentInput = {
    id?: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    recorded_by: string
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutAttendanceStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput>
  }

  export type AttendanceCreateManyAttendanceStudentInputEnvelope = {
    data: AttendanceCreateManyAttendanceStudentInput | AttendanceCreateManyAttendanceStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type MemorizingLogsUpsertWithWhereUniqueWithoutMemorizingLogsStudentInput = {
    where: MemorizingLogsWhereUniqueInput
    update: XOR<MemorizingLogsUpdateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedUpdateWithoutMemorizingLogsStudentInput>
    create: XOR<MemorizingLogsCreateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedCreateWithoutMemorizingLogsStudentInput>
  }

  export type MemorizingLogsUpdateWithWhereUniqueWithoutMemorizingLogsStudentInput = {
    where: MemorizingLogsWhereUniqueInput
    data: XOR<MemorizingLogsUpdateWithoutMemorizingLogsStudentInput, MemorizingLogsUncheckedUpdateWithoutMemorizingLogsStudentInput>
  }

  export type MemorizingLogsUpdateManyWithWhereWithoutMemorizingLogsStudentInput = {
    where: MemorizingLogsScalarWhereInput
    data: XOR<MemorizingLogsUpdateManyMutationInput, MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentInput>
  }

  export type ParentUpsertWithWhereUniqueWithoutParentStudentInput = {
    where: ParentWhereUniqueInput
    update: XOR<ParentUpdateWithoutParentStudentInput, ParentUncheckedUpdateWithoutParentStudentInput>
    create: XOR<ParentCreateWithoutParentStudentInput, ParentUncheckedCreateWithoutParentStudentInput>
  }

  export type ParentUpdateWithWhereUniqueWithoutParentStudentInput = {
    where: ParentWhereUniqueInput
    data: XOR<ParentUpdateWithoutParentStudentInput, ParentUncheckedUpdateWithoutParentStudentInput>
  }

  export type ParentUpdateManyWithWhereWithoutParentStudentInput = {
    where: ParentScalarWhereInput
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyWithoutParentStudentInput>
  }

  export type ParentScalarWhereInput = {
    AND?: ParentScalarWhereInput | ParentScalarWhereInput[]
    OR?: ParentScalarWhereInput[]
    NOT?: ParentScalarWhereInput | ParentScalarWhereInput[]
    id?: UuidFilter<"Parent"> | string
    student_id?: UuidFilter<"Parent"> | string
    name?: StringFilter<"Parent"> | string
    gender?: EnumGenderFilter<"Parent"> | $Enums.Gender
    phone?: StringNullableFilter<"Parent"> | string | null
    parent_status?: EnumParentStatusFilter<"Parent"> | $Enums.ParentStatus
    description?: StringNullableFilter<"Parent"> | string | null
    address?: StringNullableFilter<"Parent"> | string | null
  }

  export type MurojaahLogsUpsertWithWhereUniqueWithoutMurojaahLogsStudentInput = {
    where: MurojaahLogsWhereUniqueInput
    update: XOR<MurojaahLogsUpdateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedUpdateWithoutMurojaahLogsStudentInput>
    create: XOR<MurojaahLogsCreateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedCreateWithoutMurojaahLogsStudentInput>
  }

  export type MurojaahLogsUpdateWithWhereUniqueWithoutMurojaahLogsStudentInput = {
    where: MurojaahLogsWhereUniqueInput
    data: XOR<MurojaahLogsUpdateWithoutMurojaahLogsStudentInput, MurojaahLogsUncheckedUpdateWithoutMurojaahLogsStudentInput>
  }

  export type MurojaahLogsUpdateManyWithWhereWithoutMurojaahLogsStudentInput = {
    where: MurojaahLogsScalarWhereInput
    data: XOR<MurojaahLogsUpdateManyMutationInput, MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentInput>
  }

  export type JuzEvaluationUpsertWithWhereUniqueWithoutEvaluationStudentInput = {
    where: JuzEvaluationWhereUniqueInput
    update: XOR<JuzEvaluationUpdateWithoutEvaluationStudentInput, JuzEvaluationUncheckedUpdateWithoutEvaluationStudentInput>
    create: XOR<JuzEvaluationCreateWithoutEvaluationStudentInput, JuzEvaluationUncheckedCreateWithoutEvaluationStudentInput>
  }

  export type JuzEvaluationUpdateWithWhereUniqueWithoutEvaluationStudentInput = {
    where: JuzEvaluationWhereUniqueInput
    data: XOR<JuzEvaluationUpdateWithoutEvaluationStudentInput, JuzEvaluationUncheckedUpdateWithoutEvaluationStudentInput>
  }

  export type JuzEvaluationUpdateManyWithWhereWithoutEvaluationStudentInput = {
    where: JuzEvaluationScalarWhereInput
    data: XOR<JuzEvaluationUpdateManyMutationInput, JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentInput>
  }

  export type JuzEvaluationScalarWhereInput = {
    AND?: JuzEvaluationScalarWhereInput | JuzEvaluationScalarWhereInput[]
    OR?: JuzEvaluationScalarWhereInput[]
    NOT?: JuzEvaluationScalarWhereInput | JuzEvaluationScalarWhereInput[]
    id?: UuidFilter<"JuzEvaluation"> | string
    student_id?: UuidFilter<"JuzEvaluation"> | string
    juz_number?: IntFilter<"JuzEvaluation"> | number
    evaluation_date?: DateTimeFilter<"JuzEvaluation"> | Date | string
    assessment?: EnumAssessmentFilter<"JuzEvaluation"> | $Enums.Assessment
    notes?: StringFilter<"JuzEvaluation"> | string
    created_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
    updated_at?: DateTimeFilter<"JuzEvaluation"> | Date | string
  }

  export type MemorizationPlanUpsertWithWhereUniqueWithoutMemorizingPlanStudentsInput = {
    where: MemorizationPlanWhereUniqueInput
    update: XOR<MemorizationPlanUpdateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedUpdateWithoutMemorizingPlanStudentsInput>
    create: XOR<MemorizationPlanCreateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedCreateWithoutMemorizingPlanStudentsInput>
  }

  export type MemorizationPlanUpdateWithWhereUniqueWithoutMemorizingPlanStudentsInput = {
    where: MemorizationPlanWhereUniqueInput
    data: XOR<MemorizationPlanUpdateWithoutMemorizingPlanStudentsInput, MemorizationPlanUncheckedUpdateWithoutMemorizingPlanStudentsInput>
  }

  export type MemorizationPlanUpdateManyWithWhereWithoutMemorizingPlanStudentsInput = {
    where: MemorizationPlanScalarWhereInput
    data: XOR<MemorizationPlanUpdateManyMutationInput, MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutAttendanceStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutAttendanceStudentInput, AttendanceUncheckedUpdateWithoutAttendanceStudentInput>
    create: XOR<AttendanceCreateWithoutAttendanceStudentInput, AttendanceUncheckedCreateWithoutAttendanceStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutAttendanceStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutAttendanceStudentInput, AttendanceUncheckedUpdateWithoutAttendanceStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutAttendanceStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutAttendanceStudentInput>
  }

  export type StudentCreateWithoutAttendanceInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
  }

  export type StudentUncheckedCreateWithoutAttendanceInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
  }

  export type StudentCreateOrConnectWithoutAttendanceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
  }

  export type UserCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentUpsertWithoutAttendanceInput = {
    update: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput
  }

  export type StudentCreateWithoutParentInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutParentInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutParentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentUpsertWithoutParentInput = {
    update: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutParentInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
  }

  export type StudentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentCreateWithoutMemorizingLogsInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutMemorizingLogsInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutMemorizingLogsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMemorizingLogsInput, StudentUncheckedCreateWithoutMemorizingLogsInput>
  }

  export type UserCreateWithoutMemorizingLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentCreateNestedManyWithoutMusyrifUserInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUncheckedCreateWithoutMemorizingLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutMusyrifUserInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserCreateOrConnectWithoutMemorizingLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemorizingLogsInput, UserUncheckedCreateWithoutMemorizingLogsInput>
  }

  export type StudentUpsertWithoutMemorizingLogsInput = {
    update: XOR<StudentUpdateWithoutMemorizingLogsInput, StudentUncheckedUpdateWithoutMemorizingLogsInput>
    create: XOR<StudentCreateWithoutMemorizingLogsInput, StudentUncheckedCreateWithoutMemorizingLogsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMemorizingLogsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMemorizingLogsInput, StudentUncheckedUpdateWithoutMemorizingLogsInput>
  }

  export type StudentUpdateWithoutMemorizingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMemorizingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type UserUpsertWithoutMemorizingLogsInput = {
    update: XOR<UserUpdateWithoutMemorizingLogsInput, UserUncheckedUpdateWithoutMemorizingLogsInput>
    create: XOR<UserCreateWithoutMemorizingLogsInput, UserUncheckedCreateWithoutMemorizingLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemorizingLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemorizingLogsInput, UserUncheckedUpdateWithoutMemorizingLogsInput>
  }

  export type UserUpdateWithoutMemorizingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutMusyrifUserNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserUncheckedUpdateWithoutMemorizingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type StudentCreateWithoutMurojaahLogsInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutMurojaahLogsInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutMurojaahLogsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMurojaahLogsInput, StudentUncheckedCreateWithoutMurojaahLogsInput>
  }

  export type UserCreateWithoutMurojaahLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUncheckedCreateWithoutMurojaahLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanMusyrifInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserCreateOrConnectWithoutMurojaahLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMurojaahLogsInput, UserUncheckedCreateWithoutMurojaahLogsInput>
  }

  export type StudentUpsertWithoutMurojaahLogsInput = {
    update: XOR<StudentUpdateWithoutMurojaahLogsInput, StudentUncheckedUpdateWithoutMurojaahLogsInput>
    create: XOR<StudentCreateWithoutMurojaahLogsInput, StudentUncheckedCreateWithoutMurojaahLogsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMurojaahLogsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMurojaahLogsInput, StudentUncheckedUpdateWithoutMurojaahLogsInput>
  }

  export type StudentUpdateWithoutMurojaahLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMurojaahLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type UserUpsertWithoutMurojaahLogsInput = {
    update: XOR<UserUpdateWithoutMurojaahLogsInput, UserUncheckedUpdateWithoutMurojaahLogsInput>
    create: XOR<UserCreateWithoutMurojaahLogsInput, UserUncheckedCreateWithoutMurojaahLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMurojaahLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMurojaahLogsInput, UserUncheckedUpdateWithoutMurojaahLogsInput>
  }

  export type UserUpdateWithoutMurojaahLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserUncheckedUpdateWithoutMurojaahLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type AyahCreateWithoutAyahSurahInput = {
    id?: string
    ayah_number: number
    juz_number: number
    text: string
  }

  export type AyahUncheckedCreateWithoutAyahSurahInput = {
    id?: string
    ayah_number: number
    juz_number: number
    text: string
  }

  export type AyahCreateOrConnectWithoutAyahSurahInput = {
    where: AyahWhereUniqueInput
    create: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput>
  }

  export type AyahCreateManyAyahSurahInputEnvelope = {
    data: AyahCreateManyAyahSurahInput | AyahCreateManyAyahSurahInput[]
    skipDuplicates?: boolean
  }

  export type AyahUpsertWithWhereUniqueWithoutAyahSurahInput = {
    where: AyahWhereUniqueInput
    update: XOR<AyahUpdateWithoutAyahSurahInput, AyahUncheckedUpdateWithoutAyahSurahInput>
    create: XOR<AyahCreateWithoutAyahSurahInput, AyahUncheckedCreateWithoutAyahSurahInput>
  }

  export type AyahUpdateWithWhereUniqueWithoutAyahSurahInput = {
    where: AyahWhereUniqueInput
    data: XOR<AyahUpdateWithoutAyahSurahInput, AyahUncheckedUpdateWithoutAyahSurahInput>
  }

  export type AyahUpdateManyWithWhereWithoutAyahSurahInput = {
    where: AyahScalarWhereInput
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyWithoutAyahSurahInput>
  }

  export type AyahScalarWhereInput = {
    AND?: AyahScalarWhereInput | AyahScalarWhereInput[]
    OR?: AyahScalarWhereInput[]
    NOT?: AyahScalarWhereInput | AyahScalarWhereInput[]
    id?: UuidFilter<"Ayah"> | string
    surah_id?: UuidFilter<"Ayah"> | string
    ayah_number?: IntFilter<"Ayah"> | number
    juz_number?: IntFilter<"Ayah"> | number
    text?: StringFilter<"Ayah"> | string
  }

  export type SurahCreateWithoutAyahInput = {
    id?: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type?: $Enums.Revelation
    juz?: SurahCreatejuzInput | number[]
  }

  export type SurahUncheckedCreateWithoutAyahInput = {
    id?: string
    name: string
    surah_number: number
    arabic_name: string
    ayah_counts: number
    revelation_type?: $Enums.Revelation
    juz?: SurahCreatejuzInput | number[]
  }

  export type SurahCreateOrConnectWithoutAyahInput = {
    where: SurahWhereUniqueInput
    create: XOR<SurahCreateWithoutAyahInput, SurahUncheckedCreateWithoutAyahInput>
  }

  export type SurahUpsertWithoutAyahInput = {
    update: XOR<SurahUpdateWithoutAyahInput, SurahUncheckedUpdateWithoutAyahInput>
    create: XOR<SurahCreateWithoutAyahInput, SurahUncheckedCreateWithoutAyahInput>
    where?: SurahWhereInput
  }

  export type SurahUpdateToOneWithWhereWithoutAyahInput = {
    where?: SurahWhereInput
    data: XOR<SurahUpdateWithoutAyahInput, SurahUncheckedUpdateWithoutAyahInput>
  }

  export type SurahUpdateWithoutAyahInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
  }

  export type SurahUncheckedUpdateWithoutAyahInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surah_number?: IntFieldUpdateOperationsInput | number
    arabic_name?: StringFieldUpdateOperationsInput | string
    ayah_counts?: IntFieldUpdateOperationsInput | number
    revelation_type?: EnumRevelationFieldUpdateOperationsInput | $Enums.Revelation
    juz?: SurahUpdatejuzInput | number[]
  }

  export type StudentCreateWithoutJuzEvaluationInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    MemorizationPlan?: MemorizationPlanCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutJuzEvaluationInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    MemorizationPlan?: MemorizationPlanUncheckedCreateNestedManyWithoutMemorizingPlanStudentsInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutJuzEvaluationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutJuzEvaluationInput, StudentUncheckedCreateWithoutJuzEvaluationInput>
  }

  export type StudentUpsertWithoutJuzEvaluationInput = {
    update: XOR<StudentUpdateWithoutJuzEvaluationInput, StudentUncheckedUpdateWithoutJuzEvaluationInput>
    create: XOR<StudentCreateWithoutJuzEvaluationInput, StudentUncheckedCreateWithoutJuzEvaluationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutJuzEvaluationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutJuzEvaluationInput, StudentUncheckedUpdateWithoutJuzEvaluationInput>
  }

  export type StudentUpdateWithoutJuzEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutJuzEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentCreateWithoutMemorizationPlanInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MusyrifUser: UserCreateNestedOneWithoutStudentInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationCreateNestedManyWithoutEvaluationStudentInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentUncheckedCreateWithoutMemorizationPlanInput = {
    id?: string
    musyrif_id: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsStudentInput
    Parent?: ParentUncheckedCreateNestedManyWithoutParentStudentInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsStudentInput
    JuzEvaluation?: JuzEvaluationUncheckedCreateNestedManyWithoutEvaluationStudentInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendanceStudentInput
  }

  export type StudentCreateOrConnectWithoutMemorizationPlanInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMemorizationPlanInput, StudentUncheckedCreateWithoutMemorizationPlanInput>
  }

  export type UserCreateWithoutMemorizationPlanInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsCreateNestedManyWithoutMurojaahLogsMusyrifInput
    Attendance?: AttendanceCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserUncheckedCreateWithoutMemorizationPlanInput = {
    id?: string
    name: string
    email: string
    password: string
    salt: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutMusyrifUserInput
    MemorizingLogs?: MemorizingLogsUncheckedCreateNestedManyWithoutMemorizingLogsMusyrifInput
    MurojaahLogs?: MurojaahLogsUncheckedCreateNestedManyWithoutMurojaahLogsMusyrifInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutAttendaceMusyrifInput
  }

  export type UserCreateOrConnectWithoutMemorizationPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemorizationPlanInput, UserUncheckedCreateWithoutMemorizationPlanInput>
  }

  export type StudentUpsertWithoutMemorizationPlanInput = {
    update: XOR<StudentUpdateWithoutMemorizationPlanInput, StudentUncheckedUpdateWithoutMemorizationPlanInput>
    create: XOR<StudentCreateWithoutMemorizationPlanInput, StudentUncheckedCreateWithoutMemorizationPlanInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMemorizationPlanInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMemorizationPlanInput, StudentUncheckedUpdateWithoutMemorizationPlanInput>
  }

  export type StudentUpdateWithoutMemorizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MusyrifUser?: UserUpdateOneRequiredWithoutStudentNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMemorizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type UserUpsertWithoutMemorizationPlanInput = {
    update: XOR<UserUpdateWithoutMemorizationPlanInput, UserUncheckedUpdateWithoutMemorizationPlanInput>
    create: XOR<UserCreateWithoutMemorizationPlanInput, UserUncheckedCreateWithoutMemorizationPlanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemorizationPlanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemorizationPlanInput, UserUncheckedUpdateWithoutMemorizationPlanInput>
  }

  export type UserUpdateWithoutMemorizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type UserUncheckedUpdateWithoutMemorizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutMusyrifUserNestedInput
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifNestedInput
  }

  export type StudentCreateManyMusyrifUserInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    grade: string
    grade_status: $Enums.GradeStatus
    birth_date: Date | string
    join_date?: Date | string | null
    status?: $Enums.StudentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizingLogsCreateManyMemorizingLogsMusyrifInput = {
    id?: string
    student_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MurojaahLogsCreateManyMurojaahLogsMusyrifInput = {
    id?: string
    student_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizationPlanCreateManyMemorizingPlanMusyrifInput = {
    id?: string
    student_id: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    notes: string
    created_at?: Date | string
  }

  export type AttendanceCreateManyAttendaceMusyrifInput = {
    id?: string
    student_id: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    created_at?: Date | string
  }

  export type StudentUpdateWithoutMusyrifUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMusyrifUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogs?: MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentNestedInput
    Parent?: ParentUncheckedUpdateManyWithoutParentStudentNestedInput
    MurojaahLogs?: MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentNestedInput
    JuzEvaluation?: JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentNestedInput
    MemorizationPlan?: MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutAttendanceStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutMusyrifUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    grade?: StringFieldUpdateOperationsInput | string
    grade_status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsUpdateWithoutMemorizingLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogsStudent?: StudentUpdateOneRequiredWithoutMemorizingLogsNestedInput
  }

  export type MemorizingLogsUncheckedUpdateWithoutMemorizingLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsUpdateWithoutMurojaahLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MurojaahLogsStudent?: StudentUpdateOneRequiredWithoutMurojaahLogsNestedInput
  }

  export type MurojaahLogsUncheckedUpdateWithoutMurojaahLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanUpdateWithoutMemorizingPlanMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingPlanStudents?: StudentUpdateOneRequiredWithoutMemorizationPlanNestedInput
  }

  export type MemorizationPlanUncheckedUpdateWithoutMemorizingPlanMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutAttendaceMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AttendanceStudent?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAttendaceMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendaceMusyrifInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsCreateManyMemorizingLogsStudentInput = {
    id?: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParentCreateManyParentStudentInput = {
    id?: string
    name: string
    gender?: $Enums.Gender
    phone?: string | null
    parent_status?: $Enums.ParentStatus
    description?: string | null
    address?: string | null
  }

  export type MurojaahLogsCreateManyMurojaahLogsStudentInput = {
    id?: string
    musyrif_id: string
    juz: number
    surah: string
    from_ayah: number
    to_ayah: number
    submission_date: Date | string
    assessment?: $Enums.Assessment
    notes?: string | null
    isRepeat: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JuzEvaluationCreateManyEvaluationStudentInput = {
    id?: string
    juz_number: number
    evaluation_date?: Date | string
    assessment?: $Enums.Assessment
    notes: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MemorizationPlanCreateManyMemorizingPlanStudentsInput = {
    id?: string
    plan_type?: $Enums.PlanType
    juz_number?: number | null
    surah_id?: string | null
    page_number?: number | null
    start_ayah: number
    end_ayah: number
    target_date: Date | string
    assigned_by: string
    notes: string
    created_at?: Date | string
  }

  export type AttendanceCreateManyAttendanceStudentInput = {
    id?: string
    date?: Date | string
    status?: $Enums.AttendanceStatus
    remark: string
    recorded_by: string
    created_at?: Date | string
  }

  export type MemorizingLogsUpdateWithoutMemorizingLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingLogsMusyrif?: UserUpdateOneRequiredWithoutMemorizingLogsNestedInput
  }

  export type MemorizingLogsUncheckedUpdateWithoutMemorizingLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizingLogsUncheckedUpdateManyWithoutMemorizingLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentUpdateWithoutParentStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentUncheckedUpdateWithoutParentStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParentUncheckedUpdateManyWithoutParentStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    parent_status?: EnumParentStatusFieldUpdateOperationsInput | $Enums.ParentStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MurojaahLogsUpdateWithoutMurojaahLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MurojaahLogsMusyrif?: UserUpdateOneRequiredWithoutMurojaahLogsNestedInput
  }

  export type MurojaahLogsUncheckedUpdateWithoutMurojaahLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MurojaahLogsUncheckedUpdateManyWithoutMurojaahLogsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    musyrif_id?: StringFieldUpdateOperationsInput | string
    juz?: IntFieldUpdateOperationsInput | number
    surah?: StringFieldUpdateOperationsInput | string
    from_ayah?: IntFieldUpdateOperationsInput | number
    to_ayah?: IntFieldUpdateOperationsInput | number
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isRepeat?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuzEvaluationUpdateWithoutEvaluationStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuzEvaluationUncheckedUpdateWithoutEvaluationStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JuzEvaluationUncheckedUpdateManyWithoutEvaluationStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    juz_number?: IntFieldUpdateOperationsInput | number
    evaluation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: EnumAssessmentFieldUpdateOperationsInput | $Enums.Assessment
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanUpdateWithoutMemorizingPlanStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MemorizingPlanMusyrif?: UserUpdateOneRequiredWithoutMemorizationPlanNestedInput
  }

  export type MemorizationPlanUncheckedUpdateWithoutMemorizingPlanStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorizationPlanUncheckedUpdateManyWithoutMemorizingPlanStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_type?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    juz_number?: NullableIntFieldUpdateOperationsInput | number | null
    surah_id?: NullableStringFieldUpdateOperationsInput | string | null
    page_number?: NullableIntFieldUpdateOperationsInput | number | null
    start_ayah?: IntFieldUpdateOperationsInput | number
    end_ayah?: IntFieldUpdateOperationsInput | number
    target_date?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutAttendanceStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AttendaceMusyrif?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAttendanceStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendanceStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    remark?: StringFieldUpdateOperationsInput | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyahCreateManyAyahSurahInput = {
    id?: string
    ayah_number: number
    juz_number: number
    text: string
  }

  export type AyahUpdateWithoutAyahSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateWithoutAyahSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AyahUncheckedUpdateManyWithoutAyahSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayah_number?: IntFieldUpdateOperationsInput | number
    juz_number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}