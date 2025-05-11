
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
 * Model InvestorSummary
 * 
 */
export type InvestorSummary = $Result.DefaultSelection<Prisma.$InvestorSummaryPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more InvestorSummaries
 * const investorSummaries = await prisma.investorSummary.findMany()
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
   * // Fetch zero or more InvestorSummaries
   * const investorSummaries = await prisma.investorSummary.findMany()
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
   * `prisma.investorSummary`: Exposes CRUD operations for the **InvestorSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestorSummaries
    * const investorSummaries = await prisma.investorSummary.findMany()
    * ```
    */
  get investorSummary(): Prisma.InvestorSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    InvestorSummary: 'InvestorSummary',
    Investment: 'Investment'
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
      modelProps: "investorSummary" | "investment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      InvestorSummary: {
        payload: Prisma.$InvestorSummaryPayload<ExtArgs>
        fields: Prisma.InvestorSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestorSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestorSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          findFirst: {
            args: Prisma.InvestorSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestorSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          findMany: {
            args: Prisma.InvestorSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>[]
          }
          create: {
            args: Prisma.InvestorSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          createMany: {
            args: Prisma.InvestorSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestorSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>[]
          }
          delete: {
            args: Prisma.InvestorSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          update: {
            args: Prisma.InvestorSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          deleteMany: {
            args: Prisma.InvestorSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestorSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestorSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>[]
          }
          upsert: {
            args: Prisma.InvestorSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorSummaryPayload>
          }
          aggregate: {
            args: Prisma.InvestorSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestorSummary>
          }
          groupBy: {
            args: Prisma.InvestorSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestorSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorSummaryCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
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
    investorSummary?: InvestorSummaryOmit
    investment?: InvestmentOmit
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
   * Count Type InvestorSummaryCountOutputType
   */

  export type InvestorSummaryCountOutputType = {
    investments: number
  }

  export type InvestorSummaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestorSummaryCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * InvestorSummaryCountOutputType without action
   */
  export type InvestorSummaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummaryCountOutputType
     */
    select?: InvestorSummaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestorSummaryCountOutputType without action
   */
  export type InvestorSummaryCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model InvestorSummary
   */

  export type AggregateInvestorSummary = {
    _count: InvestorSummaryCountAggregateOutputType | null
    _avg: InvestorSummaryAvgAggregateOutputType | null
    _sum: InvestorSummarySumAggregateOutputType | null
    _min: InvestorSummaryMinAggregateOutputType | null
    _max: InvestorSummaryMaxAggregateOutputType | null
  }

  export type InvestorSummaryAvgAggregateOutputType = {
    id: number | null
    totalInvested: number | null
    currentValue: number | null
    totalReturn: number | null
    returnPercentage: number | null
    activeInvestments: number | null
    completedInvestments: number | null
    distributionsReceived: number | null
    outstandingCommitments: number | null
  }

  export type InvestorSummarySumAggregateOutputType = {
    id: number | null
    totalInvested: number | null
    currentValue: number | null
    totalReturn: number | null
    returnPercentage: number | null
    activeInvestments: number | null
    completedInvestments: number | null
    distributionsReceived: number | null
    outstandingCommitments: number | null
  }

  export type InvestorSummaryMinAggregateOutputType = {
    id: number | null
    totalInvested: number | null
    currentValue: number | null
    totalReturn: number | null
    returnPercentage: number | null
    activeInvestments: number | null
    completedInvestments: number | null
    distributionsReceived: number | null
    outstandingCommitments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorSummaryMaxAggregateOutputType = {
    id: number | null
    totalInvested: number | null
    currentValue: number | null
    totalReturn: number | null
    returnPercentage: number | null
    activeInvestments: number | null
    completedInvestments: number | null
    distributionsReceived: number | null
    outstandingCommitments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestorSummaryCountAggregateOutputType = {
    id: number
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestorSummaryAvgAggregateInputType = {
    id?: true
    totalInvested?: true
    currentValue?: true
    totalReturn?: true
    returnPercentage?: true
    activeInvestments?: true
    completedInvestments?: true
    distributionsReceived?: true
    outstandingCommitments?: true
  }

  export type InvestorSummarySumAggregateInputType = {
    id?: true
    totalInvested?: true
    currentValue?: true
    totalReturn?: true
    returnPercentage?: true
    activeInvestments?: true
    completedInvestments?: true
    distributionsReceived?: true
    outstandingCommitments?: true
  }

  export type InvestorSummaryMinAggregateInputType = {
    id?: true
    totalInvested?: true
    currentValue?: true
    totalReturn?: true
    returnPercentage?: true
    activeInvestments?: true
    completedInvestments?: true
    distributionsReceived?: true
    outstandingCommitments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorSummaryMaxAggregateInputType = {
    id?: true
    totalInvested?: true
    currentValue?: true
    totalReturn?: true
    returnPercentage?: true
    activeInvestments?: true
    completedInvestments?: true
    distributionsReceived?: true
    outstandingCommitments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestorSummaryCountAggregateInputType = {
    id?: true
    totalInvested?: true
    currentValue?: true
    totalReturn?: true
    returnPercentage?: true
    activeInvestments?: true
    completedInvestments?: true
    distributionsReceived?: true
    outstandingCommitments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestorSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestorSummary to aggregate.
     */
    where?: InvestorSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestorSummaries to fetch.
     */
    orderBy?: InvestorSummaryOrderByWithRelationInput | InvestorSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestorSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestorSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestorSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestorSummaries
    **/
    _count?: true | InvestorSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestorSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestorSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorSummaryMaxAggregateInputType
  }

  export type GetInvestorSummaryAggregateType<T extends InvestorSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestorSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestorSummary[P]>
      : GetScalarType<T[P], AggregateInvestorSummary[P]>
  }




  export type InvestorSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestorSummaryWhereInput
    orderBy?: InvestorSummaryOrderByWithAggregationInput | InvestorSummaryOrderByWithAggregationInput[]
    by: InvestorSummaryScalarFieldEnum[] | InvestorSummaryScalarFieldEnum
    having?: InvestorSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorSummaryCountAggregateInputType | true
    _avg?: InvestorSummaryAvgAggregateInputType
    _sum?: InvestorSummarySumAggregateInputType
    _min?: InvestorSummaryMinAggregateInputType
    _max?: InvestorSummaryMaxAggregateInputType
  }

  export type InvestorSummaryGroupByOutputType = {
    id: number
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt: Date
    updatedAt: Date
    _count: InvestorSummaryCountAggregateOutputType | null
    _avg: InvestorSummaryAvgAggregateOutputType | null
    _sum: InvestorSummarySumAggregateOutputType | null
    _min: InvestorSummaryMinAggregateOutputType | null
    _max: InvestorSummaryMaxAggregateOutputType | null
  }

  type GetInvestorSummaryGroupByPayload<T extends InvestorSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorSummaryGroupByOutputType[P]>
        }
      >
    >


  export type InvestorSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    totalReturn?: boolean
    returnPercentage?: boolean
    activeInvestments?: boolean
    completedInvestments?: boolean
    distributionsReceived?: boolean
    outstandingCommitments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investments?: boolean | InvestorSummary$investmentsArgs<ExtArgs>
    _count?: boolean | InvestorSummaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investorSummary"]>

  export type InvestorSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    totalReturn?: boolean
    returnPercentage?: boolean
    activeInvestments?: boolean
    completedInvestments?: boolean
    distributionsReceived?: boolean
    outstandingCommitments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["investorSummary"]>

  export type InvestorSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    totalReturn?: boolean
    returnPercentage?: boolean
    activeInvestments?: boolean
    completedInvestments?: boolean
    distributionsReceived?: boolean
    outstandingCommitments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["investorSummary"]>

  export type InvestorSummarySelectScalar = {
    id?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    totalReturn?: boolean
    returnPercentage?: boolean
    activeInvestments?: boolean
    completedInvestments?: boolean
    distributionsReceived?: boolean
    outstandingCommitments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestorSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalInvested" | "currentValue" | "totalReturn" | "returnPercentage" | "activeInvestments" | "completedInvestments" | "distributionsReceived" | "outstandingCommitments" | "createdAt" | "updatedAt", ExtArgs["result"]["investorSummary"]>
  export type InvestorSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestorSummary$investmentsArgs<ExtArgs>
    _count?: boolean | InvestorSummaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestorSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvestorSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvestorSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestorSummary"
    objects: {
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalInvested: number
      currentValue: number
      totalReturn: number
      returnPercentage: number
      activeInvestments: number
      completedInvestments: number
      distributionsReceived: number
      outstandingCommitments: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investorSummary"]>
    composites: {}
  }

  type InvestorSummaryGetPayload<S extends boolean | null | undefined | InvestorSummaryDefaultArgs> = $Result.GetResult<Prisma.$InvestorSummaryPayload, S>

  type InvestorSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestorSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestorSummaryCountAggregateInputType | true
    }

  export interface InvestorSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestorSummary'], meta: { name: 'InvestorSummary' } }
    /**
     * Find zero or one InvestorSummary that matches the filter.
     * @param {InvestorSummaryFindUniqueArgs} args - Arguments to find a InvestorSummary
     * @example
     * // Get one InvestorSummary
     * const investorSummary = await prisma.investorSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestorSummaryFindUniqueArgs>(args: SelectSubset<T, InvestorSummaryFindUniqueArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvestorSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestorSummaryFindUniqueOrThrowArgs} args - Arguments to find a InvestorSummary
     * @example
     * // Get one InvestorSummary
     * const investorSummary = await prisma.investorSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestorSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestorSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestorSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryFindFirstArgs} args - Arguments to find a InvestorSummary
     * @example
     * // Get one InvestorSummary
     * const investorSummary = await prisma.investorSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestorSummaryFindFirstArgs>(args?: SelectSubset<T, InvestorSummaryFindFirstArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestorSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryFindFirstOrThrowArgs} args - Arguments to find a InvestorSummary
     * @example
     * // Get one InvestorSummary
     * const investorSummary = await prisma.investorSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestorSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestorSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvestorSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestorSummaries
     * const investorSummaries = await prisma.investorSummary.findMany()
     * 
     * // Get first 10 InvestorSummaries
     * const investorSummaries = await prisma.investorSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorSummaryWithIdOnly = await prisma.investorSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestorSummaryFindManyArgs>(args?: SelectSubset<T, InvestorSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvestorSummary.
     * @param {InvestorSummaryCreateArgs} args - Arguments to create a InvestorSummary.
     * @example
     * // Create one InvestorSummary
     * const InvestorSummary = await prisma.investorSummary.create({
     *   data: {
     *     // ... data to create a InvestorSummary
     *   }
     * })
     * 
     */
    create<T extends InvestorSummaryCreateArgs>(args: SelectSubset<T, InvestorSummaryCreateArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvestorSummaries.
     * @param {InvestorSummaryCreateManyArgs} args - Arguments to create many InvestorSummaries.
     * @example
     * // Create many InvestorSummaries
     * const investorSummary = await prisma.investorSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestorSummaryCreateManyArgs>(args?: SelectSubset<T, InvestorSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestorSummaries and returns the data saved in the database.
     * @param {InvestorSummaryCreateManyAndReturnArgs} args - Arguments to create many InvestorSummaries.
     * @example
     * // Create many InvestorSummaries
     * const investorSummary = await prisma.investorSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestorSummaries and only return the `id`
     * const investorSummaryWithIdOnly = await prisma.investorSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestorSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestorSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvestorSummary.
     * @param {InvestorSummaryDeleteArgs} args - Arguments to delete one InvestorSummary.
     * @example
     * // Delete one InvestorSummary
     * const InvestorSummary = await prisma.investorSummary.delete({
     *   where: {
     *     // ... filter to delete one InvestorSummary
     *   }
     * })
     * 
     */
    delete<T extends InvestorSummaryDeleteArgs>(args: SelectSubset<T, InvestorSummaryDeleteArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvestorSummary.
     * @param {InvestorSummaryUpdateArgs} args - Arguments to update one InvestorSummary.
     * @example
     * // Update one InvestorSummary
     * const investorSummary = await prisma.investorSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestorSummaryUpdateArgs>(args: SelectSubset<T, InvestorSummaryUpdateArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvestorSummaries.
     * @param {InvestorSummaryDeleteManyArgs} args - Arguments to filter InvestorSummaries to delete.
     * @example
     * // Delete a few InvestorSummaries
     * const { count } = await prisma.investorSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestorSummaryDeleteManyArgs>(args?: SelectSubset<T, InvestorSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestorSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestorSummaries
     * const investorSummary = await prisma.investorSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestorSummaryUpdateManyArgs>(args: SelectSubset<T, InvestorSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestorSummaries and returns the data updated in the database.
     * @param {InvestorSummaryUpdateManyAndReturnArgs} args - Arguments to update many InvestorSummaries.
     * @example
     * // Update many InvestorSummaries
     * const investorSummary = await prisma.investorSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestorSummaries and only return the `id`
     * const investorSummaryWithIdOnly = await prisma.investorSummary.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestorSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestorSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvestorSummary.
     * @param {InvestorSummaryUpsertArgs} args - Arguments to update or create a InvestorSummary.
     * @example
     * // Update or create a InvestorSummary
     * const investorSummary = await prisma.investorSummary.upsert({
     *   create: {
     *     // ... data to create a InvestorSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestorSummary we want to update
     *   }
     * })
     */
    upsert<T extends InvestorSummaryUpsertArgs>(args: SelectSubset<T, InvestorSummaryUpsertArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvestorSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryCountArgs} args - Arguments to filter InvestorSummaries to count.
     * @example
     * // Count the number of InvestorSummaries
     * const count = await prisma.investorSummary.count({
     *   where: {
     *     // ... the filter for the InvestorSummaries we want to count
     *   }
     * })
    **/
    count<T extends InvestorSummaryCountArgs>(
      args?: Subset<T, InvestorSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestorSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestorSummaryAggregateArgs>(args: Subset<T, InvestorSummaryAggregateArgs>): Prisma.PrismaPromise<GetInvestorSummaryAggregateType<T>>

    /**
     * Group by InvestorSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorSummaryGroupByArgs} args - Group by arguments.
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
      T extends InvestorSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestorSummaryGroupByArgs['orderBy'] }
        : { orderBy?: InvestorSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestorSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestorSummary model
   */
  readonly fields: InvestorSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestorSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestorSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investments<T extends InvestorSummary$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, InvestorSummary$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InvestorSummary model
   */
  interface InvestorSummaryFieldRefs {
    readonly id: FieldRef<"InvestorSummary", 'Int'>
    readonly totalInvested: FieldRef<"InvestorSummary", 'Float'>
    readonly currentValue: FieldRef<"InvestorSummary", 'Float'>
    readonly totalReturn: FieldRef<"InvestorSummary", 'Float'>
    readonly returnPercentage: FieldRef<"InvestorSummary", 'Float'>
    readonly activeInvestments: FieldRef<"InvestorSummary", 'Int'>
    readonly completedInvestments: FieldRef<"InvestorSummary", 'Int'>
    readonly distributionsReceived: FieldRef<"InvestorSummary", 'Float'>
    readonly outstandingCommitments: FieldRef<"InvestorSummary", 'Float'>
    readonly createdAt: FieldRef<"InvestorSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"InvestorSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvestorSummary findUnique
   */
  export type InvestorSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter, which InvestorSummary to fetch.
     */
    where: InvestorSummaryWhereUniqueInput
  }

  /**
   * InvestorSummary findUniqueOrThrow
   */
  export type InvestorSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter, which InvestorSummary to fetch.
     */
    where: InvestorSummaryWhereUniqueInput
  }

  /**
   * InvestorSummary findFirst
   */
  export type InvestorSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter, which InvestorSummary to fetch.
     */
    where?: InvestorSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestorSummaries to fetch.
     */
    orderBy?: InvestorSummaryOrderByWithRelationInput | InvestorSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestorSummaries.
     */
    cursor?: InvestorSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestorSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestorSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestorSummaries.
     */
    distinct?: InvestorSummaryScalarFieldEnum | InvestorSummaryScalarFieldEnum[]
  }

  /**
   * InvestorSummary findFirstOrThrow
   */
  export type InvestorSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter, which InvestorSummary to fetch.
     */
    where?: InvestorSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestorSummaries to fetch.
     */
    orderBy?: InvestorSummaryOrderByWithRelationInput | InvestorSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestorSummaries.
     */
    cursor?: InvestorSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestorSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestorSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestorSummaries.
     */
    distinct?: InvestorSummaryScalarFieldEnum | InvestorSummaryScalarFieldEnum[]
  }

  /**
   * InvestorSummary findMany
   */
  export type InvestorSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter, which InvestorSummaries to fetch.
     */
    where?: InvestorSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestorSummaries to fetch.
     */
    orderBy?: InvestorSummaryOrderByWithRelationInput | InvestorSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestorSummaries.
     */
    cursor?: InvestorSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestorSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestorSummaries.
     */
    skip?: number
    distinct?: InvestorSummaryScalarFieldEnum | InvestorSummaryScalarFieldEnum[]
  }

  /**
   * InvestorSummary create
   */
  export type InvestorSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestorSummary.
     */
    data: XOR<InvestorSummaryCreateInput, InvestorSummaryUncheckedCreateInput>
  }

  /**
   * InvestorSummary createMany
   */
  export type InvestorSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestorSummaries.
     */
    data: InvestorSummaryCreateManyInput | InvestorSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestorSummary createManyAndReturn
   */
  export type InvestorSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many InvestorSummaries.
     */
    data: InvestorSummaryCreateManyInput | InvestorSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestorSummary update
   */
  export type InvestorSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestorSummary.
     */
    data: XOR<InvestorSummaryUpdateInput, InvestorSummaryUncheckedUpdateInput>
    /**
     * Choose, which InvestorSummary to update.
     */
    where: InvestorSummaryWhereUniqueInput
  }

  /**
   * InvestorSummary updateMany
   */
  export type InvestorSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestorSummaries.
     */
    data: XOR<InvestorSummaryUpdateManyMutationInput, InvestorSummaryUncheckedUpdateManyInput>
    /**
     * Filter which InvestorSummaries to update
     */
    where?: InvestorSummaryWhereInput
    /**
     * Limit how many InvestorSummaries to update.
     */
    limit?: number
  }

  /**
   * InvestorSummary updateManyAndReturn
   */
  export type InvestorSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * The data used to update InvestorSummaries.
     */
    data: XOR<InvestorSummaryUpdateManyMutationInput, InvestorSummaryUncheckedUpdateManyInput>
    /**
     * Filter which InvestorSummaries to update
     */
    where?: InvestorSummaryWhereInput
    /**
     * Limit how many InvestorSummaries to update.
     */
    limit?: number
  }

  /**
   * InvestorSummary upsert
   */
  export type InvestorSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestorSummary to update in case it exists.
     */
    where: InvestorSummaryWhereUniqueInput
    /**
     * In case the InvestorSummary found by the `where` argument doesn't exist, create a new InvestorSummary with this data.
     */
    create: XOR<InvestorSummaryCreateInput, InvestorSummaryUncheckedCreateInput>
    /**
     * In case the InvestorSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestorSummaryUpdateInput, InvestorSummaryUncheckedUpdateInput>
  }

  /**
   * InvestorSummary delete
   */
  export type InvestorSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
    /**
     * Filter which InvestorSummary to delete.
     */
    where: InvestorSummaryWhereUniqueInput
  }

  /**
   * InvestorSummary deleteMany
   */
  export type InvestorSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestorSummaries to delete
     */
    where?: InvestorSummaryWhereInput
    /**
     * Limit how many InvestorSummaries to delete.
     */
    limit?: number
  }

  /**
   * InvestorSummary.investments
   */
  export type InvestorSummary$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * InvestorSummary without action
   */
  export type InvestorSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorSummary
     */
    select?: InvestorSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestorSummary
     */
    omit?: InvestorSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorSummaryInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    id: number | null
    investorId: number | null
    sharesOwned: number | null
    marketValue: number | null
    roi: number | null
    amount: number | null
    returnRate: number | null
    currentValue: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    id: number | null
    investorId: number | null
    sharesOwned: number | null
    marketValue: number | null
    roi: number | null
    amount: number | null
    returnRate: number | null
    currentValue: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: number | null
    investorId: number | null
    projectName: string | null
    tokenClass: string | null
    sharesOwned: number | null
    marketValue: number | null
    roi: number | null
    nextDistributionDate: Date | null
    amount: number | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    returnRate: number | null
    currentValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: number | null
    investorId: number | null
    projectName: string | null
    tokenClass: string | null
    sharesOwned: number | null
    marketValue: number | null
    roi: number | null
    nextDistributionDate: Date | null
    amount: number | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    returnRate: number | null
    currentValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    investorId: number
    projectName: number
    tokenClass: number
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate: number
    amount: number
    status: number
    startDate: number
    endDate: number
    returnRate: number
    currentValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    id?: true
    investorId?: true
    sharesOwned?: true
    marketValue?: true
    roi?: true
    amount?: true
    returnRate?: true
    currentValue?: true
  }

  export type InvestmentSumAggregateInputType = {
    id?: true
    investorId?: true
    sharesOwned?: true
    marketValue?: true
    roi?: true
    amount?: true
    returnRate?: true
    currentValue?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    investorId?: true
    projectName?: true
    tokenClass?: true
    sharesOwned?: true
    marketValue?: true
    roi?: true
    nextDistributionDate?: true
    amount?: true
    status?: true
    startDate?: true
    endDate?: true
    returnRate?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    investorId?: true
    projectName?: true
    tokenClass?: true
    sharesOwned?: true
    marketValue?: true
    roi?: true
    nextDistributionDate?: true
    amount?: true
    status?: true
    startDate?: true
    endDate?: true
    returnRate?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    investorId?: true
    projectName?: true
    tokenClass?: true
    sharesOwned?: true
    marketValue?: true
    roi?: true
    nextDistributionDate?: true
    amount?: true
    status?: true
    startDate?: true
    endDate?: true
    returnRate?: true
    currentValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: number
    investorId: number
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate: Date | null
    amount: number
    status: string
    startDate: Date
    endDate: Date
    returnRate: number
    currentValue: number
    createdAt: Date
    updatedAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorId?: boolean
    projectName?: boolean
    tokenClass?: boolean
    sharesOwned?: boolean
    marketValue?: boolean
    roi?: boolean
    nextDistributionDate?: boolean
    amount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    returnRate?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorId?: boolean
    projectName?: boolean
    tokenClass?: boolean
    sharesOwned?: boolean
    marketValue?: boolean
    roi?: boolean
    nextDistributionDate?: boolean
    amount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    returnRate?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorId?: boolean
    projectName?: boolean
    tokenClass?: boolean
    sharesOwned?: boolean
    marketValue?: boolean
    roi?: boolean
    nextDistributionDate?: boolean
    amount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    returnRate?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    investorId?: boolean
    projectName?: boolean
    tokenClass?: boolean
    sharesOwned?: boolean
    marketValue?: boolean
    roi?: boolean
    nextDistributionDate?: boolean
    amount?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    returnRate?: boolean
    currentValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investorId" | "projectName" | "tokenClass" | "sharesOwned" | "marketValue" | "roi" | "nextDistributionDate" | "amount" | "status" | "startDate" | "endDate" | "returnRate" | "currentValue" | "createdAt" | "updatedAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investor?: boolean | InvestorSummaryDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      investor: Prisma.$InvestorSummaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      investorId: number
      projectName: string
      tokenClass: string
      sharesOwned: number
      marketValue: number
      roi: number
      nextDistributionDate: Date | null
      amount: number
      status: string
      startDate: Date
      endDate: Date
      returnRate: number
      currentValue: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
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
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investor<T extends InvestorSummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestorSummaryDefaultArgs<ExtArgs>>): Prisma__InvestorSummaryClient<$Result.GetResult<Prisma.$InvestorSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'Int'>
    readonly investorId: FieldRef<"Investment", 'Int'>
    readonly projectName: FieldRef<"Investment", 'String'>
    readonly tokenClass: FieldRef<"Investment", 'String'>
    readonly sharesOwned: FieldRef<"Investment", 'Float'>
    readonly marketValue: FieldRef<"Investment", 'Float'>
    readonly roi: FieldRef<"Investment", 'Float'>
    readonly nextDistributionDate: FieldRef<"Investment", 'DateTime'>
    readonly amount: FieldRef<"Investment", 'Float'>
    readonly status: FieldRef<"Investment", 'String'>
    readonly startDate: FieldRef<"Investment", 'DateTime'>
    readonly endDate: FieldRef<"Investment", 'DateTime'>
    readonly returnRate: FieldRef<"Investment", 'Float'>
    readonly currentValue: FieldRef<"Investment", 'Float'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
    readonly updatedAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
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


  export const InvestorSummaryScalarFieldEnum: {
    id: 'id',
    totalInvested: 'totalInvested',
    currentValue: 'currentValue',
    totalReturn: 'totalReturn',
    returnPercentage: 'returnPercentage',
    activeInvestments: 'activeInvestments',
    completedInvestments: 'completedInvestments',
    distributionsReceived: 'distributionsReceived',
    outstandingCommitments: 'outstandingCommitments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestorSummaryScalarFieldEnum = (typeof InvestorSummaryScalarFieldEnum)[keyof typeof InvestorSummaryScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    investorId: 'investorId',
    projectName: 'projectName',
    tokenClass: 'tokenClass',
    sharesOwned: 'sharesOwned',
    marketValue: 'marketValue',
    roi: 'roi',
    nextDistributionDate: 'nextDistributionDate',
    amount: 'amount',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    returnRate: 'returnRate',
    currentValue: 'currentValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    
  /**
   * Deep Input Types
   */


  export type InvestorSummaryWhereInput = {
    AND?: InvestorSummaryWhereInput | InvestorSummaryWhereInput[]
    OR?: InvestorSummaryWhereInput[]
    NOT?: InvestorSummaryWhereInput | InvestorSummaryWhereInput[]
    id?: IntFilter<"InvestorSummary"> | number
    totalInvested?: FloatFilter<"InvestorSummary"> | number
    currentValue?: FloatFilter<"InvestorSummary"> | number
    totalReturn?: FloatFilter<"InvestorSummary"> | number
    returnPercentage?: FloatFilter<"InvestorSummary"> | number
    activeInvestments?: IntFilter<"InvestorSummary"> | number
    completedInvestments?: IntFilter<"InvestorSummary"> | number
    distributionsReceived?: FloatFilter<"InvestorSummary"> | number
    outstandingCommitments?: FloatFilter<"InvestorSummary"> | number
    createdAt?: DateTimeFilter<"InvestorSummary"> | Date | string
    updatedAt?: DateTimeFilter<"InvestorSummary"> | Date | string
    investments?: InvestmentListRelationFilter
  }

  export type InvestorSummaryOrderByWithRelationInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investments?: InvestmentOrderByRelationAggregateInput
  }

  export type InvestorSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvestorSummaryWhereInput | InvestorSummaryWhereInput[]
    OR?: InvestorSummaryWhereInput[]
    NOT?: InvestorSummaryWhereInput | InvestorSummaryWhereInput[]
    totalInvested?: FloatFilter<"InvestorSummary"> | number
    currentValue?: FloatFilter<"InvestorSummary"> | number
    totalReturn?: FloatFilter<"InvestorSummary"> | number
    returnPercentage?: FloatFilter<"InvestorSummary"> | number
    activeInvestments?: IntFilter<"InvestorSummary"> | number
    completedInvestments?: IntFilter<"InvestorSummary"> | number
    distributionsReceived?: FloatFilter<"InvestorSummary"> | number
    outstandingCommitments?: FloatFilter<"InvestorSummary"> | number
    createdAt?: DateTimeFilter<"InvestorSummary"> | Date | string
    updatedAt?: DateTimeFilter<"InvestorSummary"> | Date | string
    investments?: InvestmentListRelationFilter
  }, "id">

  export type InvestorSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestorSummaryCountOrderByAggregateInput
    _avg?: InvestorSummaryAvgOrderByAggregateInput
    _max?: InvestorSummaryMaxOrderByAggregateInput
    _min?: InvestorSummaryMinOrderByAggregateInput
    _sum?: InvestorSummarySumOrderByAggregateInput
  }

  export type InvestorSummaryScalarWhereWithAggregatesInput = {
    AND?: InvestorSummaryScalarWhereWithAggregatesInput | InvestorSummaryScalarWhereWithAggregatesInput[]
    OR?: InvestorSummaryScalarWhereWithAggregatesInput[]
    NOT?: InvestorSummaryScalarWhereWithAggregatesInput | InvestorSummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InvestorSummary"> | number
    totalInvested?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    currentValue?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    totalReturn?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    returnPercentage?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    activeInvestments?: IntWithAggregatesFilter<"InvestorSummary"> | number
    completedInvestments?: IntWithAggregatesFilter<"InvestorSummary"> | number
    distributionsReceived?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    outstandingCommitments?: FloatWithAggregatesFilter<"InvestorSummary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvestorSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvestorSummary"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: IntFilter<"Investment"> | number
    investorId?: IntFilter<"Investment"> | number
    projectName?: StringFilter<"Investment"> | string
    tokenClass?: StringFilter<"Investment"> | string
    sharesOwned?: FloatFilter<"Investment"> | number
    marketValue?: FloatFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    nextDistributionDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    amount?: FloatFilter<"Investment"> | number
    status?: StringFilter<"Investment"> | string
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeFilter<"Investment"> | Date | string
    returnRate?: FloatFilter<"Investment"> | number
    currentValue?: FloatFilter<"Investment"> | number
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    investor?: XOR<InvestorSummaryScalarRelationFilter, InvestorSummaryWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    investorId?: SortOrder
    projectName?: SortOrder
    tokenClass?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    nextDistributionDate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    investor?: InvestorSummaryOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    investorId?: IntFilter<"Investment"> | number
    projectName?: StringFilter<"Investment"> | string
    tokenClass?: StringFilter<"Investment"> | string
    sharesOwned?: FloatFilter<"Investment"> | number
    marketValue?: FloatFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    nextDistributionDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    amount?: FloatFilter<"Investment"> | number
    status?: StringFilter<"Investment"> | string
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeFilter<"Investment"> | Date | string
    returnRate?: FloatFilter<"Investment"> | number
    currentValue?: FloatFilter<"Investment"> | number
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    investor?: XOR<InvestorSummaryScalarRelationFilter, InvestorSummaryWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    investorId?: SortOrder
    projectName?: SortOrder
    tokenClass?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    nextDistributionDate?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Investment"> | number
    investorId?: IntWithAggregatesFilter<"Investment"> | number
    projectName?: StringWithAggregatesFilter<"Investment"> | string
    tokenClass?: StringWithAggregatesFilter<"Investment"> | string
    sharesOwned?: FloatWithAggregatesFilter<"Investment"> | number
    marketValue?: FloatWithAggregatesFilter<"Investment"> | number
    roi?: FloatWithAggregatesFilter<"Investment"> | number
    nextDistributionDate?: DateTimeNullableWithAggregatesFilter<"Investment"> | Date | string | null
    amount?: FloatWithAggregatesFilter<"Investment"> | number
    status?: StringWithAggregatesFilter<"Investment"> | string
    startDate?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    returnRate?: FloatWithAggregatesFilter<"Investment"> | number
    currentValue?: FloatWithAggregatesFilter<"Investment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type InvestorSummaryCreateInput = {
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
  }

  export type InvestorSummaryUncheckedCreateInput = {
    id?: number
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type InvestorSummaryUpdateInput = {
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorSummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorSummaryCreateManyInput = {
    id?: number
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorSummaryUpdateManyMutationInput = {
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorSummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
    investor: InvestorSummaryCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: number
    investorId: number
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investor?: InvestorSummaryUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    investorId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInput = {
    id?: number
    investorId: number
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    investorId?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestorSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
  }

  export type InvestorSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestorSummarySumOrderByAggregateInput = {
    id?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    totalReturn?: SortOrder
    returnPercentage?: SortOrder
    activeInvestments?: SortOrder
    completedInvestments?: SortOrder
    distributionsReceived?: SortOrder
    outstandingCommitments?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type InvestorSummaryScalarRelationFilter = {
    is?: InvestorSummaryWhereInput
    isNot?: InvestorSummaryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    investorId?: SortOrder
    projectName?: SortOrder
    tokenClass?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    nextDistributionDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    id?: SortOrder
    investorId?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    amount?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    investorId?: SortOrder
    projectName?: SortOrder
    tokenClass?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    nextDistributionDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    investorId?: SortOrder
    projectName?: SortOrder
    tokenClass?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    nextDistributionDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    id?: SortOrder
    investorId?: SortOrder
    sharesOwned?: SortOrder
    marketValue?: SortOrder
    roi?: SortOrder
    amount?: SortOrder
    returnRate?: SortOrder
    currentValue?: SortOrder
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

  export type InvestmentCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvestmentUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestorSummaryCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<InvestorSummaryCreateWithoutInvestmentsInput, InvestorSummaryUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestorSummaryCreateOrConnectWithoutInvestmentsInput
    connect?: InvestorSummaryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InvestorSummaryUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<InvestorSummaryCreateWithoutInvestmentsInput, InvestorSummaryUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestorSummaryCreateOrConnectWithoutInvestmentsInput
    upsert?: InvestorSummaryUpsertWithoutInvestmentsInput
    connect?: InvestorSummaryWhereUniqueInput
    update?: XOR<XOR<InvestorSummaryUpdateToOneWithWhereWithoutInvestmentsInput, InvestorSummaryUpdateWithoutInvestmentsInput>, InvestorSummaryUncheckedUpdateWithoutInvestmentsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type InvestmentCreateWithoutInvestorInput = {
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUncheckedCreateWithoutInvestorInput = {
    id?: number
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentCreateManyInvestorInputEnvelope = {
    data: InvestmentCreateManyInvestorInput | InvestmentCreateManyInvestorInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInvestorInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInvestorInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: IntFilter<"Investment"> | number
    investorId?: IntFilter<"Investment"> | number
    projectName?: StringFilter<"Investment"> | string
    tokenClass?: StringFilter<"Investment"> | string
    sharesOwned?: FloatFilter<"Investment"> | number
    marketValue?: FloatFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    nextDistributionDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    amount?: FloatFilter<"Investment"> | number
    status?: StringFilter<"Investment"> | string
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeFilter<"Investment"> | Date | string
    returnRate?: FloatFilter<"Investment"> | number
    currentValue?: FloatFilter<"Investment"> | number
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type InvestorSummaryCreateWithoutInvestmentsInput = {
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorSummaryUncheckedCreateWithoutInvestmentsInput = {
    id?: number
    totalInvested: number
    currentValue: number
    totalReturn: number
    returnPercentage: number
    activeInvestments: number
    completedInvestments: number
    distributionsReceived: number
    outstandingCommitments: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestorSummaryCreateOrConnectWithoutInvestmentsInput = {
    where: InvestorSummaryWhereUniqueInput
    create: XOR<InvestorSummaryCreateWithoutInvestmentsInput, InvestorSummaryUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestorSummaryUpsertWithoutInvestmentsInput = {
    update: XOR<InvestorSummaryUpdateWithoutInvestmentsInput, InvestorSummaryUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<InvestorSummaryCreateWithoutInvestmentsInput, InvestorSummaryUncheckedCreateWithoutInvestmentsInput>
    where?: InvestorSummaryWhereInput
  }

  export type InvestorSummaryUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: InvestorSummaryWhereInput
    data: XOR<InvestorSummaryUpdateWithoutInvestmentsInput, InvestorSummaryUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestorSummaryUpdateWithoutInvestmentsInput = {
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestorSummaryUncheckedUpdateWithoutInvestmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    totalReturn?: FloatFieldUpdateOperationsInput | number
    returnPercentage?: FloatFieldUpdateOperationsInput | number
    activeInvestments?: IntFieldUpdateOperationsInput | number
    completedInvestments?: IntFieldUpdateOperationsInput | number
    distributionsReceived?: FloatFieldUpdateOperationsInput | number
    outstandingCommitments?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInvestorInput = {
    id?: number
    projectName: string
    tokenClass: string
    sharesOwned: number
    marketValue: number
    roi: number
    nextDistributionDate?: Date | string | null
    amount: number
    status: string
    startDate: Date | string
    endDate: Date | string
    returnRate: number
    currentValue: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateWithoutInvestorInput = {
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateWithoutInvestorInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectName?: StringFieldUpdateOperationsInput | string
    tokenClass?: StringFieldUpdateOperationsInput | string
    sharesOwned?: FloatFieldUpdateOperationsInput | number
    marketValue?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    nextDistributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnRate?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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