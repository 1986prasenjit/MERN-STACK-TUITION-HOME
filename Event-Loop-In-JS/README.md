# JavaScript Event Loop – Simple Explanation

This README explains how the JavaScript Event Loop works using simple words, small examples, and clear steps.  
No complex terms. Just how things actually run.

---

## Big Picture

JavaScript runs on a **single thread**.  
This means it can do **one thing at a time**.

But JavaScript can still handle:
- timers
- API calls
- user clicks
- promises

It does this using the **Event Loop**.

---

## Main Parts Involved

### 1. Call Stack
This is where JavaScript runs code **right now**.

Think of it like:
> What the CPU is currently executing.

If a function is running, it is in the call stack.

---

### 2. Web APIs (Browser / Node helpers)

Some tasks take time:
- `setTimeout`
- DOM events like `click`
- network requests

JavaScript sends these tasks to Web APIs so it does not get blocked.

JavaScript does **not wait** here.

---

### 3. Task Queue (Callback Queue)

When Web APIs finish their work, they put callbacks here.

Examples:
- `setTimeout`
- `click`
- `input`
- most event handlers

This queue waits for the call stack to become empty.

---

### 4. Microtask Queue (Priority Queue)

This queue has **higher priority** than the task queue.

Examples:
- `Promise.then`
- `Promise.catch`
- `Promise.finally`
- `queueMicrotask`

Microtasks always run **before** tasks.

---

### 5. Event Loop

The event loop does only one thing repeatedly:

1. Check if the call stack is empty
2. If yes, run **all microtasks**
3. Then run **one task**
4. Repeat forever

That’s it.

---

## Simple Code Example

```js
console.log('start');

setTimeout(() => {
  console.log('timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('promise then');
});

console.log('end');
Output
start
end
promise then
timeout callback
Why this happens
start runs immediately

setTimeout goes to Web APIs

Promise.then goes to microtask queue

end runs immediately

Call stack becomes empty

Event loop runs microtasks first → promise then

Then task queue → timeout callback

Slightly Tricky Example
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => {
  console.log('C');
  Promise.resolve().then(() => console.log('D'));
});

console.log('E');
Output
A
E
C
D
B
Explanation
A and E run first (normal sync code)

C runs (microtask)

D runs (nested microtask)

B runs last (task queue)

Microtasks always finish first.

Easy Analogy (Remember This)
Call Stack → Chef cooking right now

Web APIs → Helpers doing work in the background

Microtask Queue → VIP orders

Task Queue → Normal orders

Event Loop → Manager deciding what the chef cooks next

VIP orders always go first.

Important Rules to Remember
JavaScript runs one thing at a time

Promises have higher priority than timers

setTimeout(0) is not instant

Event loop runs tasks only when the call stack is empty

Microtasks always finish before tasks

Final Thought
If you understand why promises run before setTimeout,
you already understand the event loop.

Everything else is just details.