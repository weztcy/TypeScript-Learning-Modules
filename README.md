# TypeScript Learning Modules

[![TypeScript](https://img.shields.io/badge/TypeScript-ES2022%20%7C%20v7.0%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B%20LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Execution Runner](https://img.shields.io/badge/Runner-tsx%20v4.23%2B-blueviolet)](https://github.com/privatenumber/tsx)
[![Modules](https://img.shields.io/badge/Modules-18%20Comprehensive-007ACC)](#learning-roadmap)
[![Code Examples](https://img.shields.io/badge/Code%20Examples-300%20Programs-blue)](#learning-modules--subtopics)
[![Execution Outputs](https://img.shields.io/badge/Verified%20Outputs-300%20Captures-brightgreen)](#learning-modules--subtopics)
[![Curriculum Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-orange)](#learning-roadmap)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

![TypeScript Learning Modules Banner](./screenshots/banner.png)

## Project Description

**TypeScript Learning Modules** is a comprehensive, production-grade educational curriculum and code learning repository engineered to guide learners from fundamental type annotations to advanced type-level metaprogramming and enterprise full-stack software architecture. Built on modern **ECMAScript (ES2022 / ESNext)** and powered by the high-performance **Node.js** runtime and **tsx** execution engine, this curriculum systematically explores every dimension of TypeScript: syntax primitives, memory models, first-class functions, composite collections, structural typing, discriminated unions, generic programming, mapped and conditional types, object-oriented design patterns, modular project architectures, asynchronous concurrency pipelines, browser DOM manipulation, backend services with Express 5, database integrations, automated testing, application security, and full-featured capstone systems.

The repository is architected around **300 self-contained, standalone single-file TypeScript programs** structured into **18 pedagogical modules**. Every single lesson isolates a concrete language mechanism, type-level computation, or architectural pattern without burdensome boilerplate or convoluted project configurations. Every file is executable directly via `npx tsx <filename>.ts` and features informative educational inline commentary clarifying every critical line of code. Furthermore, each lesson includes an authentic terminal execution screenshot captured under its module's `output/` directory, allowing learners to verify their local execution results directly against known baselines.

Whether you are a newcomer building foundational programming intuition, a JavaScript developer transitioning to static typing, or an experienced backend engineer architecting scalable enterprise systems, this repository provides a rigorous, transparent, and verifiable path toward complete TypeScript mastery.

## Learning Objectives

Upon completing this curriculum, learners will have developed concrete, verified proficiencies across four distinct pedagogical tiers:

### Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations (Modules 01-05)
- Master TypeScript program anatomy, compilation and execution lifecycles (`tsc`, `tsx`), developer console formatting, and strict type checking (`strict: true`).
- Understand variable declarations (`let`, `const`, `var`), lexical scoping, temporal dead zones (TDZ), and explicit type annotations across primitive types (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`).
- Leverage top and bottom types (`any`, `unknown`, `never`, `void`), compiler type inference, and exact value literal types.
- Implement arithmetic, assignment, relational, logical, and bitwise operations, utilizing nullish coalescing (`??`), optional chaining (`?.`), runtime type inspection (`typeof`, `instanceof`, `in`), and compiler Control Flow Analysis (CFA).
- Build iterative workflows (`for`, `while`, `do...while`, `for...of`, `for...in`), nested loops, loop jump statements (`break`, `continue`), and numerical algorithms (factorials, primes, Fibonacci).
- Modularize logic with function declarations, expressions, arrow functions, optional/default parameters, rest parameters (`...args`), function overloads, higher-order functions (HOFs), closures, explicit `this` parameters, and assertion functions (`asserts`).

### Tier 2: Data Modeling, Composite Structures, and Type Narrowing (Modules 06-08)
- Manipulate typed arrays, enforce immutability with `readonly T[]` and `ReadonlyArray<T>`, and execute functional transformations (`map`, `filter`, `reduce`, `sort`).
- Model fixed-length positional sequences using tuples, labeled named tuples, and optional tuple elements.
- Construct complex domain models using object literals, explicit type annotations, destructuring, `readonly` fields, dynamic index signatures, and excess property checks.
- Master structural typing using type aliases (`type`) and interfaces (`interface`), callable signatures, interface inheritance (`extends`), declaration merging, and numeric/string/const enums.
- Synthesize flexible types using union types (`|`) and intersection types (`&`), and implement robust pattern matching with tagged discriminated unions.
- Refine types dynamically using built-in type guards, custom user-defined type guards with type predicates (`is`), equality/truthiness narrowing, and compile-time exhaustiveness checking with `never`.
- Apply modern type enforcement utilities including the `satisfies` operator, type assertions (`as`), `const` assertions (`as const`), non-null assertions (`!`), and branded nominal types.

### Tier 3: Advanced Typing, OOP Architecture, and Metaprogramming (Modules 09-12)
- Engineer reusable abstractions with Generic Programming: generic functions (`<T>`), multiple type parameters, constraints (`extends`), generic interfaces, classes, and type aliases.
- Master type-level query operators: `keyof`, `typeof`, indexed access types (`T[K]`), generic key constraints, generic constructor factories (`new () => T`), and variance concepts.
- Execute advanced type-level computations: conditional types (`T extends U ? X : Y`), pattern matching with `infer`, mapped types (`[K in Keys]`), modifier mapping (`+`, `-`, `readonly`, `?`), key remapping (`as`), template literal types, and recursive types.
- Harness TypeScript standard utility types (`Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `InstanceType`, `Awaited`) and build custom utility types.
- Architect class hierarchies with Object-Oriented Programming (OOP): constructors, access modifiers (`public`, `private`, `protected`), parameter properties, getters/setters, static members, abstract classes, method overriding, polymorphism, composition, and experimental decorators.
- Organize modular codebases using ECMAScript Modules (ESM: named/default imports/exports, dynamic imports), module resolution strategies, module augmentation, ambient declarations (`declare module`, `.d.ts`, `declare global`), namespaces, project references, and `tsconfig.json` compiler optimization.

### Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems (Modules 13-18)
- Coordinate asynchronous workflows with Promises, `.then()`/`.catch()` pipelines, Promise combinators (`all`, `allSettled`, `race`), `async/await`, async iterators/generators, `AbortController`, Fetch API integrations, retry patterns with exponential backoff, custom error hierarchies, and the functional `Result<T, E>` pattern.
- Build typed browser client interfaces: DOM selection, typed element hierarchies (`HTMLElement`, `HTMLInputElement`), event listener handling (`MouseEvent`, `KeyboardEvent`), form validation, `FormData`, Web Storage (`localStorage`, `sessionStorage`), URL APIs, Observers (`IntersectionObserver`, `MutationObserver`), Web Workers, and WebSockets.
- Develop backend Node.js solutions utilizing core modules: `process`, CLI arguments, `fs.promises` file I/O, `path`, typed environment variables, native HTTP servers/clients, streams, `EventEmitter`, `crypto`, `worker_threads`, child processes, and `@types/node`.
- Build enterprise backend services with Express 5 and NestJS patterns: DTO contracts, RFC 7807 error formats, Express routing and custom middleware, CRUD REST APIs, database connection pooling, Repository Pattern, typed SQL queries, Prisma Client ORM, runtime schema validation with Zod (`z.infer`), and Dependency Injection (DI).
- Implement software quality assurance and defensive engineering: unit testing with custom assertion harnesses, Vitest (`describe`, `it`, `expect`), Jest matchers, mock spies/stubs, integration testing, compile-time type testing, ESLint, Prettier, secure input validation (path traversal defense), XSS sanitization, JWT authentication typing, and Role-Based Access Control (RBAC).
- Construct two production-grade capstone applications: an Academic Student Management System with GPA calculation and honours classifications, and an Enterprise Full-Stack Task Manager featuring multi-tier Clean Architecture and sprint productivity analytics.

## Learning Roadmap

The curriculum is organized into **18 pedagogical modules** structured in progressive learning sequence across four tiers:

| Module | Title | Level | Topics & Core Focus | Lessons | Material Link |
| :---: | :--- | :---: | :--- | :---: | :---: |
| **01** | Introduction to TypeScript and Program Structure | Level 1 | TypeScript runtime architecture, static typing philosophy, program anatomy, educational documentation syntax, developer console output formatting, basic variable declarations, compiler invocation (tsc), compilation and execution lifecycles, tsconfig.json configurations, strict mode enforcement, and interactive code playground experimentation. | 10 | [`module-01-pengenalan-typescript-dan-struktur-program`](./module-01-pengenalan-typescript-dan-struktur-program) |
| **02** | Variables and Basic Data Types | Level 1 | Modern and legacy variable declarations (let, const, var), scoping and temporal dead zones (TDZ), explicit type annotations, primitive data types (string, number, boolean, bigint, symbol), nullability handling (null, undefined), top and bottom types (any, unknown, never, void), automatic type inference mechanisms, and literal types. | 16 | [`module-02-variabel-dan-tipe-data-dasar`](./module-02-variabel-dan-tipe-data-dasar) |
| **03** | Operators and Control Flow Decision Making | Level 1 | Arithmetic, assignment, comparison, logical, and bitwise operators, unary increment and decrement, inline ternary conditional expressions, nullish coalescing (??), optional chaining (?.), runtime type reflection operators (typeof, instanceof, in), single and multi-branch decision trees (if, else if, else), switch statements with exhaustive branch checking, and compiler Control Flow Analysis (CFA). | 16 | [`module-03-operator-dan-pengambilan-keputusan`](./module-03-operator-dan-pengambilan-keputusan) |
| **04** | Loops and Iteration Control Flow | Level 1 | Iterative control flow structures (for, while, do-while), collection iterations (for...of, for...in), nested loop matrices, jump statements (break, continue), iteration state counters, typed array iteration, loop boundary conditions, numerical pyramid patterns, factorial computation, prime number filtering, and Fibonacci sequence generation. | 16 | [`module-04-perulangan-dan-kontrol-alur`](./module-04-perulangan-dan-kontrol-alur) |
| **05** | Functions and Parameter Signatures | Level 1 | Function declarations, expressions, arrow functions, parameter typing, return type annotations, optional and default parameters, rest parameter arrays (...args), function signature overloads, function type aliases, synchronous and asynchronous callbacks, higher-order functions (HOFs), recursion, introductory generic functions, lexical scoping, closures, explicit this parameter typings, and custom assertion functions (asserts). | 18 | [`module-05-fungsi-dan-parameter`](./module-05-fungsi-dan-parameter) |
| **06** | Arrays, Tuples, and Objects | Level 2 | Homogeneous array data structures, type annotations (T[] vs Array<T>), compile-time readonly arrays, array transformation and iteration methods (map, filter, reduce), sorting algorithms, array destructuring patterns, fixed-length typed tuples, labeled named tuples, optional tuple elements, object literal declarations, type annotations, object destructuring, readonly properties, dynamic index signatures, and excess property checking. | 18 | [`module-06-array-tuple-dan-object`](./module-06-array-tuple-dan-object) |
| **07** | Type Aliases, Interfaces, and Enums | Level 2 | Custom type definitions with type aliases, object shape modeling with interfaces, optional and readonly interface properties, callable interface signatures, index signatures, interface inheritance (extends), automated declaration merging, architectural trade-offs between type aliases and interfaces, numeric, string, and const enums, string literal union alternatives, object type composition, and domain data modeling. | 16 | [`module-07-type-aliases-interface-dan-enum`](./module-07-type-aliases-interface-dan-enum) |
| **08** | Unions, Intersections, and Type Narrowing | Level 2 | Union types (|), intersection types (&), tagged discriminated unions with discriminant properties, runtime type narrowing strategies, standard type guards (typeof, instanceof, in), custom user-defined type guards, type predicates (is), equality and truthiness narrowing, exhaustive switch matching with never guards, the satisfies operator, type assertions (as), deep immutability via const assertions (as const), non-null assertions (!), and nominal branded types. | 18 | [`module-08-union-intersection-dan-type-narrowing`](./module-08-union-intersection-dan-type-narrowing) |
| **09** | Generics and Generic Programming | Level 3 | Generic function signatures (<T>), multiple type parameters, type parameter constraints (extends), generic interfaces, generic class definitions, generic type aliases, default type arguments, key query operator (keyof), runtime-to-type capture (typeof), indexed access types (T[K]), generic key constraints, generic constructor factory patterns (new () => T), generic data collection classes, generic callbacks, compiler type inference, type variance foundations, and generic type guards. | 18 | [`module-09-generics-dan-pemrograman-generik`](./module-09-generics-dan-pemrograman-generik) |
| **10** | Advanced and Mapped Types | Level 3 | Conditional type expressions (T extends U ? X : Y), conditional type inference, type pattern matching with the infer keyword, mapped types, mapped type modifiers (+, -, readonly, ?), key remapping via the as clause, template literal string types, recursive type modeling, recursive conditional types, built-in utility types (Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, InstanceType, Awaited), and custom enterprise utility types. | 22 | [`module-10-advanced-types`](./module-10-advanced-types) |
| **11** | Classes and Object-Oriented Programming (OOP) | Level 3 | Class syntax and object instantiation, class field definitions, typed methods, constructor initialization, access modifier encapsulation (public, private, protected), readonly class properties, concise parameter properties, getters and setters, static members, abstract classes and abstract method contracts, class inheritance (extends, super), method overriding, interface implementation (implements), polymorphism, object composition and aggregation, advanced generic classes, and parameter decorators with reflection metadata. | 20 | [`module-11-class-dan-object-oriented-programming`](./module-11-class-dan-object-oriented-programming) |
| **12** | Modules, Project References, and Configuration | Level 3 | ECMAScript Modules (ESM) named and default exports, named and default imports, namespace imports (import * as), re-exports (export *), dynamic asynchronous imports (import()), module resolution algorithms, module augmentation, declaration merging across files, ambient modules (declare module), type declaration files (.d.ts), global scope augmentation (declare global), namespaces, TypeScript project references, path mapping aliases in tsconfig.json, compiler options, and project configuration. | 18 | [`module-12-modules-dan-pengelolaan-proyek`](./module-12-modules-dan-pengelolaan-proyek) |
| **13** | Asynchronous Programming and Error Handling | Level 4 | Asynchronous callbacks, Promise initialization and typing (Promise<T>), Promise chaining (.then(), .catch(), .finally()), Promise combinators (Promise.all, Promise.allSettled, Promise.race), async/await syntax, asynchronous error handling with try/catch, async return signatures, generic promise wrappers, async iterators (Symbol.asyncIterator), async generators, request cancellation with AbortController, Fetch API integration for GET and POST requests, API response typing, async retry strategies with exponential backoff, custom error class hierarchies, and functional error modeling with the Result<T, E> pattern. | 22 | [`module-13-asynchronous-programming-dan-error-handling`](./module-13-asynchronous-programming-dan-error-handling) |
| **14** | Browser, DOM, and Frontend TypeScript | Level 4 | Document Object Model (DOM) node selection (getElementById, querySelector), DOM element type hierarchies (HTMLElement, HTMLInputElement), text content manipulation, typed attribute operations, dynamic CSS class manipulation (classList), programmatic element creation, typed event listeners and event objects (MouseEvent, KeyboardEvent), form input controls and client-side validation, FormData handling, Web Storage APIs (localStorage, sessionStorage), URL and URLSearchParams APIs, IntersectionObserver, MutationObserver, Web Workers, client WebSockets, Canvas 2D graphics, and modular frontend compilation. | 20 | [`module-14-browser-dom-dan-frontend-typescript`](./module-14-browser-dom-dan-frontend-typescript) |
| **15** | Node.js and Backend TypeScript | Level 4 | Node.js backend execution runtime, process metadata and memory inspection, CLI argument parsing (process.argv), asynchronous file I/O operations (fs.promises), cross-platform path management (path), typed environment variables (process.env), native HTTP web server construction, outbound HTTP client requests, stream data pipelines (Readable, Writable), event-driven architectures (EventEmitter), cryptographic hashing and tokens (crypto), multithreaded worker threads, child process execution, Node.js ambient type definitions (@types/node), and Node.js module interop. | 16 | [`module-15-node-js-dan-backend-typescript`](./module-15-node-js-dan-backend-typescript) |
| **16** | APIs, Databases, and Enterprise Frameworks | Level 4 | REST API contract design with DTOs and standardized response wrappers, request validation pipelines, RFC 7807 compliant error format standards, Express 5 server initialization and typed route handlers, modular Express routers, custom middleware pipelines (request logging and auth guards), controller separation, complete CRUD REST APIs with Express, database connection management and connection pools, Repository Pattern architecture, typed SQL query result sets, Prisma Client ORM workflows, Prisma CRUD operations, runtime schema validation and static inference with Zod (z.infer), NestJS decorator-based controllers, @Injectable() service layers, Dependency Injection (DI) architectures, and NestJS REST API implementations. | 18 | [`module-16-api-database-dan-framework`](./module-16-api-database-dan-framework) |
| **17** | Testing, Tooling, and Application Security | Level 4 | Unit testing principles, modern test execution with Vitest (describe, it, expect), test assertions and matchers with Jest, mock functions (spies and stubs), integration testing methodologies, API endpoint testing, test fixtures and data factories, compile-time static type testing (type assertions), static code analysis with ESLint TypeScript rules, automated code formatting with Prettier, npm package management and lockfile auditing, strongly typed environment configuration loaders, defensive input validation against path traversal attacks, Cross-Site Scripting (XSS) input sanitization, JWT authentication claim modeling, and Role-Based Access Control (RBAC) authorization guards. | 16 | [`module-17-testing-tooling-dan-keamanan`](./module-17-testing-tooling-dan-keamanan) |
| **18** | Practical Capstone Projects | Level 4 | Full-scale capstone software systems consolidating the entire 18-module TypeScript curriculum into enterprise-grade applications: (1) an Object-Oriented Academic Student Management System with course enrollment, credit weighting, automated GPA calculation, honors classifications (Cum Laude, Magna Cum Laude), and formal academic transcript generation; and (2) an enterprise-style Full-Stack Task Manager Application featuring multi-tier Clean Architecture (Controllers, Services, Repositories, DTOs, functional Result<T, E> error handling, state transition guards, and sprint productivity analytics dashboards). | 2 | [`module-18-proyek-praktik-typescript`](./module-18-proyek-praktik-typescript) |

## Prerequisites

To run, compile, and experiment with the code examples in this repository, ensure your development environment satisfies the following baseline requirements:

- **Node.js Runtime:** **Node.js 20+ LTS** (or Node.js 18+ LTS) is recommended. The repository has been verified on Node.js v26.13.0 LTS. Node.js provides the JavaScript runtime engine required to execute compiled code and tooling.
- **Package Manager:** **npm** (v9.x, v10+, or v11+ bundled with Node.js) for installing project dependencies and executing CLI runners.
- **TypeScript Runner:** **tsx** (v4.23+), bundled as a development dependency. `tsx` provides zero-config, high-speed execution for TypeScript files directly without a manual ahead-of-time compile step.
- **TypeScript Compiler:** **tsc** (v5.x / v7.0+), bundled in `devDependencies` to perform full project type checking and JavaScript emission.
- **Command-Line Environment:** Terminal shell such as PowerShell, Command Prompt (cmd), Bash, or Zsh.
- **Code Editor / IDE:** Any modern editor supporting TypeScript language services (Visual Studio Code, Cursor, WebStorm, or Neovim).
- **Prior Experience:** Familiarity with basic programming concepts is helpful, but no prior TypeScript experience is necessary. The curriculum starts from the absolute fundamentals (`01_hello_world.ts`) and progresses systematically.

## Tech Stack & Tools

| Category | Technology / Tool | Version / Standard | Purpose in Curriculum |
| :--- | :--- | :--- | :--- |
| **Core Language** | TypeScript | v7.0.2 (Target ES2022, Module ESNext) | Primary typed programming language and compiler |
| **Runtime Engine** | Node.js | v20+ LTS (Tested v26.13.0) | Underlying JavaScript runtime environment and standard I/O |
| **Fast TS Runner** | tsx | ^4.23.15 | High-speed, zero-config TypeScript execution powered by esbuild |
| **Package Manager** | npm (Node Package Manager) | v10.x / v11.x (Tested v11.20.0) | Dependency management and script lifecycle automation |
| **Web Framework** | Express | ^5.3.0 | Backend HTTP web server, routing, and RESTful API architecture |
| **Schema Validation**| Zod | ^4.6.7 | Runtime input validation and static TypeScript type inference (`z.infer`) |
| **Type Definitions**| @types/node, @types/express | ^26.6.5, ^5.0.6 | Ambient TypeScript typings for Node.js core modules and Express |
| **Testing Paradigms**| Vitest & Jest Patterns | Modern Matcher Assertions | Unit testing, integration testing, and mock function harnesses |
| **Execution Model** | Standalone Single-File Execution | `npx tsx <file>.ts` | Instant file execution without heavy build tooling overhead |

## Getting Started

Follow these steps to set up your local development environment and run your first TypeScript lesson:

### 1. Clone the Repository
```bash
git clone https://github.com/weztcy/TypeScript-Learning-Modules.git
cd "TypeScript-Learning-Modules"
```

### 2. Verify Node.js and npm Installation
Verify that Node.js and npm are installed and available in your system `PATH`:
```bash
node -v
npm -v
```
*(Expected output: `v20.x.x` or later for Node.js, and `9.x.x` or later for npm)*

### 3. Install Repository Dependencies
Install `tsx`, `typescript`, `express`, `zod`, and ambient type declarations:
```bash
npm install
```
*(On Windows PowerShell, if script execution policy restricts `npm`, execute `npm.cmd install`)*

### 4. Execute Your First Lesson
Run the first fundamental lesson directly using `tsx`:
```bash
cd module-01-pengenalan-typescript-dan-struktur-program
npx tsx 01_hello_world.ts
```
*(Alternatively, from the repository root: `npx tsx module-01-pengenalan-typescript-dan-struktur-program/01_hello_world.ts`)*

## How to Use This Repository

To maximize conceptual understanding and practical mastery, follow this recommended six-step study workflow for each subtopic:

```
[Select Module] ──> [Study Theory & README] ──> [Inspect Source Code]
                                                       │
                                                       ▼
[Experiment & Refactor] <── [Compare with Output/ PNG] <── [Execute with tsx]
```

1. **Select a Module:** Begin with Module 01 if you are new to TypeScript, or jump directly to targeted modules (such as Module 08 for Discriminated Unions, Module 09 for Generics, Module 10 for Advanced Types, or Module 16 for Express & Zod) based on your learning goals.
2. **Review the Module README:** Read the dedicated `README.md` inside each module folder for a conceptual overview, learning objectives, and curriculum index.
3. **Inspect the Source Code:** Open the corresponding `.ts` file in your editor. Each file is designed to be self-explanatory, featuring comprehensive educational comments that explain language nuances and structural design.
4. **Execute the Code:** Run the file in your terminal using `npx tsx <filename>.ts`.
5. **Verify Against Execution Screenshots:** Compare your console output against the verified capture in `output/<filename>.png` to ensure expected behavior.
6. **Experiment and Refactor:** Tweak type definitions, alter constraints, introduce intentional type errors to observe compiler diagnostics, and test edge cases to solidify your mental model.

## Learning Modules & Subtopics

Below is the structured overview of all learning modules and their respective subtopics with direct repository links. Detailed explanations, run instructions, and execution captures are documented within the dedicated `README.md` in each module directory.

### Module 01: Pengenalan TypeScript dan Struktur Program (Introduction to TypeScript and Program Structure)

- **Pedagogical Tier:** Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations
- **Pedagogical Level:** Level 1: Fundamental
- **Module Overview:** TypeScript runtime architecture, static typing philosophy, program anatomy, educational documentation syntax, developer console output formatting, basic variable declarations, compiler invocation (tsc), compilation and execution lifecycles, tsconfig.json configurations, strict mode enforcement, and interactive code playground experimentation.
- **Module Directory:** [`./module-01-pengenalan-typescript-dan-struktur-program/`](./module-01-pengenalan-typescript-dan-struktur-program) | **Lessons Count:** 10

#### Subtopics

- [`01_hello_world.ts`](./module-01-pengenalan-typescript-dan-struktur-program/01_hello_world.ts) — Hello World
- [`02_typescript_structure.ts`](./module-01-pengenalan-typescript-dan-struktur-program/02_typescript_structure.ts) — TypeScript Structure
- [`03_comments.ts`](./module-01-pengenalan-typescript-dan-struktur-program/03_comments.ts) — Comments
- [`04_console_output.ts`](./module-01-pengenalan-typescript-dan-struktur-program/04_console_output.ts) — Console Output
- [`05_variable_declaration.ts`](./module-01-pengenalan-typescript-dan-struktur-program/05_variable_declaration.ts) — Variable Declaration
- [`06_typescript_compiler.ts`](./module-01-pengenalan-typescript-dan-struktur-program/06_typescript_compiler.ts) — TypeScript Compiler
- [`07_compile_and_run.ts`](./module-01-pengenalan-typescript-dan-struktur-program/07_compile_and_run.ts) — Compile and Run
- [`08_typescript_configuration.ts`](./module-01-pengenalan-typescript-dan-struktur-program/08_typescript_configuration.ts) — TypeScript Configuration
- [`09_strict_mode.ts`](./module-01-pengenalan-typescript-dan-struktur-program/09_strict_mode.ts) — Strict Mode
- [`10_typescript_playground.ts`](./module-01-pengenalan-typescript-dan-struktur-program/10_typescript_playground.ts) — TypeScript Playground

### Module 02: Variabel dan Tipe Data Dasar (Variables and Basic Data Types)

- **Pedagogical Tier:** Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations
- **Pedagogical Level:** Level 1: Fundamental
- **Module Overview:** Modern and legacy variable declarations (let, const, var), scoping and temporal dead zones (TDZ), explicit type annotations, primitive data types (string, number, boolean, bigint, symbol), nullability handling (null, undefined), top and bottom types (any, unknown, never, void), automatic type inference mechanisms, and literal types.
- **Module Directory:** [`./module-02-variabel-dan-tipe-data-dasar/`](./module-02-variabel-dan-tipe-data-dasar) | **Lessons Count:** 16

#### Subtopics

- [`11_let_variable.ts`](./module-02-variabel-dan-tipe-data-dasar/11_let_variable.ts) — Let Variable
- [`12_const_variable.ts`](./module-02-variabel-dan-tipe-data-dasar/12_const_variable.ts) — Const Variable
- [`13_var_variable.ts`](./module-02-variabel-dan-tipe-data-dasar/13_var_variable.ts) — Var Variable
- [`14_type_annotations.ts`](./module-02-variabel-dan-tipe-data-dasar/14_type_annotations.ts) — Type Annotations
- [`15_string_type.ts`](./module-02-variabel-dan-tipe-data-dasar/15_string_type.ts) — String Type
- [`16_number_type.ts`](./module-02-variabel-dan-tipe-data-dasar/16_number_type.ts) — Number Type
- [`17_boolean_type.ts`](./module-02-variabel-dan-tipe-data-dasar/17_boolean_type.ts) — Boolean Type
- [`18_bigint_type.ts`](./module-02-variabel-dan-tipe-data-dasar/18_bigint_type.ts) — Bigint Type
- [`19_symbol_type.ts`](./module-02-variabel-dan-tipe-data-dasar/19_symbol_type.ts) — Symbol Type
- [`20_null_undefined.ts`](./module-02-variabel-dan-tipe-data-dasar/20_null_undefined.ts) — Null Undefined
- [`21_any_type.ts`](./module-02-variabel-dan-tipe-data-dasar/21_any_type.ts) — Any Type
- [`22_unknown_type.ts`](./module-02-variabel-dan-tipe-data-dasar/22_unknown_type.ts) — Unknown Type
- [`23_never_type.ts`](./module-02-variabel-dan-tipe-data-dasar/23_never_type.ts) — Never Type
- [`24_void_type.ts`](./module-02-variabel-dan-tipe-data-dasar/24_void_type.ts) — Void Type
- [`25_type_inference.ts`](./module-02-variabel-dan-tipe-data-dasar/25_type_inference.ts) — Type Inference
- [`26_literal_types.ts`](./module-02-variabel-dan-tipe-data-dasar/26_literal_types.ts) — Literal Types

### Module 03: Operator dan Pengambilan Keputusan (Operators and Control Flow Decision Making)

- **Pedagogical Tier:** Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations
- **Pedagogical Level:** Level 1: Fundamental
- **Module Overview:** Arithmetic, assignment, comparison, logical, and bitwise operators, unary increment and decrement, inline ternary conditional expressions, nullish coalescing (??), optional chaining (?.), runtime type reflection operators (typeof, instanceof, in), single and multi-branch decision trees (if, else if, else), switch statements with exhaustive branch checking, and compiler Control Flow Analysis (CFA).
- **Module Directory:** [`./module-03-operator-dan-pengambilan-keputusan/`](./module-03-operator-dan-pengambilan-keputusan) | **Lessons Count:** 16

#### Subtopics

- [`27_arithmetic_operators.ts`](./module-03-operator-dan-pengambilan-keputusan/27_arithmetic_operators.ts) — Arithmetic Operators
- [`28_assignment_operators.ts`](./module-03-operator-dan-pengambilan-keputusan/28_assignment_operators.ts) — Assignment Operators
- [`29_comparison_operators.ts`](./module-03-operator-dan-pengambilan-keputusan/29_comparison_operators.ts) — Comparison Operators
- [`30_logical_operators.ts`](./module-03-operator-dan-pengambilan-keputusan/30_logical_operators.ts) — Logical Operators
- [`31_bitwise_operators.ts`](./module-03-operator-dan-pengambilan-keputusan/31_bitwise_operators.ts) — Bitwise Operators
- [`32_increment_decrement.ts`](./module-03-operator-dan-pengambilan-keputusan/32_increment_decrement.ts) — Increment Decrement
- [`33_ternary_operator.ts`](./module-03-operator-dan-pengambilan-keputusan/33_ternary_operator.ts) — Ternary Operator
- [`34_nullish_coalescing.ts`](./module-03-operator-dan-pengambilan-keputusan/34_nullish_coalescing.ts) — Nullish Coalescing
- [`35_optional_chaining.ts`](./module-03-operator-dan-pengambilan-keputusan/35_optional_chaining.ts) — Optional Chaining
- [`36_typeof_operator.ts`](./module-03-operator-dan-pengambilan-keputusan/36_typeof_operator.ts) — Typeof Operator
- [`37_instanceof_operator.ts`](./module-03-operator-dan-pengambilan-keputusan/37_instanceof_operator.ts) — Instanceof Operator
- [`38_in_operator.ts`](./module-03-operator-dan-pengambilan-keputusan/38_in_operator.ts) — In Operator
- [`39_if_statement.ts`](./module-03-operator-dan-pengambilan-keputusan/39_if_statement.ts) — If Statement
- [`40_switch_statement.ts`](./module-03-operator-dan-pengambilan-keputusan/40_switch_statement.ts) — Switch Statement
- [`41_switch_exhaustiveness.ts`](./module-03-operator-dan-pengambilan-keputusan/41_switch_exhaustiveness.ts) — Switch Exhaustiveness
- [`42_control_flow_analysis.ts`](./module-03-operator-dan-pengambilan-keputusan/42_control_flow_analysis.ts) — Control Flow Analysis

### Module 04: Perulangan dan Kontrol Alur (Loops and Iteration Control Flow)

- **Pedagogical Tier:** Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations
- **Pedagogical Level:** Level 1: Fundamental
- **Module Overview:** Iterative control flow structures (for, while, do-while), collection iterations (for...of, for...in), nested loop matrices, jump statements (break, continue), iteration state counters, typed array iteration, loop boundary conditions, numerical pyramid patterns, factorial computation, prime number filtering, and Fibonacci sequence generation.
- **Module Directory:** [`./module-04-perulangan-dan-kontrol-alur/`](./module-04-perulangan-dan-kontrol-alur) | **Lessons Count:** 16

#### Subtopics

- [`43_for_loop.ts`](./module-04-perulangan-dan-kontrol-alur/43_for_loop.ts) — For Loop
- [`44_while_loop.ts`](./module-04-perulangan-dan-kontrol-alur/44_while_loop.ts) — While Loop
- [`45_do_while_loop.ts`](./module-04-perulangan-dan-kontrol-alur/45_do_while_loop.ts) — Do While Loop
- [`46_for_of_loop.ts`](./module-04-perulangan-dan-kontrol-alur/46_for_of_loop.ts) — For of Loop
- [`47_for_in_loop.ts`](./module-04-perulangan-dan-kontrol-alur/47_for_in_loop.ts) — For in Loop
- [`48_nested_loop.ts`](./module-04-perulangan-dan-kontrol-alur/48_nested_loop.ts) — Nested Loop
- [`49_break_statement.ts`](./module-04-perulangan-dan-kontrol-alur/49_break_statement.ts) — Break Statement
- [`50_continue_statement.ts`](./module-04-perulangan-dan-kontrol-alur/50_continue_statement.ts) — Continue Statement
- [`51_loop_counter.ts`](./module-04-perulangan-dan-kontrol-alur/51_loop_counter.ts) — Loop Counter
- [`52_array_iteration.ts`](./module-04-perulangan-dan-kontrol-alur/52_array_iteration.ts) — Array Iteration
- [`53_loop_with_types.ts`](./module-04-perulangan-dan-kontrol-alur/53_loop_with_types.ts) — Loop with Types
- [`54_loop_conditions.ts`](./module-04-perulangan-dan-kontrol-alur/54_loop_conditions.ts) — Loop Conditions
- [`55_number_patterns.ts`](./module-04-perulangan-dan-kontrol-alur/55_number_patterns.ts) — Number Patterns
- [`56_factorial_loop.ts`](./module-04-perulangan-dan-kontrol-alur/56_factorial_loop.ts) — Factorial Loop
- [`57_prime_number.ts`](./module-04-perulangan-dan-kontrol-alur/57_prime_number.ts) — Prime Number
- [`58_fibonacci_loop.ts`](./module-04-perulangan-dan-kontrol-alur/58_fibonacci_loop.ts) — Fibonacci Loop

### Module 05: Fungsi dan Parameter (Functions and Parameter Signatures)

- **Pedagogical Tier:** Tier 1: Syntax Primitives, Type Annotations, and Imperative Foundations
- **Pedagogical Level:** Level 1: Fundamental
- **Module Overview:** Function declarations, expressions, arrow functions, parameter typing, return type annotations, optional and default parameters, rest parameter arrays (...args), function signature overloads, function type aliases, synchronous and asynchronous callbacks, higher-order functions (HOFs), recursion, introductory generic functions, lexical scoping, closures, explicit this parameter typings, and custom assertion functions (asserts).
- **Module Directory:** [`./module-05-fungsi-dan-parameter/`](./module-05-fungsi-dan-parameter) | **Lessons Count:** 18

#### Subtopics

- [`59_function_declaration.ts`](./module-05-fungsi-dan-parameter/59_function_declaration.ts) — Function Declaration
- [`60_function_expression.ts`](./module-05-fungsi-dan-parameter/60_function_expression.ts) — Function Expression
- [`61_arrow_function.ts`](./module-05-fungsi-dan-parameter/61_arrow_function.ts) — Arrow Function
- [`62_function_parameters.ts`](./module-05-fungsi-dan-parameter/62_function_parameters.ts) — Function Parameters
- [`63_function_return_types.ts`](./module-05-fungsi-dan-parameter/63_function_return_types.ts) — Function Return Types
- [`64_optional_parameters.ts`](./module-05-fungsi-dan-parameter/64_optional_parameters.ts) — Optional Parameters
- [`65_default_parameters.ts`](./module-05-fungsi-dan-parameter/65_default_parameters.ts) — Default Parameters
- [`66_rest_parameters.ts`](./module-05-fungsi-dan-parameter/66_rest_parameters.ts) — REST Parameters
- [`67_function_overloads.ts`](./module-05-fungsi-dan-parameter/67_function_overloads.ts) — Function Overloads
- [`68_function_type_alias.ts`](./module-05-fungsi-dan-parameter/68_function_type_alias.ts) — Function Type Alias
- [`69_callback_functions.ts`](./module-05-fungsi-dan-parameter/69_callback_functions.ts) — Callback Functions
- [`70_higher_order_functions.ts`](./module-05-fungsi-dan-parameter/70_higher_order_functions.ts) — Higher Order Functions
- [`71_recursive_functions.ts`](./module-05-fungsi-dan-parameter/71_recursive_functions.ts) — Recursive Functions
- [`72_generic_functions_intro.ts`](./module-05-fungsi-dan-parameter/72_generic_functions_intro.ts) — Generic Functions Intro
- [`73_function_scope.ts`](./module-05-fungsi-dan-parameter/73_function_scope.ts) — Function Scope
- [`74_closures.ts`](./module-05-fungsi-dan-parameter/74_closures.ts) — Closures
- [`75_this_parameter.ts`](./module-05-fungsi-dan-parameter/75_this_parameter.ts) — This Parameter
- [`76_assertion_functions.ts`](./module-05-fungsi-dan-parameter/76_assertion_functions.ts) — Assertion Functions

### Module 06: Array, Tuple, dan Object (Arrays, Tuples, and Objects)

- **Pedagogical Tier:** Tier 2: Data Modeling, Composite Structures, and Type Narrowing
- **Pedagogical Level:** Level 2: Intermediate
- **Module Overview:** Homogeneous array data structures, type annotations (T[] vs Array<T>), compile-time readonly arrays, array transformation and iteration methods (map, filter, reduce), sorting algorithms, array destructuring patterns, fixed-length typed tuples, labeled named tuples, optional tuple elements, object literal declarations, type annotations, object destructuring, readonly properties, dynamic index signatures, and excess property checking.
- **Module Directory:** [`./module-06-array-tuple-dan-object/`](./module-06-array-tuple-dan-object) | **Lessons Count:** 18

#### Subtopics

- [`77_array_basic.ts`](./module-06-array-tuple-dan-object/77_array_basic.ts) — Array Basic
- [`78_array_type_annotations.ts`](./module-06-array-tuple-dan-object/78_array_type_annotations.ts) — Array Type Annotations
- [`79_readonly_array.ts`](./module-06-array-tuple-dan-object/79_readonly_array.ts) — Readonly Array
- [`80_array_methods.ts`](./module-06-array-tuple-dan-object/80_array_methods.ts) — Array Methods
- [`81_array_map.ts`](./module-06-array-tuple-dan-object/81_array_map.ts) — Array Map
- [`82_array_filter.ts`](./module-06-array-tuple-dan-object/82_array_filter.ts) — Array Filter
- [`83_array_reduce.ts`](./module-06-array-tuple-dan-object/83_array_reduce.ts) — Array Reduce
- [`84_array_sorting.ts`](./module-06-array-tuple-dan-object/84_array_sorting.ts) — Array Sorting
- [`85_array_destructuring.ts`](./module-06-array-tuple-dan-object/85_array_destructuring.ts) — Array Destructuring
- [`86_tuple_basic.ts`](./module-06-array-tuple-dan-object/86_tuple_basic.ts) — Tuple Basic
- [`87_named_tuple.ts`](./module-06-array-tuple-dan-object/87_named_tuple.ts) — Named Tuple
- [`88_optional_tuple_elements.ts`](./module-06-array-tuple-dan-object/88_optional_tuple_elements.ts) — Optional Tuple Elements
- [`89_object_basic.ts`](./module-06-array-tuple-dan-object/89_object_basic.ts) — Object Basic
- [`90_object_type_annotations.ts`](./module-06-array-tuple-dan-object/90_object_type_annotations.ts) — Object Type Annotations
- [`91_object_destructuring.ts`](./module-06-array-tuple-dan-object/91_object_destructuring.ts) — Object Destructuring
- [`92_readonly_properties.ts`](./module-06-array-tuple-dan-object/92_readonly_properties.ts) — Readonly Properties
- [`93_index_signatures.ts`](./module-06-array-tuple-dan-object/93_index_signatures.ts) — Index Signatures
- [`94_excess_property_checks.ts`](./module-06-array-tuple-dan-object/94_excess_property_checks.ts) — Excess Property Checks

### Module 07: Type Aliases, Interface, dan Enum (Type Aliases, Interfaces, and Enums)

- **Pedagogical Tier:** Tier 2: Data Modeling, Composite Structures, and Type Narrowing
- **Pedagogical Level:** Level 2: Intermediate
- **Module Overview:** Custom type definitions with type aliases, object shape modeling with interfaces, optional and readonly interface properties, callable interface signatures, index signatures, interface inheritance (extends), automated declaration merging, architectural trade-offs between type aliases and interfaces, numeric, string, and const enums, string literal union alternatives, object type composition, and domain data modeling.
- **Module Directory:** [`./module-07-type-aliases-interface-dan-enum/`](./module-07-type-aliases-interface-dan-enum) | **Lessons Count:** 16

#### Subtopics

- [`100_interface_index_signatures.ts`](./module-07-type-aliases-interface-dan-enum/100_interface_index_signatures.ts) — Interface Index Signatures
- [`101_interface_extends.ts`](./module-07-type-aliases-interface-dan-enum/101_interface_extends.ts) — Interface Extends
- [`102_interface_declaration_merging.ts`](./module-07-type-aliases-interface-dan-enum/102_interface_declaration_merging.ts) — Interface Declaration Merging
- [`103_type_alias_vs_interface.ts`](./module-07-type-aliases-interface-dan-enum/103_type_alias_vs_interface.ts) — Type Alias vs Interface
- [`104_enum_basic.ts`](./module-07-type-aliases-interface-dan-enum/104_enum_basic.ts) — Enum Basic
- [`105_numeric_enum.ts`](./module-07-type-aliases-interface-dan-enum/105_numeric_enum.ts) — Numeric Enum
- [`106_string_enum.ts`](./module-07-type-aliases-interface-dan-enum/106_string_enum.ts) — String Enum
- [`107_const_enum.ts`](./module-07-type-aliases-interface-dan-enum/107_const_enum.ts) — Const Enum
- [`108_enum_alternatives.ts`](./module-07-type-aliases-interface-dan-enum/108_enum_alternatives.ts) — Enum Alternatives
- [`109_object_type_composition.ts`](./module-07-type-aliases-interface-dan-enum/109_object_type_composition.ts) — Object Type Composition
- [`110_data_modeling.ts`](./module-07-type-aliases-interface-dan-enum/110_data_modeling.ts) — Data Modeling
- [`95_type_aliases.ts`](./module-07-type-aliases-interface-dan-enum/95_type_aliases.ts) — Type Aliases
- [`96_interface_basic.ts`](./module-07-type-aliases-interface-dan-enum/96_interface_basic.ts) — Interface Basic
- [`97_interface_optional_properties.ts`](./module-07-type-aliases-interface-dan-enum/97_interface_optional_properties.ts) — Interface Optional Properties
- [`98_interface_readonly_properties.ts`](./module-07-type-aliases-interface-dan-enum/98_interface_readonly_properties.ts) — Interface Readonly Properties
- [`99_interface_function_types.ts`](./module-07-type-aliases-interface-dan-enum/99_interface_function_types.ts) — Interface Function Types

### Module 08: Union, Intersection, dan Type Narrowing (Unions, Intersections, and Type Narrowing)

- **Pedagogical Tier:** Tier 2: Data Modeling, Composite Structures, and Type Narrowing
- **Pedagogical Level:** Level 2: Intermediate
- **Module Overview:** Union types (|), intersection types (&), tagged discriminated unions with discriminant properties, runtime type narrowing strategies, standard type guards (typeof, instanceof, in), custom user-defined type guards, type predicates (is), equality and truthiness narrowing, exhaustive switch matching with never guards, the satisfies operator, type assertions (as), deep immutability via const assertions (as const), non-null assertions (!), and nominal branded types.
- **Module Directory:** [`./module-08-union-intersection-dan-type-narrowing/`](./module-08-union-intersection-dan-type-narrowing) | **Lessons Count:** 18

#### Subtopics

- [`111_union_types.ts`](./module-08-union-intersection-dan-type-narrowing/111_union_types.ts) — Union Types
- [`112_intersection_types.ts`](./module-08-union-intersection-dan-type-narrowing/112_intersection_types.ts) — Intersection Types
- [`113_discriminated_unions.ts`](./module-08-union-intersection-dan-type-narrowing/113_discriminated_unions.ts) — Discriminated Unions
- [`114_type_narrowing.ts`](./module-08-union-intersection-dan-type-narrowing/114_type_narrowing.ts) — Type Narrowing
- [`115_type_guards.ts`](./module-08-union-intersection-dan-type-narrowing/115_type_guards.ts) — Type Guards
- [`116_custom_type_guards.ts`](./module-08-union-intersection-dan-type-narrowing/116_custom_type_guards.ts) — Custom Type Guards
- [`117_type_predicates.ts`](./module-08-union-intersection-dan-type-narrowing/117_type_predicates.ts) — Type Predicates
- [`118_in_operator_narrowing.ts`](./module-08-union-intersection-dan-type-narrowing/118_in_operator_narrowing.ts) — In Operator Narrowing
- [`119_instanceof_narrowing.ts`](./module-08-union-intersection-dan-type-narrowing/119_instanceof_narrowing.ts) — Instanceof Narrowing
- [`120_equality_narrowing.ts`](./module-08-union-intersection-dan-type-narrowing/120_equality_narrowing.ts) — Equality Narrowing
- [`121_truthiness_narrowing.ts`](./module-08-union-intersection-dan-type-narrowing/121_truthiness_narrowing.ts) — Truthiness Narrowing
- [`122_discriminated_switch.ts`](./module-08-union-intersection-dan-type-narrowing/122_discriminated_switch.ts) — Discriminated Switch
- [`123_exhaustive_checks.ts`](./module-08-union-intersection-dan-type-narrowing/123_exhaustive_checks.ts) — Exhaustive Checks
- [`124_satisfies_operator.ts`](./module-08-union-intersection-dan-type-narrowing/124_satisfies_operator.ts) — Satisfies Operator
- [`125_type_assertions.ts`](./module-08-union-intersection-dan-type-narrowing/125_type_assertions.ts) — Type Assertions
- [`126_const_assertions.ts`](./module-08-union-intersection-dan-type-narrowing/126_const_assertions.ts) — Const Assertions
- [`127_non_null_assertion.ts`](./module-08-union-intersection-dan-type-narrowing/127_non_null_assertion.ts) — Non Null Assertion
- [`128_branded_types.ts`](./module-08-union-intersection-dan-type-narrowing/128_branded_types.ts) — Branded Types

### Module 09: Generics dan Pemrograman Generik (Generics and Generic Programming)

- **Pedagogical Tier:** Tier 3: Advanced Typing, OOP Architecture, and Metaprogramming
- **Pedagogical Level:** Level 3: Advanced
- **Module Overview:** Generic function signatures (<T>), multiple type parameters, type parameter constraints (extends), generic interfaces, generic class definitions, generic type aliases, default type arguments, key query operator (keyof), runtime-to-type capture (typeof), indexed access types (T[K]), generic key constraints, generic constructor factory patterns (new () => T), generic data collection classes, generic callbacks, compiler type inference, type variance foundations, and generic type guards.
- **Module Directory:** [`./module-09-generics-dan-pemrograman-generik/`](./module-09-generics-dan-pemrograman-generik) | **Lessons Count:** 18

#### Subtopics

- [`129_generic_functions.ts`](./module-09-generics-dan-pemrograman-generik/129_generic_functions.ts) — Generic Functions
- [`130_generic_parameters.ts`](./module-09-generics-dan-pemrograman-generik/130_generic_parameters.ts) — Generic Parameters
- [`131_generic_constraints.ts`](./module-09-generics-dan-pemrograman-generik/131_generic_constraints.ts) — Generic Constraints
- [`132_generic_interfaces.ts`](./module-09-generics-dan-pemrograman-generik/132_generic_interfaces.ts) — Generic Interfaces
- [`133_generic_classes.ts`](./module-09-generics-dan-pemrograman-generik/133_generic_classes.ts) — Generic Classes
- [`134_generic_type_aliases.ts`](./module-09-generics-dan-pemrograman-generik/134_generic_type_aliases.ts) — Generic Type Aliases
- [`135_multiple_type_parameters.ts`](./module-09-generics-dan-pemrograman-generik/135_multiple_type_parameters.ts) — Multiple Type Parameters
- [`136_default_generic_parameters.ts`](./module-09-generics-dan-pemrograman-generik/136_default_generic_parameters.ts) — Default Generic Parameters
- [`137_keyof_operator.ts`](./module-09-generics-dan-pemrograman-generik/137_keyof_operator.ts) — Keyof Operator
- [`138_typeof_type_operator.ts`](./module-09-generics-dan-pemrograman-generik/138_typeof_type_operator.ts) — Typeof Type Operator
- [`139_indexed_access_types.ts`](./module-09-generics-dan-pemrograman-generik/139_indexed_access_types.ts) — Indexed Access Types
- [`140_generic_key_constraints.ts`](./module-09-generics-dan-pemrograman-generik/140_generic_key_constraints.ts) — Generic Key Constraints
- [`141_generic_factory.ts`](./module-09-generics-dan-pemrograman-generik/141_generic_factory.ts) — Generic Factory
- [`142_generic_collections.ts`](./module-09-generics-dan-pemrograman-generik/142_generic_collections.ts) — Generic Collections
- [`143_generic_callbacks.ts`](./module-09-generics-dan-pemrograman-generik/143_generic_callbacks.ts) — Generic Callbacks
- [`144_generic_inference.ts`](./module-09-generics-dan-pemrograman-generik/144_generic_inference.ts) — Generic Inference
- [`145_variance_basics.ts`](./module-09-generics-dan-pemrograman-generik/145_variance_basics.ts) — Variance Basics
- [`146_generic_type_guards.ts`](./module-09-generics-dan-pemrograman-generik/146_generic_type_guards.ts) — Generic Type Guards

### Module 10: Advanced Types (Advanced and Mapped Types)

- **Pedagogical Tier:** Tier 3: Advanced Typing, OOP Architecture, and Metaprogramming
- **Pedagogical Level:** Level 3: Advanced
- **Module Overview:** Conditional type expressions (T extends U ? X : Y), conditional type inference, type pattern matching with the infer keyword, mapped types, mapped type modifiers (+, -, readonly, ?), key remapping via the as clause, template literal string types, recursive type modeling, recursive conditional types, built-in utility types (Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, InstanceType, Awaited), and custom enterprise utility types.
- **Module Directory:** [`./module-10-advanced-types/`](./module-10-advanced-types) | **Lessons Count:** 22

#### Subtopics

- [`147_conditional_types.ts`](./module-10-advanced-types/147_conditional_types.ts) — Conditional Types
- [`148_conditional_type_inference.ts`](./module-10-advanced-types/148_conditional_type_inference.ts) — Conditional Type Inference
- [`149_infer_keyword.ts`](./module-10-advanced-types/149_infer_keyword.ts) — Infer Keyword
- [`150_mapped_types.ts`](./module-10-advanced-types/150_mapped_types.ts) — Mapped Types
- [`151_mapped_type_modifiers.ts`](./module-10-advanced-types/151_mapped_type_modifiers.ts) — Mapped Type Modifiers
- [`152_key_remapping.ts`](./module-10-advanced-types/152_key_remapping.ts) — Key Remapping
- [`153_template_literal_types.ts`](./module-10-advanced-types/153_template_literal_types.ts) — Template Literal Types
- [`154_recursive_types.ts`](./module-10-advanced-types/154_recursive_types.ts) — Recursive Types
- [`155_recursive_conditional_types.ts`](./module-10-advanced-types/155_recursive_conditional_types.ts) — Recursive Conditional Types
- [`156_utility_partial.ts`](./module-10-advanced-types/156_utility_partial.ts) — Utility Partial
- [`157_utility_required.ts`](./module-10-advanced-types/157_utility_required.ts) — Utility Required
- [`158_utility_readonly.ts`](./module-10-advanced-types/158_utility_readonly.ts) — Utility Readonly
- [`159_utility_pick.ts`](./module-10-advanced-types/159_utility_pick.ts) — Utility Pick
- [`160_utility_omit.ts`](./module-10-advanced-types/160_utility_omit.ts) — Utility Omit
- [`161_utility_record.ts`](./module-10-advanced-types/161_utility_record.ts) — Utility Record
- [`162_utility_exclude_extract.ts`](./module-10-advanced-types/162_utility_exclude_extract.ts) — Utility Exclude Extract
- [`163_utility_nonnullable.ts`](./module-10-advanced-types/163_utility_nonnullable.ts) — Utility Nonnullable
- [`164_utility_returntype.ts`](./module-10-advanced-types/164_utility_returntype.ts) — Utility Returntype
- [`165_utility_parameters.ts`](./module-10-advanced-types/165_utility_parameters.ts) — Utility Parameters
- [`166_utility_instance_type.ts`](./module-10-advanced-types/166_utility_instance_type.ts) — Utility Instance Type
- [`167_utility_awaited.ts`](./module-10-advanced-types/167_utility_awaited.ts) — Utility Awaited
- [`168_custom_utility_types.ts`](./module-10-advanced-types/168_custom_utility_types.ts) — Custom Utility Types

### Module 11: Class dan Object-Oriented Programming (Classes and Object-Oriented Programming (OOP))

- **Pedagogical Tier:** Tier 3: Advanced Typing, OOP Architecture, and Metaprogramming
- **Pedagogical Level:** Level 3: Advanced
- **Module Overview:** Class syntax and object instantiation, class field definitions, typed methods, constructor initialization, access modifier encapsulation (public, private, protected), readonly class properties, concise parameter properties, getters and setters, static members, abstract classes and abstract method contracts, class inheritance (extends, super), method overriding, interface implementation (implements), polymorphism, object composition and aggregation, advanced generic classes, and parameter decorators with reflection metadata.
- **Module Directory:** [`./module-11-class-dan-object-oriented-programming/`](./module-11-class-dan-object-oriented-programming) | **Lessons Count:** 20

#### Subtopics

- [`169_class_basic.ts`](./module-11-class-dan-object-oriented-programming/169_class_basic.ts) — Class Basic
- [`170_class_properties.ts`](./module-11-class-dan-object-oriented-programming/170_class_properties.ts) — Class Properties
- [`171_class_methods.ts`](./module-11-class-dan-object-oriented-programming/171_class_methods.ts) — Class Methods
- [`172_class_constructor.ts`](./module-11-class-dan-object-oriented-programming/172_class_constructor.ts) — Class Constructor
- [`173_access_modifiers.ts`](./module-11-class-dan-object-oriented-programming/173_access_modifiers.ts) — Access Modifiers
- [`174_readonly_class_properties.ts`](./module-11-class-dan-object-oriented-programming/174_readonly_class_properties.ts) — Readonly Class Properties
- [`175_parameter_properties.ts`](./module-11-class-dan-object-oriented-programming/175_parameter_properties.ts) — Parameter Properties
- [`176_getters_setters.ts`](./module-11-class-dan-object-oriented-programming/176_getters_setters.ts) — Getters Setters
- [`177_static_members.ts`](./module-11-class-dan-object-oriented-programming/177_static_members.ts) — Static Members
- [`178_abstract_classes.ts`](./module-11-class-dan-object-oriented-programming/178_abstract_classes.ts) — Abstract Classes
- [`179_abstract_methods.ts`](./module-11-class-dan-object-oriented-programming/179_abstract_methods.ts) — Abstract Methods
- [`180_class_inheritance.ts`](./module-11-class-dan-object-oriented-programming/180_class_inheritance.ts) — Class Inheritance
- [`181_method_overriding.ts`](./module-11-class-dan-object-oriented-programming/181_method_overriding.ts) — Method Overriding
- [`182_implements_keyword.ts`](./module-11-class-dan-object-oriented-programming/182_implements_keyword.ts) — Implements Keyword
- [`183_abstract_vs_interface.ts`](./module-11-class-dan-object-oriented-programming/183_abstract_vs_interface.ts) — Abstract vs Interface
- [`184_polymorphism.ts`](./module-11-class-dan-object-oriented-programming/184_polymorphism.ts) — Polymorphism
- [`185_composition.ts`](./module-11-class-dan-object-oriented-programming/185_composition.ts) — Composition
- [`186_aggregation.ts`](./module-11-class-dan-object-oriented-programming/186_aggregation.ts) — Aggregation
- [`187_generic_classes_advanced.ts`](./module-11-class-dan-object-oriented-programming/187_generic_classes_advanced.ts) — Generic Classes Advanced
- [`188_parameter_decorators.ts`](./module-11-class-dan-object-oriented-programming/188_parameter_decorators.ts) — Parameter Decorators

### Module 12: Modules dan Pengelolaan Proyek (Modules, Project References, and Configuration)

- **Pedagogical Tier:** Tier 3: Advanced Typing, OOP Architecture, and Metaprogramming
- **Pedagogical Level:** Level 3: Advanced
- **Module Overview:** ECMAScript Modules (ESM) named and default exports, named and default imports, namespace imports (import * as), re-exports (export *), dynamic asynchronous imports (import()), module resolution algorithms, module augmentation, declaration merging across files, ambient modules (declare module), type declaration files (.d.ts), global scope augmentation (declare global), namespaces, TypeScript project references, path mapping aliases in tsconfig.json, compiler options, and project configuration.
- **Module Directory:** [`./module-12-modules-dan-pengelolaan-proyek/`](./module-12-modules-dan-pengelolaan-proyek) | **Lessons Count:** 18

#### Subtopics

- [`189_es_module_exports.ts`](./module-12-modules-dan-pengelolaan-proyek/189_es_module_exports.ts) — Es Module Exports
- [`190_default_exports.ts`](./module-12-modules-dan-pengelolaan-proyek/190_default_exports.ts) — Default Exports
- [`191_named_imports.ts`](./module-12-modules-dan-pengelolaan-proyek/191_named_imports.ts) — Named Imports
- [`192_default_imports.ts`](./module-12-modules-dan-pengelolaan-proyek/192_default_imports.ts) — Default Imports
- [`193_namespace_imports.ts`](./module-12-modules-dan-pengelolaan-proyek/193_namespace_imports.ts) — Namespace Imports
- [`194_re_exports.ts`](./module-12-modules-dan-pengelolaan-proyek/194_re_exports.ts) — Re Exports
- [`195_dynamic_import.ts`](./module-12-modules-dan-pengelolaan-proyek/195_dynamic_import.ts) — Dynamic Import
- [`196_module_resolution.ts`](./module-12-modules-dan-pengelolaan-proyek/196_module_resolution.ts) — Module Resolution
- [`197_module_augmentation.ts`](./module-12-modules-dan-pengelolaan-proyek/197_module_augmentation.ts) — Module Augmentation
- [`198_declaration_merging.ts`](./module-12-modules-dan-pengelolaan-proyek/198_declaration_merging.ts) — Declaration Merging
- [`199_ambient_modules.ts`](./module-12-modules-dan-pengelolaan-proyek/199_ambient_modules.ts) — Ambient Modules
- [`200_declaration_files.ts`](./module-12-modules-dan-pengelolaan-proyek/200_declaration_files.ts) — Declaration Files
- [`201_global_declarations.ts`](./module-12-modules-dan-pengelolaan-proyek/201_global_declarations.ts) — Global Declarations
- [`202_namespace_basic.ts`](./module-12-modules-dan-pengelolaan-proyek/202_namespace_basic.ts) — Namespace Basic
- [`203_project_references.ts`](./module-12-modules-dan-pengelolaan-proyek/203_project_references.ts) — Project References
- [`204_path_aliases.ts`](./module-12-modules-dan-pengelolaan-proyek/204_path_aliases.ts) — Path Aliases
- [`205_tsconfig_basic.ts`](./module-12-modules-dan-pengelolaan-proyek/205_tsconfig_basic.ts) — Tsconfig Basic
- [`206_compiler_options.ts`](./module-12-modules-dan-pengelolaan-proyek/206_compiler_options.ts) — Compiler Options

### Module 13: Asynchronous Programming dan Error Handling (Asynchronous Programming and Error Handling)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** Asynchronous callbacks, Promise initialization and typing (Promise<T>), Promise chaining (.then(), .catch(), .finally()), Promise combinators (Promise.all, Promise.allSettled, Promise.race), async/await syntax, asynchronous error handling with try/catch, async return signatures, generic promise wrappers, async iterators (Symbol.asyncIterator), async generators, request cancellation with AbortController, Fetch API integration for GET and POST requests, API response typing, async retry strategies with exponential backoff, custom error class hierarchies, and functional error modeling with the Result<T, E> pattern.
- **Module Directory:** [`./module-13-asynchronous-programming-dan-error-handling/`](./module-13-asynchronous-programming-dan-error-handling) | **Lessons Count:** 22

#### Subtopics

- [`207_callback_functions.ts`](./module-13-asynchronous-programming-dan-error-handling/207_callback_functions.ts) — Callback Functions
- [`208_promise_basic.ts`](./module-13-asynchronous-programming-dan-error-handling/208_promise_basic.ts) — Promise Basic
- [`209_promise_types.ts`](./module-13-asynchronous-programming-dan-error-handling/209_promise_types.ts) — Promise Types
- [`210_promise_then_catch.ts`](./module-13-asynchronous-programming-dan-error-handling/210_promise_then_catch.ts) — Promise Then Catch
- [`211_promise_all.ts`](./module-13-asynchronous-programming-dan-error-handling/211_promise_all.ts) — Promise All
- [`212_promise_all_settled.ts`](./module-13-asynchronous-programming-dan-error-handling/212_promise_all_settled.ts) — Promise All Settled
- [`213_promise_race.ts`](./module-13-asynchronous-programming-dan-error-handling/213_promise_race.ts) — Promise Race
- [`214_async_functions.ts`](./module-13-asynchronous-programming-dan-error-handling/214_async_functions.ts) — Async Functions
- [`215_await_keyword.ts`](./module-13-asynchronous-programming-dan-error-handling/215_await_keyword.ts) — Await Keyword
- [`216_async_error_handling.ts`](./module-13-asynchronous-programming-dan-error-handling/216_async_error_handling.ts) — Async Error Handling
- [`217_async_return_types.ts`](./module-13-asynchronous-programming-dan-error-handling/217_async_return_types.ts) — Async Return Types
- [`218_generic_promises.ts`](./module-13-asynchronous-programming-dan-error-handling/218_generic_promises.ts) — Generic Promises
- [`219_async_iterators.ts`](./module-13-asynchronous-programming-dan-error-handling/219_async_iterators.ts) — Async Iterators
- [`220_async_generators.ts`](./module-13-asynchronous-programming-dan-error-handling/220_async_generators.ts) — Async Generators
- [`221_abort_controller.ts`](./module-13-asynchronous-programming-dan-error-handling/221_abort_controller.ts) — Abort Controller
- [`222_fetch_api.ts`](./module-13-asynchronous-programming-dan-error-handling/222_fetch_api.ts) — Fetch API
- [`223_fetch_get_request.ts`](./module-13-asynchronous-programming-dan-error-handling/223_fetch_get_request.ts) — Fetch Get Request
- [`224_fetch_post_request.ts`](./module-13-asynchronous-programming-dan-error-handling/224_fetch_post_request.ts) — Fetch Post Request
- [`225_api_response_types.ts`](./module-13-asynchronous-programming-dan-error-handling/225_api_response_types.ts) — API Response Types
- [`226_async_retry.ts`](./module-13-asynchronous-programming-dan-error-handling/226_async_retry.ts) — Async Retry
- [`227_error_classification.ts`](./module-13-asynchronous-programming-dan-error-handling/227_error_classification.ts) — Error Classification
- [`228_result_type_pattern.ts`](./module-13-asynchronous-programming-dan-error-handling/228_result_type_pattern.ts) — Result Type Pattern

### Module 14: Browser, DOM, dan Frontend TypeScript (Browser, DOM, and Frontend TypeScript)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** Document Object Model (DOM) node selection (getElementById, querySelector), DOM element type hierarchies (HTMLElement, HTMLInputElement), text content manipulation, typed attribute operations, dynamic CSS class manipulation (classList), programmatic element creation, typed event listeners and event objects (MouseEvent, KeyboardEvent), form input controls and client-side validation, FormData handling, Web Storage APIs (localStorage, sessionStorage), URL and URLSearchParams APIs, IntersectionObserver, MutationObserver, Web Workers, client WebSockets, Canvas 2D graphics, and modular frontend compilation.
- **Module Directory:** [`./module-14-browser-dom-dan-frontend-typescript/`](./module-14-browser-dom-dan-frontend-typescript) | **Lessons Count:** 20

#### Subtopics

- [`229_dom_element_selection.ts`](./module-14-browser-dom-dan-frontend-typescript/229_dom_element_selection.ts) — DOM Element Selection
- [`230_dom_element_types.ts`](./module-14-browser-dom-dan-frontend-typescript/230_dom_element_types.ts) — DOM Element Types
- [`231_dom_text_content.ts`](./module-14-browser-dom-dan-frontend-typescript/231_dom_text_content.ts) — DOM Text Content
- [`232_dom_attributes.ts`](./module-14-browser-dom-dan-frontend-typescript/232_dom_attributes.ts) — DOM Attributes
- [`233_dom_class_list.ts`](./module-14-browser-dom-dan-frontend-typescript/233_dom_class_list.ts) — DOM Class List
- [`234_dom_create_element.ts`](./module-14-browser-dom-dan-frontend-typescript/234_dom_create_element.ts) — DOM Create Element
- [`235_dom_event_listener.ts`](./module-14-browser-dom-dan-frontend-typescript/235_dom_event_listener.ts) — DOM Event Listener
- [`236_dom_event_types.ts`](./module-14-browser-dom-dan-frontend-typescript/236_dom_event_types.ts) — DOM Event Types
- [`237_form_input_types.ts`](./module-14-browser-dom-dan-frontend-typescript/237_form_input_types.ts) — Form Input Types
- [`238_form_validation.ts`](./module-14-browser-dom-dan-frontend-typescript/238_form_validation.ts) — Form Validation
- [`239_form_data.ts`](./module-14-browser-dom-dan-frontend-typescript/239_form_data.ts) — Form Data
- [`240_local_storage.ts`](./module-14-browser-dom-dan-frontend-typescript/240_local_storage.ts) — Local Storage
- [`241_session_storage.ts`](./module-14-browser-dom-dan-frontend-typescript/241_session_storage.ts) — Session Storage
- [`242_url_api.ts`](./module-14-browser-dom-dan-frontend-typescript/242_url_api.ts) — URL API
- [`243_intersection_observer.ts`](./module-14-browser-dom-dan-frontend-typescript/243_intersection_observer.ts) — Intersection Observer
- [`244_mutation_observer.ts`](./module-14-browser-dom-dan-frontend-typescript/244_mutation_observer.ts) — Mutation Observer
- [`245_web_workers.ts`](./module-14-browser-dom-dan-frontend-typescript/245_web_workers.ts) — Web Workers
- [`246_web_socket.ts`](./module-14-browser-dom-dan-frontend-typescript/246_web_socket.ts) — Web Socket
- [`247_canvas_api.ts`](./module-14-browser-dom-dan-frontend-typescript/247_canvas_api.ts) — Canvas API
- [`248_browser_modules.ts`](./module-14-browser-dom-dan-frontend-typescript/248_browser_modules.ts) — Browser Modules

### Module 15: Node.js dan Backend TypeScript (Node.js and Backend TypeScript)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** Node.js backend execution runtime, process metadata and memory inspection, CLI argument parsing (process.argv), asynchronous file I/O operations (fs.promises), cross-platform path management (path), typed environment variables (process.env), native HTTP web server construction, outbound HTTP client requests, stream data pipelines (Readable, Writable), event-driven architectures (EventEmitter), cryptographic hashing and tokens (crypto), multithreaded worker threads, child process execution, Node.js ambient type definitions (@types/node), and Node.js module interop.
- **Module Directory:** [`./module-15-node-js-dan-backend-typescript/`](./module-15-node-js-dan-backend-typescript) | **Lessons Count:** 16

#### Subtopics

- [`249_node_hello_world.ts`](./module-15-node-js-dan-backend-typescript/249_node_hello_world.ts) — Node Hello World
- [`250_node_process.ts`](./module-15-node-js-dan-backend-typescript/250_node_process.ts) — Node Process
- [`251_node_command_line.ts`](./module-15-node-js-dan-backend-typescript/251_node_command_line.ts) — Node Command Line
- [`252_node_file_read.ts`](./module-15-node-js-dan-backend-typescript/252_node_file_read.ts) — Node File Read
- [`253_node_file_write.ts`](./module-15-node-js-dan-backend-typescript/253_node_file_write.ts) — Node File Write
- [`254_node_path.ts`](./module-15-node-js-dan-backend-typescript/254_node_path.ts) — Node Path
- [`255_node_environment.ts`](./module-15-node-js-dan-backend-typescript/255_node_environment.ts) — Node Environment
- [`256_node_http_server.ts`](./module-15-node-js-dan-backend-typescript/256_node_http_server.ts) — Node HTTP Server
- [`257_node_http_client.ts`](./module-15-node-js-dan-backend-typescript/257_node_http_client.ts) — Node HTTP Client
- [`258_node_streams.ts`](./module-15-node-js-dan-backend-typescript/258_node_streams.ts) — Node Streams
- [`259_node_events.ts`](./module-15-node-js-dan-backend-typescript/259_node_events.ts) — Node Events
- [`260_node_crypto.ts`](./module-15-node-js-dan-backend-typescript/260_node_crypto.ts) — Node Crypto
- [`261_node_worker_threads.ts`](./module-15-node-js-dan-backend-typescript/261_node_worker_threads.ts) — Node Worker Threads
- [`262_node_child_process.ts`](./module-15-node-js-dan-backend-typescript/262_node_child_process.ts) — Node Child Process
- [`263_node_types.ts`](./module-15-node-js-dan-backend-typescript/263_node_types.ts) — Node Types
- [`264_node_module_system.ts`](./module-15-node-js-dan-backend-typescript/264_node_module_system.ts) — Node Module System

### Module 16: API, Database, dan Framework (APIs, Databases, and Enterprise Frameworks)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** REST API contract design with DTOs and standardized response wrappers, request validation pipelines, RFC 7807 compliant error format standards, Express 5 server initialization and typed route handlers, modular Express routers, custom middleware pipelines (request logging and auth guards), controller separation, complete CRUD REST APIs with Express, database connection management and connection pools, Repository Pattern architecture, typed SQL query result sets, Prisma Client ORM workflows, Prisma CRUD operations, runtime schema validation and static inference with Zod (z.infer), NestJS decorator-based controllers, @Injectable() service layers, Dependency Injection (DI) architectures, and NestJS REST API implementations.
- **Module Directory:** [`./module-16-api-database-dan-framework/`](./module-16-api-database-dan-framework) | **Lessons Count:** 18

#### Subtopics

- [`265_rest_api_types.ts`](./module-16-api-database-dan-framework/265_rest_api_types.ts) — REST API Types
- [`266_api_request_validation.ts`](./module-16-api-database-dan-framework/266_api_request_validation.ts) — API Request Validation
- [`267_api_error_responses.ts`](./module-16-api-database-dan-framework/267_api_error_responses.ts) — API Error Responses
- [`268_express_server.ts`](./module-16-api-database-dan-framework/268_express_server.ts) — Express Server
- [`269_express_routes.ts`](./module-16-api-database-dan-framework/269_express_routes.ts) — Express Routes
- [`270_express_middleware.ts`](./module-16-api-database-dan-framework/270_express_middleware.ts) — Express Middleware
- [`271_express_controllers.ts`](./module-16-api-database-dan-framework/271_express_controllers.ts) — Express Controllers
- [`272_express_rest_api.ts`](./module-16-api-database-dan-framework/272_express_rest_api.ts) — Express REST API
- [`273_database_connection.ts`](./module-16-api-database-dan-framework/273_database_connection.ts) — Database Connection
- [`274_database_repository.ts`](./module-16-api-database-dan-framework/274_database_repository.ts) — Database Repository
- [`275_sql_query_types.ts`](./module-16-api-database-dan-framework/275_sql_query_types.ts) — SQL Query Types
- [`276_prisma_client.ts`](./module-16-api-database-dan-framework/276_prisma_client.ts) — Prisma Client
- [`277_prisma_crud.ts`](./module-16-api-database-dan-framework/277_prisma_crud.ts) — Prisma CRUD
- [`278_zod_validation.ts`](./module-16-api-database-dan-framework/278_zod_validation.ts) — Zod Validation
- [`279_nestjs_controller.ts`](./module-16-api-database-dan-framework/279_nestjs_controller.ts) — Nestjs Controller
- [`280_nestjs_service.ts`](./module-16-api-database-dan-framework/280_nestjs_service.ts) — Nestjs Service
- [`281_nestjs_dependency_injection.ts`](./module-16-api-database-dan-framework/281_nestjs_dependency_injection.ts) — Nestjs Dependency Injection
- [`282_nestjs_rest_api.ts`](./module-16-api-database-dan-framework/282_nestjs_rest_api.ts) — Nestjs REST API

### Module 17: Testing, Tooling, dan Keamanan (Testing, Tooling, and Application Security)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** Unit testing principles, modern test execution with Vitest (describe, it, expect), test assertions and matchers with Jest, mock functions (spies and stubs), integration testing methodologies, API endpoint testing, test fixtures and data factories, compile-time static type testing (type assertions), static code analysis with ESLint TypeScript rules, automated code formatting with Prettier, npm package management and lockfile auditing, strongly typed environment configuration loaders, defensive input validation against path traversal attacks, Cross-Site Scripting (XSS) input sanitization, JWT authentication claim modeling, and Role-Based Access Control (RBAC) authorization guards.
- **Module Directory:** [`./module-17-testing-tooling-dan-keamanan/`](./module-17-testing-tooling-dan-keamanan) | **Lessons Count:** 16

#### Subtopics

- [`283_typescript_unit_testing.ts`](./module-17-testing-tooling-dan-keamanan/283_typescript_unit_testing.ts) — TypeScript Unit Testing
- [`284_vitest_basic.ts`](./module-17-testing-tooling-dan-keamanan/284_vitest_basic.ts) — Vitest Basic
- [`285_jest_basic.ts`](./module-17-testing-tooling-dan-keamanan/285_jest_basic.ts) — Jest Basic
- [`286_mock_functions.ts`](./module-17-testing-tooling-dan-keamanan/286_mock_functions.ts) — Mock Functions
- [`287_integration_testing.ts`](./module-17-testing-tooling-dan-keamanan/287_integration_testing.ts) — Integration Testing
- [`288_api_testing.ts`](./module-17-testing-tooling-dan-keamanan/288_api_testing.ts) — API Testing
- [`289_test_fixtures.ts`](./module-17-testing-tooling-dan-keamanan/289_test_fixtures.ts) — Test Fixtures
- [`290_type_testing.ts`](./module-17-testing-tooling-dan-keamanan/290_type_testing.ts) — Type Testing
- [`291_eslint_typescript.ts`](./module-17-testing-tooling-dan-keamanan/291_eslint_typescript.ts) — Eslint TypeScript
- [`292_prettier_typescript.ts`](./module-17-testing-tooling-dan-keamanan/292_prettier_typescript.ts) — Prettier TypeScript
- [`293_npm_package_management.ts`](./module-17-testing-tooling-dan-keamanan/293_npm_package_management.ts) — Npm Package Management
- [`294_environment_configuration.ts`](./module-17-testing-tooling-dan-keamanan/294_environment_configuration.ts) — Environment Configuration
- [`295_secure_input_validation.ts`](./module-17-testing-tooling-dan-keamanan/295_secure_input_validation.ts) — Secure Input Validation
- [`296_xss_prevention.ts`](./module-17-testing-tooling-dan-keamanan/296_xss_prevention.ts) — Xss Prevention
- [`297_authentication_types.ts`](./module-17-testing-tooling-dan-keamanan/297_authentication_types.ts) — Authentication Types
- [`298_authorization_types.ts`](./module-17-testing-tooling-dan-keamanan/298_authorization_types.ts) — Authorization Types

### Module 18: Proyek Praktik TypeScript (Practical Capstone Projects)

- **Pedagogical Tier:** Tier 4: Enterprise Backends, Tooling, Security, and Full-Stack Systems
- **Pedagogical Level:** Level 4: Professional & Full-Stack
- **Module Overview:** Full-scale capstone software systems consolidating the entire 18-module TypeScript curriculum into enterprise-grade applications: (1) an Object-Oriented Academic Student Management System with course enrollment, credit weighting, automated GPA calculation, honors classifications (Cum Laude, Magna Cum Laude), and formal academic transcript generation; and (2) an enterprise-style Full-Stack Task Manager Application featuring multi-tier Clean Architecture (Controllers, Services, Repositories, DTOs, functional Result<T, E> error handling, state transition guards, and sprint productivity analytics dashboards).
- **Module Directory:** [`./module-18-proyek-praktik-typescript/`](./module-18-proyek-praktik-typescript) | **Lessons Count:** 2

#### Subtopics

- [`299_student_management_project.ts`](./module-18-proyek-praktik-typescript/299_student_management_project.ts) — Student Management Project
- [`300_fullstack_task_manager_project.ts`](./module-18-proyek-praktik-typescript/300_fullstack_task_manager_project.ts) — Fullstack Task Manager Project

## Exercises & Practice

Practical application and problem-solving exercises are integrated directly throughout the curriculum across four key pedagogical areas:

### 1. Algorithmic Patterns & Iterative Logic (Module 04)
Master core computing algorithms, state accumulators, and mathematical sequences implemented with static type contracts:
- **Number Pattern Generators:** Multi-dimensional pyramid and triangle generators using nested loops ([`55_number_patterns.ts`](./module-04-perulangan-dan-kontrol-alur/55_number_patterns.ts)).
- **Iterative Factorials:** Mathematical factorial computation algorithm with typed accumulator bounds ([`56_factorial_loop.ts`](./module-04-perulangan-dan-kontrol-alur/56_factorial_loop.ts)).
- **Prime Number Filtering:** Divisibility checking and prime number sequence determination ([`57_prime_number.ts`](./module-04-perulangan-dan-kontrol-alur/57_prime_number.ts)).
- **Fibonacci Sequence Generator:** Iterative Fibonacci sequence generation with accumulator state management ([`58_fibonacci_loop.ts`](./module-04-perulangan-dan-kontrol-alur/58_fibonacci_loop.ts)).

### 2. Advanced Type Challenges & Generic Data Structures (Modules 08, 09, & 10)
Solve sophisticated type-level challenges and construct reusable generic collections:
- **Nominal Branded Typing:** Preventing accidental value substitution with branded type brands ([`128_branded_types.ts`](./module-08-union-intersection-dan-type-narrowing/128_branded_types.ts)).
- **Generic Constructor Factories:** Instantiating parameterized instances via constructor signatures ([`141_generic_factory.ts`](./module-09-generics-dan-pemrograman-generik/141_generic_factory.ts)).
- **Generic Collections (Stack & Queue):** Type-safe, reusable data collection classes built from scratch ([`142_generic_collections.ts`](./module-09-generics-dan-pemrograman-generik/142_generic_collections.ts)).
- **Recursive Conditional Types:** Deep nested type flattening and arbitrary-depth type unpacking ([`155_recursive_conditional_types.ts`](./module-10-advanced-types/155_recursive_conditional_types.ts)).
- **Custom Enterprise Utility Types:** Synthesizing complex utility types combining mapped, conditional, and template literal types ([`168_custom_utility_types.ts`](./module-10-advanced-types/168_custom_utility_types.ts)).

### 3. Software Verification & Defensive Security Harnesses (Module 17)
Hands-on practice validating application correctness and implementing defensive security controls:
- **Custom Assertion Test Harness:** Isolated unit testing framework verifying expected outputs against actual results ([`283_typescript_unit_testing.ts`](./module-17-testing-tooling-dan-keamanan/283_typescript_unit_testing.ts)).
- **Vitest Modern Test Suites:** Unit testing using `describe`, `it`, and `expect` matchers ([`284_vitest_basic.ts`](./module-17-testing-tooling-dan-keamanan/284_vitest_basic.ts)).
- **Jest Functional Assertions:** Verifying financial ledger account balances and state mutations ([`285_jest_basic.ts`](./module-17-testing-tooling-dan-keamanan/285_jest_basic.ts)).
- **Mock Functions & Spies:** Isolating service side-effects and asserting invocation counts and parameters ([`286_mock_functions.ts`](./module-17-testing-tooling-dan-keamanan/286_mock_functions.ts)).
- **Compile-Time Static Type Testing:** Validating type assignability and type contracts without runtime overhead ([`290_type_testing.ts`](./module-17-testing-tooling-dan-keamanan/290_type_testing.ts)).
- **Path Traversal Security Guard:** Defensive path normalization preventing unauthorized directory traversal ([`295_secure_input_validation.ts`](./module-17-testing-tooling-dan-keamanan/295_secure_input_validation.ts)).
- **XSS Sanitization Engine:** Escaping untrusted user inputs to neutralize Cross-Site Scripting threats ([`296_xss_prevention.ts`](./module-17-testing-tooling-dan-keamanan/296_xss_prevention.ts)).

### 4. Enterprise Capstone Projects (Module 18)
Module 18 culminates in two comprehensive, end-to-end practical software systems:
1. [`299_student_management_project.ts`](./module-18-proyek-praktik-typescript/299_student_management_project.ts): Full-scale Academic Student Management System featuring Object-Oriented design, credit weighting (SKS), automated GPA calculation, honours predicate evaluations (Cum Laude, Magna Cum Laude), and formal academic transcript generation.
2. [`300_fullstack_task_manager_project.ts`](./module-18-proyek-praktik-typescript/300_fullstack_task_manager_project.ts): Enterprise Full-Stack Task Manager Application architected with multi-tiered Clean Architecture (Controllers, Services, Repositories, DTOs, functional `Result<T, E>` error handling, state transition guards, and sprint productivity analytics dashboards).

## Code Execution & Expected Output

### High-Speed Direct Execution via tsx
Every lesson in this repository is designed to be executed directly from your terminal using `tsx` without a manual build step:
```bash
cd module-01-pengenalan-typescript-dan-struktur-program
npx tsx 01_hello_world.ts
```

### Ahead-of-Time Compilation via tsc
To verify type checking across all files and compile the curriculum to JavaScript:
```bash
npx tsc --noEmit
```
*(Runs the TypeScript compiler in type-check mode without emitting `.js` files)*

### Passing Command-Line Arguments
For lessons demonstrating command-line parameter handling, such as [`251_node_command_line.ts`](./module-15-node-js-dan-backend-typescript/251_node_command_line.ts), supply arguments directly after the script name:
```bash
cd module-15-node-js-dan-backend-typescript
npx tsx 251_node_command_line.ts --mode=production --port=8080 --verbose
```

### Asynchronous & Event-Driven Workflows
Asynchronous lessons (Modules 13, 14, 15, and 16) demonstrate non-blocking I/O and Promise resolution. When running these lessons, synchronous output displays immediately, followed by resolved asynchronous microtasks and timer callbacks:
```bash
cd module-13-asynchronous-programming-dan-error-handling
npx tsx 211_promise_all.ts
```

### Interpreting Execution Screenshots
Each module directory contains an `output/` subfolder holding verified `.png` captures of the actual terminal output produced by executing each specific lesson. Use these screenshots to:
- Confirm that your local runtime output matches the verified reference output byte-for-byte.
- Verify complex terminal formatting, structured JSON output, and tabular summaries.
- Cross-check the execution sequence of asynchronous operations against the JavaScript Event Loop.
- Observe intentional error reporting, stack traces, and validation rejection notices.

## Learning Resources & References

To deepen your knowledge of TypeScript, static typing, and backend software engineering, consult these official documentation portals and reference materials:

- **Official TypeScript Documentation:** [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) — The authoritative reference for TypeScript syntax, compiler options, and handbook guides.
- **TypeScript Handbook:** [typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html) — Comprehensive guide covering basic types, narrowing, object types, and generics.
- **TypeScript TSConfig Reference:** [typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig) — Complete documentation for every configuration flag in `tsconfig.json`.
- **Node.js Official Documentation:** [nodejs.org/docs/latest/api/](https://nodejs.org/docs/latest/api/) — API reference for Node.js core modules (`fs`, `path`, `events`, `http`, `crypto`, `worker_threads`).
- **Express.js Documentation:** [expressjs.com](https://expressjs.com/) — Official documentation for routing, middleware pipelines, and web APIs with Express.
- **Zod Schema Documentation:** [zod.dev](https://zod.dev/) — Definitive documentation for TypeScript-first runtime schema declaration and validation.
- **MDN Web Docs (TypeScript & JavaScript):** [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — Standard reference for ECMAScript specifications, browser DOM, and Web APIs.

## Troubleshooting

Common environment issues and their verified solutions:

### 1. PowerShell Script Execution Policy Error with `npm` or `npx`
- **Cause:** Windows PowerShell restricts executing unsigned script files (`npm.ps1`, `npx.ps1`) under default execution policies (`UnauthorizedAccess`).
- **Fix:** Execute commands using the `.cmd` extension explicitly (e.g., `npm.cmd install` or `npx.cmd tsx <filename>.ts`), or adjust the execution policy for your current user session:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```

### 2. `Error: Cannot find module 'express'` or `Cannot find module 'zod'`
- **Cause:** Optional project dependencies have not been installed in the repository root before executing Module 16 or 18 lessons.
- **Fix:** Navigate to the repository root directory and install dependencies:
  ```bash
  cd "TypeScript-Learning-Modules"
  npm install
  ```

### 3. `'node'` or `'npx'` is not recognized as an internal or external command
- **Cause:** Node.js is not installed or its binary directory has not been added to your system `PATH` environment variable.
- **Fix:** Download and install the latest LTS release from [nodejs.org](https://nodejs.org/). During installation, verify that the "Add to PATH" option is checked, then restart your terminal.

### 4. Special Characters or Emojis Rendering Incorrectly in Windows Console
- **Cause:** Default Windows Command Prompt code page (CP1252 or OEM 437) does not render UTF-8 encoded characters properly.
- **Fix:** Switch your console code page to UTF-8 before running lessons:
  ```powershell
  chcp 65001
  ```

### 5. `TS2304: Cannot find name 'process'` or `Cannot find name 'document'`
- **Cause:** Missing ambient type definitions or missing library flags in `tsconfig.json` (`@types/node` or `"lib": ["DOM"]`).
- **Fix:** Ensure `@types/node` is installed (`npm install -D @types/node`) and verify that `tsconfig.json` contains `"lib": ["ES2022", "DOM", "DOM.Iterable"]`.

## License

Please see the [LICENSE](./LICENSE) file for the terms and conditions governing the use, modification, and distribution of this project.

## Author & Contact

**Yohanes Dimas Pratama**

- GitHub: [github.com/weztcy](https://github.com/weztcy)
- Portfolio: [dimaspratama.vercel.app](https://dimaspratama.vercel.app)
- LinkedIn: [linkedin.com/in/yohanes-dimas](https://www.linkedin.com/in/yohanes-dimas)
