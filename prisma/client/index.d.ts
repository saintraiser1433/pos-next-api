
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
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Variations
 * 
 */
export type Variations = $Result.DefaultSelection<Prisma.$VariationsPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model BaseUnit
 * 
 */
export type BaseUnit = $Result.DefaultSelection<Prisma.$BaseUnitPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BarcodeType: {
  CODE128: 'CODE128',
  CODE39: 'CODE39'
};

export type BarcodeType = (typeof BarcodeType)[keyof typeof BarcodeType]


export const TaxType: {
  EXCLUSIVE: 'EXCLUSIVE',
  INCLUSIVE: 'INCLUSIVE'
};

export type TaxType = (typeof TaxType)[keyof typeof TaxType]


export const ProductType: {
  STANDARD: 'STANDARD',
  VARIABLE: 'VARIABLE'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]


export const PaymentType: {
  MONTH: 'MONTH',
  DAYS: 'DAYS',
  YEARS: 'YEARS'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

}

export type BarcodeType = $Enums.BarcodeType

export const BarcodeType: typeof $Enums.BarcodeType

export type TaxType = $Enums.TaxType

export const TaxType: typeof $Enums.TaxType

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProductCategories
 * const productCategories = await prisma.productCategory.findMany()
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
   * // Fetch zero or more ProductCategories
   * const productCategories = await prisma.productCategory.findMany()
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
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variations`: Exposes CRUD operations for the **Variations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variations
    * const variations = await prisma.variations.findMany()
    * ```
    */
  get variations(): Prisma.VariationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.baseUnit`: Exposes CRUD operations for the **BaseUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseUnits
    * const baseUnits = await prisma.baseUnit.findMany()
    * ```
    */
  get baseUnit(): Prisma.BaseUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
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
    ProductCategory: 'ProductCategory',
    Brand: 'Brand',
    Variations: 'Variations',
    Unit: 'Unit',
    BaseUnit: 'BaseUnit',
    Product: 'Product'
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
      modelProps: "productCategory" | "brand" | "variations" | "unit" | "baseUnit" | "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Variations: {
        payload: Prisma.$VariationsPayload<ExtArgs>
        fields: Prisma.VariationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          findFirst: {
            args: Prisma.VariationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          findMany: {
            args: Prisma.VariationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>[]
          }
          create: {
            args: Prisma.VariationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          createMany: {
            args: Prisma.VariationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>[]
          }
          delete: {
            args: Prisma.VariationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          update: {
            args: Prisma.VariationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          deleteMany: {
            args: Prisma.VariationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>[]
          }
          upsert: {
            args: Prisma.VariationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          aggregate: {
            args: Prisma.VariationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariations>
          }
          groupBy: {
            args: Prisma.VariationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationsCountArgs<ExtArgs>
            result: $Utils.Optional<VariationsCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      BaseUnit: {
        payload: Prisma.$BaseUnitPayload<ExtArgs>
        fields: Prisma.BaseUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          findFirst: {
            args: Prisma.BaseUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          findMany: {
            args: Prisma.BaseUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>[]
          }
          create: {
            args: Prisma.BaseUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          createMany: {
            args: Prisma.BaseUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>[]
          }
          delete: {
            args: Prisma.BaseUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          update: {
            args: Prisma.BaseUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          deleteMany: {
            args: Prisma.BaseUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>[]
          }
          upsert: {
            args: Prisma.BaseUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUnitPayload>
          }
          aggregate: {
            args: Prisma.BaseUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseUnit>
          }
          groupBy: {
            args: Prisma.BaseUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseUnitCountArgs<ExtArgs>
            result: $Utils.Optional<BaseUnitCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
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
    productCategory?: ProductCategoryOmit
    brand?: BrandOmit
    variations?: VariationsOmit
    unit?: UnitOmit
    baseUnit?: BaseUnitOmit
    product?: ProductOmit
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
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    Product: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductCategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Product: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | BrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    saleUnit: number
    purchaseUnit: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleUnit?: boolean | UnitCountOutputTypeCountSaleUnitArgs
    purchaseUnit?: boolean | UnitCountOutputTypeCountPurchaseUnitArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountSaleUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountPurchaseUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type BaseUnitCountOutputType
   */

  export type BaseUnitCountOutputType = {
    productUnit: number
    Unit: number
  }

  export type BaseUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productUnit?: boolean | BaseUnitCountOutputTypeCountProductUnitArgs
    Unit?: boolean | BaseUnitCountOutputTypeCountUnitArgs
  }

  // Custom InputTypes
  /**
   * BaseUnitCountOutputType without action
   */
  export type BaseUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnitCountOutputType
     */
    select?: BaseUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseUnitCountOutputType without action
   */
  export type BaseUnitCountOutputTypeCountProductUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BaseUnitCountOutputType without action
   */
  export type BaseUnitCountOutputTypeCountUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ProductCategorySumAggregateInputType = {
    id?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: number
    name: string
    status: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | ProductCategory$ProductArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductCategory$ProductArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductCategory$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'Int'>
    readonly name: FieldRef<"ProductCategory", 'String'>
    readonly status: FieldRef<"ProductCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory createManyAndReturn
   */
  export type ProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory updateManyAndReturn
   */
  export type ProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.Product
   */
  export type ProductCategory$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brandImage: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brandImage: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    description: number
    brandImage: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brandImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brandImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brandImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    name: string
    description: string
    brandImage: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brandImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brandImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brandImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    brandImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "brandImage" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      brandImage: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Brand$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
    readonly brandImage: FieldRef<"Brand", 'String'>
    readonly status: FieldRef<"Brand", 'Boolean'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.Product
   */
  export type Brand$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Variations
   */

  export type AggregateVariations = {
    _count: VariationsCountAggregateOutputType | null
    _avg: VariationsAvgAggregateOutputType | null
    _sum: VariationsSumAggregateOutputType | null
    _min: VariationsMinAggregateOutputType | null
    _max: VariationsMaxAggregateOutputType | null
  }

  export type VariationsAvgAggregateOutputType = {
    id: number | null
  }

  export type VariationsSumAggregateOutputType = {
    id: number | null
  }

  export type VariationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariationsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariationsAvgAggregateInputType = {
    id?: true
  }

  export type VariationsSumAggregateInputType = {
    id?: true
  }

  export type VariationsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariationsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VariationsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VariationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to aggregate.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variations
    **/
    _count?: true | VariationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationsMaxAggregateInputType
  }

  export type GetVariationsAggregateType<T extends VariationsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariations[P]>
      : GetScalarType<T[P], AggregateVariations[P]>
  }




  export type VariationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationsWhereInput
    orderBy?: VariationsOrderByWithAggregationInput | VariationsOrderByWithAggregationInput[]
    by: VariationsScalarFieldEnum[] | VariationsScalarFieldEnum
    having?: VariationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationsCountAggregateInputType | true
    _avg?: VariationsAvgAggregateInputType
    _sum?: VariationsSumAggregateInputType
    _min?: VariationsMinAggregateInputType
    _max?: VariationsMaxAggregateInputType
  }

  export type VariationsGroupByOutputType = {
    id: number
    name: string
    type: string
    status: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: VariationsCountAggregateOutputType | null
    _avg: VariationsAvgAggregateOutputType | null
    _sum: VariationsSumAggregateOutputType | null
    _min: VariationsMinAggregateOutputType | null
    _max: VariationsMaxAggregateOutputType | null
  }

  type GetVariationsGroupByPayload<T extends VariationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationsGroupByOutputType[P]>
            : GetScalarType<T[P], VariationsGroupByOutputType[P]>
        }
      >
    >


  export type VariationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variations"]>

  export type VariationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variations"]>

  export type VariationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["variations"]>

  export type VariationsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VariationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["variations"]>

  export type $VariationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      status: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["variations"]>
    composites: {}
  }

  type VariationsGetPayload<S extends boolean | null | undefined | VariationsDefaultArgs> = $Result.GetResult<Prisma.$VariationsPayload, S>

  type VariationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariationsCountAggregateInputType | true
    }

  export interface VariationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variations'], meta: { name: 'Variations' } }
    /**
     * Find zero or one Variations that matches the filter.
     * @param {VariationsFindUniqueArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationsFindUniqueArgs>(args: SelectSubset<T, VariationsFindUniqueArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationsFindUniqueOrThrowArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationsFindUniqueOrThrowArgs>(args: SelectSubset<T, VariationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindFirstArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationsFindFirstArgs>(args?: SelectSubset<T, VariationsFindFirstArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindFirstOrThrowArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationsFindFirstOrThrowArgs>(args?: SelectSubset<T, VariationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variations
     * const variations = await prisma.variations.findMany()
     * 
     * // Get first 10 Variations
     * const variations = await prisma.variations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationsWithIdOnly = await prisma.variations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariationsFindManyArgs>(args?: SelectSubset<T, VariationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variations.
     * @param {VariationsCreateArgs} args - Arguments to create a Variations.
     * @example
     * // Create one Variations
     * const Variations = await prisma.variations.create({
     *   data: {
     *     // ... data to create a Variations
     *   }
     * })
     * 
     */
    create<T extends VariationsCreateArgs>(args: SelectSubset<T, VariationsCreateArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variations.
     * @param {VariationsCreateManyArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variations = await prisma.variations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariationsCreateManyArgs>(args?: SelectSubset<T, VariationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variations and returns the data saved in the database.
     * @param {VariationsCreateManyAndReturnArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variations = await prisma.variations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variations and only return the `id`
     * const variationsWithIdOnly = await prisma.variations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariationsCreateManyAndReturnArgs>(args?: SelectSubset<T, VariationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variations.
     * @param {VariationsDeleteArgs} args - Arguments to delete one Variations.
     * @example
     * // Delete one Variations
     * const Variations = await prisma.variations.delete({
     *   where: {
     *     // ... filter to delete one Variations
     *   }
     * })
     * 
     */
    delete<T extends VariationsDeleteArgs>(args: SelectSubset<T, VariationsDeleteArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variations.
     * @param {VariationsUpdateArgs} args - Arguments to update one Variations.
     * @example
     * // Update one Variations
     * const variations = await prisma.variations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariationsUpdateArgs>(args: SelectSubset<T, VariationsUpdateArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variations.
     * @param {VariationsDeleteManyArgs} args - Arguments to filter Variations to delete.
     * @example
     * // Delete a few Variations
     * const { count } = await prisma.variations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariationsDeleteManyArgs>(args?: SelectSubset<T, VariationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variations
     * const variations = await prisma.variations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariationsUpdateManyArgs>(args: SelectSubset<T, VariationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations and returns the data updated in the database.
     * @param {VariationsUpdateManyAndReturnArgs} args - Arguments to update many Variations.
     * @example
     * // Update many Variations
     * const variations = await prisma.variations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variations and only return the `id`
     * const variationsWithIdOnly = await prisma.variations.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationsUpdateManyAndReturnArgs>(args: SelectSubset<T, VariationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variations.
     * @param {VariationsUpsertArgs} args - Arguments to update or create a Variations.
     * @example
     * // Update or create a Variations
     * const variations = await prisma.variations.upsert({
     *   create: {
     *     // ... data to create a Variations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variations we want to update
     *   }
     * })
     */
    upsert<T extends VariationsUpsertArgs>(args: SelectSubset<T, VariationsUpsertArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsCountArgs} args - Arguments to filter Variations to count.
     * @example
     * // Count the number of Variations
     * const count = await prisma.variations.count({
     *   where: {
     *     // ... the filter for the Variations we want to count
     *   }
     * })
    **/
    count<T extends VariationsCountArgs>(
      args?: Subset<T, VariationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationsAggregateArgs>(args: Subset<T, VariationsAggregateArgs>): Prisma.PrismaPromise<GetVariationsAggregateType<T>>

    /**
     * Group by Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsGroupByArgs} args - Group by arguments.
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
      T extends VariationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationsGroupByArgs['orderBy'] }
        : { orderBy?: VariationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variations model
   */
  readonly fields: VariationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Variations model
   */
  interface VariationsFieldRefs {
    readonly id: FieldRef<"Variations", 'Int'>
    readonly name: FieldRef<"Variations", 'String'>
    readonly type: FieldRef<"Variations", 'String'>
    readonly status: FieldRef<"Variations", 'Boolean'>
    readonly createdAt: FieldRef<"Variations", 'DateTime'>
    readonly updatedAt: FieldRef<"Variations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variations findUnique
   */
  export type VariationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where: VariationsWhereUniqueInput
  }

  /**
   * Variations findUniqueOrThrow
   */
  export type VariationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where: VariationsWhereUniqueInput
  }

  /**
   * Variations findFirst
   */
  export type VariationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }

  /**
   * Variations findFirstOrThrow
   */
  export type VariationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }

  /**
   * Variations findMany
   */
  export type VariationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }

  /**
   * Variations create
   */
  export type VariationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * The data needed to create a Variations.
     */
    data: XOR<VariationsCreateInput, VariationsUncheckedCreateInput>
  }

  /**
   * Variations createMany
   */
  export type VariationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variations.
     */
    data: VariationsCreateManyInput | VariationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variations createManyAndReturn
   */
  export type VariationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * The data used to create many Variations.
     */
    data: VariationsCreateManyInput | VariationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variations update
   */
  export type VariationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * The data needed to update a Variations.
     */
    data: XOR<VariationsUpdateInput, VariationsUncheckedUpdateInput>
    /**
     * Choose, which Variations to update.
     */
    where: VariationsWhereUniqueInput
  }

  /**
   * Variations updateMany
   */
  export type VariationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationsUpdateManyMutationInput, VariationsUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationsWhereInput
    /**
     * Limit how many Variations to update.
     */
    limit?: number
  }

  /**
   * Variations updateManyAndReturn
   */
  export type VariationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationsUpdateManyMutationInput, VariationsUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationsWhereInput
    /**
     * Limit how many Variations to update.
     */
    limit?: number
  }

  /**
   * Variations upsert
   */
  export type VariationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * The filter to search for the Variations to update in case it exists.
     */
    where: VariationsWhereUniqueInput
    /**
     * In case the Variations found by the `where` argument doesn't exist, create a new Variations with this data.
     */
    create: XOR<VariationsCreateInput, VariationsUncheckedCreateInput>
    /**
     * In case the Variations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationsUpdateInput, VariationsUncheckedUpdateInput>
  }

  /**
   * Variations delete
   */
  export type VariationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
    /**
     * Filter which Variations to delete.
     */
    where: VariationsWhereUniqueInput
  }

  /**
   * Variations deleteMany
   */
  export type VariationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to delete
     */
    where?: VariationsWhereInput
    /**
     * Limit how many Variations to delete.
     */
    limit?: number
  }

  /**
   * Variations without action
   */
  export type VariationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variations
     */
    omit?: VariationsOmit<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    id: number | null
    baseUnitId: number | null
    operationValue: number | null
  }

  export type UnitSumAggregateOutputType = {
    id: number | null
    baseUnitId: number | null
    operationValue: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    baseUnitId: number | null
    status: boolean | null
    operator: string | null
    operationValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    baseUnitId: number | null
    status: boolean | null
    operator: string | null
    operationValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    baseUnitId: number
    status: number
    operator: number
    operationValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    id?: true
    baseUnitId?: true
    operationValue?: true
  }

  export type UnitSumAggregateInputType = {
    id?: true
    baseUnitId?: true
    operationValue?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    baseUnitId?: true
    status?: true
    operator?: true
    operationValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    baseUnitId?: true
    status?: true
    operator?: true
    operationValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    baseUnitId?: true
    status?: true
    operator?: true
    operationValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: number
    name: string
    shortName: string
    baseUnitId: number
    status: boolean
    operator: string
    operationValue: number
    createdAt: Date
    updatedAt: Date | null
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    baseUnitId?: boolean
    status?: boolean
    operator?: boolean
    operationValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | Unit$saleUnitArgs<ExtArgs>
    purchaseUnit?: boolean | Unit$purchaseUnitArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    baseUnitId?: boolean
    status?: boolean
    operator?: boolean
    operationValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    baseUnitId?: boolean
    status?: boolean
    operator?: boolean
    operationValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    baseUnitId?: boolean
    status?: boolean
    operator?: boolean
    operationValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName" | "baseUnitId" | "status" | "operator" | "operationValue" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | Unit$saleUnitArgs<ExtArgs>
    purchaseUnit?: boolean | Unit$purchaseUnitArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      baseUnit: Prisma.$BaseUnitPayload<ExtArgs>
      saleUnit: Prisma.$ProductPayload<ExtArgs>[]
      purchaseUnit: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shortName: string
      baseUnitId: number
      status: boolean
      operator: string
      operationValue: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseUnit<T extends BaseUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUnitDefaultArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleUnit<T extends Unit$saleUnitArgs<ExtArgs> = {}>(args?: Subset<T, Unit$saleUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseUnit<T extends Unit$purchaseUnitArgs<ExtArgs> = {}>(args?: Subset<T, Unit$purchaseUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'Int'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly shortName: FieldRef<"Unit", 'String'>
    readonly baseUnitId: FieldRef<"Unit", 'Int'>
    readonly status: FieldRef<"Unit", 'Boolean'>
    readonly operator: FieldRef<"Unit", 'String'>
    readonly operationValue: FieldRef<"Unit", 'Int'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.saleUnit
   */
  export type Unit$saleUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Unit.purchaseUnit
   */
  export type Unit$purchaseUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model BaseUnit
   */

  export type AggregateBaseUnit = {
    _count: BaseUnitCountAggregateOutputType | null
    _avg: BaseUnitAvgAggregateOutputType | null
    _sum: BaseUnitSumAggregateOutputType | null
    _min: BaseUnitMinAggregateOutputType | null
    _max: BaseUnitMaxAggregateOutputType | null
  }

  export type BaseUnitAvgAggregateOutputType = {
    id: number | null
  }

  export type BaseUnitSumAggregateOutputType = {
    id: number | null
  }

  export type BaseUnitMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseUnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseUnitCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BaseUnitAvgAggregateInputType = {
    id?: true
  }

  export type BaseUnitSumAggregateInputType = {
    id?: true
  }

  export type BaseUnitMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseUnitMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseUnitCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BaseUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseUnit to aggregate.
     */
    where?: BaseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUnits to fetch.
     */
    orderBy?: BaseUnitOrderByWithRelationInput | BaseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseUnits
    **/
    _count?: true | BaseUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaseUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaseUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseUnitMaxAggregateInputType
  }

  export type GetBaseUnitAggregateType<T extends BaseUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseUnit[P]>
      : GetScalarType<T[P], AggregateBaseUnit[P]>
  }




  export type BaseUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseUnitWhereInput
    orderBy?: BaseUnitOrderByWithAggregationInput | BaseUnitOrderByWithAggregationInput[]
    by: BaseUnitScalarFieldEnum[] | BaseUnitScalarFieldEnum
    having?: BaseUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseUnitCountAggregateInputType | true
    _avg?: BaseUnitAvgAggregateInputType
    _sum?: BaseUnitSumAggregateInputType
    _min?: BaseUnitMinAggregateInputType
    _max?: BaseUnitMaxAggregateInputType
  }

  export type BaseUnitGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date | null
    _count: BaseUnitCountAggregateOutputType | null
    _avg: BaseUnitAvgAggregateOutputType | null
    _sum: BaseUnitSumAggregateOutputType | null
    _min: BaseUnitMinAggregateOutputType | null
    _max: BaseUnitMaxAggregateOutputType | null
  }

  type GetBaseUnitGroupByPayload<T extends BaseUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseUnitGroupByOutputType[P]>
            : GetScalarType<T[P], BaseUnitGroupByOutputType[P]>
        }
      >
    >


  export type BaseUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productUnit?: boolean | BaseUnit$productUnitArgs<ExtArgs>
    Unit?: boolean | BaseUnit$UnitArgs<ExtArgs>
    _count?: boolean | BaseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseUnit"]>

  export type BaseUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["baseUnit"]>

  export type BaseUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["baseUnit"]>

  export type BaseUnitSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BaseUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["baseUnit"]>
  export type BaseUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productUnit?: boolean | BaseUnit$productUnitArgs<ExtArgs>
    Unit?: boolean | BaseUnit$UnitArgs<ExtArgs>
    _count?: boolean | BaseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BaseUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseUnit"
    objects: {
      productUnit: Prisma.$ProductPayload<ExtArgs>[]
      Unit: Prisma.$UnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["baseUnit"]>
    composites: {}
  }

  type BaseUnitGetPayload<S extends boolean | null | undefined | BaseUnitDefaultArgs> = $Result.GetResult<Prisma.$BaseUnitPayload, S>

  type BaseUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseUnitCountAggregateInputType | true
    }

  export interface BaseUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseUnit'], meta: { name: 'BaseUnit' } }
    /**
     * Find zero or one BaseUnit that matches the filter.
     * @param {BaseUnitFindUniqueArgs} args - Arguments to find a BaseUnit
     * @example
     * // Get one BaseUnit
     * const baseUnit = await prisma.baseUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseUnitFindUniqueArgs>(args: SelectSubset<T, BaseUnitFindUniqueArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BaseUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseUnitFindUniqueOrThrowArgs} args - Arguments to find a BaseUnit
     * @example
     * // Get one BaseUnit
     * const baseUnit = await prisma.baseUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitFindFirstArgs} args - Arguments to find a BaseUnit
     * @example
     * // Get one BaseUnit
     * const baseUnit = await prisma.baseUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseUnitFindFirstArgs>(args?: SelectSubset<T, BaseUnitFindFirstArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitFindFirstOrThrowArgs} args - Arguments to find a BaseUnit
     * @example
     * // Get one BaseUnit
     * const baseUnit = await prisma.baseUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BaseUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseUnits
     * const baseUnits = await prisma.baseUnit.findMany()
     * 
     * // Get first 10 BaseUnits
     * const baseUnits = await prisma.baseUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseUnitWithIdOnly = await prisma.baseUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseUnitFindManyArgs>(args?: SelectSubset<T, BaseUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BaseUnit.
     * @param {BaseUnitCreateArgs} args - Arguments to create a BaseUnit.
     * @example
     * // Create one BaseUnit
     * const BaseUnit = await prisma.baseUnit.create({
     *   data: {
     *     // ... data to create a BaseUnit
     *   }
     * })
     * 
     */
    create<T extends BaseUnitCreateArgs>(args: SelectSubset<T, BaseUnitCreateArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BaseUnits.
     * @param {BaseUnitCreateManyArgs} args - Arguments to create many BaseUnits.
     * @example
     * // Create many BaseUnits
     * const baseUnit = await prisma.baseUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseUnitCreateManyArgs>(args?: SelectSubset<T, BaseUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseUnits and returns the data saved in the database.
     * @param {BaseUnitCreateManyAndReturnArgs} args - Arguments to create many BaseUnits.
     * @example
     * // Create many BaseUnits
     * const baseUnit = await prisma.baseUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseUnits and only return the `id`
     * const baseUnitWithIdOnly = await prisma.baseUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BaseUnit.
     * @param {BaseUnitDeleteArgs} args - Arguments to delete one BaseUnit.
     * @example
     * // Delete one BaseUnit
     * const BaseUnit = await prisma.baseUnit.delete({
     *   where: {
     *     // ... filter to delete one BaseUnit
     *   }
     * })
     * 
     */
    delete<T extends BaseUnitDeleteArgs>(args: SelectSubset<T, BaseUnitDeleteArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BaseUnit.
     * @param {BaseUnitUpdateArgs} args - Arguments to update one BaseUnit.
     * @example
     * // Update one BaseUnit
     * const baseUnit = await prisma.baseUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUnitUpdateArgs>(args: SelectSubset<T, BaseUnitUpdateArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BaseUnits.
     * @param {BaseUnitDeleteManyArgs} args - Arguments to filter BaseUnits to delete.
     * @example
     * // Delete a few BaseUnits
     * const { count } = await prisma.baseUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseUnitDeleteManyArgs>(args?: SelectSubset<T, BaseUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseUnits
     * const baseUnit = await prisma.baseUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUnitUpdateManyArgs>(args: SelectSubset<T, BaseUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseUnits and returns the data updated in the database.
     * @param {BaseUnitUpdateManyAndReturnArgs} args - Arguments to update many BaseUnits.
     * @example
     * // Update many BaseUnits
     * const baseUnit = await prisma.baseUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BaseUnits and only return the `id`
     * const baseUnitWithIdOnly = await prisma.baseUnit.updateManyAndReturn({
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
    updateManyAndReturn<T extends BaseUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BaseUnit.
     * @param {BaseUnitUpsertArgs} args - Arguments to update or create a BaseUnit.
     * @example
     * // Update or create a BaseUnit
     * const baseUnit = await prisma.baseUnit.upsert({
     *   create: {
     *     // ... data to create a BaseUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseUnit we want to update
     *   }
     * })
     */
    upsert<T extends BaseUnitUpsertArgs>(args: SelectSubset<T, BaseUnitUpsertArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BaseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitCountArgs} args - Arguments to filter BaseUnits to count.
     * @example
     * // Count the number of BaseUnits
     * const count = await prisma.baseUnit.count({
     *   where: {
     *     // ... the filter for the BaseUnits we want to count
     *   }
     * })
    **/
    count<T extends BaseUnitCountArgs>(
      args?: Subset<T, BaseUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BaseUnitAggregateArgs>(args: Subset<T, BaseUnitAggregateArgs>): Prisma.PrismaPromise<GetBaseUnitAggregateType<T>>

    /**
     * Group by BaseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUnitGroupByArgs} args - Group by arguments.
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
      T extends BaseUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseUnitGroupByArgs['orderBy'] }
        : { orderBy?: BaseUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BaseUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseUnit model
   */
  readonly fields: BaseUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productUnit<T extends BaseUnit$productUnitArgs<ExtArgs> = {}>(args?: Subset<T, BaseUnit$productUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Unit<T extends BaseUnit$UnitArgs<ExtArgs> = {}>(args?: Subset<T, BaseUnit$UnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BaseUnit model
   */
  interface BaseUnitFieldRefs {
    readonly id: FieldRef<"BaseUnit", 'Int'>
    readonly name: FieldRef<"BaseUnit", 'String'>
    readonly createdAt: FieldRef<"BaseUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"BaseUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BaseUnit findUnique
   */
  export type BaseUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter, which BaseUnit to fetch.
     */
    where: BaseUnitWhereUniqueInput
  }

  /**
   * BaseUnit findUniqueOrThrow
   */
  export type BaseUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter, which BaseUnit to fetch.
     */
    where: BaseUnitWhereUniqueInput
  }

  /**
   * BaseUnit findFirst
   */
  export type BaseUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter, which BaseUnit to fetch.
     */
    where?: BaseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUnits to fetch.
     */
    orderBy?: BaseUnitOrderByWithRelationInput | BaseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseUnits.
     */
    cursor?: BaseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseUnits.
     */
    distinct?: BaseUnitScalarFieldEnum | BaseUnitScalarFieldEnum[]
  }

  /**
   * BaseUnit findFirstOrThrow
   */
  export type BaseUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter, which BaseUnit to fetch.
     */
    where?: BaseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUnits to fetch.
     */
    orderBy?: BaseUnitOrderByWithRelationInput | BaseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseUnits.
     */
    cursor?: BaseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseUnits.
     */
    distinct?: BaseUnitScalarFieldEnum | BaseUnitScalarFieldEnum[]
  }

  /**
   * BaseUnit findMany
   */
  export type BaseUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter, which BaseUnits to fetch.
     */
    where?: BaseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUnits to fetch.
     */
    orderBy?: BaseUnitOrderByWithRelationInput | BaseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseUnits.
     */
    cursor?: BaseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUnits.
     */
    skip?: number
    distinct?: BaseUnitScalarFieldEnum | BaseUnitScalarFieldEnum[]
  }

  /**
   * BaseUnit create
   */
  export type BaseUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseUnit.
     */
    data: XOR<BaseUnitCreateInput, BaseUnitUncheckedCreateInput>
  }

  /**
   * BaseUnit createMany
   */
  export type BaseUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseUnits.
     */
    data: BaseUnitCreateManyInput | BaseUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseUnit createManyAndReturn
   */
  export type BaseUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * The data used to create many BaseUnits.
     */
    data: BaseUnitCreateManyInput | BaseUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseUnit update
   */
  export type BaseUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseUnit.
     */
    data: XOR<BaseUnitUpdateInput, BaseUnitUncheckedUpdateInput>
    /**
     * Choose, which BaseUnit to update.
     */
    where: BaseUnitWhereUniqueInput
  }

  /**
   * BaseUnit updateMany
   */
  export type BaseUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseUnits.
     */
    data: XOR<BaseUnitUpdateManyMutationInput, BaseUnitUncheckedUpdateManyInput>
    /**
     * Filter which BaseUnits to update
     */
    where?: BaseUnitWhereInput
    /**
     * Limit how many BaseUnits to update.
     */
    limit?: number
  }

  /**
   * BaseUnit updateManyAndReturn
   */
  export type BaseUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * The data used to update BaseUnits.
     */
    data: XOR<BaseUnitUpdateManyMutationInput, BaseUnitUncheckedUpdateManyInput>
    /**
     * Filter which BaseUnits to update
     */
    where?: BaseUnitWhereInput
    /**
     * Limit how many BaseUnits to update.
     */
    limit?: number
  }

  /**
   * BaseUnit upsert
   */
  export type BaseUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseUnit to update in case it exists.
     */
    where: BaseUnitWhereUniqueInput
    /**
     * In case the BaseUnit found by the `where` argument doesn't exist, create a new BaseUnit with this data.
     */
    create: XOR<BaseUnitCreateInput, BaseUnitUncheckedCreateInput>
    /**
     * In case the BaseUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUnitUpdateInput, BaseUnitUncheckedUpdateInput>
  }

  /**
   * BaseUnit delete
   */
  export type BaseUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
    /**
     * Filter which BaseUnit to delete.
     */
    where: BaseUnitWhereUniqueInput
  }

  /**
   * BaseUnit deleteMany
   */
  export type BaseUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseUnits to delete
     */
    where?: BaseUnitWhereInput
    /**
     * Limit how many BaseUnits to delete.
     */
    limit?: number
  }

  /**
   * BaseUnit.productUnit
   */
  export type BaseUnit$productUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * BaseUnit.Unit
   */
  export type BaseUnit$UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * BaseUnit without action
   */
  export type BaseUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUnit
     */
    select?: BaseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUnit
     */
    omit?: BaseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUnitInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    brandId: number | null
    orderTax: number | null
    productCost: Decimal | null
    productPrice: Decimal | null
    productUnitId: number | null
    saleUnitId: number | null
    purchaseUnitId: number | null
    stockAlert: number | null
    warrantyPeriod: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    brandId: number | null
    orderTax: number | null
    productCost: Decimal | null
    productPrice: Decimal | null
    productUnitId: number | null
    saleUnitId: number | null
    purchaseUnitId: number | null
    stockAlert: number | null
    warrantyPeriod: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    barcode: string | null
    barcodeType: $Enums.BarcodeType | null
    categoryId: number | null
    brandId: number | null
    orderTax: number | null
    taxType: $Enums.TaxType | null
    productImage: string | null
    productType: $Enums.ProductType | null
    productCost: Decimal | null
    productPrice: Decimal | null
    productUnitId: number | null
    saleUnitId: number | null
    purchaseUnitId: number | null
    stockAlert: number | null
    warrantyPeriod: number | null
    warrantyPaymentType: $Enums.PaymentType | null
    warrantyTerms: string | null
    isGuaranteed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    barcode: string | null
    barcodeType: $Enums.BarcodeType | null
    categoryId: number | null
    brandId: number | null
    orderTax: number | null
    taxType: $Enums.TaxType | null
    productImage: string | null
    productType: $Enums.ProductType | null
    productCost: Decimal | null
    productPrice: Decimal | null
    productUnitId: number | null
    saleUnitId: number | null
    purchaseUnitId: number | null
    stockAlert: number | null
    warrantyPeriod: number | null
    warrantyPaymentType: $Enums.PaymentType | null
    warrantyTerms: string | null
    isGuaranteed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    barcode: number
    barcodeType: number
    categoryId: number
    brandId: number
    orderTax: number
    taxType: number
    productImage: number
    productType: number
    productCost: number
    productPrice: number
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert: number
    warrantyPeriod: number
    warrantyPaymentType: number
    warrantyTerms: number
    isGuaranteed: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    categoryId?: true
    brandId?: true
    orderTax?: true
    productCost?: true
    productPrice?: true
    productUnitId?: true
    saleUnitId?: true
    purchaseUnitId?: true
    stockAlert?: true
    warrantyPeriod?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    categoryId?: true
    brandId?: true
    orderTax?: true
    productCost?: true
    productPrice?: true
    productUnitId?: true
    saleUnitId?: true
    purchaseUnitId?: true
    stockAlert?: true
    warrantyPeriod?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    barcodeType?: true
    categoryId?: true
    brandId?: true
    orderTax?: true
    taxType?: true
    productImage?: true
    productType?: true
    productCost?: true
    productPrice?: true
    productUnitId?: true
    saleUnitId?: true
    purchaseUnitId?: true
    stockAlert?: true
    warrantyPeriod?: true
    warrantyPaymentType?: true
    warrantyTerms?: true
    isGuaranteed?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    barcodeType?: true
    categoryId?: true
    brandId?: true
    orderTax?: true
    taxType?: true
    productImage?: true
    productType?: true
    productCost?: true
    productPrice?: true
    productUnitId?: true
    saleUnitId?: true
    purchaseUnitId?: true
    stockAlert?: true
    warrantyPeriod?: true
    warrantyPaymentType?: true
    warrantyTerms?: true
    isGuaranteed?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    barcodeType?: true
    categoryId?: true
    brandId?: true
    orderTax?: true
    taxType?: true
    productImage?: true
    productType?: true
    productCost?: true
    productPrice?: true
    productUnitId?: true
    saleUnitId?: true
    purchaseUnitId?: true
    stockAlert?: true
    warrantyPeriod?: true
    warrantyPaymentType?: true
    warrantyTerms?: true
    isGuaranteed?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax: number | null
    taxType: $Enums.TaxType
    productImage: string | null
    productType: $Enums.ProductType
    productCost: Decimal
    productPrice: Decimal
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert: number | null
    warrantyPeriod: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms: string | null
    isGuaranteed: boolean
    createdAt: Date
    updatedAt: Date | null
    status: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    barcodeType?: boolean
    categoryId?: boolean
    brandId?: boolean
    orderTax?: boolean
    taxType?: boolean
    productImage?: boolean
    productType?: boolean
    productCost?: boolean
    productPrice?: boolean
    productUnitId?: boolean
    saleUnitId?: boolean
    purchaseUnitId?: boolean
    stockAlert?: boolean
    warrantyPeriod?: boolean
    warrantyPaymentType?: boolean
    warrantyTerms?: boolean
    isGuaranteed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    barcodeType?: boolean
    categoryId?: boolean
    brandId?: boolean
    orderTax?: boolean
    taxType?: boolean
    productImage?: boolean
    productType?: boolean
    productCost?: boolean
    productPrice?: boolean
    productUnitId?: boolean
    saleUnitId?: boolean
    purchaseUnitId?: boolean
    stockAlert?: boolean
    warrantyPeriod?: boolean
    warrantyPaymentType?: boolean
    warrantyTerms?: boolean
    isGuaranteed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    barcodeType?: boolean
    categoryId?: boolean
    brandId?: boolean
    orderTax?: boolean
    taxType?: boolean
    productImage?: boolean
    productType?: boolean
    productCost?: boolean
    productPrice?: boolean
    productUnitId?: boolean
    saleUnitId?: boolean
    purchaseUnitId?: boolean
    stockAlert?: boolean
    warrantyPeriod?: boolean
    warrantyPaymentType?: boolean
    warrantyTerms?: boolean
    isGuaranteed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    barcode?: boolean
    barcodeType?: boolean
    categoryId?: boolean
    brandId?: boolean
    orderTax?: boolean
    taxType?: boolean
    productImage?: boolean
    productType?: boolean
    productCost?: boolean
    productPrice?: boolean
    productUnitId?: boolean
    saleUnitId?: boolean
    purchaseUnitId?: boolean
    stockAlert?: boolean
    warrantyPeriod?: boolean
    warrantyPaymentType?: boolean
    warrantyTerms?: boolean
    isGuaranteed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "barcode" | "barcodeType" | "categoryId" | "brandId" | "orderTax" | "taxType" | "productImage" | "productType" | "productCost" | "productPrice" | "productUnitId" | "saleUnitId" | "purchaseUnitId" | "stockAlert" | "warrantyPeriod" | "warrantyPaymentType" | "warrantyTerms" | "isGuaranteed" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    productUnit?: boolean | BaseUnitDefaultArgs<ExtArgs>
    saleUnit?: boolean | UnitDefaultArgs<ExtArgs>
    purchaseUnit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$ProductCategoryPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      productUnit: Prisma.$BaseUnitPayload<ExtArgs>
      saleUnit: Prisma.$UnitPayload<ExtArgs>
      purchaseUnit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      barcode: string
      barcodeType: $Enums.BarcodeType
      categoryId: number
      brandId: number
      orderTax: number | null
      taxType: $Enums.TaxType
      productImage: string | null
      productType: $Enums.ProductType
      productCost: Prisma.Decimal
      productPrice: Prisma.Decimal
      productUnitId: number
      saleUnitId: number
      purchaseUnitId: number
      stockAlert: number | null
      warrantyPeriod: number | null
      warrantyPaymentType: $Enums.PaymentType
      warrantyTerms: string | null
      isGuaranteed: boolean
      createdAt: Date
      updatedAt: Date | null
      status: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productUnit<T extends BaseUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUnitDefaultArgs<ExtArgs>>): Prisma__BaseUnitClient<$Result.GetResult<Prisma.$BaseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleUnit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchaseUnit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly barcodeType: FieldRef<"Product", 'BarcodeType'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly brandId: FieldRef<"Product", 'Int'>
    readonly orderTax: FieldRef<"Product", 'Int'>
    readonly taxType: FieldRef<"Product", 'TaxType'>
    readonly productImage: FieldRef<"Product", 'String'>
    readonly productType: FieldRef<"Product", 'ProductType'>
    readonly productCost: FieldRef<"Product", 'Decimal'>
    readonly productPrice: FieldRef<"Product", 'Decimal'>
    readonly productUnitId: FieldRef<"Product", 'Int'>
    readonly saleUnitId: FieldRef<"Product", 'Int'>
    readonly purchaseUnitId: FieldRef<"Product", 'Int'>
    readonly stockAlert: FieldRef<"Product", 'Int'>
    readonly warrantyPeriod: FieldRef<"Product", 'Int'>
    readonly warrantyPaymentType: FieldRef<"Product", 'PaymentType'>
    readonly warrantyTerms: FieldRef<"Product", 'String'>
    readonly isGuaranteed: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly status: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
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


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    brandImage: 'brandImage',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const VariationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariationsScalarFieldEnum = (typeof VariationsScalarFieldEnum)[keyof typeof VariationsScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    baseUnitId: 'baseUnitId',
    status: 'status',
    operator: 'operator',
    operationValue: 'operationValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const BaseUnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BaseUnitScalarFieldEnum = (typeof BaseUnitScalarFieldEnum)[keyof typeof BaseUnitScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    barcode: 'barcode',
    barcodeType: 'barcodeType',
    categoryId: 'categoryId',
    brandId: 'brandId',
    orderTax: 'orderTax',
    taxType: 'taxType',
    productImage: 'productImage',
    productType: 'productType',
    productCost: 'productCost',
    productPrice: 'productPrice',
    productUnitId: 'productUnitId',
    saleUnitId: 'saleUnitId',
    purchaseUnitId: 'purchaseUnitId',
    stockAlert: 'stockAlert',
    warrantyPeriod: 'warrantyPeriod',
    warrantyPaymentType: 'warrantyPaymentType',
    warrantyTerms: 'warrantyTerms',
    isGuaranteed: 'isGuaranteed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BarcodeType'
   */
  export type EnumBarcodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BarcodeType'>
    


  /**
   * Reference to a field of type 'BarcodeType[]'
   */
  export type ListEnumBarcodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BarcodeType[]'>
    


  /**
   * Reference to a field of type 'TaxType'
   */
  export type EnumTaxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxType'>
    


  /**
   * Reference to a field of type 'TaxType[]'
   */
  export type ListEnumTaxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaxType[]'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


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


  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    name?: StringFilter<"ProductCategory"> | string
    status?: BoolFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    Product?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    status?: BoolFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    Product?: ProductListRelationFilter
  }, "id" | "name">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCategory"> | number
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
    status?: BoolWithAggregatesFilter<"ProductCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductCategory"> | Date | string | null
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    name?: StringFilter<"Brand"> | string
    description?: StringFilter<"Brand"> | string
    brandImage?: StringNullableFilter<"Brand"> | string | null
    status?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    Product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandImage?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    description?: StringFilter<"Brand"> | string
    brandImage?: StringNullableFilter<"Brand"> | string | null
    status?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Brand"> | Date | string | null
    Product?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandImage?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    name?: StringWithAggregatesFilter<"Brand"> | string
    description?: StringWithAggregatesFilter<"Brand"> | string
    brandImage?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    status?: BoolWithAggregatesFilter<"Brand"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null
  }

  export type VariationsWhereInput = {
    AND?: VariationsWhereInput | VariationsWhereInput[]
    OR?: VariationsWhereInput[]
    NOT?: VariationsWhereInput | VariationsWhereInput[]
    id?: IntFilter<"Variations"> | number
    name?: StringFilter<"Variations"> | string
    type?: StringFilter<"Variations"> | string
    status?: BoolFilter<"Variations"> | boolean
    createdAt?: DateTimeFilter<"Variations"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Variations"> | Date | string | null
  }

  export type VariationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VariationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VariationsWhereInput | VariationsWhereInput[]
    OR?: VariationsWhereInput[]
    NOT?: VariationsWhereInput | VariationsWhereInput[]
    type?: StringFilter<"Variations"> | string
    status?: BoolFilter<"Variations"> | boolean
    createdAt?: DateTimeFilter<"Variations"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Variations"> | Date | string | null
  }, "id" | "name">

  export type VariationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VariationsCountOrderByAggregateInput
    _avg?: VariationsAvgOrderByAggregateInput
    _max?: VariationsMaxOrderByAggregateInput
    _min?: VariationsMinOrderByAggregateInput
    _sum?: VariationsSumOrderByAggregateInput
  }

  export type VariationsScalarWhereWithAggregatesInput = {
    AND?: VariationsScalarWhereWithAggregatesInput | VariationsScalarWhereWithAggregatesInput[]
    OR?: VariationsScalarWhereWithAggregatesInput[]
    NOT?: VariationsScalarWhereWithAggregatesInput | VariationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variations"> | number
    name?: StringWithAggregatesFilter<"Variations"> | string
    type?: StringWithAggregatesFilter<"Variations"> | string
    status?: BoolWithAggregatesFilter<"Variations"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Variations"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Variations"> | Date | string | null
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    shortName?: StringFilter<"Unit"> | string
    baseUnitId?: IntFilter<"Unit"> | number
    status?: BoolFilter<"Unit"> | boolean
    operator?: StringFilter<"Unit"> | string
    operationValue?: IntFilter<"Unit"> | number
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Unit"> | Date | string | null
    baseUnit?: XOR<BaseUnitScalarRelationFilter, BaseUnitWhereInput>
    saleUnit?: ProductListRelationFilter
    purchaseUnit?: ProductListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    baseUnitId?: SortOrder
    status?: SortOrder
    operator?: SortOrder
    operationValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    baseUnit?: BaseUnitOrderByWithRelationInput
    saleUnit?: ProductOrderByRelationAggregateInput
    purchaseUnit?: ProductOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    shortName?: StringFilter<"Unit"> | string
    baseUnitId?: IntFilter<"Unit"> | number
    status?: BoolFilter<"Unit"> | boolean
    operator?: StringFilter<"Unit"> | string
    operationValue?: IntFilter<"Unit"> | number
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Unit"> | Date | string | null
    baseUnit?: XOR<BaseUnitScalarRelationFilter, BaseUnitWhereInput>
    saleUnit?: ProductListRelationFilter
    purchaseUnit?: ProductListRelationFilter
  }, "id" | "name">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    baseUnitId?: SortOrder
    status?: SortOrder
    operator?: SortOrder
    operationValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unit"> | number
    name?: StringWithAggregatesFilter<"Unit"> | string
    shortName?: StringWithAggregatesFilter<"Unit"> | string
    baseUnitId?: IntWithAggregatesFilter<"Unit"> | number
    status?: BoolWithAggregatesFilter<"Unit"> | boolean
    operator?: StringWithAggregatesFilter<"Unit"> | string
    operationValue?: IntWithAggregatesFilter<"Unit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Unit"> | Date | string | null
  }

  export type BaseUnitWhereInput = {
    AND?: BaseUnitWhereInput | BaseUnitWhereInput[]
    OR?: BaseUnitWhereInput[]
    NOT?: BaseUnitWhereInput | BaseUnitWhereInput[]
    id?: IntFilter<"BaseUnit"> | number
    name?: StringFilter<"BaseUnit"> | string
    createdAt?: DateTimeFilter<"BaseUnit"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BaseUnit"> | Date | string | null
    productUnit?: ProductListRelationFilter
    Unit?: UnitListRelationFilter
  }

  export type BaseUnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    productUnit?: ProductOrderByRelationAggregateInput
    Unit?: UnitOrderByRelationAggregateInput
  }

  export type BaseUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BaseUnitWhereInput | BaseUnitWhereInput[]
    OR?: BaseUnitWhereInput[]
    NOT?: BaseUnitWhereInput | BaseUnitWhereInput[]
    createdAt?: DateTimeFilter<"BaseUnit"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BaseUnit"> | Date | string | null
    productUnit?: ProductListRelationFilter
    Unit?: UnitListRelationFilter
  }, "id" | "name">

  export type BaseUnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BaseUnitCountOrderByAggregateInput
    _avg?: BaseUnitAvgOrderByAggregateInput
    _max?: BaseUnitMaxOrderByAggregateInput
    _min?: BaseUnitMinOrderByAggregateInput
    _sum?: BaseUnitSumOrderByAggregateInput
  }

  export type BaseUnitScalarWhereWithAggregatesInput = {
    AND?: BaseUnitScalarWhereWithAggregatesInput | BaseUnitScalarWhereWithAggregatesInput[]
    OR?: BaseUnitScalarWhereWithAggregatesInput[]
    NOT?: BaseUnitScalarWhereWithAggregatesInput | BaseUnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BaseUnit"> | number
    name?: StringWithAggregatesFilter<"BaseUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BaseUnit"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BaseUnit"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    barcodeType?: EnumBarcodeTypeFilter<"Product"> | $Enums.BarcodeType
    categoryId?: IntFilter<"Product"> | number
    brandId?: IntFilter<"Product"> | number
    orderTax?: IntNullableFilter<"Product"> | number | null
    taxType?: EnumTaxTypeFilter<"Product"> | $Enums.TaxType
    productImage?: StringNullableFilter<"Product"> | string | null
    productType?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    productCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFilter<"Product"> | number
    saleUnitId?: IntFilter<"Product"> | number
    purchaseUnitId?: IntFilter<"Product"> | number
    stockAlert?: IntNullableFilter<"Product"> | number | null
    warrantyPeriod?: IntNullableFilter<"Product"> | number | null
    warrantyPaymentType?: EnumPaymentTypeFilter<"Product"> | $Enums.PaymentType
    warrantyTerms?: StringNullableFilter<"Product"> | string | null
    isGuaranteed?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    status?: BoolFilter<"Product"> | boolean
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    productUnit?: XOR<BaseUnitScalarRelationFilter, BaseUnitWhereInput>
    saleUnit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    purchaseUnit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    barcodeType?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrderInput | SortOrder
    taxType?: SortOrder
    productImage?: SortOrderInput | SortOrder
    productType?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrderInput | SortOrder
    warrantyPeriod?: SortOrderInput | SortOrder
    warrantyPaymentType?: SortOrder
    warrantyTerms?: SortOrderInput | SortOrder
    isGuaranteed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    category?: ProductCategoryOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    productUnit?: BaseUnitOrderByWithRelationInput
    saleUnit?: UnitOrderByWithRelationInput
    purchaseUnit?: UnitOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    barcode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    barcodeType?: EnumBarcodeTypeFilter<"Product"> | $Enums.BarcodeType
    categoryId?: IntFilter<"Product"> | number
    brandId?: IntFilter<"Product"> | number
    orderTax?: IntNullableFilter<"Product"> | number | null
    taxType?: EnumTaxTypeFilter<"Product"> | $Enums.TaxType
    productImage?: StringNullableFilter<"Product"> | string | null
    productType?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    productCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFilter<"Product"> | number
    saleUnitId?: IntFilter<"Product"> | number
    purchaseUnitId?: IntFilter<"Product"> | number
    stockAlert?: IntNullableFilter<"Product"> | number | null
    warrantyPeriod?: IntNullableFilter<"Product"> | number | null
    warrantyPaymentType?: EnumPaymentTypeFilter<"Product"> | $Enums.PaymentType
    warrantyTerms?: StringNullableFilter<"Product"> | string | null
    isGuaranteed?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    status?: BoolFilter<"Product"> | boolean
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    productUnit?: XOR<BaseUnitScalarRelationFilter, BaseUnitWhereInput>
    saleUnit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    purchaseUnit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id" | "name" | "barcode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    barcodeType?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrderInput | SortOrder
    taxType?: SortOrder
    productImage?: SortOrderInput | SortOrder
    productType?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrderInput | SortOrder
    warrantyPeriod?: SortOrderInput | SortOrder
    warrantyPaymentType?: SortOrder
    warrantyTerms?: SortOrderInput | SortOrder
    isGuaranteed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringWithAggregatesFilter<"Product"> | string
    barcodeType?: EnumBarcodeTypeWithAggregatesFilter<"Product"> | $Enums.BarcodeType
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    brandId?: IntWithAggregatesFilter<"Product"> | number
    orderTax?: IntNullableWithAggregatesFilter<"Product"> | number | null
    taxType?: EnumTaxTypeWithAggregatesFilter<"Product"> | $Enums.TaxType
    productImage?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productType?: EnumProductTypeWithAggregatesFilter<"Product"> | $Enums.ProductType
    productCost?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productUnitId?: IntWithAggregatesFilter<"Product"> | number
    saleUnitId?: IntWithAggregatesFilter<"Product"> | number
    purchaseUnitId?: IntWithAggregatesFilter<"Product"> | number
    stockAlert?: IntNullableWithAggregatesFilter<"Product"> | number | null
    warrantyPeriod?: IntNullableWithAggregatesFilter<"Product"> | number | null
    warrantyPaymentType?: EnumPaymentTypeWithAggregatesFilter<"Product"> | $Enums.PaymentType
    warrantyTerms?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isGuaranteed?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    status?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type ProductCategoryCreateInput = {
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: number
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: number
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandCreateInput = {
    name: string
    description: string
    brandImage?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    brandImage?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
    description: string
    brandImage?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariationsCreateInput = {
    name: string
    type: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VariationsUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VariationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariationsCreateManyInput = {
    id?: number
    name: string
    type: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type VariationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnitCreateInput = {
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    baseUnit: BaseUnitCreateNestedOneWithoutUnitInput
    saleUnit?: ProductCreateNestedManyWithoutSaleUnitInput
    purchaseUnit?: ProductCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: number
    name: string
    shortName: string
    baseUnitId: number
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    saleUnit?: ProductUncheckedCreateNestedManyWithoutSaleUnitInput
    purchaseUnit?: ProductUncheckedCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseUnit?: BaseUnitUpdateOneRequiredWithoutUnitNestedInput
    saleUnit?: ProductUpdateManyWithoutSaleUnitNestedInput
    purchaseUnit?: ProductUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    baseUnitId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saleUnit?: ProductUncheckedUpdateManyWithoutSaleUnitNestedInput
    purchaseUnit?: ProductUncheckedUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: number
    name: string
    shortName: string
    baseUnitId: number
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    baseUnitId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BaseUnitCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productUnit?: ProductCreateNestedManyWithoutProductUnitInput
    Unit?: UnitCreateNestedManyWithoutBaseUnitInput
  }

  export type BaseUnitUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productUnit?: ProductUncheckedCreateNestedManyWithoutProductUnitInput
    Unit?: UnitUncheckedCreateNestedManyWithoutBaseUnitInput
  }

  export type BaseUnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productUnit?: ProductUpdateManyWithoutProductUnitNestedInput
    Unit?: UnitUpdateManyWithoutBaseUnitNestedInput
  }

  export type BaseUnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productUnit?: ProductUncheckedUpdateManyWithoutProductUnitNestedInput
    Unit?: UnitUncheckedUpdateManyWithoutBaseUnitNestedInput
  }

  export type BaseUnitCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BaseUnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BaseUnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    productUnit: BaseUnitCreateNestedOneWithoutProductUnitInput
    saleUnit: UnitCreateNestedOneWithoutSaleUnitInput
    purchaseUnit: UnitCreateNestedOneWithoutPurchaseUnitInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    productUnit?: BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput
    saleUnit?: UnitUpdateOneRequiredWithoutSaleUnitNestedInput
    purchaseUnit?: UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brandImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type VariationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VariationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VariationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BaseUnitScalarRelationFilter = {
    is?: BaseUnitWhereInput
    isNot?: BaseUnitWhereInput
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    baseUnitId?: SortOrder
    status?: SortOrder
    operator?: SortOrder
    operationValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    id?: SortOrder
    baseUnitId?: SortOrder
    operationValue?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    baseUnitId?: SortOrder
    status?: SortOrder
    operator?: SortOrder
    operationValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    baseUnitId?: SortOrder
    status?: SortOrder
    operator?: SortOrder
    operationValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    id?: SortOrder
    baseUnitId?: SortOrder
    operationValue?: SortOrder
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseUnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseUnitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BaseUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseUnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseUnitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumBarcodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeType | EnumBarcodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeTypeFilter<$PrismaModel> | $Enums.BarcodeType
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

  export type EnumTaxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxType | EnumTaxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxTypeFilter<$PrismaModel> | $Enums.TaxType
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    barcodeType?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrder
    taxType?: SortOrder
    productImage?: SortOrder
    productType?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrder
    warrantyPeriod?: SortOrder
    warrantyPaymentType?: SortOrder
    warrantyTerms?: SortOrder
    isGuaranteed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrder
    warrantyPeriod?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    barcodeType?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrder
    taxType?: SortOrder
    productImage?: SortOrder
    productType?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrder
    warrantyPeriod?: SortOrder
    warrantyPaymentType?: SortOrder
    warrantyTerms?: SortOrder
    isGuaranteed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    barcodeType?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrder
    taxType?: SortOrder
    productImage?: SortOrder
    productType?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrder
    warrantyPeriod?: SortOrder
    warrantyPaymentType?: SortOrder
    warrantyTerms?: SortOrder
    isGuaranteed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    brandId?: SortOrder
    orderTax?: SortOrder
    productCost?: SortOrder
    productPrice?: SortOrder
    productUnitId?: SortOrder
    saleUnitId?: SortOrder
    purchaseUnitId?: SortOrder
    stockAlert?: SortOrder
    warrantyPeriod?: SortOrder
  }

  export type EnumBarcodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeType | EnumBarcodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.BarcodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBarcodeTypeFilter<$PrismaModel>
    _max?: NestedEnumBarcodeTypeFilter<$PrismaModel>
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

  export type EnumTaxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxType | EnumTaxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaxTypeFilter<$PrismaModel>
    _max?: NestedEnumTaxTypeFilter<$PrismaModel>
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BaseUnitCreateNestedOneWithoutUnitInput = {
    create?: XOR<BaseUnitCreateWithoutUnitInput, BaseUnitUncheckedCreateWithoutUnitInput>
    connectOrCreate?: BaseUnitCreateOrConnectWithoutUnitInput
    connect?: BaseUnitWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutSaleUnitInput = {
    create?: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput> | ProductCreateWithoutSaleUnitInput[] | ProductUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitInput | ProductCreateOrConnectWithoutSaleUnitInput[]
    createMany?: ProductCreateManySaleUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutPurchaseUnitInput = {
    create?: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput> | ProductCreateWithoutPurchaseUnitInput[] | ProductUncheckedCreateWithoutPurchaseUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseUnitInput | ProductCreateOrConnectWithoutPurchaseUnitInput[]
    createMany?: ProductCreateManyPurchaseUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSaleUnitInput = {
    create?: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput> | ProductCreateWithoutSaleUnitInput[] | ProductUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitInput | ProductCreateOrConnectWithoutSaleUnitInput[]
    createMany?: ProductCreateManySaleUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutPurchaseUnitInput = {
    create?: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput> | ProductCreateWithoutPurchaseUnitInput[] | ProductUncheckedCreateWithoutPurchaseUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseUnitInput | ProductCreateOrConnectWithoutPurchaseUnitInput[]
    createMany?: ProductCreateManyPurchaseUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BaseUnitUpdateOneRequiredWithoutUnitNestedInput = {
    create?: XOR<BaseUnitCreateWithoutUnitInput, BaseUnitUncheckedCreateWithoutUnitInput>
    connectOrCreate?: BaseUnitCreateOrConnectWithoutUnitInput
    upsert?: BaseUnitUpsertWithoutUnitInput
    connect?: BaseUnitWhereUniqueInput
    update?: XOR<XOR<BaseUnitUpdateToOneWithWhereWithoutUnitInput, BaseUnitUpdateWithoutUnitInput>, BaseUnitUncheckedUpdateWithoutUnitInput>
  }

  export type ProductUpdateManyWithoutSaleUnitNestedInput = {
    create?: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput> | ProductCreateWithoutSaleUnitInput[] | ProductUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitInput | ProductCreateOrConnectWithoutSaleUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSaleUnitInput | ProductUpsertWithWhereUniqueWithoutSaleUnitInput[]
    createMany?: ProductCreateManySaleUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSaleUnitInput | ProductUpdateWithWhereUniqueWithoutSaleUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSaleUnitInput | ProductUpdateManyWithWhereWithoutSaleUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutPurchaseUnitNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput> | ProductCreateWithoutPurchaseUnitInput[] | ProductUncheckedCreateWithoutPurchaseUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseUnitInput | ProductCreateOrConnectWithoutPurchaseUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPurchaseUnitInput | ProductUpsertWithWhereUniqueWithoutPurchaseUnitInput[]
    createMany?: ProductCreateManyPurchaseUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPurchaseUnitInput | ProductUpdateWithWhereUniqueWithoutPurchaseUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPurchaseUnitInput | ProductUpdateManyWithWhereWithoutPurchaseUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSaleUnitNestedInput = {
    create?: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput> | ProductCreateWithoutSaleUnitInput[] | ProductUncheckedCreateWithoutSaleUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSaleUnitInput | ProductCreateOrConnectWithoutSaleUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSaleUnitInput | ProductUpsertWithWhereUniqueWithoutSaleUnitInput[]
    createMany?: ProductCreateManySaleUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSaleUnitInput | ProductUpdateWithWhereUniqueWithoutSaleUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSaleUnitInput | ProductUpdateManyWithWhereWithoutSaleUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutPurchaseUnitNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput> | ProductCreateWithoutPurchaseUnitInput[] | ProductUncheckedCreateWithoutPurchaseUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseUnitInput | ProductCreateOrConnectWithoutPurchaseUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPurchaseUnitInput | ProductUpsertWithWhereUniqueWithoutPurchaseUnitInput[]
    createMany?: ProductCreateManyPurchaseUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPurchaseUnitInput | ProductUpdateWithWhereUniqueWithoutPurchaseUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPurchaseUnitInput | ProductUpdateManyWithWhereWithoutPurchaseUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutProductUnitInput = {
    create?: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput> | ProductCreateWithoutProductUnitInput[] | ProductUncheckedCreateWithoutProductUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductUnitInput | ProductCreateOrConnectWithoutProductUnitInput[]
    createMany?: ProductCreateManyProductUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UnitCreateNestedManyWithoutBaseUnitInput = {
    create?: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput> | UnitCreateWithoutBaseUnitInput[] | UnitUncheckedCreateWithoutBaseUnitInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBaseUnitInput | UnitCreateOrConnectWithoutBaseUnitInput[]
    createMany?: UnitCreateManyBaseUnitInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProductUnitInput = {
    create?: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput> | ProductCreateWithoutProductUnitInput[] | ProductUncheckedCreateWithoutProductUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductUnitInput | ProductCreateOrConnectWithoutProductUnitInput[]
    createMany?: ProductCreateManyProductUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutBaseUnitInput = {
    create?: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput> | UnitCreateWithoutBaseUnitInput[] | UnitUncheckedCreateWithoutBaseUnitInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBaseUnitInput | UnitCreateOrConnectWithoutBaseUnitInput[]
    createMany?: UnitCreateManyBaseUnitInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutProductUnitNestedInput = {
    create?: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput> | ProductCreateWithoutProductUnitInput[] | ProductUncheckedCreateWithoutProductUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductUnitInput | ProductCreateOrConnectWithoutProductUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductUnitInput | ProductUpsertWithWhereUniqueWithoutProductUnitInput[]
    createMany?: ProductCreateManyProductUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductUnitInput | ProductUpdateWithWhereUniqueWithoutProductUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductUnitInput | ProductUpdateManyWithWhereWithoutProductUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UnitUpdateManyWithoutBaseUnitNestedInput = {
    create?: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput> | UnitCreateWithoutBaseUnitInput[] | UnitUncheckedCreateWithoutBaseUnitInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBaseUnitInput | UnitCreateOrConnectWithoutBaseUnitInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutBaseUnitInput | UnitUpsertWithWhereUniqueWithoutBaseUnitInput[]
    createMany?: UnitCreateManyBaseUnitInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutBaseUnitInput | UnitUpdateWithWhereUniqueWithoutBaseUnitInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutBaseUnitInput | UnitUpdateManyWithWhereWithoutBaseUnitInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProductUnitNestedInput = {
    create?: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput> | ProductCreateWithoutProductUnitInput[] | ProductUncheckedCreateWithoutProductUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductUnitInput | ProductCreateOrConnectWithoutProductUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductUnitInput | ProductUpsertWithWhereUniqueWithoutProductUnitInput[]
    createMany?: ProductCreateManyProductUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductUnitInput | ProductUpdateWithWhereUniqueWithoutProductUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductUnitInput | ProductUpdateManyWithWhereWithoutProductUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutBaseUnitNestedInput = {
    create?: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput> | UnitCreateWithoutBaseUnitInput[] | UnitUncheckedCreateWithoutBaseUnitInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutBaseUnitInput | UnitCreateOrConnectWithoutBaseUnitInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutBaseUnitInput | UnitUpsertWithWhereUniqueWithoutBaseUnitInput[]
    createMany?: UnitCreateManyBaseUnitInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutBaseUnitInput | UnitUpdateWithWhereUniqueWithoutBaseUnitInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutBaseUnitInput | UnitUpdateManyWithWhereWithoutBaseUnitInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type BaseUnitCreateNestedOneWithoutProductUnitInput = {
    create?: XOR<BaseUnitCreateWithoutProductUnitInput, BaseUnitUncheckedCreateWithoutProductUnitInput>
    connectOrCreate?: BaseUnitCreateOrConnectWithoutProductUnitInput
    connect?: BaseUnitWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutSaleUnitInput = {
    create?: XOR<UnitCreateWithoutSaleUnitInput, UnitUncheckedCreateWithoutSaleUnitInput>
    connectOrCreate?: UnitCreateOrConnectWithoutSaleUnitInput
    connect?: UnitWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutPurchaseUnitInput = {
    create?: XOR<UnitCreateWithoutPurchaseUnitInput, UnitUncheckedCreateWithoutPurchaseUnitInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPurchaseUnitInput
    connect?: UnitWhereUniqueInput
  }

  export type EnumBarcodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.BarcodeType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTaxTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaxType
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput
    upsert?: ProductCategoryUpsertWithoutProductInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductInput, ProductCategoryUpdateWithoutProductInput>, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput = {
    create?: XOR<BaseUnitCreateWithoutProductUnitInput, BaseUnitUncheckedCreateWithoutProductUnitInput>
    connectOrCreate?: BaseUnitCreateOrConnectWithoutProductUnitInput
    upsert?: BaseUnitUpsertWithoutProductUnitInput
    connect?: BaseUnitWhereUniqueInput
    update?: XOR<XOR<BaseUnitUpdateToOneWithWhereWithoutProductUnitInput, BaseUnitUpdateWithoutProductUnitInput>, BaseUnitUncheckedUpdateWithoutProductUnitInput>
  }

  export type UnitUpdateOneRequiredWithoutSaleUnitNestedInput = {
    create?: XOR<UnitCreateWithoutSaleUnitInput, UnitUncheckedCreateWithoutSaleUnitInput>
    connectOrCreate?: UnitCreateOrConnectWithoutSaleUnitInput
    upsert?: UnitUpsertWithoutSaleUnitInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutSaleUnitInput, UnitUpdateWithoutSaleUnitInput>, UnitUncheckedUpdateWithoutSaleUnitInput>
  }

  export type UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput = {
    create?: XOR<UnitCreateWithoutPurchaseUnitInput, UnitUncheckedCreateWithoutPurchaseUnitInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPurchaseUnitInput
    upsert?: UnitUpsertWithoutPurchaseUnitInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutPurchaseUnitInput, UnitUpdateWithoutPurchaseUnitInput>, UnitUncheckedUpdateWithoutPurchaseUnitInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBarcodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeType | EnumBarcodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeTypeFilter<$PrismaModel> | $Enums.BarcodeType
  }

  export type NestedEnumTaxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxType | EnumTaxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxTypeFilter<$PrismaModel> | $Enums.TaxType
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumBarcodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BarcodeType | EnumBarcodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BarcodeType[] | ListEnumBarcodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBarcodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.BarcodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBarcodeTypeFilter<$PrismaModel>
    _max?: NestedEnumBarcodeTypeFilter<$PrismaModel>
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

  export type NestedEnumTaxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaxType | EnumTaxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaxType[] | ListEnumTaxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaxTypeFilter<$PrismaModel>
    _max?: NestedEnumTaxTypeFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    brand: BrandCreateNestedOneWithoutProductInput
    productUnit: BaseUnitCreateNestedOneWithoutProductUnitInput
    saleUnit: UnitCreateNestedOneWithoutSaleUnitInput
    purchaseUnit: UnitCreateNestedOneWithoutPurchaseUnitInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    barcodeType?: EnumBarcodeTypeFilter<"Product"> | $Enums.BarcodeType
    categoryId?: IntFilter<"Product"> | number
    brandId?: IntFilter<"Product"> | number
    orderTax?: IntNullableFilter<"Product"> | number | null
    taxType?: EnumTaxTypeFilter<"Product"> | $Enums.TaxType
    productImage?: StringNullableFilter<"Product"> | string | null
    productType?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    productCost?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFilter<"Product"> | number
    saleUnitId?: IntFilter<"Product"> | number
    purchaseUnitId?: IntFilter<"Product"> | number
    stockAlert?: IntNullableFilter<"Product"> | number | null
    warrantyPeriod?: IntNullableFilter<"Product"> | number | null
    warrantyPaymentType?: EnumPaymentTypeFilter<"Product"> | $Enums.PaymentType
    warrantyTerms?: StringNullableFilter<"Product"> | string | null
    isGuaranteed?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    status?: BoolFilter<"Product"> | boolean
  }

  export type ProductCreateWithoutBrandInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductInput
    productUnit: BaseUnitCreateNestedOneWithoutProductUnitInput
    saleUnit: UnitCreateNestedOneWithoutSaleUnitInput
    purchaseUnit: UnitCreateNestedOneWithoutPurchaseUnitInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type BaseUnitCreateWithoutUnitInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productUnit?: ProductCreateNestedManyWithoutProductUnitInput
  }

  export type BaseUnitUncheckedCreateWithoutUnitInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productUnit?: ProductUncheckedCreateNestedManyWithoutProductUnitInput
  }

  export type BaseUnitCreateOrConnectWithoutUnitInput = {
    where: BaseUnitWhereUniqueInput
    create: XOR<BaseUnitCreateWithoutUnitInput, BaseUnitUncheckedCreateWithoutUnitInput>
  }

  export type ProductCreateWithoutSaleUnitInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    productUnit: BaseUnitCreateNestedOneWithoutProductUnitInput
    purchaseUnit: UnitCreateNestedOneWithoutPurchaseUnitInput
  }

  export type ProductUncheckedCreateWithoutSaleUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutSaleUnitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput>
  }

  export type ProductCreateManySaleUnitInputEnvelope = {
    data: ProductCreateManySaleUnitInput | ProductCreateManySaleUnitInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutPurchaseUnitInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    productUnit: BaseUnitCreateNestedOneWithoutProductUnitInput
    saleUnit: UnitCreateNestedOneWithoutSaleUnitInput
  }

  export type ProductUncheckedCreateWithoutPurchaseUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutPurchaseUnitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput>
  }

  export type ProductCreateManyPurchaseUnitInputEnvelope = {
    data: ProductCreateManyPurchaseUnitInput | ProductCreateManyPurchaseUnitInput[]
    skipDuplicates?: boolean
  }

  export type BaseUnitUpsertWithoutUnitInput = {
    update: XOR<BaseUnitUpdateWithoutUnitInput, BaseUnitUncheckedUpdateWithoutUnitInput>
    create: XOR<BaseUnitCreateWithoutUnitInput, BaseUnitUncheckedCreateWithoutUnitInput>
    where?: BaseUnitWhereInput
  }

  export type BaseUnitUpdateToOneWithWhereWithoutUnitInput = {
    where?: BaseUnitWhereInput
    data: XOR<BaseUnitUpdateWithoutUnitInput, BaseUnitUncheckedUpdateWithoutUnitInput>
  }

  export type BaseUnitUpdateWithoutUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productUnit?: ProductUpdateManyWithoutProductUnitNestedInput
  }

  export type BaseUnitUncheckedUpdateWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productUnit?: ProductUncheckedUpdateManyWithoutProductUnitNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutSaleUnitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSaleUnitInput, ProductUncheckedUpdateWithoutSaleUnitInput>
    create: XOR<ProductCreateWithoutSaleUnitInput, ProductUncheckedCreateWithoutSaleUnitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSaleUnitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSaleUnitInput, ProductUncheckedUpdateWithoutSaleUnitInput>
  }

  export type ProductUpdateManyWithWhereWithoutSaleUnitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSaleUnitInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutPurchaseUnitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutPurchaseUnitInput, ProductUncheckedUpdateWithoutPurchaseUnitInput>
    create: XOR<ProductCreateWithoutPurchaseUnitInput, ProductUncheckedCreateWithoutPurchaseUnitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutPurchaseUnitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutPurchaseUnitInput, ProductUncheckedUpdateWithoutPurchaseUnitInput>
  }

  export type ProductUpdateManyWithWhereWithoutPurchaseUnitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutPurchaseUnitInput>
  }

  export type ProductCreateWithoutProductUnitInput = {
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
    category: ProductCategoryCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    saleUnit: UnitCreateNestedOneWithoutSaleUnitInput
    purchaseUnit: UnitCreateNestedOneWithoutPurchaseUnitInput
  }

  export type ProductUncheckedCreateWithoutProductUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateOrConnectWithoutProductUnitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput>
  }

  export type ProductCreateManyProductUnitInputEnvelope = {
    data: ProductCreateManyProductUnitInput | ProductCreateManyProductUnitInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutBaseUnitInput = {
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    saleUnit?: ProductCreateNestedManyWithoutSaleUnitInput
    purchaseUnit?: ProductCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitUncheckedCreateWithoutBaseUnitInput = {
    id?: number
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    saleUnit?: ProductUncheckedCreateNestedManyWithoutSaleUnitInput
    purchaseUnit?: ProductUncheckedCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitCreateOrConnectWithoutBaseUnitInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput>
  }

  export type UnitCreateManyBaseUnitInputEnvelope = {
    data: UnitCreateManyBaseUnitInput | UnitCreateManyBaseUnitInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutProductUnitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProductUnitInput, ProductUncheckedUpdateWithoutProductUnitInput>
    create: XOR<ProductCreateWithoutProductUnitInput, ProductUncheckedCreateWithoutProductUnitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProductUnitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProductUnitInput, ProductUncheckedUpdateWithoutProductUnitInput>
  }

  export type ProductUpdateManyWithWhereWithoutProductUnitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductUnitInput>
  }

  export type UnitUpsertWithWhereUniqueWithoutBaseUnitInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutBaseUnitInput, UnitUncheckedUpdateWithoutBaseUnitInput>
    create: XOR<UnitCreateWithoutBaseUnitInput, UnitUncheckedCreateWithoutBaseUnitInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutBaseUnitInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutBaseUnitInput, UnitUncheckedUpdateWithoutBaseUnitInput>
  }

  export type UnitUpdateManyWithWhereWithoutBaseUnitInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutBaseUnitInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    shortName?: StringFilter<"Unit"> | string
    baseUnitId?: IntFilter<"Unit"> | number
    status?: BoolFilter<"Unit"> | boolean
    operator?: StringFilter<"Unit"> | string
    operationValue?: IntFilter<"Unit"> | number
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Unit"> | Date | string | null
  }

  export type ProductCategoryCreateWithoutProductInput = {
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductCategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type BrandCreateWithoutProductInput = {
    name: string
    description: string
    brandImage?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    description: string
    brandImage?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type BaseUnitCreateWithoutProductUnitInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Unit?: UnitCreateNestedManyWithoutBaseUnitInput
  }

  export type BaseUnitUncheckedCreateWithoutProductUnitInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Unit?: UnitUncheckedCreateNestedManyWithoutBaseUnitInput
  }

  export type BaseUnitCreateOrConnectWithoutProductUnitInput = {
    where: BaseUnitWhereUniqueInput
    create: XOR<BaseUnitCreateWithoutProductUnitInput, BaseUnitUncheckedCreateWithoutProductUnitInput>
  }

  export type UnitCreateWithoutSaleUnitInput = {
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    baseUnit: BaseUnitCreateNestedOneWithoutUnitInput
    purchaseUnit?: ProductCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitUncheckedCreateWithoutSaleUnitInput = {
    id?: number
    name: string
    shortName: string
    baseUnitId: number
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    purchaseUnit?: ProductUncheckedCreateNestedManyWithoutPurchaseUnitInput
  }

  export type UnitCreateOrConnectWithoutSaleUnitInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutSaleUnitInput, UnitUncheckedCreateWithoutSaleUnitInput>
  }

  export type UnitCreateWithoutPurchaseUnitInput = {
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    baseUnit: BaseUnitCreateNestedOneWithoutUnitInput
    saleUnit?: ProductCreateNestedManyWithoutSaleUnitInput
  }

  export type UnitUncheckedCreateWithoutPurchaseUnitInput = {
    id?: number
    name: string
    shortName: string
    baseUnitId: number
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    saleUnit?: ProductUncheckedCreateNestedManyWithoutSaleUnitInput
  }

  export type UnitCreateOrConnectWithoutPurchaseUnitInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPurchaseUnitInput, UnitUncheckedCreateWithoutPurchaseUnitInput>
  }

  export type ProductCategoryUpsertWithoutProductInput = {
    update: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BaseUnitUpsertWithoutProductUnitInput = {
    update: XOR<BaseUnitUpdateWithoutProductUnitInput, BaseUnitUncheckedUpdateWithoutProductUnitInput>
    create: XOR<BaseUnitCreateWithoutProductUnitInput, BaseUnitUncheckedCreateWithoutProductUnitInput>
    where?: BaseUnitWhereInput
  }

  export type BaseUnitUpdateToOneWithWhereWithoutProductUnitInput = {
    where?: BaseUnitWhereInput
    data: XOR<BaseUnitUpdateWithoutProductUnitInput, BaseUnitUncheckedUpdateWithoutProductUnitInput>
  }

  export type BaseUnitUpdateWithoutProductUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unit?: UnitUpdateManyWithoutBaseUnitNestedInput
  }

  export type BaseUnitUncheckedUpdateWithoutProductUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unit?: UnitUncheckedUpdateManyWithoutBaseUnitNestedInput
  }

  export type UnitUpsertWithoutSaleUnitInput = {
    update: XOR<UnitUpdateWithoutSaleUnitInput, UnitUncheckedUpdateWithoutSaleUnitInput>
    create: XOR<UnitCreateWithoutSaleUnitInput, UnitUncheckedCreateWithoutSaleUnitInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutSaleUnitInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutSaleUnitInput, UnitUncheckedUpdateWithoutSaleUnitInput>
  }

  export type UnitUpdateWithoutSaleUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseUnit?: BaseUnitUpdateOneRequiredWithoutUnitNestedInput
    purchaseUnit?: ProductUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutSaleUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    baseUnitId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchaseUnit?: ProductUncheckedUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitUpsertWithoutPurchaseUnitInput = {
    update: XOR<UnitUpdateWithoutPurchaseUnitInput, UnitUncheckedUpdateWithoutPurchaseUnitInput>
    create: XOR<UnitCreateWithoutPurchaseUnitInput, UnitUncheckedCreateWithoutPurchaseUnitInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutPurchaseUnitInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutPurchaseUnitInput, UnitUncheckedUpdateWithoutPurchaseUnitInput>
  }

  export type UnitUpdateWithoutPurchaseUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseUnit?: BaseUnitUpdateOneRequiredWithoutUnitNestedInput
    saleUnit?: ProductUpdateManyWithoutSaleUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPurchaseUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    baseUnitId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saleUnit?: ProductUncheckedUpdateManyWithoutSaleUnitNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    productUnit?: BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput
    saleUnit?: UnitUpdateOneRequiredWithoutSaleUnitNestedInput
    purchaseUnit?: UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    productUnit?: BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput
    saleUnit?: UnitUpdateOneRequiredWithoutSaleUnitNestedInput
    purchaseUnit?: UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManySaleUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductCreateManyPurchaseUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    productUnitId: number
    saleUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type ProductUpdateWithoutSaleUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    productUnit?: BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput
    purchaseUnit?: UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyWithoutSaleUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUpdateWithoutPurchaseUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    productUnit?: BaseUnitUpdateOneRequiredWithoutProductUnitNestedInput
    saleUnit?: UnitUpdateOneRequiredWithoutSaleUnitNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyWithoutPurchaseUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productUnitId?: IntFieldUpdateOperationsInput | number
    saleUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManyProductUnitInput = {
    id?: number
    name: string
    barcode: string
    barcodeType: $Enums.BarcodeType
    categoryId: number
    brandId: number
    orderTax?: number | null
    taxType: $Enums.TaxType
    productImage?: string | null
    productType: $Enums.ProductType
    productCost: Decimal | DecimalJsLike | number | string
    productPrice: Decimal | DecimalJsLike | number | string
    saleUnitId: number
    purchaseUnitId: number
    stockAlert?: number | null
    warrantyPeriod?: number | null
    warrantyPaymentType: $Enums.PaymentType
    warrantyTerms?: string | null
    isGuaranteed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    status?: boolean
  }

  export type UnitCreateManyBaseUnitInput = {
    id?: number
    name: string
    shortName: string
    status?: boolean
    operator: string
    operationValue: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProductUpdateWithoutProductUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    category?: ProductCategoryUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    saleUnit?: UnitUpdateOneRequiredWithoutSaleUnitNestedInput
    purchaseUnit?: UnitUpdateOneRequiredWithoutPurchaseUnitNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyWithoutProductUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    barcodeType?: EnumBarcodeTypeFieldUpdateOperationsInput | $Enums.BarcodeType
    categoryId?: IntFieldUpdateOperationsInput | number
    brandId?: IntFieldUpdateOperationsInput | number
    orderTax?: NullableIntFieldUpdateOperationsInput | number | null
    taxType?: EnumTaxTypeFieldUpdateOperationsInput | $Enums.TaxType
    productImage?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    productCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saleUnitId?: IntFieldUpdateOperationsInput | number
    purchaseUnitId?: IntFieldUpdateOperationsInput | number
    stockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    warrantyPaymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    warrantyTerms?: NullableStringFieldUpdateOperationsInput | string | null
    isGuaranteed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitUpdateWithoutBaseUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saleUnit?: ProductUpdateManyWithoutSaleUnitNestedInput
    purchaseUnit?: ProductUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutBaseUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saleUnit?: ProductUncheckedUpdateManyWithoutSaleUnitNestedInput
    purchaseUnit?: ProductUncheckedUpdateManyWithoutPurchaseUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutBaseUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operator?: StringFieldUpdateOperationsInput | string
    operationValue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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