---
title: "Mastering TypeScript: Advanced Types and Patterns"
date: "2024-01-03"
author: "Alex Chen"
excerpt: "Deep dive into TypeScript's advanced type system, including conditional types, mapped types, and practical design patterns."
coverImage: "/blog/getting-started-with-nextjs.png"
---

# Mastering TypeScript: Advanced Types and Patterns

TypeScript has revolutionized JavaScript development by introducing a powerful type system. Let's explore some advanced concepts that can make your code more robust and maintainable.

## Advanced Type Features

### Conditional Types

Conditional types are one of TypeScript's most powerful features:

```typescript
type IsString<T> = T extends string ? true : false;

// Examples
type A = IsString<string>; // true
type B = IsString<number>; // false

// More complex example
type ArrayOrSingle<T> = T extends any[] ? T[number] : T;

type C = ArrayOrSingle<string[]>; // string
type D = ArrayOrSingle<number>; // number
```

### Mapped Types

Transform existing types into new ones:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// {
//     readonly name: string;
//     readonly age: number;
// }
```

## Design Patterns in TypeScript

### The Builder Pattern

```typescript
class RequestBuilder {
  private url: string = "";
  private method: "GET" | "POST" = "GET";
  private headers: Record<string, string> = {};

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setMethod(method: "GET" | "POST"): this {
    this.method = method;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  build() {
    return {
      url: this.url,
      method: this.method,
      headers: this.headers,
    };
  }
}
```

### Type Guards

Custom type guards improve type inference:

```typescript
interface Cat {
  name: string;
  purr(): void;
}

interface Dog {
  name: string;
  bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return "purr" in animal;
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.purr(); // TypeScript knows this is safe
  } else {
    animal.bark(); // TypeScript knows this is safe
  }
}
```

## Advanced Utility Types

Here's a table of useful utility types:

| Type          | Description                   | Example                  |
| ------------- | ----------------------------- | ------------------------ |
| `Partial<T>`  | Makes all properties optional | `Partial<User>`          |
| `Required<T>` | Makes all properties required | `Required<User>`         |
| `Pick<T, K>`  | Picks specific properties     | `Pick<User, 'name'>`     |
| `Omit<T, K>`  | Omits specific properties     | `Omit<User, 'password'>` |

## Generic Constraints

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): number {
  console.log(item.length);
  return item.length;
}

// Works with strings
logLength("Hello"); // 5

// Works with arrays
logLength([1, 2, 3]); // 3

// Error: number doesn't have length property
// logLength(123);  // Error!
```

## Best Practices

1. **Use Type Inference When Possible**

   ```typescript
   // Good
   const numbers = [1, 2, 3]; // Type is number[]

   // Unnecessary
   const numbers: number[] = [1, 2, 3];
   ```

2. **Leverage Union Types**

   ```typescript
   type Status = "pending" | "approved" | "rejected";

   function processStatus(status: Status) {
     // TypeScript ensures we handle all cases
     switch (status) {
       case "pending":
         return "⏳";
       case "approved":
         return "✅";
       case "rejected":
         return "❌";
     }
   }
   ```

## Common Pitfalls

> ⚠️ **Warning**: Be careful with type assertions. They can mask real issues:

```typescript
// Bad
const user = {} as User;

// Good
const user: User = {
  name: "John",
  age: 30,
};
```

## Advanced Example: API Type Safety

Here's a more complex example combining multiple concepts:

```typescript
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type ApiError = {
  code: number;
  message: string;
};

async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return {
      data,
      status: response.status,
      message: "Success",
    };
  } catch (error) {
    throw {
      code: 500,
      message: error instanceof Error ? error.message : "Unknown error",
    } as ApiError;
  }
}
```

## Conclusion

TypeScript's type system is incredibly powerful when used correctly. By understanding these advanced concepts, you can write more maintainable and error-free code.

---

_Remember: Types are documentation that TypeScript can verify for you!_
