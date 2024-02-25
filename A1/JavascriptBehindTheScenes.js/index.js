/*
In JavaScript, the execution of code occurs within execution contexts, which can be at the global level or within functions. Understanding the global execution context, local execution context, call stack, memory creation, and execution process is crucial for understanding how JavaScript code runs.

Global Execution Context:
The global execution context is the default context in which JavaScript code is executed.
It represents the environment in which global code is executed, including variables, functions, and objects declared in the global scope.
The global execution context is created when a script is first loaded and persists until the script finishes execution.

Local Execution Context:
Local execution contexts are created when a function is invoked.
Each function call creates a new local execution context, which includes its own set of variables, arguments, and a reference to the outer lexical environment (scope chain).
Local execution contexts are destroyed when the function completes its execution.

Call Stack:
The call stack is a data structure that maintains the execution context of active function calls.
When a function is invoked, its execution context is pushed onto the call stack.
When a function completes its execution, its execution context is popped off the call stack.
The call stack operates on a Last In, First Out (LIFO) basis, meaning the most recently pushed context is the first to be popped off.

Memory Creation:
Memory for variables and functions is allocated during the creation phase of the execution context.
Variables declared with var are initialized with the value undefined, while variables declared with let and const remain uninitialized (temporal dead zone) until their respective lines of code are reached.
Function declarations are fully hoisted, meaning they are available for use anywhere within the scope.

Execution:
Once the execution context is set up and variables/functions are allocated memory, the code within the context is executed line by line.
JavaScript engines utilize various optimizations and techniques (e.g., just-in-time compilation, optimizing compilers) to improve performance during code execution.

*/
