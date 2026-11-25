# Portfolio Project Data — TypeScript Learning Modules

- **Category:** `code-learning` (`Code Learning`)
- **Accent Color:** `orange`
- **Target Assets Folder:** `public/images/projects/typescript_learning_modules/`
- **Required Local Images:** `banner.webp` ONLY

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "typescript-learning-modules",
  "code": "PRO-53 // CL-09",
  "title": "TypeScript Learning Modules",
  "category": "code-learning",
  "categoryLabel": "Code Learning",
  "year": "2025",
  "status": "Completed",
  "accentColor": "orange",
  "repoUrl": "https://github.com/weztcy/TypeScript-Learning-Modules",
  "license": "MIT License",
  "banner": "/images/projects/typescript_learning_modules/banner.webp",
  "summary": "Structured 18-module TypeScript curriculum with 300 runnable submodules covering core syntax, type-level programming, Node.js, and capstones.",
  "codeLearningDescription": "A 18-module TypeScript programming curriculum featuring 300 executable submodules, per-module Markdown guides, and verified terminal output captures progressing from static typing fundamentals to generics, advanced types, Node.js backend APIs, and layered capstones.",
  "architectureSummary": "18 progressive module directories -> 300 standalone .ts submodules -> tsconfig strict verification -> tsx runtime execution -> PNG terminal output captures",
  "techStack": [
    "TypeScript",
    "Node.js",
    "tsx",
    "Express",
    "Zod",
    "npm"
  ],
  "telemetryMatrix": {
    "projectType": "TypeScript Learning Curriculum",
    "targetPlatform": "Node.js & Browser DOM",
    "primaryDomain": "Type Systems & Backend Architecture",
    "architecturePipeline": "18 Modules -> 300 Submodules -> tsx",
    "testingAndAudit": "Verified",
    "projectStatus": "Completed",
    "projectYear": "2025"
  },
  "codeLearningProjectInfo": {
    "learningCategory": "Programming Language & Backend Architecture",
    "difficultyLevel": "Beginner to Advanced",
    "programmingLanguages": "TypeScript"
  },
  "codeLearningObjectives": [
    {
      "title": "Strict Static Type Modeling",
      "description": "Configure strict TypeScript environments and model domain structures using primitives, tuples, interfaces, enums, and branded types.",
      "competencyCode": "COMP_01"
    },
    {
      "title": "Control Flow Narrowing & Type Safety",
      "description": "Eliminate runtime edge-case failures with discriminated unions, custom type guards, satisfies checks, and exhaustive never branching.",
      "competencyCode": "COMP_02"
    },
    {
      "title": "Generics & Type-Level Computation",
      "description": "Build reusable components with generic constraints, indexed access types, conditional infer patterns, mapped types, and utility types.",
      "competencyCode": "COMP_03"
    },
    {
      "title": "OOP, Modularity & Async Resilience",
      "description": "Architect maintainable classes, module declarations, async iterators, AbortController flows, and functional Result error handling.",
      "competencyCode": "COMP_04"
    },
    {
      "title": "Full-Stack TypeScript Integration",
      "description": "Apply TypeScript across DOM APIs, Node.js core modules, Express REST controllers, Zod schema validation, security types, and capstones.",
      "competencyCode": "COMP_05"
    }
  ],
  "codeLearningPrerequisites": [
    {
      "category": "Knowledge",
      "items": [
        "Basic command-line navigation and file management",
        "Foundational JavaScript syntax familiarity"
      ],
      "description": "Learners start from Module 01 without prior TypeScript experience; basic familiarity with programming logic accelerates early progression."
    },
    {
      "category": "Tooling Setup",
      "items": [
        "Node.js runtime and npm package manager",
        "TypeScript compiler and tsx runner via npm install",
        "Code editor with TypeScript language server support"
      ],
      "description": "All 300 submodules execute directly with npx tsx against the root tsconfig.json strict configuration."
    }
  ],
  "codeLearningCurriculumStructure": {
    "summary": "Organized across four progressive phases spanning 18 modules and 300 runnable submodules, advancing cleanly from strict compiler setup and primitive types through generics, type-level programming, OOP, async I/O, Express/Zod backend APIs, and integrated capstone systems.",
    "totalEstimatedHours": "90 Hours",
    "phases": [
      {
        "phaseNumber": "01",
        "phaseTitle": "TypeScript Foundations & Core Syntax",
        "difficulty": "Beginner",
        "moduleRange": "Modules 01 - 06",
        "topics": [
          "Compiler Setup & Strict Mode",
          "Primitives, Literals & Special Types",
          "Operators & Control Flow Analysis",
          "Loops & Iterative Algorithms",
          "Typed Functions, Overloads & Closures",
          "Arrays, Named Tuples & Objects"
        ]
      },
      {
        "phaseNumber": "02",
        "phaseTitle": "Type System & Type-Level Programming",
        "difficulty": "Intermediate",
        "moduleRange": "Modules 07 - 10",
        "topics": [
          "Type Aliases, Interfaces & Enums",
          "Discriminated Unions & Narrowing",
          "Generics, Constraints & Variance",
          "Conditional, Mapped & Template Types"
        ]
      },
      {
        "phaseNumber": "03",
        "phaseTitle": "OOP, Modularity & Asynchronous Systems",
        "difficulty": "Intermediate",
        "moduleRange": "Modules 11 - 13",
        "topics": [
          "Classes, Inheritance & Decorators",
          "ES Modules, .d.ts & Project References",
          "Promises, Async Generators & Result Pattern"
        ]
      },
      {
        "phaseNumber": "04",
        "phaseTitle": "Platform Integration, Quality & Capstones",
        "difficulty": "Advanced",
        "moduleRange": "Modules 14 - 18",
        "topics": [
          "Browser DOM & Frontend Web APIs",
          "Node.js Core, Streams & Worker Threads",
          "Express REST APIs, Zod & NestJS Patterns",
          "Testing, Tooling, Security & Capstone Apps"
        ]
      }
    ]
  },
  "codeLearningModules": [
    {
      "id": "mod-01",
      "moduleNumber": "01",
      "title": "Introduction to TypeScript and Program Structure",
      "description": "Introduces TypeScript as a typed JavaScript superset, console output, TSDoc comments, compiler workflow, tsconfig.json, and strict mode.",
      "submoduleCount": 10,
      "difficulty": "Beginner",
      "keyTopics": [
        "Hello World & Program Structure",
        "TSDoc Comments & Console Output",
        "TypeScript Compiler & Configuration",
        "Strict Mode Enforcement"
      ],
      "sourceFilesCount": 10,
      "estimatedHours": "3 Hours"
    },
    {
      "id": "mod-02",
      "moduleNumber": "02",
      "title": "Variables and Basic Data Types",
      "description": "Covers variable declarations (let, const, var), primitive types, special types (any, unknown, never, void), inference, and literal types.",
      "submoduleCount": 16,
      "difficulty": "Beginner",
      "keyTopics": [
        "let, const, and var Scoping",
        "Primitives: string, number, boolean, bigint, symbol",
        "Special Types: null, undefined, unknown, never, void",
        "Type Inference & Literal Types"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "4 Hours"
    },
    {
      "id": "mod-03",
      "moduleNumber": "03",
      "title": "Operators and Decision Making",
      "description": "Explores arithmetic, logical, bitwise, ternary, nullish coalescing, optional chaining, type inspection operators, switch exhaustiveness, and CFA.",
      "submoduleCount": 16,
      "difficulty": "Beginner",
      "keyTopics": [
        "Nullish Coalescing & Optional Chaining",
        "typeof, instanceof, and in Checks",
        "Switch Exhaustiveness with never",
        "Control Flow Analysis"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "4 Hours"
    },
    {
      "id": "mod-04",
      "moduleNumber": "04",
      "title": "Loops and Flow Control",
      "description": "Teaches iterative constructs (for, while, do-while, for...of, for...in), break/continue control, typed array loops, and classic iterative algorithms.",
      "submoduleCount": 16,
      "difficulty": "Beginner",
      "keyTopics": [
        "for, while, do-while, for...of, for...in",
        "Nested Loops & break/continue",
        "Typed Collection Iteration",
        "Factorial, Prime & Fibonacci Algorithms"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "4 Hours"
    },
    {
      "id": "mod-05",
      "moduleNumber": "05",
      "title": "Functions and Parameters",
      "description": "Covers function declarations, arrow functions, optional/default/rest parameters, function overloads, higher-order functions, closures, and assertions.",
      "submoduleCount": 18,
      "difficulty": "Beginner",
      "keyTopics": [
        "Function Overloads & Type Aliases",
        "Optional, Default & Rest Parameters",
        "Callbacks, Higher-Order Functions & Closures",
        "Contextual this & Assertion Functions"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-06",
      "moduleNumber": "06",
      "title": "Arrays, Tuples, and Objects",
      "description": "Details typed and readonly arrays, functional array transformations, fixed and named tuples, object annotations, index signatures, and excess property checks.",
      "submoduleCount": 18,
      "difficulty": "Beginner",
      "keyTopics": [
        "Readonly Arrays & map/filter/reduce",
        "Fixed, Named & Optional Tuples",
        "Destructuring & Readonly Properties",
        "Index Signatures & Excess Property Checks"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-07",
      "moduleNumber": "07",
      "title": "Type Aliases, Interfaces, and Enums",
      "description": "Compares type aliases and interfaces, declaration merging, inheritance, numeric/string/const enums, union alternatives, and domain data modeling.",
      "submoduleCount": 16,
      "difficulty": "Intermediate",
      "keyTopics": [
        "Interface Extends & Declaration Merging",
        "Type Alias vs. Interface Trade-offs",
        "Numeric, String & Const Enums",
        "Union Enum Alternatives & Data Modeling"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-08",
      "moduleNumber": "08",
      "title": "Union, Intersection, and Type Narrowing",
      "description": "Demonstrates union and intersection composition, discriminated unions, custom type predicates, exhaustive checks, satisfies, const assertions, and branded types.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": [
        "Discriminated Unions & Switch Narrowing",
        "Custom Type Guards & Type Predicates",
        "satisfies Operator & Const Assertions",
        "Branded Types for Nominal Safety"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-09",
      "moduleNumber": "09",
      "title": "Generics and Generic Programming",
      "description": "Covers generic functions, constraints, classes, keyof, indexed access types, generic factories, collections, inference, variance basics, and generic guards.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": [
        "Generic Functions, Interfaces & Classes",
        "Constraints, keyof & Indexed Access Types",
        "Generic Factories & Typed Collections",
        "Type Inference & Variance Basics"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-10",
      "moduleNumber": "10",
      "title": "Advanced Types",
      "description": "Teaches compile-time type-level programming with conditional types, infer, mapped types, key remapping, template literals, recursive types, and utility types.",
      "submoduleCount": 22,
      "difficulty": "Advanced",
      "keyTopics": [
        "Conditional Types & infer Keyword",
        "Mapped Types, Modifiers & Key Remapping",
        "Template Literal & Recursive Types",
        "Built-in & Custom Utility Types"
      ],
      "sourceFilesCount": 22,
      "estimatedHours": "7 Hours"
    },
    {
      "id": "mod-11",
      "moduleNumber": "11",
      "title": "Classes and Object-Oriented Programming",
      "description": "Covers class design, access modifiers, parameter properties, abstract classes, inheritance, polymorphism, composition, aggregation, generic repositories, and decorators.",
      "submoduleCount": 20,
      "difficulty": "Intermediate",
      "keyTopics": [
        "Encapsulation & Parameter Properties",
        "Abstract Classes vs. Interfaces",
        "Polymorphism, Composition & Aggregation",
        "Generic Repositories & Parameter Decorators"
      ],
      "sourceFilesCount": 20,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-12",
      "moduleNumber": "12",
      "title": "Modules and Project Management",
      "description": "Explains ES module exports/imports, barrel re-exports, dynamic imports, module augmentation, ambient .d.ts declarations, project references, and path aliases.",
      "submoduleCount": 18,
      "difficulty": "Intermediate",
      "keyTopics": [
        "ES Modules, Barrel Re-exports & Dynamic Import",
        "Module Augmentation & Declaration Merging",
        "Ambient Modules & .d.ts Declarations",
        "Project References, Path Aliases & Compiler Options"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-13",
      "moduleNumber": "13",
      "title": "Asynchronous Programming and Error Handling",
      "description": "Covers callbacks, typed promises, combinators (all/allSettled/race), async/await, async generators, AbortController, Fetch typing, retries, and Result types.",
      "submoduleCount": 22,
      "difficulty": "Intermediate",
      "keyTopics": [
        "Promise Combinators & async/await",
        "Async Iterators, Generators & AbortController",
        "Typed Fetch API Requests & Responses",
        "Async Retry, Error Hierarchy & Result Pattern"
      ],
      "sourceFilesCount": 22,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-14",
      "moduleNumber": "14",
      "title": "Browser, DOM, and Frontend TypeScript",
      "description": "Models typed DOM selection, event handlers, form validation, FormData, Web Storage, URLSearchParams, Observers, Web Workers, WebSockets, and Canvas API.",
      "submoduleCount": 20,
      "difficulty": "Intermediate",
      "keyTopics": [
        "DOM Element Types & Safe textContent",
        "Typed Events, Form Validation & FormData",
        "Web Storage, URL API & Observers",
        "Web Workers, WebSocket & Canvas API"
      ],
      "sourceFilesCount": 20,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-15",
      "moduleNumber": "15",
      "title": "Node.js and Backend TypeScript",
      "description": "Covers Node.js process metadata, CLI arguments, fs/promises, path utilities, HTTP server/client, streams, EventEmitter, crypto, worker threads, and CJS vs. ESM.",
      "submoduleCount": 16,
      "difficulty": "Advanced",
      "keyTopics": [
        "Process, CLI Args & Environment Config",
        "Async File I/O, Path & HTTP Server/Client",
        "Streams, EventEmitter & Crypto Module",
        "Worker Threads, Child Process & Node Types"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-16",
      "moduleNumber": "16",
      "title": "API, Database, and Frameworks",
      "description": "Demonstrates REST DTOs, RFC 7807 errors, Express routing/middleware/CRUD, SQL query typing, repository patterns, Prisma concepts, Zod validation, and NestJS DI.",
      "submoduleCount": 18,
      "difficulty": "Advanced",
      "keyTopics": [
        "Express Server, Routing, Middleware & CRUD",
        "Database Pooling, Repository & SQL Types",
        "Zod Schema Validation & Type Inference",
        "Prisma ORM & NestJS Decorator Patterns"
      ],
      "sourceFilesCount": 18,
      "estimatedHours": "6 Hours"
    },
    {
      "id": "mod-17",
      "moduleNumber": "17",
      "title": "Testing, Tooling, and Security",
      "description": "Covers unit/integration/API testing patterns, Vitest/Jest structures, mocks, compile-time type testing, ESLint/Prettier, input validation, XSS, JWT, and RBAC.",
      "submoduleCount": 16,
      "difficulty": "Advanced",
      "keyTopics": [
        "Unit, Integration, API & Type Testing",
        "Fixtures, Mocks, ESLint & Prettier",
        "Path Traversal & XSS Prevention",
        "JWT Authentication & RBAC Authorization Types"
      ],
      "sourceFilesCount": 16,
      "estimatedHours": "5 Hours"
    },
    {
      "id": "mod-18",
      "moduleNumber": "18",
      "title": "Practical TypeScript Projects",
      "description": "Synthesizes the curriculum into two complete capstone applications: an OOP Student Management System and a layered Full-Stack Task Manager backend simulation.",
      "submoduleCount": 2,
      "difficulty": "Advanced",
      "keyTopics": [
        "OOP Student Management & GPA Calculator",
        "Layered Controller-Service-Repository Design",
        "Functional Result Pattern & State Guards",
        "Sprint Productivity Analytics"
      ],
      "sourceFilesCount": 2,
      "estimatedHours": "4 Hours"
    }
  ],
  "codeLearningPracticalProjects": [
    {
      "title": "Student Management System (SistemAkademikMahasiswa)",
      "description": "Object-oriented academic administration system managing student enrollment, credit-weighted course grades, automatic GPA calculation, graduation predicate evaluation, and formatted transcript printing.",
      "highlights": [
        "Strict domain modeling using ProgramStudi enum, PredikatKelulusan union, and NilaiMataKuliah interfaces",
        "Weighted grade-point aggregation and automated academic predicate evaluation",
        "Map-backed student registry with duplicate NIM protection"
      ],
      "coreScope": "Student enrollment, course grade recording, GPA computation, and formatted console transcripts",
      "trackTag": "Capstone Project 01",
      "tier": "Core",
      "difficulty": "Intermediate",
      "estimatedTime": "2 Hours",
      "architecturalConstraints": [
        "Zero external dependencies using standard TypeScript collections and OOP encapsulation",
        "Compile-time enforcement of valid letter grades and study program enums"
      ]
    },
    {
      "title": "Full-Stack Task Manager Application",
      "description": "Layered task management backend simulation combining REST controller routing, business validation service, in-memory repository, functional Result error handling, and sprint analytics reporting.",
      "highlights": [
        "Separation of concerns across TaskController, TaskService, and TaskRepository",
        "Discriminated union Result<T, E> error handling for deterministic HTTP status simulation",
        "Immutable completion guard preventing transitions out of SELESAI state"
      ],
      "coreScope": "Task creation, status workflow validation, failure handling, and sprint dashboard metrics",
      "trackTag": "Capstone Project 02",
      "tier": "Advanced",
      "difficulty": "Advanced",
      "estimatedTime": "2 Hours",
      "architecturalConstraints": [
        "Layered Controller -> Service -> Repository dependency injection",
        "Strict state-machine transition rules enforced via typed Result payloads"
      ]
    }
  ],
  "codeLearningOutcomes": [
    {
      "pillar": "Static Type System & Type-Level Engineering",
      "skills": [
        {
          "title": "Domain Modeling with Algebraic Types",
          "description": "Design expressive interfaces, discriminated unions, branded types, and exhaustiveness checks that prevent invalid application states at compile time."
        },
        {
          "title": "Generic & Conditional Type Utilities",
          "description": "Author reusable generic abstractions, key-constrained helpers, and custom mapped/conditional utility types with infer."
        }
      ]
    },
    {
      "pillar": "Modular & Asynchronous Software Architecture",
      "skills": [
        {
          "title": "Object-Oriented & Layered Patterns",
          "description": "Structure applications using encapsulated classes, abstract contracts, repository patterns, and clean controller-service separation."
        },
        {
          "title": "Resilient Async & Error Workflows",
          "description": "Implement cancellation-aware async pipelines, typed HTTP interactions, and functional Result envelopes for predictable error recovery."
        }
      ]
    },
    {
      "pillar": "Backend APIs, Validation & Secure Coding",
      "skills": [
        {
          "title": "Typed Express & Zod Services",
          "description": "Build Express REST endpoints backed by Zod runtime schema validation and automatic static type inference."
        },
        {
          "title": "Quality Assurance & Security Typing",
          "description": "Apply unit/type testing strategies, input sanitization, XSS prevention, and typed JWT/RBAC authorization contracts."
        }
      ]
    }
  ],
  "codeLearningCurriculumSpecs": {
    "curriculumTrack": "Full-Stack TypeScript Mastery",
    "primaryLanguage": "TypeScript",
    "executionRuntime": "Node.js with tsx",
    "testVerification": "300 Verified Output Captures"
  },
  "codeLearningSupplementaryResources": [
    {
      "title": "Per-Module Curriculum Guides",
      "description": "Eighteen dedicated Markdown handbooks inside each module folder detailing scope, learning goals, submodule explanations, and execution commands.",
      "resources": [
        {
          "name": "Module 01-18 README.md Guides",
          "type": "Reference Guide",
          "format": "MD"
        }
      ]
    },
    {
      "title": "Verified Terminal Output Captures",
      "description": "Three hundred PNG terminal screenshots stored inside each module's output/ directory documenting expected runtime results for every submodule.",
      "resources": [
        {
          "name": "output/01_hello_world.png - 300_fullstack_task_manager_project.png",
          "type": "Execution Output Archive",
          "format": "PNG"
        }
      ]
    },
    {
      "title": "Workspace Compiler & Package Configuration",
      "description": "Root TypeScript strict compiler settings and Node.js dependency manifest supporting Express, Zod, and direct tsx execution.",
      "resources": [
        {
          "name": "tsconfig.json & package.json",
          "type": "Workspace Config",
          "format": "JSON"
        }
      ]
    }
  ]
}
```
