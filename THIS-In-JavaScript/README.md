# Understanding `this` in JavaScript (Explained Like You’re 5)

If JavaScript feels confusing, don’t worry.  
The `this` keyword confuses almost everyone at first.

We’ll break it down slowly, with stories, simple rules, and tiny examples.

No buzzwords. No shortcuts.

---

## What is `this`?

Think about this sentence:

> “I am happy.”

Who is **I**?

- If Rahul says it → **I = Rahul**
- If Priya says it → **I = Priya**

So the word **“I” changes** depending on **who is speaking**.

In JavaScript:

> `this` is just like the word **“I”**

It means:

👉 **Who is speaking right now?**  
👉 **Who is calling this function?**

---

## Rule Number One (Very Important)

**`this` depends on HOW a function is called, not where it is written.**

Keep this rule in mind. Everything else comes from this.

---

## 1. `this` Inside an Object

Think of an object as a person.

```js
const person = {
  name: "Rahul",
  sayName: function () {
    console.log(this.name);
  }
};

person.sayName();