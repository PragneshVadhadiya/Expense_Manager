
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
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model expenses
 * 
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model incomes
 * 
 */
export type incomes = $Result.DefaultSelection<Prisma.$incomesPayload>
/**
 * Model peoples
 * 
 */
export type peoples = $Result.DefaultSelection<Prisma.$peoplesPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model sub_categories
 * 
 */
export type sub_categories = $Result.DefaultSelection<Prisma.$sub_categoriesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
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
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incomes`: Exposes CRUD operations for the **incomes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.incomes.findMany()
    * ```
    */
  get incomes(): Prisma.incomesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peoples`: Exposes CRUD operations for the **peoples** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peoples
    * const peoples = await prisma.peoples.findMany()
    * ```
    */
  get peoples(): Prisma.peoplesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_categories`: Exposes CRUD operations for the **sub_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_categories
    * const sub_categories = await prisma.sub_categories.findMany()
    * ```
    */
  get sub_categories(): Prisma.sub_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    categories: 'categories',
    expenses: 'expenses',
    incomes: 'incomes',
    peoples: 'peoples',
    projects: 'projects',
    sub_categories: 'sub_categories',
    users: 'users'
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
      modelProps: "categories" | "expenses" | "incomes" | "peoples" | "projects" | "sub_categories" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      incomes: {
        payload: Prisma.$incomesPayload<ExtArgs>
        fields: Prisma.incomesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.incomesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.incomesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          findFirst: {
            args: Prisma.incomesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.incomesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          findMany: {
            args: Prisma.incomesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>[]
          }
          create: {
            args: Prisma.incomesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          createMany: {
            args: Prisma.incomesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.incomesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          update: {
            args: Prisma.incomesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          deleteMany: {
            args: Prisma.incomesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.incomesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.incomesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$incomesPayload>
          }
          aggregate: {
            args: Prisma.IncomesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncomes>
          }
          groupBy: {
            args: Prisma.incomesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomesGroupByOutputType>[]
          }
          count: {
            args: Prisma.incomesCountArgs<ExtArgs>
            result: $Utils.Optional<IncomesCountAggregateOutputType> | number
          }
        }
      }
      peoples: {
        payload: Prisma.$peoplesPayload<ExtArgs>
        fields: Prisma.peoplesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peoplesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peoplesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          findFirst: {
            args: Prisma.peoplesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peoplesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          findMany: {
            args: Prisma.peoplesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>[]
          }
          create: {
            args: Prisma.peoplesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          createMany: {
            args: Prisma.peoplesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.peoplesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          update: {
            args: Prisma.peoplesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          deleteMany: {
            args: Prisma.peoplesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peoplesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.peoplesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peoplesPayload>
          }
          aggregate: {
            args: Prisma.PeoplesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeoples>
          }
          groupBy: {
            args: Prisma.peoplesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeoplesGroupByOutputType>[]
          }
          count: {
            args: Prisma.peoplesCountArgs<ExtArgs>
            result: $Utils.Optional<PeoplesCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      sub_categories: {
        payload: Prisma.$sub_categoriesPayload<ExtArgs>
        fields: Prisma.sub_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          findFirst: {
            args: Prisma.sub_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          findMany: {
            args: Prisma.sub_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>[]
          }
          create: {
            args: Prisma.sub_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          createMany: {
            args: Prisma.sub_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sub_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          update: {
            args: Prisma.sub_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.sub_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sub_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Sub_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_categories>
          }
          groupBy: {
            args: Prisma.sub_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_categoriesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    categories?: categoriesOmit
    expenses?: expensesOmit
    incomes?: incomesOmit
    peoples?: peoplesOmit
    projects?: projectsOmit
    sub_categories?: sub_categoriesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    expenses: number
    incomes: number
    sub_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CategoriesCountOutputTypeCountExpensesArgs
    incomes?: boolean | CategoriesCountOutputTypeCountIncomesArgs
    sub_categories?: boolean | CategoriesCountOutputTypeCountSub_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_categoriesWhereInput
  }


  /**
   * Count Type PeoplesCountOutputType
   */

  export type PeoplesCountOutputType = {
    expenses: number
    incomes: number
  }

  export type PeoplesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | PeoplesCountOutputTypeCountExpensesArgs
    incomes?: boolean | PeoplesCountOutputTypeCountIncomesArgs
  }

  // Custom InputTypes
  /**
   * PeoplesCountOutputType without action
   */
  export type PeoplesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeoplesCountOutputType
     */
    select?: PeoplesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeoplesCountOutputType without action
   */
  export type PeoplesCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * PeoplesCountOutputType without action
   */
  export type PeoplesCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    expenses: number
    incomes: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | ProjectsCountOutputTypeCountExpensesArgs
    incomes?: boolean | ProjectsCountOutputTypeCountIncomesArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
  }


  /**
   * Count Type Sub_categoriesCountOutputType
   */

  export type Sub_categoriesCountOutputType = {
    expenses: number
    incomes: number
  }

  export type Sub_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | Sub_categoriesCountOutputTypeCountExpensesArgs
    incomes?: boolean | Sub_categoriesCountOutputTypeCountIncomesArgs
  }

  // Custom InputTypes
  /**
   * Sub_categoriesCountOutputType without action
   */
  export type Sub_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_categoriesCountOutputType
     */
    select?: Sub_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sub_categoriesCountOutputType without action
   */
  export type Sub_categoriesCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * Sub_categoriesCountOutputType without action
   */
  export type Sub_categoriesCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    categories: number
    expenses: number
    incomes: number
    peoples: number
    projects: number
    sub_categories: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UsersCountOutputTypeCountCategoriesArgs
    expenses?: boolean | UsersCountOutputTypeCountExpensesArgs
    incomes?: boolean | UsersCountOutputTypeCountIncomesArgs
    peoples?: boolean | UsersCountOutputTypeCountPeoplesArgs
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
    sub_categories?: boolean | UsersCountOutputTypeCountSub_categoriesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPeoplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peoplesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_categoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    CategoryID: number | null
    UserID: number | null
    Sequence: Decimal | null
  }

  export type CategoriesSumAggregateOutputType = {
    CategoryID: number | null
    UserID: number | null
    Sequence: Decimal | null
  }

  export type CategoriesMinAggregateOutputType = {
    CategoryID: number | null
    CategoryName: string | null
    LogoPath: string | null
    IsExpense: boolean | null
    IsIncome: boolean | null
    IsActive: boolean | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    Sequence: Decimal | null
  }

  export type CategoriesMaxAggregateOutputType = {
    CategoryID: number | null
    CategoryName: string | null
    LogoPath: string | null
    IsExpense: boolean | null
    IsIncome: boolean | null
    IsActive: boolean | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    Sequence: Decimal | null
  }

  export type CategoriesCountAggregateOutputType = {
    CategoryID: number
    CategoryName: number
    LogoPath: number
    IsExpense: number
    IsIncome: number
    IsActive: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    Sequence: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    CategoryID?: true
    UserID?: true
    Sequence?: true
  }

  export type CategoriesSumAggregateInputType = {
    CategoryID?: true
    UserID?: true
    Sequence?: true
  }

  export type CategoriesMinAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
  }

  export type CategoriesMaxAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
  }

  export type CategoriesCountAggregateInputType = {
    CategoryID?: true
    CategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    CategoryID: number
    CategoryName: string
    LogoPath: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    Sequence: Decimal | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CategoryID?: boolean
    CategoryName?: boolean
    LogoPath?: boolean
    IsExpense?: boolean
    IsIncome?: boolean
    IsActive?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    Sequence?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    expenses?: boolean | categories$expensesArgs<ExtArgs>
    incomes?: boolean | categories$incomesArgs<ExtArgs>
    sub_categories?: boolean | categories$sub_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    CategoryID?: boolean
    CategoryName?: boolean
    LogoPath?: boolean
    IsExpense?: boolean
    IsIncome?: boolean
    IsActive?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    Sequence?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CategoryID" | "CategoryName" | "LogoPath" | "IsExpense" | "IsIncome" | "IsActive" | "Description" | "UserID" | "Created" | "Modified" | "Sequence", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    expenses?: boolean | categories$expensesArgs<ExtArgs>
    incomes?: boolean | categories$incomesArgs<ExtArgs>
    sub_categories?: boolean | categories$sub_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      incomes: Prisma.$incomesPayload<ExtArgs>[]
      sub_categories: Prisma.$sub_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CategoryID: number
      CategoryName: string
      LogoPath: string | null
      IsExpense: boolean
      IsIncome: boolean
      IsActive: boolean
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
      Sequence: Prisma.Decimal | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `CategoryID`
     * const categoriesWithCategoryIDOnly = await prisma.categories.findMany({ select: { CategoryID: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenses<T extends categories$expensesArgs<ExtArgs> = {}>(args?: Subset<T, categories$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends categories$incomesArgs<ExtArgs> = {}>(args?: Subset<T, categories$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_categories<T extends categories$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$sub_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly CategoryID: FieldRef<"categories", 'Int'>
    readonly CategoryName: FieldRef<"categories", 'String'>
    readonly LogoPath: FieldRef<"categories", 'String'>
    readonly IsExpense: FieldRef<"categories", 'Boolean'>
    readonly IsIncome: FieldRef<"categories", 'Boolean'>
    readonly IsActive: FieldRef<"categories", 'Boolean'>
    readonly Description: FieldRef<"categories", 'String'>
    readonly UserID: FieldRef<"categories", 'Int'>
    readonly Created: FieldRef<"categories", 'DateTime'>
    readonly Modified: FieldRef<"categories", 'DateTime'>
    readonly Sequence: FieldRef<"categories", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.expenses
   */
  export type categories$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * categories.incomes
   */
  export type categories$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    cursor?: incomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * categories.sub_categories
   */
  export type categories$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    where?: sub_categoriesWhereInput
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    cursor?: sub_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_categoriesScalarFieldEnum | Sub_categoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    ExpenseID: number | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    UserID: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    ExpenseID: number | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    UserID: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    ExpenseID: number | null
    ExpenseDate: Date | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    ExpenseDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    ExpenseID: number | null
    ExpenseDate: Date | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    ExpenseDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    ExpenseID: number
    ExpenseDate: number
    CategoryID: number
    SubCategoryID: number
    PeopleID: number
    ProjectID: number
    Amount: number
    ExpenseDetail: number
    AttachmentPath: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    ExpenseID?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    UserID?: true
  }

  export type ExpensesSumAggregateInputType = {
    ExpenseID?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    UserID?: true
  }

  export type ExpensesMinAggregateInputType = {
    ExpenseID?: true
    ExpenseDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    ExpenseDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
  }

  export type ExpensesMaxAggregateInputType = {
    ExpenseID?: true
    ExpenseDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    ExpenseDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
  }

  export type ExpensesCountAggregateInputType = {
    ExpenseID?: true
    ExpenseDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    ExpenseDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    ExpenseID: number
    ExpenseDate: Date
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number
    ProjectID: number | null
    Amount: Decimal
    ExpenseDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ExpenseID?: boolean
    ExpenseDate?: boolean
    CategoryID?: boolean
    SubCategoryID?: boolean
    PeopleID?: boolean
    ProjectID?: boolean
    Amount?: boolean
    ExpenseDetail?: boolean
    AttachmentPath?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    categories?: boolean | expenses$categoriesArgs<ExtArgs>
    sub_categories?: boolean | expenses$sub_categoriesArgs<ExtArgs>
    peoples?: boolean | peoplesDefaultArgs<ExtArgs>
    projects?: boolean | expenses$projectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>



  export type expensesSelectScalar = {
    ExpenseID?: boolean
    ExpenseDate?: boolean
    CategoryID?: boolean
    SubCategoryID?: boolean
    PeopleID?: boolean
    ProjectID?: boolean
    Amount?: boolean
    ExpenseDetail?: boolean
    AttachmentPath?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type expensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ExpenseID" | "ExpenseDate" | "CategoryID" | "SubCategoryID" | "PeopleID" | "ProjectID" | "Amount" | "ExpenseDetail" | "AttachmentPath" | "Description" | "UserID" | "Created" | "Modified", ExtArgs["result"]["expenses"]>
  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | expenses$categoriesArgs<ExtArgs>
    sub_categories?: boolean | expenses$sub_categoriesArgs<ExtArgs>
    peoples?: boolean | peoplesDefaultArgs<ExtArgs>
    projects?: boolean | expenses$projectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      sub_categories: Prisma.$sub_categoriesPayload<ExtArgs> | null
      peoples: Prisma.$peoplesPayload<ExtArgs>
      projects: Prisma.$projectsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ExpenseID: number
      ExpenseDate: Date
      CategoryID: number | null
      SubCategoryID: number | null
      PeopleID: number
      ProjectID: number | null
      Amount: Prisma.Decimal
      ExpenseDetail: string | null
      AttachmentPath: string | null
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `ExpenseID`
     * const expensesWithExpenseIDOnly = await prisma.expenses.findMany({ select: { ExpenseID: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
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
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends expenses$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, expenses$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_categories<T extends expenses$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, expenses$sub_categoriesArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    peoples<T extends peoplesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peoplesDefaultArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends expenses$projectsArgs<ExtArgs> = {}>(args?: Subset<T, expenses$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the expenses model
   */
  interface expensesFieldRefs {
    readonly ExpenseID: FieldRef<"expenses", 'Int'>
    readonly ExpenseDate: FieldRef<"expenses", 'DateTime'>
    readonly CategoryID: FieldRef<"expenses", 'Int'>
    readonly SubCategoryID: FieldRef<"expenses", 'Int'>
    readonly PeopleID: FieldRef<"expenses", 'Int'>
    readonly ProjectID: FieldRef<"expenses", 'Int'>
    readonly Amount: FieldRef<"expenses", 'Decimal'>
    readonly ExpenseDetail: FieldRef<"expenses", 'String'>
    readonly AttachmentPath: FieldRef<"expenses", 'String'>
    readonly Description: FieldRef<"expenses", 'String'>
    readonly UserID: FieldRef<"expenses", 'Int'>
    readonly Created: FieldRef<"expenses", 'DateTime'>
    readonly Modified: FieldRef<"expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expenses.categories
   */
  export type expenses$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * expenses.sub_categories
   */
  export type expenses$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    where?: sub_categoriesWhereInput
  }

  /**
   * expenses.projects
   */
  export type expenses$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model incomes
   */

  export type AggregateIncomes = {
    _count: IncomesCountAggregateOutputType | null
    _avg: IncomesAvgAggregateOutputType | null
    _sum: IncomesSumAggregateOutputType | null
    _min: IncomesMinAggregateOutputType | null
    _max: IncomesMaxAggregateOutputType | null
  }

  export type IncomesAvgAggregateOutputType = {
    IncomeID: number | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    UserID: number | null
  }

  export type IncomesSumAggregateOutputType = {
    IncomeID: number | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    UserID: number | null
  }

  export type IncomesMinAggregateOutputType = {
    IncomeID: number | null
    IncomeDate: Date | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    IncomeDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type IncomesMaxAggregateOutputType = {
    IncomeID: number | null
    IncomeDate: Date | null
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number | null
    ProjectID: number | null
    Amount: Decimal | null
    IncomeDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type IncomesCountAggregateOutputType = {
    IncomeID: number
    IncomeDate: number
    CategoryID: number
    SubCategoryID: number
    PeopleID: number
    ProjectID: number
    Amount: number
    IncomeDetail: number
    AttachmentPath: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    _all: number
  }


  export type IncomesAvgAggregateInputType = {
    IncomeID?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    UserID?: true
  }

  export type IncomesSumAggregateInputType = {
    IncomeID?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    UserID?: true
  }

  export type IncomesMinAggregateInputType = {
    IncomeID?: true
    IncomeDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    IncomeDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
  }

  export type IncomesMaxAggregateInputType = {
    IncomeID?: true
    IncomeDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    IncomeDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
  }

  export type IncomesCountAggregateInputType = {
    IncomeID?: true
    IncomeDate?: true
    CategoryID?: true
    SubCategoryID?: true
    PeopleID?: true
    ProjectID?: true
    Amount?: true
    IncomeDetail?: true
    AttachmentPath?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type IncomesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incomes to aggregate.
     */
    where?: incomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: incomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned incomes
    **/
    _count?: true | IncomesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomesMaxAggregateInputType
  }

  export type GetIncomesAggregateType<T extends IncomesAggregateArgs> = {
        [P in keyof T & keyof AggregateIncomes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncomes[P]>
      : GetScalarType<T[P], AggregateIncomes[P]>
  }




  export type incomesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithAggregationInput | incomesOrderByWithAggregationInput[]
    by: IncomesScalarFieldEnum[] | IncomesScalarFieldEnum
    having?: incomesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomesCountAggregateInputType | true
    _avg?: IncomesAvgAggregateInputType
    _sum?: IncomesSumAggregateInputType
    _min?: IncomesMinAggregateInputType
    _max?: IncomesMaxAggregateInputType
  }

  export type IncomesGroupByOutputType = {
    IncomeID: number
    IncomeDate: Date
    CategoryID: number | null
    SubCategoryID: number | null
    PeopleID: number
    ProjectID: number | null
    Amount: Decimal
    IncomeDetail: string | null
    AttachmentPath: string | null
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    _count: IncomesCountAggregateOutputType | null
    _avg: IncomesAvgAggregateOutputType | null
    _sum: IncomesSumAggregateOutputType | null
    _min: IncomesMinAggregateOutputType | null
    _max: IncomesMaxAggregateOutputType | null
  }

  type GetIncomesGroupByPayload<T extends incomesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomesGroupByOutputType[P]>
            : GetScalarType<T[P], IncomesGroupByOutputType[P]>
        }
      >
    >


  export type incomesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IncomeID?: boolean
    IncomeDate?: boolean
    CategoryID?: boolean
    SubCategoryID?: boolean
    PeopleID?: boolean
    ProjectID?: boolean
    Amount?: boolean
    IncomeDetail?: boolean
    AttachmentPath?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    categories?: boolean | incomes$categoriesArgs<ExtArgs>
    sub_categories?: boolean | incomes$sub_categoriesArgs<ExtArgs>
    peoples?: boolean | peoplesDefaultArgs<ExtArgs>
    projects?: boolean | incomes$projectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomes"]>



  export type incomesSelectScalar = {
    IncomeID?: boolean
    IncomeDate?: boolean
    CategoryID?: boolean
    SubCategoryID?: boolean
    PeopleID?: boolean
    ProjectID?: boolean
    Amount?: boolean
    IncomeDetail?: boolean
    AttachmentPath?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type incomesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IncomeID" | "IncomeDate" | "CategoryID" | "SubCategoryID" | "PeopleID" | "ProjectID" | "Amount" | "IncomeDetail" | "AttachmentPath" | "Description" | "UserID" | "Created" | "Modified", ExtArgs["result"]["incomes"]>
  export type incomesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | incomes$categoriesArgs<ExtArgs>
    sub_categories?: boolean | incomes$sub_categoriesArgs<ExtArgs>
    peoples?: boolean | peoplesDefaultArgs<ExtArgs>
    projects?: boolean | incomes$projectsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $incomesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "incomes"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      sub_categories: Prisma.$sub_categoriesPayload<ExtArgs> | null
      peoples: Prisma.$peoplesPayload<ExtArgs>
      projects: Prisma.$projectsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IncomeID: number
      IncomeDate: Date
      CategoryID: number | null
      SubCategoryID: number | null
      PeopleID: number
      ProjectID: number | null
      Amount: Prisma.Decimal
      IncomeDetail: string | null
      AttachmentPath: string | null
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["incomes"]>
    composites: {}
  }

  type incomesGetPayload<S extends boolean | null | undefined | incomesDefaultArgs> = $Result.GetResult<Prisma.$incomesPayload, S>

  type incomesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<incomesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomesCountAggregateInputType | true
    }

  export interface incomesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incomes'], meta: { name: 'incomes' } }
    /**
     * Find zero or one Incomes that matches the filter.
     * @param {incomesFindUniqueArgs} args - Arguments to find a Incomes
     * @example
     * // Get one Incomes
     * const incomes = await prisma.incomes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends incomesFindUniqueArgs>(args: SelectSubset<T, incomesFindUniqueArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incomes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {incomesFindUniqueOrThrowArgs} args - Arguments to find a Incomes
     * @example
     * // Get one Incomes
     * const incomes = await prisma.incomes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends incomesFindUniqueOrThrowArgs>(args: SelectSubset<T, incomesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesFindFirstArgs} args - Arguments to find a Incomes
     * @example
     * // Get one Incomes
     * const incomes = await prisma.incomes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends incomesFindFirstArgs>(args?: SelectSubset<T, incomesFindFirstArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incomes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesFindFirstOrThrowArgs} args - Arguments to find a Incomes
     * @example
     * // Get one Incomes
     * const incomes = await prisma.incomes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends incomesFindFirstOrThrowArgs>(args?: SelectSubset<T, incomesFindFirstOrThrowArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.incomes.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.incomes.findMany({ take: 10 })
     * 
     * // Only select the `IncomeID`
     * const incomesWithIncomeIDOnly = await prisma.incomes.findMany({ select: { IncomeID: true } })
     * 
     */
    findMany<T extends incomesFindManyArgs>(args?: SelectSubset<T, incomesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incomes.
     * @param {incomesCreateArgs} args - Arguments to create a Incomes.
     * @example
     * // Create one Incomes
     * const Incomes = await prisma.incomes.create({
     *   data: {
     *     // ... data to create a Incomes
     *   }
     * })
     * 
     */
    create<T extends incomesCreateArgs>(args: SelectSubset<T, incomesCreateArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {incomesCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const incomes = await prisma.incomes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends incomesCreateManyArgs>(args?: SelectSubset<T, incomesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incomes.
     * @param {incomesDeleteArgs} args - Arguments to delete one Incomes.
     * @example
     * // Delete one Incomes
     * const Incomes = await prisma.incomes.delete({
     *   where: {
     *     // ... filter to delete one Incomes
     *   }
     * })
     * 
     */
    delete<T extends incomesDeleteArgs>(args: SelectSubset<T, incomesDeleteArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incomes.
     * @param {incomesUpdateArgs} args - Arguments to update one Incomes.
     * @example
     * // Update one Incomes
     * const incomes = await prisma.incomes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends incomesUpdateArgs>(args: SelectSubset<T, incomesUpdateArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {incomesDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.incomes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends incomesDeleteManyArgs>(args?: SelectSubset<T, incomesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const incomes = await prisma.incomes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends incomesUpdateManyArgs>(args: SelectSubset<T, incomesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incomes.
     * @param {incomesUpsertArgs} args - Arguments to update or create a Incomes.
     * @example
     * // Update or create a Incomes
     * const incomes = await prisma.incomes.upsert({
     *   create: {
     *     // ... data to create a Incomes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incomes we want to update
     *   }
     * })
     */
    upsert<T extends incomesUpsertArgs>(args: SelectSubset<T, incomesUpsertArgs<ExtArgs>>): Prisma__incomesClient<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.incomes.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends incomesCountArgs>(
      args?: Subset<T, incomesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncomesAggregateArgs>(args: Subset<T, IncomesAggregateArgs>): Prisma.PrismaPromise<GetIncomesAggregateType<T>>

    /**
     * Group by Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incomesGroupByArgs} args - Group by arguments.
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
      T extends incomesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incomesGroupByArgs['orderBy'] }
        : { orderBy?: incomesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, incomesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the incomes model
   */
  readonly fields: incomesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incomes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incomesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends incomes$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, incomes$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_categories<T extends incomes$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, incomes$sub_categoriesArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    peoples<T extends peoplesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peoplesDefaultArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends incomes$projectsArgs<ExtArgs> = {}>(args?: Subset<T, incomes$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the incomes model
   */
  interface incomesFieldRefs {
    readonly IncomeID: FieldRef<"incomes", 'Int'>
    readonly IncomeDate: FieldRef<"incomes", 'DateTime'>
    readonly CategoryID: FieldRef<"incomes", 'Int'>
    readonly SubCategoryID: FieldRef<"incomes", 'Int'>
    readonly PeopleID: FieldRef<"incomes", 'Int'>
    readonly ProjectID: FieldRef<"incomes", 'Int'>
    readonly Amount: FieldRef<"incomes", 'Decimal'>
    readonly IncomeDetail: FieldRef<"incomes", 'String'>
    readonly AttachmentPath: FieldRef<"incomes", 'String'>
    readonly Description: FieldRef<"incomes", 'String'>
    readonly UserID: FieldRef<"incomes", 'Int'>
    readonly Created: FieldRef<"incomes", 'DateTime'>
    readonly Modified: FieldRef<"incomes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * incomes findUnique
   */
  export type incomesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where: incomesWhereUniqueInput
  }

  /**
   * incomes findUniqueOrThrow
   */
  export type incomesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where: incomesWhereUniqueInput
  }

  /**
   * incomes findFirst
   */
  export type incomesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where?: incomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * incomes findFirstOrThrow
   */
  export type incomesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where?: incomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for incomes.
     */
    cursor?: incomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of incomes.
     */
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * incomes findMany
   */
  export type incomesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter, which incomes to fetch.
     */
    where?: incomesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of incomes to fetch.
     */
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing incomes.
     */
    cursor?: incomesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` incomes.
     */
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * incomes create
   */
  export type incomesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * The data needed to create a incomes.
     */
    data: XOR<incomesCreateInput, incomesUncheckedCreateInput>
  }

  /**
   * incomes createMany
   */
  export type incomesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incomes.
     */
    data: incomesCreateManyInput | incomesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * incomes update
   */
  export type incomesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * The data needed to update a incomes.
     */
    data: XOR<incomesUpdateInput, incomesUncheckedUpdateInput>
    /**
     * Choose, which incomes to update.
     */
    where: incomesWhereUniqueInput
  }

  /**
   * incomes updateMany
   */
  export type incomesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incomes.
     */
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyInput>
    /**
     * Filter which incomes to update
     */
    where?: incomesWhereInput
    /**
     * Limit how many incomes to update.
     */
    limit?: number
  }

  /**
   * incomes upsert
   */
  export type incomesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * The filter to search for the incomes to update in case it exists.
     */
    where: incomesWhereUniqueInput
    /**
     * In case the incomes found by the `where` argument doesn't exist, create a new incomes with this data.
     */
    create: XOR<incomesCreateInput, incomesUncheckedCreateInput>
    /**
     * In case the incomes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incomesUpdateInput, incomesUncheckedUpdateInput>
  }

  /**
   * incomes delete
   */
  export type incomesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    /**
     * Filter which incomes to delete.
     */
    where: incomesWhereUniqueInput
  }

  /**
   * incomes deleteMany
   */
  export type incomesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incomes to delete
     */
    where?: incomesWhereInput
    /**
     * Limit how many incomes to delete.
     */
    limit?: number
  }

  /**
   * incomes.categories
   */
  export type incomes$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * incomes.sub_categories
   */
  export type incomes$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    where?: sub_categoriesWhereInput
  }

  /**
   * incomes.projects
   */
  export type incomes$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * incomes without action
   */
  export type incomesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
  }


  /**
   * Model peoples
   */

  export type AggregatePeoples = {
    _count: PeoplesCountAggregateOutputType | null
    _avg: PeoplesAvgAggregateOutputType | null
    _sum: PeoplesSumAggregateOutputType | null
    _min: PeoplesMinAggregateOutputType | null
    _max: PeoplesMaxAggregateOutputType | null
  }

  export type PeoplesAvgAggregateOutputType = {
    PeopleID: number | null
    UserID: number | null
  }

  export type PeoplesSumAggregateOutputType = {
    PeopleID: number | null
    UserID: number | null
  }

  export type PeoplesMinAggregateOutputType = {
    PeopleID: number | null
    PeopleCode: string | null
    Password: string | null
    PeopleName: string | null
    Email: string | null
    MobileNo: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    IsActive: boolean | null
  }

  export type PeoplesMaxAggregateOutputType = {
    PeopleID: number | null
    PeopleCode: string | null
    Password: string | null
    PeopleName: string | null
    Email: string | null
    MobileNo: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    IsActive: boolean | null
  }

  export type PeoplesCountAggregateOutputType = {
    PeopleID: number
    PeopleCode: number
    Password: number
    PeopleName: number
    Email: number
    MobileNo: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    IsActive: number
    _all: number
  }


  export type PeoplesAvgAggregateInputType = {
    PeopleID?: true
    UserID?: true
  }

  export type PeoplesSumAggregateInputType = {
    PeopleID?: true
    UserID?: true
  }

  export type PeoplesMinAggregateInputType = {
    PeopleID?: true
    PeopleCode?: true
    Password?: true
    PeopleName?: true
    Email?: true
    MobileNo?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
  }

  export type PeoplesMaxAggregateInputType = {
    PeopleID?: true
    PeopleCode?: true
    Password?: true
    PeopleName?: true
    Email?: true
    MobileNo?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
  }

  export type PeoplesCountAggregateInputType = {
    PeopleID?: true
    PeopleCode?: true
    Password?: true
    PeopleName?: true
    Email?: true
    MobileNo?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
    _all?: true
  }

  export type PeoplesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peoples to aggregate.
     */
    where?: peoplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peoples to fetch.
     */
    orderBy?: peoplesOrderByWithRelationInput | peoplesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peoplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peoples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peoples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peoples
    **/
    _count?: true | PeoplesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeoplesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeoplesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeoplesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeoplesMaxAggregateInputType
  }

  export type GetPeoplesAggregateType<T extends PeoplesAggregateArgs> = {
        [P in keyof T & keyof AggregatePeoples]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeoples[P]>
      : GetScalarType<T[P], AggregatePeoples[P]>
  }




  export type peoplesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peoplesWhereInput
    orderBy?: peoplesOrderByWithAggregationInput | peoplesOrderByWithAggregationInput[]
    by: PeoplesScalarFieldEnum[] | PeoplesScalarFieldEnum
    having?: peoplesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeoplesCountAggregateInputType | true
    _avg?: PeoplesAvgAggregateInputType
    _sum?: PeoplesSumAggregateInputType
    _min?: PeoplesMinAggregateInputType
    _max?: PeoplesMaxAggregateInputType
  }

  export type PeoplesGroupByOutputType = {
    PeopleID: number
    PeopleCode: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    IsActive: boolean | null
    _count: PeoplesCountAggregateOutputType | null
    _avg: PeoplesAvgAggregateOutputType | null
    _sum: PeoplesSumAggregateOutputType | null
    _min: PeoplesMinAggregateOutputType | null
    _max: PeoplesMaxAggregateOutputType | null
  }

  type GetPeoplesGroupByPayload<T extends peoplesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeoplesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeoplesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeoplesGroupByOutputType[P]>
            : GetScalarType<T[P], PeoplesGroupByOutputType[P]>
        }
      >
    >


  export type peoplesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PeopleID?: boolean
    PeopleCode?: boolean
    Password?: boolean
    PeopleName?: boolean
    Email?: boolean
    MobileNo?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    IsActive?: boolean
    expenses?: boolean | peoples$expensesArgs<ExtArgs>
    incomes?: boolean | peoples$incomesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PeoplesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peoples"]>



  export type peoplesSelectScalar = {
    PeopleID?: boolean
    PeopleCode?: boolean
    Password?: boolean
    PeopleName?: boolean
    Email?: boolean
    MobileNo?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    IsActive?: boolean
  }

  export type peoplesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PeopleID" | "PeopleCode" | "Password" | "PeopleName" | "Email" | "MobileNo" | "Description" | "UserID" | "Created" | "Modified" | "IsActive", ExtArgs["result"]["peoples"]>
  export type peoplesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | peoples$expensesArgs<ExtArgs>
    incomes?: boolean | peoples$incomesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PeoplesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $peoplesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peoples"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      incomes: Prisma.$incomesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PeopleID: number
      PeopleCode: string | null
      Password: string
      PeopleName: string
      Email: string
      MobileNo: string
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
      IsActive: boolean | null
    }, ExtArgs["result"]["peoples"]>
    composites: {}
  }

  type peoplesGetPayload<S extends boolean | null | undefined | peoplesDefaultArgs> = $Result.GetResult<Prisma.$peoplesPayload, S>

  type peoplesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peoplesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeoplesCountAggregateInputType | true
    }

  export interface peoplesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peoples'], meta: { name: 'peoples' } }
    /**
     * Find zero or one Peoples that matches the filter.
     * @param {peoplesFindUniqueArgs} args - Arguments to find a Peoples
     * @example
     * // Get one Peoples
     * const peoples = await prisma.peoples.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peoplesFindUniqueArgs>(args: SelectSubset<T, peoplesFindUniqueArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peoples that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peoplesFindUniqueOrThrowArgs} args - Arguments to find a Peoples
     * @example
     * // Get one Peoples
     * const peoples = await prisma.peoples.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peoplesFindUniqueOrThrowArgs>(args: SelectSubset<T, peoplesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peoples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesFindFirstArgs} args - Arguments to find a Peoples
     * @example
     * // Get one Peoples
     * const peoples = await prisma.peoples.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peoplesFindFirstArgs>(args?: SelectSubset<T, peoplesFindFirstArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peoples that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesFindFirstOrThrowArgs} args - Arguments to find a Peoples
     * @example
     * // Get one Peoples
     * const peoples = await prisma.peoples.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peoplesFindFirstOrThrowArgs>(args?: SelectSubset<T, peoplesFindFirstOrThrowArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peoples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peoples
     * const peoples = await prisma.peoples.findMany()
     * 
     * // Get first 10 Peoples
     * const peoples = await prisma.peoples.findMany({ take: 10 })
     * 
     * // Only select the `PeopleID`
     * const peoplesWithPeopleIDOnly = await prisma.peoples.findMany({ select: { PeopleID: true } })
     * 
     */
    findMany<T extends peoplesFindManyArgs>(args?: SelectSubset<T, peoplesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peoples.
     * @param {peoplesCreateArgs} args - Arguments to create a Peoples.
     * @example
     * // Create one Peoples
     * const Peoples = await prisma.peoples.create({
     *   data: {
     *     // ... data to create a Peoples
     *   }
     * })
     * 
     */
    create<T extends peoplesCreateArgs>(args: SelectSubset<T, peoplesCreateArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peoples.
     * @param {peoplesCreateManyArgs} args - Arguments to create many Peoples.
     * @example
     * // Create many Peoples
     * const peoples = await prisma.peoples.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peoplesCreateManyArgs>(args?: SelectSubset<T, peoplesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peoples.
     * @param {peoplesDeleteArgs} args - Arguments to delete one Peoples.
     * @example
     * // Delete one Peoples
     * const Peoples = await prisma.peoples.delete({
     *   where: {
     *     // ... filter to delete one Peoples
     *   }
     * })
     * 
     */
    delete<T extends peoplesDeleteArgs>(args: SelectSubset<T, peoplesDeleteArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peoples.
     * @param {peoplesUpdateArgs} args - Arguments to update one Peoples.
     * @example
     * // Update one Peoples
     * const peoples = await prisma.peoples.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peoplesUpdateArgs>(args: SelectSubset<T, peoplesUpdateArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peoples.
     * @param {peoplesDeleteManyArgs} args - Arguments to filter Peoples to delete.
     * @example
     * // Delete a few Peoples
     * const { count } = await prisma.peoples.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peoplesDeleteManyArgs>(args?: SelectSubset<T, peoplesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peoples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peoples
     * const peoples = await prisma.peoples.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peoplesUpdateManyArgs>(args: SelectSubset<T, peoplesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peoples.
     * @param {peoplesUpsertArgs} args - Arguments to update or create a Peoples.
     * @example
     * // Update or create a Peoples
     * const peoples = await prisma.peoples.upsert({
     *   create: {
     *     // ... data to create a Peoples
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peoples we want to update
     *   }
     * })
     */
    upsert<T extends peoplesUpsertArgs>(args: SelectSubset<T, peoplesUpsertArgs<ExtArgs>>): Prisma__peoplesClient<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peoples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesCountArgs} args - Arguments to filter Peoples to count.
     * @example
     * // Count the number of Peoples
     * const count = await prisma.peoples.count({
     *   where: {
     *     // ... the filter for the Peoples we want to count
     *   }
     * })
    **/
    count<T extends peoplesCountArgs>(
      args?: Subset<T, peoplesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeoplesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peoples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeoplesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeoplesAggregateArgs>(args: Subset<T, PeoplesAggregateArgs>): Prisma.PrismaPromise<GetPeoplesAggregateType<T>>

    /**
     * Group by Peoples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peoplesGroupByArgs} args - Group by arguments.
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
      T extends peoplesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peoplesGroupByArgs['orderBy'] }
        : { orderBy?: peoplesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peoplesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeoplesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peoples model
   */
  readonly fields: peoplesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peoples.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peoplesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends peoples$expensesArgs<ExtArgs> = {}>(args?: Subset<T, peoples$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends peoples$incomesArgs<ExtArgs> = {}>(args?: Subset<T, peoples$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the peoples model
   */
  interface peoplesFieldRefs {
    readonly PeopleID: FieldRef<"peoples", 'Int'>
    readonly PeopleCode: FieldRef<"peoples", 'String'>
    readonly Password: FieldRef<"peoples", 'String'>
    readonly PeopleName: FieldRef<"peoples", 'String'>
    readonly Email: FieldRef<"peoples", 'String'>
    readonly MobileNo: FieldRef<"peoples", 'String'>
    readonly Description: FieldRef<"peoples", 'String'>
    readonly UserID: FieldRef<"peoples", 'Int'>
    readonly Created: FieldRef<"peoples", 'DateTime'>
    readonly Modified: FieldRef<"peoples", 'DateTime'>
    readonly IsActive: FieldRef<"peoples", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * peoples findUnique
   */
  export type peoplesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter, which peoples to fetch.
     */
    where: peoplesWhereUniqueInput
  }

  /**
   * peoples findUniqueOrThrow
   */
  export type peoplesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter, which peoples to fetch.
     */
    where: peoplesWhereUniqueInput
  }

  /**
   * peoples findFirst
   */
  export type peoplesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter, which peoples to fetch.
     */
    where?: peoplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peoples to fetch.
     */
    orderBy?: peoplesOrderByWithRelationInput | peoplesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peoples.
     */
    cursor?: peoplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peoples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peoples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peoples.
     */
    distinct?: PeoplesScalarFieldEnum | PeoplesScalarFieldEnum[]
  }

  /**
   * peoples findFirstOrThrow
   */
  export type peoplesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter, which peoples to fetch.
     */
    where?: peoplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peoples to fetch.
     */
    orderBy?: peoplesOrderByWithRelationInput | peoplesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peoples.
     */
    cursor?: peoplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peoples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peoples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peoples.
     */
    distinct?: PeoplesScalarFieldEnum | PeoplesScalarFieldEnum[]
  }

  /**
   * peoples findMany
   */
  export type peoplesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter, which peoples to fetch.
     */
    where?: peoplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peoples to fetch.
     */
    orderBy?: peoplesOrderByWithRelationInput | peoplesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peoples.
     */
    cursor?: peoplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peoples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peoples.
     */
    skip?: number
    distinct?: PeoplesScalarFieldEnum | PeoplesScalarFieldEnum[]
  }

  /**
   * peoples create
   */
  export type peoplesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * The data needed to create a peoples.
     */
    data: XOR<peoplesCreateInput, peoplesUncheckedCreateInput>
  }

  /**
   * peoples createMany
   */
  export type peoplesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peoples.
     */
    data: peoplesCreateManyInput | peoplesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peoples update
   */
  export type peoplesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * The data needed to update a peoples.
     */
    data: XOR<peoplesUpdateInput, peoplesUncheckedUpdateInput>
    /**
     * Choose, which peoples to update.
     */
    where: peoplesWhereUniqueInput
  }

  /**
   * peoples updateMany
   */
  export type peoplesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peoples.
     */
    data: XOR<peoplesUpdateManyMutationInput, peoplesUncheckedUpdateManyInput>
    /**
     * Filter which peoples to update
     */
    where?: peoplesWhereInput
    /**
     * Limit how many peoples to update.
     */
    limit?: number
  }

  /**
   * peoples upsert
   */
  export type peoplesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * The filter to search for the peoples to update in case it exists.
     */
    where: peoplesWhereUniqueInput
    /**
     * In case the peoples found by the `where` argument doesn't exist, create a new peoples with this data.
     */
    create: XOR<peoplesCreateInput, peoplesUncheckedCreateInput>
    /**
     * In case the peoples was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peoplesUpdateInput, peoplesUncheckedUpdateInput>
  }

  /**
   * peoples delete
   */
  export type peoplesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    /**
     * Filter which peoples to delete.
     */
    where: peoplesWhereUniqueInput
  }

  /**
   * peoples deleteMany
   */
  export type peoplesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peoples to delete
     */
    where?: peoplesWhereInput
    /**
     * Limit how many peoples to delete.
     */
    limit?: number
  }

  /**
   * peoples.expenses
   */
  export type peoples$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * peoples.incomes
   */
  export type peoples$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    cursor?: incomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * peoples without action
   */
  export type peoplesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    ProjectID: number | null
    UserID: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    ProjectID: number | null
    UserID: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    ProjectID: number | null
    ProjectName: string | null
    ProjectLogo: string | null
    ProjectStartDate: Date | null
    ProjectEndDate: Date | null
    ProjectDetail: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    IsActive: boolean | null
  }

  export type ProjectsMaxAggregateOutputType = {
    ProjectID: number | null
    ProjectName: string | null
    ProjectLogo: string | null
    ProjectStartDate: Date | null
    ProjectEndDate: Date | null
    ProjectDetail: string | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    IsActive: boolean | null
  }

  export type ProjectsCountAggregateOutputType = {
    ProjectID: number
    ProjectName: number
    ProjectLogo: number
    ProjectStartDate: number
    ProjectEndDate: number
    ProjectDetail: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    IsActive: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    ProjectID?: true
    UserID?: true
  }

  export type ProjectsSumAggregateInputType = {
    ProjectID?: true
    UserID?: true
  }

  export type ProjectsMinAggregateInputType = {
    ProjectID?: true
    ProjectName?: true
    ProjectLogo?: true
    ProjectStartDate?: true
    ProjectEndDate?: true
    ProjectDetail?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
  }

  export type ProjectsMaxAggregateInputType = {
    ProjectID?: true
    ProjectName?: true
    ProjectLogo?: true
    ProjectStartDate?: true
    ProjectEndDate?: true
    ProjectDetail?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
  }

  export type ProjectsCountAggregateInputType = {
    ProjectID?: true
    ProjectName?: true
    ProjectLogo?: true
    ProjectStartDate?: true
    ProjectEndDate?: true
    ProjectDetail?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    IsActive?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    ProjectID: number
    ProjectName: string
    ProjectLogo: string | null
    ProjectStartDate: Date | null
    ProjectEndDate: Date | null
    ProjectDetail: string | null
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    IsActive: boolean | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectID?: boolean
    ProjectName?: boolean
    ProjectLogo?: boolean
    ProjectStartDate?: boolean
    ProjectEndDate?: boolean
    ProjectDetail?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    IsActive?: boolean
    expenses?: boolean | projects$expensesArgs<ExtArgs>
    incomes?: boolean | projects$incomesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>



  export type projectsSelectScalar = {
    ProjectID?: boolean
    ProjectName?: boolean
    ProjectLogo?: boolean
    ProjectStartDate?: boolean
    ProjectEndDate?: boolean
    ProjectDetail?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    IsActive?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectID" | "ProjectName" | "ProjectLogo" | "ProjectStartDate" | "ProjectEndDate" | "ProjectDetail" | "Description" | "UserID" | "Created" | "Modified" | "IsActive", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | projects$expensesArgs<ExtArgs>
    incomes?: boolean | projects$incomesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      incomes: Prisma.$incomesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectID: number
      ProjectName: string
      ProjectLogo: string | null
      ProjectStartDate: Date | null
      ProjectEndDate: Date | null
      ProjectDetail: string | null
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
      IsActive: boolean | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `ProjectID`
     * const projectsWithProjectIDOnly = await prisma.projects.findMany({ select: { ProjectID: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends projects$expensesArgs<ExtArgs> = {}>(args?: Subset<T, projects$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends projects$incomesArgs<ExtArgs> = {}>(args?: Subset<T, projects$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly ProjectID: FieldRef<"projects", 'Int'>
    readonly ProjectName: FieldRef<"projects", 'String'>
    readonly ProjectLogo: FieldRef<"projects", 'String'>
    readonly ProjectStartDate: FieldRef<"projects", 'DateTime'>
    readonly ProjectEndDate: FieldRef<"projects", 'DateTime'>
    readonly ProjectDetail: FieldRef<"projects", 'String'>
    readonly Description: FieldRef<"projects", 'String'>
    readonly UserID: FieldRef<"projects", 'Int'>
    readonly Created: FieldRef<"projects", 'DateTime'>
    readonly Modified: FieldRef<"projects", 'DateTime'>
    readonly IsActive: FieldRef<"projects", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.expenses
   */
  export type projects$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * projects.incomes
   */
  export type projects$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    cursor?: incomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model sub_categories
   */

  export type AggregateSub_categories = {
    _count: Sub_categoriesCountAggregateOutputType | null
    _avg: Sub_categoriesAvgAggregateOutputType | null
    _sum: Sub_categoriesSumAggregateOutputType | null
    _min: Sub_categoriesMinAggregateOutputType | null
    _max: Sub_categoriesMaxAggregateOutputType | null
  }

  export type Sub_categoriesAvgAggregateOutputType = {
    SubCategoryID: number | null
    CategoryID: number | null
    UserID: number | null
    Sequence: Decimal | null
  }

  export type Sub_categoriesSumAggregateOutputType = {
    SubCategoryID: number | null
    CategoryID: number | null
    UserID: number | null
    Sequence: Decimal | null
  }

  export type Sub_categoriesMinAggregateOutputType = {
    SubCategoryID: number | null
    CategoryID: number | null
    SubCategoryName: string | null
    LogoPath: string | null
    IsExpense: boolean | null
    IsIncome: boolean | null
    IsActive: boolean | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    Sequence: Decimal | null
  }

  export type Sub_categoriesMaxAggregateOutputType = {
    SubCategoryID: number | null
    CategoryID: number | null
    SubCategoryName: string | null
    LogoPath: string | null
    IsExpense: boolean | null
    IsIncome: boolean | null
    IsActive: boolean | null
    Description: string | null
    UserID: number | null
    Created: Date | null
    Modified: Date | null
    Sequence: Decimal | null
  }

  export type Sub_categoriesCountAggregateOutputType = {
    SubCategoryID: number
    CategoryID: number
    SubCategoryName: number
    LogoPath: number
    IsExpense: number
    IsIncome: number
    IsActive: number
    Description: number
    UserID: number
    Created: number
    Modified: number
    Sequence: number
    _all: number
  }


  export type Sub_categoriesAvgAggregateInputType = {
    SubCategoryID?: true
    CategoryID?: true
    UserID?: true
    Sequence?: true
  }

  export type Sub_categoriesSumAggregateInputType = {
    SubCategoryID?: true
    CategoryID?: true
    UserID?: true
    Sequence?: true
  }

  export type Sub_categoriesMinAggregateInputType = {
    SubCategoryID?: true
    CategoryID?: true
    SubCategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
  }

  export type Sub_categoriesMaxAggregateInputType = {
    SubCategoryID?: true
    CategoryID?: true
    SubCategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
  }

  export type Sub_categoriesCountAggregateInputType = {
    SubCategoryID?: true
    CategoryID?: true
    SubCategoryName?: true
    LogoPath?: true
    IsExpense?: true
    IsIncome?: true
    IsActive?: true
    Description?: true
    UserID?: true
    Created?: true
    Modified?: true
    Sequence?: true
    _all?: true
  }

  export type Sub_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_categories to aggregate.
     */
    where?: sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categories to fetch.
     */
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_categories
    **/
    _count?: true | Sub_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_categoriesMaxAggregateInputType
  }

  export type GetSub_categoriesAggregateType<T extends Sub_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_categories[P]>
      : GetScalarType<T[P], AggregateSub_categories[P]>
  }




  export type sub_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_categoriesWhereInput
    orderBy?: sub_categoriesOrderByWithAggregationInput | sub_categoriesOrderByWithAggregationInput[]
    by: Sub_categoriesScalarFieldEnum[] | Sub_categoriesScalarFieldEnum
    having?: sub_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_categoriesCountAggregateInputType | true
    _avg?: Sub_categoriesAvgAggregateInputType
    _sum?: Sub_categoriesSumAggregateInputType
    _min?: Sub_categoriesMinAggregateInputType
    _max?: Sub_categoriesMaxAggregateInputType
  }

  export type Sub_categoriesGroupByOutputType = {
    SubCategoryID: number
    CategoryID: number
    SubCategoryName: string
    LogoPath: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description: string | null
    UserID: number
    Created: Date
    Modified: Date
    Sequence: Decimal | null
    _count: Sub_categoriesCountAggregateOutputType | null
    _avg: Sub_categoriesAvgAggregateOutputType | null
    _sum: Sub_categoriesSumAggregateOutputType | null
    _min: Sub_categoriesMinAggregateOutputType | null
    _max: Sub_categoriesMaxAggregateOutputType | null
  }

  type GetSub_categoriesGroupByPayload<T extends sub_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type sub_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SubCategoryID?: boolean
    CategoryID?: boolean
    SubCategoryName?: boolean
    LogoPath?: boolean
    IsExpense?: boolean
    IsIncome?: boolean
    IsActive?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    Sequence?: boolean
    expenses?: boolean | sub_categories$expensesArgs<ExtArgs>
    incomes?: boolean | sub_categories$incomesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Sub_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_categories"]>



  export type sub_categoriesSelectScalar = {
    SubCategoryID?: boolean
    CategoryID?: boolean
    SubCategoryName?: boolean
    LogoPath?: boolean
    IsExpense?: boolean
    IsIncome?: boolean
    IsActive?: boolean
    Description?: boolean
    UserID?: boolean
    Created?: boolean
    Modified?: boolean
    Sequence?: boolean
  }

  export type sub_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SubCategoryID" | "CategoryID" | "SubCategoryName" | "LogoPath" | "IsExpense" | "IsIncome" | "IsActive" | "Description" | "UserID" | "Created" | "Modified" | "Sequence", ExtArgs["result"]["sub_categories"]>
  export type sub_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | sub_categories$expensesArgs<ExtArgs>
    incomes?: boolean | sub_categories$incomesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Sub_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sub_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_categories"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      incomes: Prisma.$incomesPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SubCategoryID: number
      CategoryID: number
      SubCategoryName: string
      LogoPath: string | null
      IsExpense: boolean
      IsIncome: boolean
      IsActive: boolean
      Description: string | null
      UserID: number
      Created: Date
      Modified: Date
      Sequence: Prisma.Decimal | null
    }, ExtArgs["result"]["sub_categories"]>
    composites: {}
  }

  type sub_categoriesGetPayload<S extends boolean | null | undefined | sub_categoriesDefaultArgs> = $Result.GetResult<Prisma.$sub_categoriesPayload, S>

  type sub_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_categoriesCountAggregateInputType | true
    }

  export interface sub_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_categories'], meta: { name: 'sub_categories' } }
    /**
     * Find zero or one Sub_categories that matches the filter.
     * @param {sub_categoriesFindUniqueArgs} args - Arguments to find a Sub_categories
     * @example
     * // Get one Sub_categories
     * const sub_categories = await prisma.sub_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_categoriesFindUniqueArgs>(args: SelectSubset<T, sub_categoriesFindUniqueArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Sub_categories
     * @example
     * // Get one Sub_categories
     * const sub_categories = await prisma.sub_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesFindFirstArgs} args - Arguments to find a Sub_categories
     * @example
     * // Get one Sub_categories
     * const sub_categories = await prisma.sub_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_categoriesFindFirstArgs>(args?: SelectSubset<T, sub_categoriesFindFirstArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesFindFirstOrThrowArgs} args - Arguments to find a Sub_categories
     * @example
     * // Get one Sub_categories
     * const sub_categories = await prisma.sub_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_categories
     * const sub_categories = await prisma.sub_categories.findMany()
     * 
     * // Get first 10 Sub_categories
     * const sub_categories = await prisma.sub_categories.findMany({ take: 10 })
     * 
     * // Only select the `SubCategoryID`
     * const sub_categoriesWithSubCategoryIDOnly = await prisma.sub_categories.findMany({ select: { SubCategoryID: true } })
     * 
     */
    findMany<T extends sub_categoriesFindManyArgs>(args?: SelectSubset<T, sub_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_categories.
     * @param {sub_categoriesCreateArgs} args - Arguments to create a Sub_categories.
     * @example
     * // Create one Sub_categories
     * const Sub_categories = await prisma.sub_categories.create({
     *   data: {
     *     // ... data to create a Sub_categories
     *   }
     * })
     * 
     */
    create<T extends sub_categoriesCreateArgs>(args: SelectSubset<T, sub_categoriesCreateArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_categories.
     * @param {sub_categoriesCreateManyArgs} args - Arguments to create many Sub_categories.
     * @example
     * // Create many Sub_categories
     * const sub_categories = await prisma.sub_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_categoriesCreateManyArgs>(args?: SelectSubset<T, sub_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_categories.
     * @param {sub_categoriesDeleteArgs} args - Arguments to delete one Sub_categories.
     * @example
     * // Delete one Sub_categories
     * const Sub_categories = await prisma.sub_categories.delete({
     *   where: {
     *     // ... filter to delete one Sub_categories
     *   }
     * })
     * 
     */
    delete<T extends sub_categoriesDeleteArgs>(args: SelectSubset<T, sub_categoriesDeleteArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_categories.
     * @param {sub_categoriesUpdateArgs} args - Arguments to update one Sub_categories.
     * @example
     * // Update one Sub_categories
     * const sub_categories = await prisma.sub_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_categoriesUpdateArgs>(args: SelectSubset<T, sub_categoriesUpdateArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_categories.
     * @param {sub_categoriesDeleteManyArgs} args - Arguments to filter Sub_categories to delete.
     * @example
     * // Delete a few Sub_categories
     * const { count } = await prisma.sub_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_categoriesDeleteManyArgs>(args?: SelectSubset<T, sub_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_categories
     * const sub_categories = await prisma.sub_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_categoriesUpdateManyArgs>(args: SelectSubset<T, sub_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_categories.
     * @param {sub_categoriesUpsertArgs} args - Arguments to update or create a Sub_categories.
     * @example
     * // Update or create a Sub_categories
     * const sub_categories = await prisma.sub_categories.upsert({
     *   create: {
     *     // ... data to create a Sub_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_categories we want to update
     *   }
     * })
     */
    upsert<T extends sub_categoriesUpsertArgs>(args: SelectSubset<T, sub_categoriesUpsertArgs<ExtArgs>>): Prisma__sub_categoriesClient<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesCountArgs} args - Arguments to filter Sub_categories to count.
     * @example
     * // Count the number of Sub_categories
     * const count = await prisma.sub_categories.count({
     *   where: {
     *     // ... the filter for the Sub_categories we want to count
     *   }
     * })
    **/
    count<T extends sub_categoriesCountArgs>(
      args?: Subset<T, sub_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sub_categoriesAggregateArgs>(args: Subset<T, Sub_categoriesAggregateArgs>): Prisma.PrismaPromise<GetSub_categoriesAggregateType<T>>

    /**
     * Group by Sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_categoriesGroupByArgs} args - Group by arguments.
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
      T extends sub_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: sub_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sub_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_categories model
   */
  readonly fields: sub_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends sub_categories$expensesArgs<ExtArgs> = {}>(args?: Subset<T, sub_categories$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends sub_categories$incomesArgs<ExtArgs> = {}>(args?: Subset<T, sub_categories$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sub_categories model
   */
  interface sub_categoriesFieldRefs {
    readonly SubCategoryID: FieldRef<"sub_categories", 'Int'>
    readonly CategoryID: FieldRef<"sub_categories", 'Int'>
    readonly SubCategoryName: FieldRef<"sub_categories", 'String'>
    readonly LogoPath: FieldRef<"sub_categories", 'String'>
    readonly IsExpense: FieldRef<"sub_categories", 'Boolean'>
    readonly IsIncome: FieldRef<"sub_categories", 'Boolean'>
    readonly IsActive: FieldRef<"sub_categories", 'Boolean'>
    readonly Description: FieldRef<"sub_categories", 'String'>
    readonly UserID: FieldRef<"sub_categories", 'Int'>
    readonly Created: FieldRef<"sub_categories", 'DateTime'>
    readonly Modified: FieldRef<"sub_categories", 'DateTime'>
    readonly Sequence: FieldRef<"sub_categories", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * sub_categories findUnique
   */
  export type sub_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which sub_categories to fetch.
     */
    where: sub_categoriesWhereUniqueInput
  }

  /**
   * sub_categories findUniqueOrThrow
   */
  export type sub_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which sub_categories to fetch.
     */
    where: sub_categoriesWhereUniqueInput
  }

  /**
   * sub_categories findFirst
   */
  export type sub_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which sub_categories to fetch.
     */
    where?: sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categories to fetch.
     */
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_categories.
     */
    cursor?: sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_categories.
     */
    distinct?: Sub_categoriesScalarFieldEnum | Sub_categoriesScalarFieldEnum[]
  }

  /**
   * sub_categories findFirstOrThrow
   */
  export type sub_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which sub_categories to fetch.
     */
    where?: sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categories to fetch.
     */
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_categories.
     */
    cursor?: sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_categories.
     */
    distinct?: Sub_categoriesScalarFieldEnum | Sub_categoriesScalarFieldEnum[]
  }

  /**
   * sub_categories findMany
   */
  export type sub_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which sub_categories to fetch.
     */
    where?: sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_categories to fetch.
     */
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_categories.
     */
    cursor?: sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_categories.
     */
    skip?: number
    distinct?: Sub_categoriesScalarFieldEnum | Sub_categoriesScalarFieldEnum[]
  }

  /**
   * sub_categories create
   */
  export type sub_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_categories.
     */
    data: XOR<sub_categoriesCreateInput, sub_categoriesUncheckedCreateInput>
  }

  /**
   * sub_categories createMany
   */
  export type sub_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_categories.
     */
    data: sub_categoriesCreateManyInput | sub_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_categories update
   */
  export type sub_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_categories.
     */
    data: XOR<sub_categoriesUpdateInput, sub_categoriesUncheckedUpdateInput>
    /**
     * Choose, which sub_categories to update.
     */
    where: sub_categoriesWhereUniqueInput
  }

  /**
   * sub_categories updateMany
   */
  export type sub_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_categories.
     */
    data: XOR<sub_categoriesUpdateManyMutationInput, sub_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which sub_categories to update
     */
    where?: sub_categoriesWhereInput
    /**
     * Limit how many sub_categories to update.
     */
    limit?: number
  }

  /**
   * sub_categories upsert
   */
  export type sub_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_categories to update in case it exists.
     */
    where: sub_categoriesWhereUniqueInput
    /**
     * In case the sub_categories found by the `where` argument doesn't exist, create a new sub_categories with this data.
     */
    create: XOR<sub_categoriesCreateInput, sub_categoriesUncheckedCreateInput>
    /**
     * In case the sub_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_categoriesUpdateInput, sub_categoriesUncheckedUpdateInput>
  }

  /**
   * sub_categories delete
   */
  export type sub_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter which sub_categories to delete.
     */
    where: sub_categoriesWhereUniqueInput
  }

  /**
   * sub_categories deleteMany
   */
  export type sub_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_categories to delete
     */
    where?: sub_categoriesWhereInput
    /**
     * Limit how many sub_categories to delete.
     */
    limit?: number
  }

  /**
   * sub_categories.expenses
   */
  export type sub_categories$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * sub_categories.incomes
   */
  export type sub_categories$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    cursor?: incomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * sub_categories without action
   */
  export type sub_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    UserID: number | null
  }

  export type UsersSumAggregateOutputType = {
    UserID: number | null
  }

  export type UsersMinAggregateOutputType = {
    UserID: number | null
    UserName: string | null
    EmailAddress: string | null
    Password: string | null
    MobileNo: string | null
    ProfileImage: string | null
    Created: Date | null
    Modified: Date | null
    Role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    UserID: number | null
    UserName: string | null
    EmailAddress: string | null
    Password: string | null
    MobileNo: string | null
    ProfileImage: string | null
    Created: Date | null
    Modified: Date | null
    Role: string | null
  }

  export type UsersCountAggregateOutputType = {
    UserID: number
    UserName: number
    EmailAddress: number
    Password: number
    MobileNo: number
    ProfileImage: number
    Created: number
    Modified: number
    Role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    UserID?: true
  }

  export type UsersSumAggregateInputType = {
    UserID?: true
  }

  export type UsersMinAggregateInputType = {
    UserID?: true
    UserName?: true
    EmailAddress?: true
    Password?: true
    MobileNo?: true
    ProfileImage?: true
    Created?: true
    Modified?: true
    Role?: true
  }

  export type UsersMaxAggregateInputType = {
    UserID?: true
    UserName?: true
    EmailAddress?: true
    Password?: true
    MobileNo?: true
    ProfileImage?: true
    Created?: true
    Modified?: true
    Role?: true
  }

  export type UsersCountAggregateInputType = {
    UserID?: true
    UserName?: true
    EmailAddress?: true
    Password?: true
    MobileNo?: true
    ProfileImage?: true
    Created?: true
    Modified?: true
    Role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UserID: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage: string | null
    Created: Date
    Modified: Date
    Role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    UserName?: boolean
    EmailAddress?: boolean
    Password?: boolean
    MobileNo?: boolean
    ProfileImage?: boolean
    Created?: boolean
    Modified?: boolean
    Role?: boolean
    categories?: boolean | users$categoriesArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    incomes?: boolean | users$incomesArgs<ExtArgs>
    peoples?: boolean | users$peoplesArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    sub_categories?: boolean | users$sub_categoriesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    UserID?: boolean
    UserName?: boolean
    EmailAddress?: boolean
    Password?: boolean
    MobileNo?: boolean
    ProfileImage?: boolean
    Created?: boolean
    Modified?: boolean
    Role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "UserName" | "EmailAddress" | "Password" | "MobileNo" | "ProfileImage" | "Created" | "Modified" | "Role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | users$categoriesArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    incomes?: boolean | users$incomesArgs<ExtArgs>
    peoples?: boolean | users$peoplesArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    sub_categories?: boolean | users$sub_categoriesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      incomes: Prisma.$incomesPayload<ExtArgs>[]
      peoples: Prisma.$peoplesPayload<ExtArgs>[]
      projects: Prisma.$projectsPayload<ExtArgs>[]
      sub_categories: Prisma.$sub_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      UserName: string
      EmailAddress: string
      Password: string
      MobileNo: string
      ProfileImage: string | null
      Created: Date
      Modified: Date
      Role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends users$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, users$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends users$expensesArgs<ExtArgs> = {}>(args?: Subset<T, users$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends users$incomesArgs<ExtArgs> = {}>(args?: Subset<T, users$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incomesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peoples<T extends users$peoplesArgs<ExtArgs> = {}>(args?: Subset<T, users$peoplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peoplesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_categories<T extends users$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, users$sub_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly UserID: FieldRef<"users", 'Int'>
    readonly UserName: FieldRef<"users", 'String'>
    readonly EmailAddress: FieldRef<"users", 'String'>
    readonly Password: FieldRef<"users", 'String'>
    readonly MobileNo: FieldRef<"users", 'String'>
    readonly ProfileImage: FieldRef<"users", 'String'>
    readonly Created: FieldRef<"users", 'DateTime'>
    readonly Modified: FieldRef<"users", 'DateTime'>
    readonly Role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.categories
   */
  export type users$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.expenses
   */
  export type users$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users.incomes
   */
  export type users$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incomes
     */
    select?: incomesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the incomes
     */
    omit?: incomesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: incomesInclude<ExtArgs> | null
    where?: incomesWhereInput
    orderBy?: incomesOrderByWithRelationInput | incomesOrderByWithRelationInput[]
    cursor?: incomesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomesScalarFieldEnum | IncomesScalarFieldEnum[]
  }

  /**
   * users.peoples
   */
  export type users$peoplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peoples
     */
    select?: peoplesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peoples
     */
    omit?: peoplesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peoplesInclude<ExtArgs> | null
    where?: peoplesWhereInput
    orderBy?: peoplesOrderByWithRelationInput | peoplesOrderByWithRelationInput[]
    cursor?: peoplesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeoplesScalarFieldEnum | PeoplesScalarFieldEnum[]
  }

  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users.sub_categories
   */
  export type users$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_categories
     */
    select?: sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_categories
     */
    omit?: sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_categoriesInclude<ExtArgs> | null
    where?: sub_categoriesWhereInput
    orderBy?: sub_categoriesOrderByWithRelationInput | sub_categoriesOrderByWithRelationInput[]
    cursor?: sub_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_categoriesScalarFieldEnum | Sub_categoriesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    CategoryID: 'CategoryID',
    CategoryName: 'CategoryName',
    LogoPath: 'LogoPath',
    IsExpense: 'IsExpense',
    IsIncome: 'IsIncome',
    IsActive: 'IsActive',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified',
    Sequence: 'Sequence'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    ExpenseID: 'ExpenseID',
    ExpenseDate: 'ExpenseDate',
    CategoryID: 'CategoryID',
    SubCategoryID: 'SubCategoryID',
    PeopleID: 'PeopleID',
    ProjectID: 'ProjectID',
    Amount: 'Amount',
    ExpenseDetail: 'ExpenseDetail',
    AttachmentPath: 'AttachmentPath',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const IncomesScalarFieldEnum: {
    IncomeID: 'IncomeID',
    IncomeDate: 'IncomeDate',
    CategoryID: 'CategoryID',
    SubCategoryID: 'SubCategoryID',
    PeopleID: 'PeopleID',
    ProjectID: 'ProjectID',
    Amount: 'Amount',
    IncomeDetail: 'IncomeDetail',
    AttachmentPath: 'AttachmentPath',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type IncomesScalarFieldEnum = (typeof IncomesScalarFieldEnum)[keyof typeof IncomesScalarFieldEnum]


  export const PeoplesScalarFieldEnum: {
    PeopleID: 'PeopleID',
    PeopleCode: 'PeopleCode',
    Password: 'Password',
    PeopleName: 'PeopleName',
    Email: 'Email',
    MobileNo: 'MobileNo',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified',
    IsActive: 'IsActive'
  };

  export type PeoplesScalarFieldEnum = (typeof PeoplesScalarFieldEnum)[keyof typeof PeoplesScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    ProjectID: 'ProjectID',
    ProjectName: 'ProjectName',
    ProjectLogo: 'ProjectLogo',
    ProjectStartDate: 'ProjectStartDate',
    ProjectEndDate: 'ProjectEndDate',
    ProjectDetail: 'ProjectDetail',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified',
    IsActive: 'IsActive'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const Sub_categoriesScalarFieldEnum: {
    SubCategoryID: 'SubCategoryID',
    CategoryID: 'CategoryID',
    SubCategoryName: 'SubCategoryName',
    LogoPath: 'LogoPath',
    IsExpense: 'IsExpense',
    IsIncome: 'IsIncome',
    IsActive: 'IsActive',
    Description: 'Description',
    UserID: 'UserID',
    Created: 'Created',
    Modified: 'Modified',
    Sequence: 'Sequence'
  };

  export type Sub_categoriesScalarFieldEnum = (typeof Sub_categoriesScalarFieldEnum)[keyof typeof Sub_categoriesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UserID: 'UserID',
    UserName: 'UserName',
    EmailAddress: 'EmailAddress',
    Password: 'Password',
    MobileNo: 'MobileNo',
    ProfileImage: 'ProfileImage',
    Created: 'Created',
    Modified: 'Modified',
    Role: 'Role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    CategoryName: 'CategoryName',
    LogoPath: 'LogoPath',
    Description: 'Description'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const expensesOrderByRelevanceFieldEnum: {
    ExpenseDetail: 'ExpenseDetail',
    AttachmentPath: 'AttachmentPath',
    Description: 'Description'
  };

  export type expensesOrderByRelevanceFieldEnum = (typeof expensesOrderByRelevanceFieldEnum)[keyof typeof expensesOrderByRelevanceFieldEnum]


  export const incomesOrderByRelevanceFieldEnum: {
    IncomeDetail: 'IncomeDetail',
    AttachmentPath: 'AttachmentPath',
    Description: 'Description'
  };

  export type incomesOrderByRelevanceFieldEnum = (typeof incomesOrderByRelevanceFieldEnum)[keyof typeof incomesOrderByRelevanceFieldEnum]


  export const peoplesOrderByRelevanceFieldEnum: {
    PeopleCode: 'PeopleCode',
    Password: 'Password',
    PeopleName: 'PeopleName',
    Email: 'Email',
    MobileNo: 'MobileNo',
    Description: 'Description'
  };

  export type peoplesOrderByRelevanceFieldEnum = (typeof peoplesOrderByRelevanceFieldEnum)[keyof typeof peoplesOrderByRelevanceFieldEnum]


  export const projectsOrderByRelevanceFieldEnum: {
    ProjectName: 'ProjectName',
    ProjectLogo: 'ProjectLogo',
    ProjectDetail: 'ProjectDetail',
    Description: 'Description'
  };

  export type projectsOrderByRelevanceFieldEnum = (typeof projectsOrderByRelevanceFieldEnum)[keyof typeof projectsOrderByRelevanceFieldEnum]


  export const sub_categoriesOrderByRelevanceFieldEnum: {
    SubCategoryName: 'SubCategoryName',
    LogoPath: 'LogoPath',
    Description: 'Description'
  };

  export type sub_categoriesOrderByRelevanceFieldEnum = (typeof sub_categoriesOrderByRelevanceFieldEnum)[keyof typeof sub_categoriesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    UserName: 'UserName',
    EmailAddress: 'EmailAddress',
    Password: 'Password',
    MobileNo: 'MobileNo',
    ProfileImage: 'ProfileImage',
    Role: 'Role'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    CategoryID?: IntFilter<"categories"> | number
    CategoryName?: StringFilter<"categories"> | string
    LogoPath?: StringNullableFilter<"categories"> | string | null
    IsExpense?: BoolFilter<"categories"> | boolean
    IsIncome?: BoolFilter<"categories"> | boolean
    IsActive?: BoolFilter<"categories"> | boolean
    Description?: StringNullableFilter<"categories"> | string | null
    UserID?: IntFilter<"categories"> | number
    Created?: DateTimeFilter<"categories"> | Date | string
    Modified?: DateTimeFilter<"categories"> | Date | string
    Sequence?: DecimalNullableFilter<"categories"> | Decimal | DecimalJsLike | number | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    sub_categories?: Sub_categoriesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    LogoPath?: SortOrderInput | SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    expenses?: expensesOrderByRelationAggregateInput
    incomes?: incomesOrderByRelationAggregateInput
    sub_categories?: sub_categoriesOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    CategoryID?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    CategoryName?: StringFilter<"categories"> | string
    LogoPath?: StringNullableFilter<"categories"> | string | null
    IsExpense?: BoolFilter<"categories"> | boolean
    IsIncome?: BoolFilter<"categories"> | boolean
    IsActive?: BoolFilter<"categories"> | boolean
    Description?: StringNullableFilter<"categories"> | string | null
    UserID?: IntFilter<"categories"> | number
    Created?: DateTimeFilter<"categories"> | Date | string
    Modified?: DateTimeFilter<"categories"> | Date | string
    Sequence?: DecimalNullableFilter<"categories"> | Decimal | DecimalJsLike | number | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    sub_categories?: Sub_categoriesListRelationFilter
  }, "CategoryID">

  export type categoriesOrderByWithAggregationInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    LogoPath?: SortOrderInput | SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    CategoryID?: IntWithAggregatesFilter<"categories"> | number
    CategoryName?: StringWithAggregatesFilter<"categories"> | string
    LogoPath?: StringNullableWithAggregatesFilter<"categories"> | string | null
    IsExpense?: BoolWithAggregatesFilter<"categories"> | boolean
    IsIncome?: BoolWithAggregatesFilter<"categories"> | boolean
    IsActive?: BoolWithAggregatesFilter<"categories"> | boolean
    Description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    UserID?: IntWithAggregatesFilter<"categories"> | number
    Created?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    Sequence?: DecimalNullableWithAggregatesFilter<"categories"> | Decimal | DecimalJsLike | number | string | null
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    ExpenseID?: IntFilter<"expenses"> | number
    ExpenseDate?: DateTimeFilter<"expenses"> | Date | string
    CategoryID?: IntNullableFilter<"expenses"> | number | null
    SubCategoryID?: IntNullableFilter<"expenses"> | number | null
    PeopleID?: IntFilter<"expenses"> | number
    ProjectID?: IntNullableFilter<"expenses"> | number | null
    Amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: StringNullableFilter<"expenses"> | string | null
    AttachmentPath?: StringNullableFilter<"expenses"> | string | null
    Description?: StringNullableFilter<"expenses"> | string | null
    UserID?: IntFilter<"expenses"> | number
    Created?: DateTimeFilter<"expenses"> | Date | string
    Modified?: DateTimeFilter<"expenses"> | Date | string
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    sub_categories?: XOR<Sub_categoriesNullableScalarRelationFilter, sub_categoriesWhereInput> | null
    peoples?: XOR<PeoplesScalarRelationFilter, peoplesWhereInput>
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type expensesOrderByWithRelationInput = {
    ExpenseID?: SortOrder
    ExpenseDate?: SortOrder
    CategoryID?: SortOrderInput | SortOrder
    SubCategoryID?: SortOrderInput | SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrderInput | SortOrder
    Amount?: SortOrder
    ExpenseDetail?: SortOrderInput | SortOrder
    AttachmentPath?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    sub_categories?: sub_categoriesOrderByWithRelationInput
    peoples?: peoplesOrderByWithRelationInput
    projects?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: expensesOrderByRelevanceInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    ExpenseID?: number
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    ExpenseDate?: DateTimeFilter<"expenses"> | Date | string
    CategoryID?: IntNullableFilter<"expenses"> | number | null
    SubCategoryID?: IntNullableFilter<"expenses"> | number | null
    PeopleID?: IntFilter<"expenses"> | number
    ProjectID?: IntNullableFilter<"expenses"> | number | null
    Amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: StringNullableFilter<"expenses"> | string | null
    AttachmentPath?: StringNullableFilter<"expenses"> | string | null
    Description?: StringNullableFilter<"expenses"> | string | null
    UserID?: IntFilter<"expenses"> | number
    Created?: DateTimeFilter<"expenses"> | Date | string
    Modified?: DateTimeFilter<"expenses"> | Date | string
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    sub_categories?: XOR<Sub_categoriesNullableScalarRelationFilter, sub_categoriesWhereInput> | null
    peoples?: XOR<PeoplesScalarRelationFilter, peoplesWhereInput>
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "ExpenseID">

  export type expensesOrderByWithAggregationInput = {
    ExpenseID?: SortOrder
    ExpenseDate?: SortOrder
    CategoryID?: SortOrderInput | SortOrder
    SubCategoryID?: SortOrderInput | SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrderInput | SortOrder
    Amount?: SortOrder
    ExpenseDetail?: SortOrderInput | SortOrder
    AttachmentPath?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    ExpenseID?: IntWithAggregatesFilter<"expenses"> | number
    ExpenseDate?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    CategoryID?: IntNullableWithAggregatesFilter<"expenses"> | number | null
    SubCategoryID?: IntNullableWithAggregatesFilter<"expenses"> | number | null
    PeopleID?: IntWithAggregatesFilter<"expenses"> | number
    ProjectID?: IntNullableWithAggregatesFilter<"expenses"> | number | null
    Amount?: DecimalWithAggregatesFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    AttachmentPath?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    Description?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    UserID?: IntWithAggregatesFilter<"expenses"> | number
    Created?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
  }

  export type incomesWhereInput = {
    AND?: incomesWhereInput | incomesWhereInput[]
    OR?: incomesWhereInput[]
    NOT?: incomesWhereInput | incomesWhereInput[]
    IncomeID?: IntFilter<"incomes"> | number
    IncomeDate?: DateTimeFilter<"incomes"> | Date | string
    CategoryID?: IntNullableFilter<"incomes"> | number | null
    SubCategoryID?: IntNullableFilter<"incomes"> | number | null
    PeopleID?: IntFilter<"incomes"> | number
    ProjectID?: IntNullableFilter<"incomes"> | number | null
    Amount?: DecimalFilter<"incomes"> | Decimal | DecimalJsLike | number | string
    IncomeDetail?: StringNullableFilter<"incomes"> | string | null
    AttachmentPath?: StringNullableFilter<"incomes"> | string | null
    Description?: StringNullableFilter<"incomes"> | string | null
    UserID?: IntFilter<"incomes"> | number
    Created?: DateTimeFilter<"incomes"> | Date | string
    Modified?: DateTimeFilter<"incomes"> | Date | string
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    sub_categories?: XOR<Sub_categoriesNullableScalarRelationFilter, sub_categoriesWhereInput> | null
    peoples?: XOR<PeoplesScalarRelationFilter, peoplesWhereInput>
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type incomesOrderByWithRelationInput = {
    IncomeID?: SortOrder
    IncomeDate?: SortOrder
    CategoryID?: SortOrderInput | SortOrder
    SubCategoryID?: SortOrderInput | SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrderInput | SortOrder
    Amount?: SortOrder
    IncomeDetail?: SortOrderInput | SortOrder
    AttachmentPath?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    sub_categories?: sub_categoriesOrderByWithRelationInput
    peoples?: peoplesOrderByWithRelationInput
    projects?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: incomesOrderByRelevanceInput
  }

  export type incomesWhereUniqueInput = Prisma.AtLeast<{
    IncomeID?: number
    AND?: incomesWhereInput | incomesWhereInput[]
    OR?: incomesWhereInput[]
    NOT?: incomesWhereInput | incomesWhereInput[]
    IncomeDate?: DateTimeFilter<"incomes"> | Date | string
    CategoryID?: IntNullableFilter<"incomes"> | number | null
    SubCategoryID?: IntNullableFilter<"incomes"> | number | null
    PeopleID?: IntFilter<"incomes"> | number
    ProjectID?: IntNullableFilter<"incomes"> | number | null
    Amount?: DecimalFilter<"incomes"> | Decimal | DecimalJsLike | number | string
    IncomeDetail?: StringNullableFilter<"incomes"> | string | null
    AttachmentPath?: StringNullableFilter<"incomes"> | string | null
    Description?: StringNullableFilter<"incomes"> | string | null
    UserID?: IntFilter<"incomes"> | number
    Created?: DateTimeFilter<"incomes"> | Date | string
    Modified?: DateTimeFilter<"incomes"> | Date | string
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    sub_categories?: XOR<Sub_categoriesNullableScalarRelationFilter, sub_categoriesWhereInput> | null
    peoples?: XOR<PeoplesScalarRelationFilter, peoplesWhereInput>
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "IncomeID">

  export type incomesOrderByWithAggregationInput = {
    IncomeID?: SortOrder
    IncomeDate?: SortOrder
    CategoryID?: SortOrderInput | SortOrder
    SubCategoryID?: SortOrderInput | SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrderInput | SortOrder
    Amount?: SortOrder
    IncomeDetail?: SortOrderInput | SortOrder
    AttachmentPath?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: incomesCountOrderByAggregateInput
    _avg?: incomesAvgOrderByAggregateInput
    _max?: incomesMaxOrderByAggregateInput
    _min?: incomesMinOrderByAggregateInput
    _sum?: incomesSumOrderByAggregateInput
  }

  export type incomesScalarWhereWithAggregatesInput = {
    AND?: incomesScalarWhereWithAggregatesInput | incomesScalarWhereWithAggregatesInput[]
    OR?: incomesScalarWhereWithAggregatesInput[]
    NOT?: incomesScalarWhereWithAggregatesInput | incomesScalarWhereWithAggregatesInput[]
    IncomeID?: IntWithAggregatesFilter<"incomes"> | number
    IncomeDate?: DateTimeWithAggregatesFilter<"incomes"> | Date | string
    CategoryID?: IntNullableWithAggregatesFilter<"incomes"> | number | null
    SubCategoryID?: IntNullableWithAggregatesFilter<"incomes"> | number | null
    PeopleID?: IntWithAggregatesFilter<"incomes"> | number
    ProjectID?: IntNullableWithAggregatesFilter<"incomes"> | number | null
    Amount?: DecimalWithAggregatesFilter<"incomes"> | Decimal | DecimalJsLike | number | string
    IncomeDetail?: StringNullableWithAggregatesFilter<"incomes"> | string | null
    AttachmentPath?: StringNullableWithAggregatesFilter<"incomes"> | string | null
    Description?: StringNullableWithAggregatesFilter<"incomes"> | string | null
    UserID?: IntWithAggregatesFilter<"incomes"> | number
    Created?: DateTimeWithAggregatesFilter<"incomes"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"incomes"> | Date | string
  }

  export type peoplesWhereInput = {
    AND?: peoplesWhereInput | peoplesWhereInput[]
    OR?: peoplesWhereInput[]
    NOT?: peoplesWhereInput | peoplesWhereInput[]
    PeopleID?: IntFilter<"peoples"> | number
    PeopleCode?: StringNullableFilter<"peoples"> | string | null
    Password?: StringFilter<"peoples"> | string
    PeopleName?: StringFilter<"peoples"> | string
    Email?: StringFilter<"peoples"> | string
    MobileNo?: StringFilter<"peoples"> | string
    Description?: StringNullableFilter<"peoples"> | string | null
    UserID?: IntFilter<"peoples"> | number
    Created?: DateTimeFilter<"peoples"> | Date | string
    Modified?: DateTimeFilter<"peoples"> | Date | string
    IsActive?: BoolNullableFilter<"peoples"> | boolean | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type peoplesOrderByWithRelationInput = {
    PeopleID?: SortOrder
    PeopleCode?: SortOrderInput | SortOrder
    Password?: SortOrder
    PeopleName?: SortOrder
    Email?: SortOrder
    MobileNo?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    incomes?: incomesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: peoplesOrderByRelevanceInput
  }

  export type peoplesWhereUniqueInput = Prisma.AtLeast<{
    PeopleID?: number
    AND?: peoplesWhereInput | peoplesWhereInput[]
    OR?: peoplesWhereInput[]
    NOT?: peoplesWhereInput | peoplesWhereInput[]
    PeopleCode?: StringNullableFilter<"peoples"> | string | null
    Password?: StringFilter<"peoples"> | string
    PeopleName?: StringFilter<"peoples"> | string
    Email?: StringFilter<"peoples"> | string
    MobileNo?: StringFilter<"peoples"> | string
    Description?: StringNullableFilter<"peoples"> | string | null
    UserID?: IntFilter<"peoples"> | number
    Created?: DateTimeFilter<"peoples"> | Date | string
    Modified?: DateTimeFilter<"peoples"> | Date | string
    IsActive?: BoolNullableFilter<"peoples"> | boolean | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "PeopleID">

  export type peoplesOrderByWithAggregationInput = {
    PeopleID?: SortOrder
    PeopleCode?: SortOrderInput | SortOrder
    Password?: SortOrder
    PeopleName?: SortOrder
    Email?: SortOrder
    MobileNo?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    _count?: peoplesCountOrderByAggregateInput
    _avg?: peoplesAvgOrderByAggregateInput
    _max?: peoplesMaxOrderByAggregateInput
    _min?: peoplesMinOrderByAggregateInput
    _sum?: peoplesSumOrderByAggregateInput
  }

  export type peoplesScalarWhereWithAggregatesInput = {
    AND?: peoplesScalarWhereWithAggregatesInput | peoplesScalarWhereWithAggregatesInput[]
    OR?: peoplesScalarWhereWithAggregatesInput[]
    NOT?: peoplesScalarWhereWithAggregatesInput | peoplesScalarWhereWithAggregatesInput[]
    PeopleID?: IntWithAggregatesFilter<"peoples"> | number
    PeopleCode?: StringNullableWithAggregatesFilter<"peoples"> | string | null
    Password?: StringWithAggregatesFilter<"peoples"> | string
    PeopleName?: StringWithAggregatesFilter<"peoples"> | string
    Email?: StringWithAggregatesFilter<"peoples"> | string
    MobileNo?: StringWithAggregatesFilter<"peoples"> | string
    Description?: StringNullableWithAggregatesFilter<"peoples"> | string | null
    UserID?: IntWithAggregatesFilter<"peoples"> | number
    Created?: DateTimeWithAggregatesFilter<"peoples"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"peoples"> | Date | string
    IsActive?: BoolNullableWithAggregatesFilter<"peoples"> | boolean | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    ProjectID?: IntFilter<"projects"> | number
    ProjectName?: StringFilter<"projects"> | string
    ProjectLogo?: StringNullableFilter<"projects"> | string | null
    ProjectStartDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectEndDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectDetail?: StringNullableFilter<"projects"> | string | null
    Description?: StringNullableFilter<"projects"> | string | null
    UserID?: IntFilter<"projects"> | number
    Created?: DateTimeFilter<"projects"> | Date | string
    Modified?: DateTimeFilter<"projects"> | Date | string
    IsActive?: BoolNullableFilter<"projects"> | boolean | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type projectsOrderByWithRelationInput = {
    ProjectID?: SortOrder
    ProjectName?: SortOrder
    ProjectLogo?: SortOrderInput | SortOrder
    ProjectStartDate?: SortOrderInput | SortOrder
    ProjectEndDate?: SortOrderInput | SortOrder
    ProjectDetail?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    incomes?: incomesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: projectsOrderByRelevanceInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    ProjectID?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    ProjectName?: StringFilter<"projects"> | string
    ProjectLogo?: StringNullableFilter<"projects"> | string | null
    ProjectStartDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectEndDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectDetail?: StringNullableFilter<"projects"> | string | null
    Description?: StringNullableFilter<"projects"> | string | null
    UserID?: IntFilter<"projects"> | number
    Created?: DateTimeFilter<"projects"> | Date | string
    Modified?: DateTimeFilter<"projects"> | Date | string
    IsActive?: BoolNullableFilter<"projects"> | boolean | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "ProjectID">

  export type projectsOrderByWithAggregationInput = {
    ProjectID?: SortOrder
    ProjectName?: SortOrder
    ProjectLogo?: SortOrderInput | SortOrder
    ProjectStartDate?: SortOrderInput | SortOrder
    ProjectEndDate?: SortOrderInput | SortOrder
    ProjectDetail?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    ProjectID?: IntWithAggregatesFilter<"projects"> | number
    ProjectName?: StringWithAggregatesFilter<"projects"> | string
    ProjectLogo?: StringNullableWithAggregatesFilter<"projects"> | string | null
    ProjectStartDate?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    ProjectEndDate?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    ProjectDetail?: StringNullableWithAggregatesFilter<"projects"> | string | null
    Description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    UserID?: IntWithAggregatesFilter<"projects"> | number
    Created?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    IsActive?: BoolNullableWithAggregatesFilter<"projects"> | boolean | null
  }

  export type sub_categoriesWhereInput = {
    AND?: sub_categoriesWhereInput | sub_categoriesWhereInput[]
    OR?: sub_categoriesWhereInput[]
    NOT?: sub_categoriesWhereInput | sub_categoriesWhereInput[]
    SubCategoryID?: IntFilter<"sub_categories"> | number
    CategoryID?: IntFilter<"sub_categories"> | number
    SubCategoryName?: StringFilter<"sub_categories"> | string
    LogoPath?: StringNullableFilter<"sub_categories"> | string | null
    IsExpense?: BoolFilter<"sub_categories"> | boolean
    IsIncome?: BoolFilter<"sub_categories"> | boolean
    IsActive?: BoolFilter<"sub_categories"> | boolean
    Description?: StringNullableFilter<"sub_categories"> | string | null
    UserID?: IntFilter<"sub_categories"> | number
    Created?: DateTimeFilter<"sub_categories"> | Date | string
    Modified?: DateTimeFilter<"sub_categories"> | Date | string
    Sequence?: DecimalNullableFilter<"sub_categories"> | Decimal | DecimalJsLike | number | string | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sub_categoriesOrderByWithRelationInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryName?: SortOrder
    LogoPath?: SortOrderInput | SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrderInput | SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    incomes?: incomesOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: sub_categoriesOrderByRelevanceInput
  }

  export type sub_categoriesWhereUniqueInput = Prisma.AtLeast<{
    SubCategoryID?: number
    AND?: sub_categoriesWhereInput | sub_categoriesWhereInput[]
    OR?: sub_categoriesWhereInput[]
    NOT?: sub_categoriesWhereInput | sub_categoriesWhereInput[]
    CategoryID?: IntFilter<"sub_categories"> | number
    SubCategoryName?: StringFilter<"sub_categories"> | string
    LogoPath?: StringNullableFilter<"sub_categories"> | string | null
    IsExpense?: BoolFilter<"sub_categories"> | boolean
    IsIncome?: BoolFilter<"sub_categories"> | boolean
    IsActive?: BoolFilter<"sub_categories"> | boolean
    Description?: StringNullableFilter<"sub_categories"> | string | null
    UserID?: IntFilter<"sub_categories"> | number
    Created?: DateTimeFilter<"sub_categories"> | Date | string
    Modified?: DateTimeFilter<"sub_categories"> | Date | string
    Sequence?: DecimalNullableFilter<"sub_categories"> | Decimal | DecimalJsLike | number | string | null
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "SubCategoryID">

  export type sub_categoriesOrderByWithAggregationInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryName?: SortOrder
    LogoPath?: SortOrderInput | SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrderInput | SortOrder
    _count?: sub_categoriesCountOrderByAggregateInput
    _avg?: sub_categoriesAvgOrderByAggregateInput
    _max?: sub_categoriesMaxOrderByAggregateInput
    _min?: sub_categoriesMinOrderByAggregateInput
    _sum?: sub_categoriesSumOrderByAggregateInput
  }

  export type sub_categoriesScalarWhereWithAggregatesInput = {
    AND?: sub_categoriesScalarWhereWithAggregatesInput | sub_categoriesScalarWhereWithAggregatesInput[]
    OR?: sub_categoriesScalarWhereWithAggregatesInput[]
    NOT?: sub_categoriesScalarWhereWithAggregatesInput | sub_categoriesScalarWhereWithAggregatesInput[]
    SubCategoryID?: IntWithAggregatesFilter<"sub_categories"> | number
    CategoryID?: IntWithAggregatesFilter<"sub_categories"> | number
    SubCategoryName?: StringWithAggregatesFilter<"sub_categories"> | string
    LogoPath?: StringNullableWithAggregatesFilter<"sub_categories"> | string | null
    IsExpense?: BoolWithAggregatesFilter<"sub_categories"> | boolean
    IsIncome?: BoolWithAggregatesFilter<"sub_categories"> | boolean
    IsActive?: BoolWithAggregatesFilter<"sub_categories"> | boolean
    Description?: StringNullableWithAggregatesFilter<"sub_categories"> | string | null
    UserID?: IntWithAggregatesFilter<"sub_categories"> | number
    Created?: DateTimeWithAggregatesFilter<"sub_categories"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"sub_categories"> | Date | string
    Sequence?: DecimalNullableWithAggregatesFilter<"sub_categories"> | Decimal | DecimalJsLike | number | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UserID?: IntFilter<"users"> | number
    UserName?: StringFilter<"users"> | string
    EmailAddress?: StringFilter<"users"> | string
    Password?: StringFilter<"users"> | string
    MobileNo?: StringFilter<"users"> | string
    ProfileImage?: StringNullableFilter<"users"> | string | null
    Created?: DateTimeFilter<"users"> | Date | string
    Modified?: DateTimeFilter<"users"> | Date | string
    Role?: StringFilter<"users"> | string
    categories?: CategoriesListRelationFilter
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    peoples?: PeoplesListRelationFilter
    projects?: ProjectsListRelationFilter
    sub_categories?: Sub_categoriesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    EmailAddress?: SortOrder
    Password?: SortOrder
    MobileNo?: SortOrder
    ProfileImage?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Role?: SortOrder
    categories?: categoriesOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    incomes?: incomesOrderByRelationAggregateInput
    peoples?: peoplesOrderByRelationAggregateInput
    projects?: projectsOrderByRelationAggregateInput
    sub_categories?: sub_categoriesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UserName?: StringFilter<"users"> | string
    EmailAddress?: StringFilter<"users"> | string
    Password?: StringFilter<"users"> | string
    MobileNo?: StringFilter<"users"> | string
    ProfileImage?: StringNullableFilter<"users"> | string | null
    Created?: DateTimeFilter<"users"> | Date | string
    Modified?: DateTimeFilter<"users"> | Date | string
    Role?: StringFilter<"users"> | string
    categories?: CategoriesListRelationFilter
    expenses?: ExpensesListRelationFilter
    incomes?: IncomesListRelationFilter
    peoples?: PeoplesListRelationFilter
    projects?: ProjectsListRelationFilter
    sub_categories?: Sub_categoriesListRelationFilter
  }, "UserID">

  export type usersOrderByWithAggregationInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    EmailAddress?: SortOrder
    Password?: SortOrder
    MobileNo?: SortOrder
    ProfileImage?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"users"> | number
    UserName?: StringWithAggregatesFilter<"users"> | string
    EmailAddress?: StringWithAggregatesFilter<"users"> | string
    Password?: StringWithAggregatesFilter<"users"> | string
    MobileNo?: StringWithAggregatesFilter<"users"> | string
    ProfileImage?: StringNullableWithAggregatesFilter<"users"> | string | null
    Created?: DateTimeWithAggregatesFilter<"users"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"users"> | Date | string
    Role?: StringWithAggregatesFilter<"users"> | string
  }

  export type categoriesCreateInput = {
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
    expenses?: expensesCreateNestedManyWithoutCategoriesInput
    incomes?: incomesCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutCategoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: expensesUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type expensesCreateInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutExpensesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutExpensesInput
    peoples: peoplesCreateNestedOneWithoutExpensesInput
    projects?: projectsCreateNestedOneWithoutExpensesInput
    users: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesUpdateInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutExpensesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutExpensesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutExpensesNestedInput
    projects?: projectsUpdateOneWithoutExpensesNestedInput
    users?: usersUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateManyInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesUpdateManyMutationInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesCreateInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutIncomesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutIncomesInput
    peoples: peoplesCreateNestedOneWithoutIncomesInput
    projects?: projectsCreateNestedOneWithoutIncomesInput
    users: usersCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesUpdateInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutIncomesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutIncomesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutIncomesNestedInput
    projects?: projectsUpdateOneWithoutIncomesNestedInput
    users?: usersUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesCreateManyInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesUpdateManyMutationInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peoplesCreateInput = {
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutPeoplesInput
    incomes?: incomesCreateNestedManyWithoutPeoplesInput
    users: usersCreateNestedOneWithoutPeoplesInput
  }

  export type peoplesUncheckedCreateInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutPeoplesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutPeoplesInput
  }

  export type peoplesUpdateInput = {
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutPeoplesNestedInput
    incomes?: incomesUpdateManyWithoutPeoplesNestedInput
    users?: usersUpdateOneRequiredWithoutPeoplesNestedInput
  }

  export type peoplesUncheckedUpdateInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutPeoplesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutPeoplesNestedInput
  }

  export type peoplesCreateManyInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
  }

  export type peoplesUpdateManyMutationInput = {
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type peoplesUncheckedUpdateManyInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type projectsCreateInput = {
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutProjectsInput
    incomes?: incomesCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutProjectsInput
    incomes?: incomesUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutProjectsNestedInput
    incomes?: incomesUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutProjectsNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
  }

  export type projectsUpdateManyMutationInput = {
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type projectsUncheckedUpdateManyInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sub_categoriesCreateInput = {
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesCreateNestedManyWithoutSub_categoriesInput
    categories: categoriesCreateNestedOneWithoutSub_categoriesInput
    users: usersCreateNestedOneWithoutSub_categoriesInput
  }

  export type sub_categoriesUncheckedCreateInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutSub_categoriesInput
  }

  export type sub_categoriesUpdateInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUpdateManyWithoutSub_categoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
    users?: usersUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesCreateManyInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
  }

  export type sub_categoriesUpdateManyMutationInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type sub_categoriesUncheckedUpdateManyInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type usersCreateInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    expenses?: expensesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
  }

  export type usersUpdateManyMutationInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type IncomesListRelationFilter = {
    every?: incomesWhereInput
    some?: incomesWhereInput
    none?: incomesWhereInput
  }

  export type Sub_categoriesListRelationFilter = {
    every?: sub_categoriesWhereInput
    some?: sub_categoriesWhereInput
    none?: sub_categoriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type incomesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sub_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    CategoryID?: SortOrder
    UserID?: SortOrder
    Sequence?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    CategoryID?: SortOrder
    CategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    CategoryID?: SortOrder
    UserID?: SortOrder
    Sequence?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type Sub_categoriesNullableScalarRelationFilter = {
    is?: sub_categoriesWhereInput | null
    isNot?: sub_categoriesWhereInput | null
  }

  export type PeoplesScalarRelationFilter = {
    is?: peoplesWhereInput
    isNot?: peoplesWhereInput
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: projectsWhereInput | null
    isNot?: projectsWhereInput | null
  }

  export type expensesOrderByRelevanceInput = {
    fields: expensesOrderByRelevanceFieldEnum | expensesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type expensesCountOrderByAggregateInput = {
    ExpenseID?: SortOrder
    ExpenseDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    ExpenseDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    ExpenseID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    UserID?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    ExpenseID?: SortOrder
    ExpenseDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    ExpenseDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    ExpenseID?: SortOrder
    ExpenseDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    ExpenseDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    ExpenseID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    UserID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type incomesOrderByRelevanceInput = {
    fields: incomesOrderByRelevanceFieldEnum | incomesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type incomesCountOrderByAggregateInput = {
    IncomeID?: SortOrder
    IncomeDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    IncomeDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type incomesAvgOrderByAggregateInput = {
    IncomeID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    UserID?: SortOrder
  }

  export type incomesMaxOrderByAggregateInput = {
    IncomeID?: SortOrder
    IncomeDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    IncomeDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type incomesMinOrderByAggregateInput = {
    IncomeID?: SortOrder
    IncomeDate?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    IncomeDetail?: SortOrder
    AttachmentPath?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type incomesSumOrderByAggregateInput = {
    IncomeID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryID?: SortOrder
    PeopleID?: SortOrder
    ProjectID?: SortOrder
    Amount?: SortOrder
    UserID?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type peoplesOrderByRelevanceInput = {
    fields: peoplesOrderByRelevanceFieldEnum | peoplesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type peoplesCountOrderByAggregateInput = {
    PeopleID?: SortOrder
    PeopleCode?: SortOrder
    Password?: SortOrder
    PeopleName?: SortOrder
    Email?: SortOrder
    MobileNo?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type peoplesAvgOrderByAggregateInput = {
    PeopleID?: SortOrder
    UserID?: SortOrder
  }

  export type peoplesMaxOrderByAggregateInput = {
    PeopleID?: SortOrder
    PeopleCode?: SortOrder
    Password?: SortOrder
    PeopleName?: SortOrder
    Email?: SortOrder
    MobileNo?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type peoplesMinOrderByAggregateInput = {
    PeopleID?: SortOrder
    PeopleCode?: SortOrder
    Password?: SortOrder
    PeopleName?: SortOrder
    Email?: SortOrder
    MobileNo?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type peoplesSumOrderByAggregateInput = {
    PeopleID?: SortOrder
    UserID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type projectsOrderByRelevanceInput = {
    fields: projectsOrderByRelevanceFieldEnum | projectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectsCountOrderByAggregateInput = {
    ProjectID?: SortOrder
    ProjectName?: SortOrder
    ProjectLogo?: SortOrder
    ProjectStartDate?: SortOrder
    ProjectEndDate?: SortOrder
    ProjectDetail?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    ProjectID?: SortOrder
    UserID?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    ProjectID?: SortOrder
    ProjectName?: SortOrder
    ProjectLogo?: SortOrder
    ProjectStartDate?: SortOrder
    ProjectEndDate?: SortOrder
    ProjectDetail?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    ProjectID?: SortOrder
    ProjectName?: SortOrder
    ProjectLogo?: SortOrder
    ProjectStartDate?: SortOrder
    ProjectEndDate?: SortOrder
    ProjectDetail?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsActive?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    ProjectID?: SortOrder
    UserID?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type sub_categoriesOrderByRelevanceInput = {
    fields: sub_categoriesOrderByRelevanceFieldEnum | sub_categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sub_categoriesCountOrderByAggregateInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type sub_categoriesAvgOrderByAggregateInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    UserID?: SortOrder
    Sequence?: SortOrder
  }

  export type sub_categoriesMaxOrderByAggregateInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type sub_categoriesMinOrderByAggregateInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    SubCategoryName?: SortOrder
    LogoPath?: SortOrder
    IsExpense?: SortOrder
    IsIncome?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    UserID?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Sequence?: SortOrder
  }

  export type sub_categoriesSumOrderByAggregateInput = {
    SubCategoryID?: SortOrder
    CategoryID?: SortOrder
    UserID?: SortOrder
    Sequence?: SortOrder
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type PeoplesListRelationFilter = {
    every?: peoplesWhereInput
    some?: peoplesWhereInput
    none?: peoplesWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type peoplesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    EmailAddress?: SortOrder
    Password?: SortOrder
    MobileNo?: SortOrder
    ProfileImage?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    EmailAddress?: SortOrder
    Password?: SortOrder
    MobileNo?: SortOrder
    ProfileImage?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    EmailAddress?: SortOrder
    Password?: SortOrder
    MobileNo?: SortOrder
    ProfileImage?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    Role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type usersCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput
    connect?: usersWhereUniqueInput
  }

  export type expensesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput> | expensesCreateWithoutCategoriesInput[] | expensesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCategoriesInput | expensesCreateOrConnectWithoutCategoriesInput[]
    createMany?: expensesCreateManyCategoriesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput> | incomesCreateWithoutCategoriesInput[] | incomesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutCategoriesInput | incomesCreateOrConnectWithoutCategoriesInput[]
    createMany?: incomesCreateManyCategoriesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type sub_categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput> | sub_categoriesCreateWithoutCategoriesInput[] | sub_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutCategoriesInput | sub_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: sub_categoriesCreateManyCategoriesInputEnvelope
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput> | expensesCreateWithoutCategoriesInput[] | expensesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCategoriesInput | expensesCreateOrConnectWithoutCategoriesInput[]
    createMany?: expensesCreateManyCategoriesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput> | incomesCreateWithoutCategoriesInput[] | incomesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutCategoriesInput | incomesCreateOrConnectWithoutCategoriesInput[]
    createMany?: incomesCreateManyCategoriesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type sub_categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput> | sub_categoriesCreateWithoutCategoriesInput[] | sub_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutCategoriesInput | sub_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: sub_categoriesCreateManyCategoriesInputEnvelope
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput
    upsert?: usersUpsertWithoutCategoriesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategoriesInput, usersUpdateWithoutCategoriesInput>, usersUncheckedUpdateWithoutCategoriesInput>
  }

  export type expensesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput> | expensesCreateWithoutCategoriesInput[] | expensesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCategoriesInput | expensesCreateOrConnectWithoutCategoriesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutCategoriesInput | expensesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: expensesCreateManyCategoriesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutCategoriesInput | expensesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutCategoriesInput | expensesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput> | incomesCreateWithoutCategoriesInput[] | incomesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutCategoriesInput | incomesCreateOrConnectWithoutCategoriesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutCategoriesInput | incomesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: incomesCreateManyCategoriesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutCategoriesInput | incomesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutCategoriesInput | incomesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type sub_categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput> | sub_categoriesCreateWithoutCategoriesInput[] | sub_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutCategoriesInput | sub_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: sub_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | sub_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: sub_categoriesCreateManyCategoriesInputEnvelope
    set?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    disconnect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    delete?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    update?: sub_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | sub_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: sub_categoriesUpdateManyWithWhereWithoutCategoriesInput | sub_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type expensesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput> | expensesCreateWithoutCategoriesInput[] | expensesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCategoriesInput | expensesCreateOrConnectWithoutCategoriesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutCategoriesInput | expensesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: expensesCreateManyCategoriesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutCategoriesInput | expensesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutCategoriesInput | expensesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput> | incomesCreateWithoutCategoriesInput[] | incomesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutCategoriesInput | incomesCreateOrConnectWithoutCategoriesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutCategoriesInput | incomesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: incomesCreateManyCategoriesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutCategoriesInput | incomesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutCategoriesInput | incomesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type sub_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput> | sub_categoriesCreateWithoutCategoriesInput[] | sub_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutCategoriesInput | sub_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: sub_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | sub_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: sub_categoriesCreateManyCategoriesInputEnvelope
    set?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    disconnect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    delete?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    update?: sub_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | sub_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: sub_categoriesUpdateManyWithWhereWithoutCategoriesInput | sub_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<categoriesCreateWithoutExpensesInput, categoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutExpensesInput
    connect?: categoriesWhereUniqueInput
  }

  export type sub_categoriesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<sub_categoriesCreateWithoutExpensesInput, sub_categoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutExpensesInput
    connect?: sub_categoriesWhereUniqueInput
  }

  export type peoplesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<peoplesCreateWithoutExpensesInput, peoplesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: peoplesCreateOrConnectWithoutExpensesInput
    connect?: peoplesWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutExpensesInput = {
    create?: XOR<projectsCreateWithoutExpensesInput, projectsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutExpensesInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type categoriesUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<categoriesCreateWithoutExpensesInput, categoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutExpensesInput
    upsert?: categoriesUpsertWithoutExpensesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutExpensesInput, categoriesUpdateWithoutExpensesInput>, categoriesUncheckedUpdateWithoutExpensesInput>
  }

  export type sub_categoriesUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutExpensesInput, sub_categoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutExpensesInput
    upsert?: sub_categoriesUpsertWithoutExpensesInput
    disconnect?: sub_categoriesWhereInput | boolean
    delete?: sub_categoriesWhereInput | boolean
    connect?: sub_categoriesWhereUniqueInput
    update?: XOR<XOR<sub_categoriesUpdateToOneWithWhereWithoutExpensesInput, sub_categoriesUpdateWithoutExpensesInput>, sub_categoriesUncheckedUpdateWithoutExpensesInput>
  }

  export type peoplesUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<peoplesCreateWithoutExpensesInput, peoplesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: peoplesCreateOrConnectWithoutExpensesInput
    upsert?: peoplesUpsertWithoutExpensesInput
    connect?: peoplesWhereUniqueInput
    update?: XOR<XOR<peoplesUpdateToOneWithWhereWithoutExpensesInput, peoplesUpdateWithoutExpensesInput>, peoplesUncheckedUpdateWithoutExpensesInput>
  }

  export type projectsUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<projectsCreateWithoutExpensesInput, projectsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutExpensesInput
    upsert?: projectsUpsertWithoutExpensesInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutExpensesInput, projectsUpdateWithoutExpensesInput>, projectsUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    upsert?: usersUpsertWithoutExpensesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExpensesInput, usersUpdateWithoutExpensesInput>, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriesCreateNestedOneWithoutIncomesInput = {
    create?: XOR<categoriesCreateWithoutIncomesInput, categoriesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutIncomesInput
    connect?: categoriesWhereUniqueInput
  }

  export type sub_categoriesCreateNestedOneWithoutIncomesInput = {
    create?: XOR<sub_categoriesCreateWithoutIncomesInput, sub_categoriesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutIncomesInput
    connect?: sub_categoriesWhereUniqueInput
  }

  export type peoplesCreateNestedOneWithoutIncomesInput = {
    create?: XOR<peoplesCreateWithoutIncomesInput, peoplesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: peoplesCreateOrConnectWithoutIncomesInput
    connect?: peoplesWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutIncomesInput = {
    create?: XOR<projectsCreateWithoutIncomesInput, projectsUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutIncomesInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutIncomesInput = {
    create?: XOR<usersCreateWithoutIncomesInput, usersUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: usersCreateOrConnectWithoutIncomesInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesUpdateOneWithoutIncomesNestedInput = {
    create?: XOR<categoriesCreateWithoutIncomesInput, categoriesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutIncomesInput
    upsert?: categoriesUpsertWithoutIncomesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutIncomesInput, categoriesUpdateWithoutIncomesInput>, categoriesUncheckedUpdateWithoutIncomesInput>
  }

  export type sub_categoriesUpdateOneWithoutIncomesNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutIncomesInput, sub_categoriesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutIncomesInput
    upsert?: sub_categoriesUpsertWithoutIncomesInput
    disconnect?: sub_categoriesWhereInput | boolean
    delete?: sub_categoriesWhereInput | boolean
    connect?: sub_categoriesWhereUniqueInput
    update?: XOR<XOR<sub_categoriesUpdateToOneWithWhereWithoutIncomesInput, sub_categoriesUpdateWithoutIncomesInput>, sub_categoriesUncheckedUpdateWithoutIncomesInput>
  }

  export type peoplesUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<peoplesCreateWithoutIncomesInput, peoplesUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: peoplesCreateOrConnectWithoutIncomesInput
    upsert?: peoplesUpsertWithoutIncomesInput
    connect?: peoplesWhereUniqueInput
    update?: XOR<XOR<peoplesUpdateToOneWithWhereWithoutIncomesInput, peoplesUpdateWithoutIncomesInput>, peoplesUncheckedUpdateWithoutIncomesInput>
  }

  export type projectsUpdateOneWithoutIncomesNestedInput = {
    create?: XOR<projectsCreateWithoutIncomesInput, projectsUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutIncomesInput
    upsert?: projectsUpsertWithoutIncomesInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutIncomesInput, projectsUpdateWithoutIncomesInput>, projectsUncheckedUpdateWithoutIncomesInput>
  }

  export type usersUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<usersCreateWithoutIncomesInput, usersUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: usersCreateOrConnectWithoutIncomesInput
    upsert?: usersUpsertWithoutIncomesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutIncomesInput, usersUpdateWithoutIncomesInput>, usersUncheckedUpdateWithoutIncomesInput>
  }

  export type expensesCreateNestedManyWithoutPeoplesInput = {
    create?: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput> | expensesCreateWithoutPeoplesInput[] | expensesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPeoplesInput | expensesCreateOrConnectWithoutPeoplesInput[]
    createMany?: expensesCreateManyPeoplesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesCreateNestedManyWithoutPeoplesInput = {
    create?: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput> | incomesCreateWithoutPeoplesInput[] | incomesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutPeoplesInput | incomesCreateOrConnectWithoutPeoplesInput[]
    createMany?: incomesCreateManyPeoplesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPeoplesInput = {
    create?: XOR<usersCreateWithoutPeoplesInput, usersUncheckedCreateWithoutPeoplesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPeoplesInput
    connect?: usersWhereUniqueInput
  }

  export type expensesUncheckedCreateNestedManyWithoutPeoplesInput = {
    create?: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput> | expensesCreateWithoutPeoplesInput[] | expensesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPeoplesInput | expensesCreateOrConnectWithoutPeoplesInput[]
    createMany?: expensesCreateManyPeoplesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesUncheckedCreateNestedManyWithoutPeoplesInput = {
    create?: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput> | incomesCreateWithoutPeoplesInput[] | incomesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutPeoplesInput | incomesCreateOrConnectWithoutPeoplesInput[]
    createMany?: incomesCreateManyPeoplesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type expensesUpdateManyWithoutPeoplesNestedInput = {
    create?: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput> | expensesCreateWithoutPeoplesInput[] | expensesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPeoplesInput | expensesCreateOrConnectWithoutPeoplesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutPeoplesInput | expensesUpsertWithWhereUniqueWithoutPeoplesInput[]
    createMany?: expensesCreateManyPeoplesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutPeoplesInput | expensesUpdateWithWhereUniqueWithoutPeoplesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutPeoplesInput | expensesUpdateManyWithWhereWithoutPeoplesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUpdateManyWithoutPeoplesNestedInput = {
    create?: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput> | incomesCreateWithoutPeoplesInput[] | incomesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutPeoplesInput | incomesCreateOrConnectWithoutPeoplesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutPeoplesInput | incomesUpsertWithWhereUniqueWithoutPeoplesInput[]
    createMany?: incomesCreateManyPeoplesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutPeoplesInput | incomesUpdateWithWhereUniqueWithoutPeoplesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutPeoplesInput | incomesUpdateManyWithWhereWithoutPeoplesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutPeoplesNestedInput = {
    create?: XOR<usersCreateWithoutPeoplesInput, usersUncheckedCreateWithoutPeoplesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPeoplesInput
    upsert?: usersUpsertWithoutPeoplesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPeoplesInput, usersUpdateWithoutPeoplesInput>, usersUncheckedUpdateWithoutPeoplesInput>
  }

  export type expensesUncheckedUpdateManyWithoutPeoplesNestedInput = {
    create?: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput> | expensesCreateWithoutPeoplesInput[] | expensesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPeoplesInput | expensesCreateOrConnectWithoutPeoplesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutPeoplesInput | expensesUpsertWithWhereUniqueWithoutPeoplesInput[]
    createMany?: expensesCreateManyPeoplesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutPeoplesInput | expensesUpdateWithWhereUniqueWithoutPeoplesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutPeoplesInput | expensesUpdateManyWithWhereWithoutPeoplesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUncheckedUpdateManyWithoutPeoplesNestedInput = {
    create?: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput> | incomesCreateWithoutPeoplesInput[] | incomesUncheckedCreateWithoutPeoplesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutPeoplesInput | incomesCreateOrConnectWithoutPeoplesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutPeoplesInput | incomesUpsertWithWhereUniqueWithoutPeoplesInput[]
    createMany?: incomesCreateManyPeoplesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutPeoplesInput | incomesUpdateWithWhereUniqueWithoutPeoplesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutPeoplesInput | incomesUpdateManyWithWhereWithoutPeoplesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type expensesCreateNestedManyWithoutProjectsInput = {
    create?: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput> | expensesCreateWithoutProjectsInput[] | expensesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutProjectsInput | expensesCreateOrConnectWithoutProjectsInput[]
    createMany?: expensesCreateManyProjectsInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesCreateNestedManyWithoutProjectsInput = {
    create?: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput> | incomesCreateWithoutProjectsInput[] | incomesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutProjectsInput | incomesCreateOrConnectWithoutProjectsInput[]
    createMany?: incomesCreateManyProjectsInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    connect?: usersWhereUniqueInput
  }

  export type expensesUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput> | expensesCreateWithoutProjectsInput[] | expensesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutProjectsInput | expensesCreateOrConnectWithoutProjectsInput[]
    createMany?: expensesCreateManyProjectsInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput> | incomesCreateWithoutProjectsInput[] | incomesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutProjectsInput | incomesCreateOrConnectWithoutProjectsInput[]
    createMany?: incomesCreateManyProjectsInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type expensesUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput> | expensesCreateWithoutProjectsInput[] | expensesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutProjectsInput | expensesCreateOrConnectWithoutProjectsInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutProjectsInput | expensesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: expensesCreateManyProjectsInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutProjectsInput | expensesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutProjectsInput | expensesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput> | incomesCreateWithoutProjectsInput[] | incomesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutProjectsInput | incomesCreateOrConnectWithoutProjectsInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutProjectsInput | incomesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: incomesCreateManyProjectsInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutProjectsInput | incomesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutProjectsInput | incomesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    upsert?: usersUpsertWithoutProjectsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsInput, usersUpdateWithoutProjectsInput>, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type expensesUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput> | expensesCreateWithoutProjectsInput[] | expensesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutProjectsInput | expensesCreateOrConnectWithoutProjectsInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutProjectsInput | expensesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: expensesCreateManyProjectsInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutProjectsInput | expensesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutProjectsInput | expensesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput> | incomesCreateWithoutProjectsInput[] | incomesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutProjectsInput | incomesCreateOrConnectWithoutProjectsInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutProjectsInput | incomesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: incomesCreateManyProjectsInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutProjectsInput | incomesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutProjectsInput | incomesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type expensesCreateNestedManyWithoutSub_categoriesInput = {
    create?: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput> | expensesCreateWithoutSub_categoriesInput[] | expensesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutSub_categoriesInput | expensesCreateOrConnectWithoutSub_categoriesInput[]
    createMany?: expensesCreateManySub_categoriesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesCreateNestedManyWithoutSub_categoriesInput = {
    create?: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput> | incomesCreateWithoutSub_categoriesInput[] | incomesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutSub_categoriesInput | incomesCreateOrConnectWithoutSub_categoriesInput[]
    createMany?: incomesCreateManySub_categoriesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutSub_categoriesInput = {
    create?: XOR<categoriesCreateWithoutSub_categoriesInput, categoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSub_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSub_categoriesInput = {
    create?: XOR<usersCreateWithoutSub_categoriesInput, usersUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSub_categoriesInput
    connect?: usersWhereUniqueInput
  }

  export type expensesUncheckedCreateNestedManyWithoutSub_categoriesInput = {
    create?: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput> | expensesCreateWithoutSub_categoriesInput[] | expensesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutSub_categoriesInput | expensesCreateOrConnectWithoutSub_categoriesInput[]
    createMany?: expensesCreateManySub_categoriesInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesUncheckedCreateNestedManyWithoutSub_categoriesInput = {
    create?: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput> | incomesCreateWithoutSub_categoriesInput[] | incomesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutSub_categoriesInput | incomesCreateOrConnectWithoutSub_categoriesInput[]
    createMany?: incomesCreateManySub_categoriesInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type expensesUpdateManyWithoutSub_categoriesNestedInput = {
    create?: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput> | expensesCreateWithoutSub_categoriesInput[] | expensesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutSub_categoriesInput | expensesCreateOrConnectWithoutSub_categoriesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutSub_categoriesInput | expensesUpsertWithWhereUniqueWithoutSub_categoriesInput[]
    createMany?: expensesCreateManySub_categoriesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutSub_categoriesInput | expensesUpdateWithWhereUniqueWithoutSub_categoriesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutSub_categoriesInput | expensesUpdateManyWithWhereWithoutSub_categoriesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUpdateManyWithoutSub_categoriesNestedInput = {
    create?: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput> | incomesCreateWithoutSub_categoriesInput[] | incomesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutSub_categoriesInput | incomesCreateOrConnectWithoutSub_categoriesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutSub_categoriesInput | incomesUpsertWithWhereUniqueWithoutSub_categoriesInput[]
    createMany?: incomesCreateManySub_categoriesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutSub_categoriesInput | incomesUpdateWithWhereUniqueWithoutSub_categoriesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutSub_categoriesInput | incomesUpdateManyWithWhereWithoutSub_categoriesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutSub_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutSub_categoriesInput, categoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSub_categoriesInput
    upsert?: categoriesUpsertWithoutSub_categoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutSub_categoriesInput, categoriesUpdateWithoutSub_categoriesInput>, categoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type usersUpdateOneRequiredWithoutSub_categoriesNestedInput = {
    create?: XOR<usersCreateWithoutSub_categoriesInput, usersUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSub_categoriesInput
    upsert?: usersUpsertWithoutSub_categoriesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSub_categoriesInput, usersUpdateWithoutSub_categoriesInput>, usersUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type expensesUncheckedUpdateManyWithoutSub_categoriesNestedInput = {
    create?: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput> | expensesCreateWithoutSub_categoriesInput[] | expensesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutSub_categoriesInput | expensesCreateOrConnectWithoutSub_categoriesInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutSub_categoriesInput | expensesUpsertWithWhereUniqueWithoutSub_categoriesInput[]
    createMany?: expensesCreateManySub_categoriesInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutSub_categoriesInput | expensesUpdateWithWhereUniqueWithoutSub_categoriesInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutSub_categoriesInput | expensesUpdateManyWithWhereWithoutSub_categoriesInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUncheckedUpdateManyWithoutSub_categoriesNestedInput = {
    create?: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput> | incomesCreateWithoutSub_categoriesInput[] | incomesUncheckedCreateWithoutSub_categoriesInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutSub_categoriesInput | incomesCreateOrConnectWithoutSub_categoriesInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutSub_categoriesInput | incomesUpsertWithWhereUniqueWithoutSub_categoriesInput[]
    createMany?: incomesCreateManySub_categoriesInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutSub_categoriesInput | incomesUpdateWithWhereUniqueWithoutSub_categoriesInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutSub_categoriesInput | incomesUpdateManyWithWhereWithoutSub_categoriesInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type categoriesCreateNestedManyWithoutUsersInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesCreateNestedManyWithoutUsersInput = {
    create?: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput> | incomesCreateWithoutUsersInput[] | incomesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutUsersInput | incomesCreateOrConnectWithoutUsersInput[]
    createMany?: incomesCreateManyUsersInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type peoplesCreateNestedManyWithoutUsersInput = {
    create?: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput> | peoplesCreateWithoutUsersInput[] | peoplesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: peoplesCreateOrConnectWithoutUsersInput | peoplesCreateOrConnectWithoutUsersInput[]
    createMany?: peoplesCreateManyUsersInputEnvelope
    connect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type sub_categoriesCreateNestedManyWithoutUsersInput = {
    create?: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput> | sub_categoriesCreateWithoutUsersInput[] | sub_categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutUsersInput | sub_categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: sub_categoriesCreateManyUsersInputEnvelope
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type incomesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput> | incomesCreateWithoutUsersInput[] | incomesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutUsersInput | incomesCreateOrConnectWithoutUsersInput[]
    createMany?: incomesCreateManyUsersInputEnvelope
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
  }

  export type peoplesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput> | peoplesCreateWithoutUsersInput[] | peoplesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: peoplesCreateOrConnectWithoutUsersInput | peoplesCreateOrConnectWithoutUsersInput[]
    createMany?: peoplesCreateManyUsersInputEnvelope
    connect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type sub_categoriesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput> | sub_categoriesCreateWithoutUsersInput[] | sub_categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutUsersInput | sub_categoriesCreateOrConnectWithoutUsersInput[]
    createMany?: sub_categoriesCreateManyUsersInputEnvelope
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
  }

  export type categoriesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsersInput | categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsersInput | categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsersInput | categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput> | incomesCreateWithoutUsersInput[] | incomesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutUsersInput | incomesCreateOrConnectWithoutUsersInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutUsersInput | incomesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: incomesCreateManyUsersInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutUsersInput | incomesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutUsersInput | incomesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type peoplesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput> | peoplesCreateWithoutUsersInput[] | peoplesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: peoplesCreateOrConnectWithoutUsersInput | peoplesCreateOrConnectWithoutUsersInput[]
    upsert?: peoplesUpsertWithWhereUniqueWithoutUsersInput | peoplesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: peoplesCreateManyUsersInputEnvelope
    set?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    disconnect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    delete?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    connect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    update?: peoplesUpdateWithWhereUniqueWithoutUsersInput | peoplesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: peoplesUpdateManyWithWhereWithoutUsersInput | peoplesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: peoplesScalarWhereInput | peoplesScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type sub_categoriesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput> | sub_categoriesCreateWithoutUsersInput[] | sub_categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutUsersInput | sub_categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: sub_categoriesUpsertWithWhereUniqueWithoutUsersInput | sub_categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sub_categoriesCreateManyUsersInputEnvelope
    set?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    disconnect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    delete?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    update?: sub_categoriesUpdateWithWhereUniqueWithoutUsersInput | sub_categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sub_categoriesUpdateManyWithWhereWithoutUsersInput | sub_categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput> | categoriesCreateWithoutUsersInput[] | categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsersInput | categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsersInput | categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: categoriesCreateManyUsersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsersInput | categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsersInput | categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type incomesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput> | incomesCreateWithoutUsersInput[] | incomesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: incomesCreateOrConnectWithoutUsersInput | incomesCreateOrConnectWithoutUsersInput[]
    upsert?: incomesUpsertWithWhereUniqueWithoutUsersInput | incomesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: incomesCreateManyUsersInputEnvelope
    set?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    disconnect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    delete?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    connect?: incomesWhereUniqueInput | incomesWhereUniqueInput[]
    update?: incomesUpdateWithWhereUniqueWithoutUsersInput | incomesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: incomesUpdateManyWithWhereWithoutUsersInput | incomesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: incomesScalarWhereInput | incomesScalarWhereInput[]
  }

  export type peoplesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput> | peoplesCreateWithoutUsersInput[] | peoplesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: peoplesCreateOrConnectWithoutUsersInput | peoplesCreateOrConnectWithoutUsersInput[]
    upsert?: peoplesUpsertWithWhereUniqueWithoutUsersInput | peoplesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: peoplesCreateManyUsersInputEnvelope
    set?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    disconnect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    delete?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    connect?: peoplesWhereUniqueInput | peoplesWhereUniqueInput[]
    update?: peoplesUpdateWithWhereUniqueWithoutUsersInput | peoplesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: peoplesUpdateManyWithWhereWithoutUsersInput | peoplesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: peoplesScalarWhereInput | peoplesScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput> | sub_categoriesCreateWithoutUsersInput[] | sub_categoriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sub_categoriesCreateOrConnectWithoutUsersInput | sub_categoriesCreateOrConnectWithoutUsersInput[]
    upsert?: sub_categoriesUpsertWithWhereUniqueWithoutUsersInput | sub_categoriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sub_categoriesCreateManyUsersInputEnvelope
    set?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    disconnect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    delete?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    connect?: sub_categoriesWhereUniqueInput | sub_categoriesWhereUniqueInput[]
    update?: sub_categoriesUpdateWithWhereUniqueWithoutUsersInput | sub_categoriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sub_categoriesUpdateManyWithWhereWithoutUsersInput | sub_categoriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutCategoriesInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    expenses?: expensesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCategoriesInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCategoriesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
  }

  export type expensesCreateWithoutCategoriesInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    sub_categories?: sub_categoriesCreateNestedOneWithoutExpensesInput
    peoples: peoplesCreateNestedOneWithoutExpensesInput
    projects?: projectsCreateNestedOneWithoutExpensesInput
    users: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutCategoriesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesCreateOrConnectWithoutCategoriesInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput>
  }

  export type expensesCreateManyCategoriesInputEnvelope = {
    data: expensesCreateManyCategoriesInput | expensesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type incomesCreateWithoutCategoriesInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    sub_categories?: sub_categoriesCreateNestedOneWithoutIncomesInput
    peoples: peoplesCreateNestedOneWithoutIncomesInput
    projects?: projectsCreateNestedOneWithoutIncomesInput
    users: usersCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateWithoutCategoriesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateOrConnectWithoutCategoriesInput = {
    where: incomesWhereUniqueInput
    create: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput>
  }

  export type incomesCreateManyCategoriesInputEnvelope = {
    data: incomesCreateManyCategoriesInput | incomesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type sub_categoriesCreateWithoutCategoriesInput = {
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesCreateNestedManyWithoutSub_categoriesInput
    users: usersCreateNestedOneWithoutSub_categoriesInput
  }

  export type sub_categoriesUncheckedCreateWithoutCategoriesInput = {
    SubCategoryID?: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutSub_categoriesInput
  }

  export type sub_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: sub_categoriesWhereUniqueInput
    create: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type sub_categoriesCreateManyCategoriesInputEnvelope = {
    data: sub_categoriesCreateManyCategoriesInput | sub_categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCategoriesInput = {
    update: XOR<usersUpdateWithoutCategoriesInput, usersUncheckedUpdateWithoutCategoriesInput>
    create: XOR<usersCreateWithoutCategoriesInput, usersUncheckedCreateWithoutCategoriesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategoriesInput, usersUncheckedUpdateWithoutCategoriesInput>
  }

  export type usersUpdateWithoutCategoriesInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCategoriesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type expensesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutCategoriesInput, expensesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<expensesCreateWithoutCategoriesInput, expensesUncheckedCreateWithoutCategoriesInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutCategoriesInput, expensesUncheckedUpdateWithoutCategoriesInput>
  }

  export type expensesUpdateManyWithWhereWithoutCategoriesInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    ExpenseID?: IntFilter<"expenses"> | number
    ExpenseDate?: DateTimeFilter<"expenses"> | Date | string
    CategoryID?: IntNullableFilter<"expenses"> | number | null
    SubCategoryID?: IntNullableFilter<"expenses"> | number | null
    PeopleID?: IntFilter<"expenses"> | number
    ProjectID?: IntNullableFilter<"expenses"> | number | null
    Amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: StringNullableFilter<"expenses"> | string | null
    AttachmentPath?: StringNullableFilter<"expenses"> | string | null
    Description?: StringNullableFilter<"expenses"> | string | null
    UserID?: IntFilter<"expenses"> | number
    Created?: DateTimeFilter<"expenses"> | Date | string
    Modified?: DateTimeFilter<"expenses"> | Date | string
  }

  export type incomesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: incomesWhereUniqueInput
    update: XOR<incomesUpdateWithoutCategoriesInput, incomesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<incomesCreateWithoutCategoriesInput, incomesUncheckedCreateWithoutCategoriesInput>
  }

  export type incomesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: incomesWhereUniqueInput
    data: XOR<incomesUpdateWithoutCategoriesInput, incomesUncheckedUpdateWithoutCategoriesInput>
  }

  export type incomesUpdateManyWithWhereWithoutCategoriesInput = {
    where: incomesScalarWhereInput
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type incomesScalarWhereInput = {
    AND?: incomesScalarWhereInput | incomesScalarWhereInput[]
    OR?: incomesScalarWhereInput[]
    NOT?: incomesScalarWhereInput | incomesScalarWhereInput[]
    IncomeID?: IntFilter<"incomes"> | number
    IncomeDate?: DateTimeFilter<"incomes"> | Date | string
    CategoryID?: IntNullableFilter<"incomes"> | number | null
    SubCategoryID?: IntNullableFilter<"incomes"> | number | null
    PeopleID?: IntFilter<"incomes"> | number
    ProjectID?: IntNullableFilter<"incomes"> | number | null
    Amount?: DecimalFilter<"incomes"> | Decimal | DecimalJsLike | number | string
    IncomeDetail?: StringNullableFilter<"incomes"> | string | null
    AttachmentPath?: StringNullableFilter<"incomes"> | string | null
    Description?: StringNullableFilter<"incomes"> | string | null
    UserID?: IntFilter<"incomes"> | number
    Created?: DateTimeFilter<"incomes"> | Date | string
    Modified?: DateTimeFilter<"incomes"> | Date | string
  }

  export type sub_categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: sub_categoriesWhereUniqueInput
    update: XOR<sub_categoriesUpdateWithoutCategoriesInput, sub_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<sub_categoriesCreateWithoutCategoriesInput, sub_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type sub_categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: sub_categoriesWhereUniqueInput
    data: XOR<sub_categoriesUpdateWithoutCategoriesInput, sub_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type sub_categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: sub_categoriesScalarWhereInput
    data: XOR<sub_categoriesUpdateManyMutationInput, sub_categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type sub_categoriesScalarWhereInput = {
    AND?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
    OR?: sub_categoriesScalarWhereInput[]
    NOT?: sub_categoriesScalarWhereInput | sub_categoriesScalarWhereInput[]
    SubCategoryID?: IntFilter<"sub_categories"> | number
    CategoryID?: IntFilter<"sub_categories"> | number
    SubCategoryName?: StringFilter<"sub_categories"> | string
    LogoPath?: StringNullableFilter<"sub_categories"> | string | null
    IsExpense?: BoolFilter<"sub_categories"> | boolean
    IsIncome?: BoolFilter<"sub_categories"> | boolean
    IsActive?: BoolFilter<"sub_categories"> | boolean
    Description?: StringNullableFilter<"sub_categories"> | string | null
    UserID?: IntFilter<"sub_categories"> | number
    Created?: DateTimeFilter<"sub_categories"> | Date | string
    Modified?: DateTimeFilter<"sub_categories"> | Date | string
    Sequence?: DecimalNullableFilter<"sub_categories"> | Decimal | DecimalJsLike | number | string | null
  }

  export type categoriesCreateWithoutExpensesInput = {
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
    incomes?: incomesCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutExpensesInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    incomes?: incomesUncheckedCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutExpensesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutExpensesInput, categoriesUncheckedCreateWithoutExpensesInput>
  }

  export type sub_categoriesCreateWithoutExpensesInput = {
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    incomes?: incomesCreateNestedManyWithoutSub_categoriesInput
    categories: categoriesCreateNestedOneWithoutSub_categoriesInput
    users: usersCreateNestedOneWithoutSub_categoriesInput
  }

  export type sub_categoriesUncheckedCreateWithoutExpensesInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    incomes?: incomesUncheckedCreateNestedManyWithoutSub_categoriesInput
  }

  export type sub_categoriesCreateOrConnectWithoutExpensesInput = {
    where: sub_categoriesWhereUniqueInput
    create: XOR<sub_categoriesCreateWithoutExpensesInput, sub_categoriesUncheckedCreateWithoutExpensesInput>
  }

  export type peoplesCreateWithoutExpensesInput = {
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    incomes?: incomesCreateNestedManyWithoutPeoplesInput
    users: usersCreateNestedOneWithoutPeoplesInput
  }

  export type peoplesUncheckedCreateWithoutExpensesInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    incomes?: incomesUncheckedCreateNestedManyWithoutPeoplesInput
  }

  export type peoplesCreateOrConnectWithoutExpensesInput = {
    where: peoplesWhereUniqueInput
    create: XOR<peoplesCreateWithoutExpensesInput, peoplesUncheckedCreateWithoutExpensesInput>
  }

  export type projectsCreateWithoutExpensesInput = {
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    incomes?: incomesCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutExpensesInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    incomes?: incomesUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutExpensesInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutExpensesInput, projectsUncheckedCreateWithoutExpensesInput>
  }

  export type usersCreateWithoutExpensesInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExpensesInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
  }

  export type categoriesUpsertWithoutExpensesInput = {
    update: XOR<categoriesUpdateWithoutExpensesInput, categoriesUncheckedUpdateWithoutExpensesInput>
    create: XOR<categoriesCreateWithoutExpensesInput, categoriesUncheckedCreateWithoutExpensesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutExpensesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutExpensesInput, categoriesUncheckedUpdateWithoutExpensesInput>
  }

  export type categoriesUpdateWithoutExpensesInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
    incomes?: incomesUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutExpensesInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    incomes?: incomesUncheckedUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type sub_categoriesUpsertWithoutExpensesInput = {
    update: XOR<sub_categoriesUpdateWithoutExpensesInput, sub_categoriesUncheckedUpdateWithoutExpensesInput>
    create: XOR<sub_categoriesCreateWithoutExpensesInput, sub_categoriesUncheckedCreateWithoutExpensesInput>
    where?: sub_categoriesWhereInput
  }

  export type sub_categoriesUpdateToOneWithWhereWithoutExpensesInput = {
    where?: sub_categoriesWhereInput
    data: XOR<sub_categoriesUpdateWithoutExpensesInput, sub_categoriesUncheckedUpdateWithoutExpensesInput>
  }

  export type sub_categoriesUpdateWithoutExpensesInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    incomes?: incomesUpdateManyWithoutSub_categoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
    users?: usersUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateWithoutExpensesInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    incomes?: incomesUncheckedUpdateManyWithoutSub_categoriesNestedInput
  }

  export type peoplesUpsertWithoutExpensesInput = {
    update: XOR<peoplesUpdateWithoutExpensesInput, peoplesUncheckedUpdateWithoutExpensesInput>
    create: XOR<peoplesCreateWithoutExpensesInput, peoplesUncheckedCreateWithoutExpensesInput>
    where?: peoplesWhereInput
  }

  export type peoplesUpdateToOneWithWhereWithoutExpensesInput = {
    where?: peoplesWhereInput
    data: XOR<peoplesUpdateWithoutExpensesInput, peoplesUncheckedUpdateWithoutExpensesInput>
  }

  export type peoplesUpdateWithoutExpensesInput = {
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    incomes?: incomesUpdateManyWithoutPeoplesNestedInput
    users?: usersUpdateOneRequiredWithoutPeoplesNestedInput
  }

  export type peoplesUncheckedUpdateWithoutExpensesInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    incomes?: incomesUncheckedUpdateManyWithoutPeoplesNestedInput
  }

  export type projectsUpsertWithoutExpensesInput = {
    update: XOR<projectsUpdateWithoutExpensesInput, projectsUncheckedUpdateWithoutExpensesInput>
    create: XOR<projectsCreateWithoutExpensesInput, projectsUncheckedCreateWithoutExpensesInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutExpensesInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutExpensesInput, projectsUncheckedUpdateWithoutExpensesInput>
  }

  export type projectsUpdateWithoutExpensesInput = {
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    incomes?: incomesUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutExpensesInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    incomes?: incomesUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutExpensesInput = {
    update: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateWithoutExpensesInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExpensesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type categoriesCreateWithoutIncomesInput = {
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
    expenses?: expensesCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutIncomesInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutIncomesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutIncomesInput, categoriesUncheckedCreateWithoutIncomesInput>
  }

  export type sub_categoriesCreateWithoutIncomesInput = {
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesCreateNestedManyWithoutSub_categoriesInput
    categories: categoriesCreateNestedOneWithoutSub_categoriesInput
    users: usersCreateNestedOneWithoutSub_categoriesInput
  }

  export type sub_categoriesUncheckedCreateWithoutIncomesInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutSub_categoriesInput
  }

  export type sub_categoriesCreateOrConnectWithoutIncomesInput = {
    where: sub_categoriesWhereUniqueInput
    create: XOR<sub_categoriesCreateWithoutIncomesInput, sub_categoriesUncheckedCreateWithoutIncomesInput>
  }

  export type peoplesCreateWithoutIncomesInput = {
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutPeoplesInput
    users: usersCreateNestedOneWithoutPeoplesInput
  }

  export type peoplesUncheckedCreateWithoutIncomesInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutPeoplesInput
  }

  export type peoplesCreateOrConnectWithoutIncomesInput = {
    where: peoplesWhereUniqueInput
    create: XOR<peoplesCreateWithoutIncomesInput, peoplesUncheckedCreateWithoutIncomesInput>
  }

  export type projectsCreateWithoutIncomesInput = {
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutIncomesInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutIncomesInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutIncomesInput, projectsUncheckedCreateWithoutIncomesInput>
  }

  export type usersCreateWithoutIncomesInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    expenses?: expensesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutIncomesInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutIncomesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutIncomesInput, usersUncheckedCreateWithoutIncomesInput>
  }

  export type categoriesUpsertWithoutIncomesInput = {
    update: XOR<categoriesUpdateWithoutIncomesInput, categoriesUncheckedUpdateWithoutIncomesInput>
    create: XOR<categoriesCreateWithoutIncomesInput, categoriesUncheckedCreateWithoutIncomesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutIncomesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutIncomesInput, categoriesUncheckedUpdateWithoutIncomesInput>
  }

  export type categoriesUpdateWithoutIncomesInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: expensesUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutIncomesInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type sub_categoriesUpsertWithoutIncomesInput = {
    update: XOR<sub_categoriesUpdateWithoutIncomesInput, sub_categoriesUncheckedUpdateWithoutIncomesInput>
    create: XOR<sub_categoriesCreateWithoutIncomesInput, sub_categoriesUncheckedCreateWithoutIncomesInput>
    where?: sub_categoriesWhereInput
  }

  export type sub_categoriesUpdateToOneWithWhereWithoutIncomesInput = {
    where?: sub_categoriesWhereInput
    data: XOR<sub_categoriesUpdateWithoutIncomesInput, sub_categoriesUncheckedUpdateWithoutIncomesInput>
  }

  export type sub_categoriesUpdateWithoutIncomesInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUpdateManyWithoutSub_categoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
    users?: usersUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateWithoutIncomesInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutSub_categoriesNestedInput
  }

  export type peoplesUpsertWithoutIncomesInput = {
    update: XOR<peoplesUpdateWithoutIncomesInput, peoplesUncheckedUpdateWithoutIncomesInput>
    create: XOR<peoplesCreateWithoutIncomesInput, peoplesUncheckedCreateWithoutIncomesInput>
    where?: peoplesWhereInput
  }

  export type peoplesUpdateToOneWithWhereWithoutIncomesInput = {
    where?: peoplesWhereInput
    data: XOR<peoplesUpdateWithoutIncomesInput, peoplesUncheckedUpdateWithoutIncomesInput>
  }

  export type peoplesUpdateWithoutIncomesInput = {
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutPeoplesNestedInput
    users?: usersUpdateOneRequiredWithoutPeoplesNestedInput
  }

  export type peoplesUncheckedUpdateWithoutIncomesInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutPeoplesNestedInput
  }

  export type projectsUpsertWithoutIncomesInput = {
    update: XOR<projectsUpdateWithoutIncomesInput, projectsUncheckedUpdateWithoutIncomesInput>
    create: XOR<projectsCreateWithoutIncomesInput, projectsUncheckedCreateWithoutIncomesInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutIncomesInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutIncomesInput, projectsUncheckedUpdateWithoutIncomesInput>
  }

  export type projectsUpdateWithoutIncomesInput = {
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutIncomesInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutIncomesInput = {
    update: XOR<usersUpdateWithoutIncomesInput, usersUncheckedUpdateWithoutIncomesInput>
    create: XOR<usersCreateWithoutIncomesInput, usersUncheckedCreateWithoutIncomesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutIncomesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutIncomesInput, usersUncheckedUpdateWithoutIncomesInput>
  }

  export type usersUpdateWithoutIncomesInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutIncomesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type expensesCreateWithoutPeoplesInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutExpensesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutExpensesInput
    projects?: projectsCreateNestedOneWithoutExpensesInput
    users: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutPeoplesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesCreateOrConnectWithoutPeoplesInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput>
  }

  export type expensesCreateManyPeoplesInputEnvelope = {
    data: expensesCreateManyPeoplesInput | expensesCreateManyPeoplesInput[]
    skipDuplicates?: boolean
  }

  export type incomesCreateWithoutPeoplesInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutIncomesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutIncomesInput
    projects?: projectsCreateNestedOneWithoutIncomesInput
    users: usersCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateWithoutPeoplesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateOrConnectWithoutPeoplesInput = {
    where: incomesWhereUniqueInput
    create: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput>
  }

  export type incomesCreateManyPeoplesInputEnvelope = {
    data: incomesCreateManyPeoplesInput | incomesCreateManyPeoplesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPeoplesInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    expenses?: expensesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPeoplesInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPeoplesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPeoplesInput, usersUncheckedCreateWithoutPeoplesInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutPeoplesInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutPeoplesInput, expensesUncheckedUpdateWithoutPeoplesInput>
    create: XOR<expensesCreateWithoutPeoplesInput, expensesUncheckedCreateWithoutPeoplesInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutPeoplesInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutPeoplesInput, expensesUncheckedUpdateWithoutPeoplesInput>
  }

  export type expensesUpdateManyWithWhereWithoutPeoplesInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutPeoplesInput>
  }

  export type incomesUpsertWithWhereUniqueWithoutPeoplesInput = {
    where: incomesWhereUniqueInput
    update: XOR<incomesUpdateWithoutPeoplesInput, incomesUncheckedUpdateWithoutPeoplesInput>
    create: XOR<incomesCreateWithoutPeoplesInput, incomesUncheckedCreateWithoutPeoplesInput>
  }

  export type incomesUpdateWithWhereUniqueWithoutPeoplesInput = {
    where: incomesWhereUniqueInput
    data: XOR<incomesUpdateWithoutPeoplesInput, incomesUncheckedUpdateWithoutPeoplesInput>
  }

  export type incomesUpdateManyWithWhereWithoutPeoplesInput = {
    where: incomesScalarWhereInput
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyWithoutPeoplesInput>
  }

  export type usersUpsertWithoutPeoplesInput = {
    update: XOR<usersUpdateWithoutPeoplesInput, usersUncheckedUpdateWithoutPeoplesInput>
    create: XOR<usersCreateWithoutPeoplesInput, usersUncheckedCreateWithoutPeoplesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPeoplesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPeoplesInput, usersUncheckedUpdateWithoutPeoplesInput>
  }

  export type usersUpdateWithoutPeoplesInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPeoplesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type expensesCreateWithoutProjectsInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutExpensesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutExpensesInput
    peoples: peoplesCreateNestedOneWithoutExpensesInput
    users: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutProjectsInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesCreateOrConnectWithoutProjectsInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput>
  }

  export type expensesCreateManyProjectsInputEnvelope = {
    data: expensesCreateManyProjectsInput | expensesCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type incomesCreateWithoutProjectsInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutIncomesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutIncomesInput
    peoples: peoplesCreateNestedOneWithoutIncomesInput
    users: usersCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateWithoutProjectsInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateOrConnectWithoutProjectsInput = {
    where: incomesWhereUniqueInput
    create: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput>
  }

  export type incomesCreateManyProjectsInputEnvelope = {
    data: incomesCreateManyProjectsInput | incomesCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProjectsInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    expenses?: expensesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutProjectsInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutProjectsInput, expensesUncheckedUpdateWithoutProjectsInput>
    create: XOR<expensesCreateWithoutProjectsInput, expensesUncheckedCreateWithoutProjectsInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutProjectsInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutProjectsInput, expensesUncheckedUpdateWithoutProjectsInput>
  }

  export type expensesUpdateManyWithWhereWithoutProjectsInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutProjectsInput>
  }

  export type incomesUpsertWithWhereUniqueWithoutProjectsInput = {
    where: incomesWhereUniqueInput
    update: XOR<incomesUpdateWithoutProjectsInput, incomesUncheckedUpdateWithoutProjectsInput>
    create: XOR<incomesCreateWithoutProjectsInput, incomesUncheckedCreateWithoutProjectsInput>
  }

  export type incomesUpdateWithWhereUniqueWithoutProjectsInput = {
    where: incomesWhereUniqueInput
    data: XOR<incomesUpdateWithoutProjectsInput, incomesUncheckedUpdateWithoutProjectsInput>
  }

  export type incomesUpdateManyWithWhereWithoutProjectsInput = {
    where: incomesScalarWhereInput
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyWithoutProjectsInput>
  }

  export type usersUpsertWithoutProjectsInput = {
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateWithoutProjectsInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type expensesCreateWithoutSub_categoriesInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutExpensesInput
    peoples: peoplesCreateNestedOneWithoutExpensesInput
    projects?: projectsCreateNestedOneWithoutExpensesInput
    users: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutSub_categoriesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesCreateOrConnectWithoutSub_categoriesInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type expensesCreateManySub_categoriesInputEnvelope = {
    data: expensesCreateManySub_categoriesInput | expensesCreateManySub_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type incomesCreateWithoutSub_categoriesInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutIncomesInput
    peoples: peoplesCreateNestedOneWithoutIncomesInput
    projects?: projectsCreateNestedOneWithoutIncomesInput
    users: usersCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateWithoutSub_categoriesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateOrConnectWithoutSub_categoriesInput = {
    where: incomesWhereUniqueInput
    create: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type incomesCreateManySub_categoriesInputEnvelope = {
    data: incomesCreateManySub_categoriesInput | incomesCreateManySub_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutSub_categoriesInput = {
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    users: usersCreateNestedOneWithoutCategoriesInput
    expenses?: expensesCreateNestedManyWithoutCategoriesInput
    incomes?: incomesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutSub_categoriesInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutCategoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutSub_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSub_categoriesInput, categoriesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type usersCreateWithoutSub_categoriesInput = {
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesCreateNestedManyWithoutUsersInput
    expenses?: expensesCreateNestedManyWithoutUsersInput
    incomes?: incomesCreateNestedManyWithoutUsersInput
    peoples?: peoplesCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSub_categoriesInput = {
    UserID?: number
    UserName: string
    EmailAddress: string
    Password: string
    MobileNo: string
    ProfileImage?: string | null
    Created: Date | string
    Modified: Date | string
    Role?: string
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    incomes?: incomesUncheckedCreateNestedManyWithoutUsersInput
    peoples?: peoplesUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSub_categoriesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSub_categoriesInput, usersUncheckedCreateWithoutSub_categoriesInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutSub_categoriesInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutSub_categoriesInput, expensesUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<expensesCreateWithoutSub_categoriesInput, expensesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutSub_categoriesInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutSub_categoriesInput, expensesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type expensesUpdateManyWithWhereWithoutSub_categoriesInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutSub_categoriesInput>
  }

  export type incomesUpsertWithWhereUniqueWithoutSub_categoriesInput = {
    where: incomesWhereUniqueInput
    update: XOR<incomesUpdateWithoutSub_categoriesInput, incomesUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<incomesCreateWithoutSub_categoriesInput, incomesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type incomesUpdateWithWhereUniqueWithoutSub_categoriesInput = {
    where: incomesWhereUniqueInput
    data: XOR<incomesUpdateWithoutSub_categoriesInput, incomesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type incomesUpdateManyWithWhereWithoutSub_categoriesInput = {
    where: incomesScalarWhereInput
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyWithoutSub_categoriesInput>
  }

  export type categoriesUpsertWithoutSub_categoriesInput = {
    update: XOR<categoriesUpdateWithoutSub_categoriesInput, categoriesUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<categoriesCreateWithoutSub_categoriesInput, categoriesUncheckedCreateWithoutSub_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutSub_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutSub_categoriesInput, categoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type categoriesUpdateWithoutSub_categoriesInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: expensesUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSub_categoriesInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type usersUpsertWithoutSub_categoriesInput = {
    update: XOR<usersUpdateWithoutSub_categoriesInput, usersUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<usersCreateWithoutSub_categoriesInput, usersUncheckedCreateWithoutSub_categoriesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSub_categoriesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSub_categoriesInput, usersUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type usersUpdateWithoutSub_categoriesInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUpdateManyWithoutUsersNestedInput
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    incomes?: incomesUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSub_categoriesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    EmailAddress?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: StringFieldUpdateOperationsInput | string
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutUsersNestedInput
    peoples?: peoplesUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type categoriesCreateWithoutUsersInput = {
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesCreateNestedManyWithoutCategoriesInput
    incomes?: incomesCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsersInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutCategoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutCategoriesInput
    sub_categories?: sub_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput>
  }

  export type categoriesCreateManyUsersInputEnvelope = {
    data: categoriesCreateManyUsersInput | categoriesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutUsersInput = {
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutExpensesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutExpensesInput
    peoples: peoplesCreateNestedOneWithoutExpensesInput
    projects?: projectsCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutUsersInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
  }

  export type expensesCreateOrConnectWithoutUsersInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesCreateManyUsersInputEnvelope = {
    data: expensesCreateManyUsersInput | expensesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type incomesCreateWithoutUsersInput = {
    IncomeDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    categories?: categoriesCreateNestedOneWithoutIncomesInput
    sub_categories?: sub_categoriesCreateNestedOneWithoutIncomesInput
    peoples: peoplesCreateNestedOneWithoutIncomesInput
    projects?: projectsCreateNestedOneWithoutIncomesInput
  }

  export type incomesUncheckedCreateWithoutUsersInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateOrConnectWithoutUsersInput = {
    where: incomesWhereUniqueInput
    create: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput>
  }

  export type incomesCreateManyUsersInputEnvelope = {
    data: incomesCreateManyUsersInput | incomesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type peoplesCreateWithoutUsersInput = {
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutPeoplesInput
    incomes?: incomesCreateNestedManyWithoutPeoplesInput
  }

  export type peoplesUncheckedCreateWithoutUsersInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutPeoplesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutPeoplesInput
  }

  export type peoplesCreateOrConnectWithoutUsersInput = {
    where: peoplesWhereUniqueInput
    create: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput>
  }

  export type peoplesCreateManyUsersInputEnvelope = {
    data: peoplesCreateManyUsersInput | peoplesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutUsersInput = {
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesCreateNestedManyWithoutProjectsInput
    incomes?: incomesCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsersInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
    expenses?: expensesUncheckedCreateNestedManyWithoutProjectsInput
    incomes?: incomesUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsCreateManyUsersInputEnvelope = {
    data: projectsCreateManyUsersInput | projectsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type sub_categoriesCreateWithoutUsersInput = {
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesCreateNestedManyWithoutSub_categoriesInput
    categories: categoriesCreateNestedOneWithoutSub_categoriesInput
  }

  export type sub_categoriesUncheckedCreateWithoutUsersInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutSub_categoriesInput
    incomes?: incomesUncheckedCreateNestedManyWithoutSub_categoriesInput
  }

  export type sub_categoriesCreateOrConnectWithoutUsersInput = {
    where: sub_categoriesWhereUniqueInput
    create: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput>
  }

  export type sub_categoriesCreateManyUsersInputEnvelope = {
    data: sub_categoriesCreateManyUsersInput | sub_categoriesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsersInput, categoriesUncheckedUpdateWithoutUsersInput>
    create: XOR<categoriesCreateWithoutUsersInput, categoriesUncheckedCreateWithoutUsersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsersInput, categoriesUncheckedUpdateWithoutUsersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsersInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    CategoryID?: IntFilter<"categories"> | number
    CategoryName?: StringFilter<"categories"> | string
    LogoPath?: StringNullableFilter<"categories"> | string | null
    IsExpense?: BoolFilter<"categories"> | boolean
    IsIncome?: BoolFilter<"categories"> | boolean
    IsActive?: BoolFilter<"categories"> | boolean
    Description?: StringNullableFilter<"categories"> | string | null
    UserID?: IntFilter<"categories"> | number
    Created?: DateTimeFilter<"categories"> | Date | string
    Modified?: DateTimeFilter<"categories"> | Date | string
    Sequence?: DecimalNullableFilter<"categories"> | Decimal | DecimalJsLike | number | string | null
  }

  export type expensesUpsertWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
  }

  export type expensesUpdateManyWithWhereWithoutUsersInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutUsersInput>
  }

  export type incomesUpsertWithWhereUniqueWithoutUsersInput = {
    where: incomesWhereUniqueInput
    update: XOR<incomesUpdateWithoutUsersInput, incomesUncheckedUpdateWithoutUsersInput>
    create: XOR<incomesCreateWithoutUsersInput, incomesUncheckedCreateWithoutUsersInput>
  }

  export type incomesUpdateWithWhereUniqueWithoutUsersInput = {
    where: incomesWhereUniqueInput
    data: XOR<incomesUpdateWithoutUsersInput, incomesUncheckedUpdateWithoutUsersInput>
  }

  export type incomesUpdateManyWithWhereWithoutUsersInput = {
    where: incomesScalarWhereInput
    data: XOR<incomesUpdateManyMutationInput, incomesUncheckedUpdateManyWithoutUsersInput>
  }

  export type peoplesUpsertWithWhereUniqueWithoutUsersInput = {
    where: peoplesWhereUniqueInput
    update: XOR<peoplesUpdateWithoutUsersInput, peoplesUncheckedUpdateWithoutUsersInput>
    create: XOR<peoplesCreateWithoutUsersInput, peoplesUncheckedCreateWithoutUsersInput>
  }

  export type peoplesUpdateWithWhereUniqueWithoutUsersInput = {
    where: peoplesWhereUniqueInput
    data: XOR<peoplesUpdateWithoutUsersInput, peoplesUncheckedUpdateWithoutUsersInput>
  }

  export type peoplesUpdateManyWithWhereWithoutUsersInput = {
    where: peoplesScalarWhereInput
    data: XOR<peoplesUpdateManyMutationInput, peoplesUncheckedUpdateManyWithoutUsersInput>
  }

  export type peoplesScalarWhereInput = {
    AND?: peoplesScalarWhereInput | peoplesScalarWhereInput[]
    OR?: peoplesScalarWhereInput[]
    NOT?: peoplesScalarWhereInput | peoplesScalarWhereInput[]
    PeopleID?: IntFilter<"peoples"> | number
    PeopleCode?: StringNullableFilter<"peoples"> | string | null
    Password?: StringFilter<"peoples"> | string
    PeopleName?: StringFilter<"peoples"> | string
    Email?: StringFilter<"peoples"> | string
    MobileNo?: StringFilter<"peoples"> | string
    Description?: StringNullableFilter<"peoples"> | string | null
    UserID?: IntFilter<"peoples"> | number
    Created?: DateTimeFilter<"peoples"> | Date | string
    Modified?: DateTimeFilter<"peoples"> | Date | string
    IsActive?: BoolNullableFilter<"peoples"> | boolean | null
  }

  export type projectsUpsertWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    ProjectID?: IntFilter<"projects"> | number
    ProjectName?: StringFilter<"projects"> | string
    ProjectLogo?: StringNullableFilter<"projects"> | string | null
    ProjectStartDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectEndDate?: DateTimeNullableFilter<"projects"> | Date | string | null
    ProjectDetail?: StringNullableFilter<"projects"> | string | null
    Description?: StringNullableFilter<"projects"> | string | null
    UserID?: IntFilter<"projects"> | number
    Created?: DateTimeFilter<"projects"> | Date | string
    Modified?: DateTimeFilter<"projects"> | Date | string
    IsActive?: BoolNullableFilter<"projects"> | boolean | null
  }

  export type sub_categoriesUpsertWithWhereUniqueWithoutUsersInput = {
    where: sub_categoriesWhereUniqueInput
    update: XOR<sub_categoriesUpdateWithoutUsersInput, sub_categoriesUncheckedUpdateWithoutUsersInput>
    create: XOR<sub_categoriesCreateWithoutUsersInput, sub_categoriesUncheckedCreateWithoutUsersInput>
  }

  export type sub_categoriesUpdateWithWhereUniqueWithoutUsersInput = {
    where: sub_categoriesWhereUniqueInput
    data: XOR<sub_categoriesUpdateWithoutUsersInput, sub_categoriesUncheckedUpdateWithoutUsersInput>
  }

  export type sub_categoriesUpdateManyWithWhereWithoutUsersInput = {
    where: sub_categoriesScalarWhereInput
    data: XOR<sub_categoriesUpdateManyMutationInput, sub_categoriesUncheckedUpdateManyWithoutUsersInput>
  }

  export type expensesCreateManyCategoriesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateManyCategoriesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type sub_categoriesCreateManyCategoriesInput = {
    SubCategoryID?: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
  }

  export type expensesUpdateWithoutCategoriesInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_categories?: sub_categoriesUpdateOneWithoutExpensesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutExpensesNestedInput
    projects?: projectsUpdateOneWithoutExpensesNestedInput
    users?: usersUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutCategoriesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyWithoutCategoriesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUpdateWithoutCategoriesInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_categories?: sub_categoriesUpdateOneWithoutIncomesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutIncomesNestedInput
    projects?: projectsUpdateOneWithoutIncomesNestedInput
    users?: usersUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateWithoutCategoriesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyWithoutCategoriesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sub_categoriesUpdateWithoutCategoriesInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUpdateManyWithoutSub_categoriesNestedInput
    users?: usersUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateWithoutCategoriesInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type expensesCreateManyPeoplesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateManyPeoplesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesUpdateWithoutPeoplesInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutExpensesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutExpensesNestedInput
    projects?: projectsUpdateOneWithoutExpensesNestedInput
    users?: usersUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutPeoplesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyWithoutPeoplesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUpdateWithoutPeoplesInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutIncomesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutIncomesNestedInput
    projects?: projectsUpdateOneWithoutIncomesNestedInput
    users?: usersUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateWithoutPeoplesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyWithoutPeoplesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateManyProjectsInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateManyProjectsInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesUpdateWithoutProjectsInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutExpensesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutExpensesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutExpensesNestedInput
    users?: usersUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutProjectsInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyWithoutProjectsInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUpdateWithoutProjectsInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutIncomesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutIncomesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutIncomesNestedInput
    users?: usersUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateWithoutProjectsInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyWithoutProjectsInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesCreateManySub_categoriesInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateManySub_categoriesInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    UserID: number
    Created: Date | string
    Modified: Date | string
  }

  export type expensesUpdateWithoutSub_categoriesInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutExpensesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutExpensesNestedInput
    projects?: projectsUpdateOneWithoutExpensesNestedInput
    users?: usersUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutSub_categoriesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyWithoutSub_categoriesInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUpdateWithoutSub_categoriesInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutIncomesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutIncomesNestedInput
    projects?: projectsUpdateOneWithoutIncomesNestedInput
    users?: usersUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateWithoutSub_categoriesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyWithoutSub_categoriesInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateManyUsersInput = {
    CategoryID?: number
    CategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
  }

  export type expensesCreateManyUsersInput = {
    ExpenseID?: number
    ExpenseDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    ExpenseDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
  }

  export type incomesCreateManyUsersInput = {
    IncomeID?: number
    IncomeDate: Date | string
    CategoryID?: number | null
    SubCategoryID?: number | null
    PeopleID: number
    ProjectID?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    IncomeDetail?: string | null
    AttachmentPath?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
  }

  export type peoplesCreateManyUsersInput = {
    PeopleID?: number
    PeopleCode?: string | null
    Password: string
    PeopleName: string
    Email: string
    MobileNo: string
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
  }

  export type projectsCreateManyUsersInput = {
    ProjectID?: number
    ProjectName: string
    ProjectLogo?: string | null
    ProjectStartDate?: Date | string | null
    ProjectEndDate?: Date | string | null
    ProjectDetail?: string | null
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    IsActive?: boolean | null
  }

  export type sub_categoriesCreateManyUsersInput = {
    SubCategoryID?: number
    CategoryID: number
    SubCategoryName: string
    LogoPath?: string | null
    IsExpense: boolean
    IsIncome: boolean
    IsActive: boolean
    Description?: string | null
    Created: Date | string
    Modified: Date | string
    Sequence?: Decimal | DecimalJsLike | number | string | null
  }

  export type categoriesUpdateWithoutUsersInput = {
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsersInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutCategoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutCategoriesNestedInput
    sub_categories?: sub_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsersInput = {
    CategoryID?: IntFieldUpdateOperationsInput | number
    CategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type expensesUpdateWithoutUsersInput = {
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutExpensesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutExpensesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutExpensesNestedInput
    projects?: projectsUpdateOneWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutUsersInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyWithoutUsersInput = {
    ExpenseID?: IntFieldUpdateOperationsInput | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ExpenseDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUpdateWithoutUsersInput = {
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutIncomesNestedInput
    sub_categories?: sub_categoriesUpdateOneWithoutIncomesNestedInput
    peoples?: peoplesUpdateOneRequiredWithoutIncomesNestedInput
    projects?: projectsUpdateOneWithoutIncomesNestedInput
  }

  export type incomesUncheckedUpdateWithoutUsersInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type incomesUncheckedUpdateManyWithoutUsersInput = {
    IncomeID?: IntFieldUpdateOperationsInput | number
    IncomeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    SubCategoryID?: NullableIntFieldUpdateOperationsInput | number | null
    PeopleID?: IntFieldUpdateOperationsInput | number
    ProjectID?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IncomeDetail?: NullableStringFieldUpdateOperationsInput | string | null
    AttachmentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peoplesUpdateWithoutUsersInput = {
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutPeoplesNestedInput
    incomes?: incomesUpdateManyWithoutPeoplesNestedInput
  }

  export type peoplesUncheckedUpdateWithoutUsersInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutPeoplesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutPeoplesNestedInput
  }

  export type peoplesUncheckedUpdateManyWithoutUsersInput = {
    PeopleID?: IntFieldUpdateOperationsInput | number
    PeopleCode?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: StringFieldUpdateOperationsInput | string
    PeopleName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    MobileNo?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type projectsUpdateWithoutUsersInput = {
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUpdateManyWithoutProjectsNestedInput
    incomes?: incomesUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsersInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expenses?: expensesUncheckedUpdateManyWithoutProjectsNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsersInput = {
    ProjectID?: IntFieldUpdateOperationsInput | number
    ProjectName?: StringFieldUpdateOperationsInput | string
    ProjectLogo?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProjectDetail?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sub_categoriesUpdateWithoutUsersInput = {
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUpdateManyWithoutSub_categoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateWithoutUsersInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenses?: expensesUncheckedUpdateManyWithoutSub_categoriesNestedInput
    incomes?: incomesUncheckedUpdateManyWithoutSub_categoriesNestedInput
  }

  export type sub_categoriesUncheckedUpdateManyWithoutUsersInput = {
    SubCategoryID?: IntFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SubCategoryName?: StringFieldUpdateOperationsInput | string
    LogoPath?: NullableStringFieldUpdateOperationsInput | string | null
    IsExpense?: BoolFieldUpdateOperationsInput | boolean
    IsIncome?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    Sequence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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