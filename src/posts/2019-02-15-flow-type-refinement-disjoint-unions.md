---
title: 'Using Flow''s type refinement for powerful, flexible, safer code'
description: Learn how to use disjoint unions in Flow for more powerful type refinement.
date: "2019-02-15"
type: post
status: draft
tags:
  - FlowType
  - JavaScript
aliases:
  - /2019-02-15-using-flows-type-refinement-for-powerful-flexible-safer-code/
  - /2019/2019-02-15-flow-type-refinement-disjoint-unions/
permalink: /posts/using-flows-type-refinement-for-powerful-flexible-safer-code/
---



## Goal

After learning about three concepts: **union types**, **type refinement** and **disjoint unions**, you'll be able to use type refinement to create functions that are flexible and powerful while also keeping your code safe from footguns[^footguns].

We're going to start with a basic vanilla JavaScript example in order to understand how Flow can help us write code that can allows us to maintain the flexibility of JavaScript while still giving us safety with types.

In this example, we're going to write a simple function called `say` that:

- takes a string that is one of 4 types of animal: `"Dog"`, `"Cat"`, `"Cow"` and `"Horse"`
- executes a `console.log` with the noise that animal makes
- have a default for "I'm not a farm animal!" if someone passes a value we didn't prepare for

```js
const say = animal => {
    switch (animal) {
    case "Dog":
        console.log("woof!");
        break;
    case "Cat":
        console.log("meow.");
        break;
    case "Cow":
        console.log("moooooooo");
        break;
    case "Horse":
        console.log("nay-hay-hay-hay-hay!!!");
        break;
    default:
        console.log("I'm not a farm animal!");
    }
};

say("Dog"); // prints "woof!"
say("Cat"); // prints "meow."
say("Cow"); // prints "moooooooo"
say("Horse"); // prints "nay-hay-hay-hay-hay!!!"
say("Human"); // prints "I'm not a farm animal!"
```

As you can see, all of our animals are saying what we want them to.

Does the `switch(animal)` pattern above look familiar? You probably have some code that you've written recently that does a check for the value of a variable and do something unique based on it. This is the un-typed version of **type refinement**.

**Type refinement** is the ability to determine what to do based on the value a statement receives. If the value of `animal` is `"Dog"`, `console.log("woof!")`.

As you can see above, our "farm" only has 4 types of animals and we have a catch-all for if someone passes an animal that we don't have in our farm. We only want to do something if we receive one of those 4 types, and we want to let the caller know that we don't support other types of values to be passed to our `say` function.

Type refinement is possible because of the second concept we're going to explore: **union types**.

## Union Types

Before we implement Flow in our project, let's talk about **union types**.

Remember how we wanted to only take one of 4 types of animals and nothing more? That's achieved through **union types**.

We'll define a type for `Animal` that is a union type of "Dog", "Cat", "Cow" and "Horse":

```js
type Animal = "Dog" | "Cat" | "Cow" | "Horse";
```

As you can see, a union type is a single type that can be of any type joined by the pipe (`|`) character. It's also not restricted to strings, as we'll see in the last section.

Now any statement that takes an argument that is of type `Animal` can *only* be called with one of those 4 values. Flow will error (as we'll see in the next section) if the caller passes a value to the function that doesn't match one of those types.

## Implementing Flow

Equipped with our knew found knowledge of union types and our `Animal` type, we need to implement Flow in our file.

In order to do this we need to:

1. Add the `// @flow` pragma so Flow knows to check the file
2. Create a union type for `Animal`
3. Type `say` to take `animal` as type `Animal`

```js
// @flow
type Animal = "Dog" | "Cat" | "Cow" | "Horse";

const say = (animal: Animal) => {
    switch (animal) {
    case "Dog":
        console.log("woof!");
        break;
    case "Cat":
        console.log("meow.");
        break;
    case "Cow":
        console.log("moooooooo");
        break;
    case "Horse":
        console.log("nay-hay-hay-hay-hay!!!");
        break;
    default:
        console.log("I'm not a farm animal!");
    }
};

say("Dog"); // Works! => prints "woof!"
say("Cat"); // Works! => prints "meow."
say("Cow"); // Works! => prints "moooooooo"
say("Horse"); // Works! => prints "nay-hay-hay-hay-hay!!!"
say("Human"); // Error!
```

Now if we run `npx flow`, we get an error about the call of `say("Human")`:

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:27:5

Cannot call say with "Human" bound to animal because string [1] is incompatible with enum [2].

    [2]  4│ const say = (animal: Animal) => {
        :
        24│ say("Cat");
        25│ say("Cow");
        26│ say("Horse");
    [1] 27│ say("Human");
        28│



Found 1 error
```

Now we've made it impossible to pass a value that's not in our union type! This also let's us clean up our code by allowing us to remove the following from our switch statement:

```js
    default:
          console.log("I'm not a farm animal!");
```

This `say` function is coming a long pretty smoothly and we're making progress on making it only do what we want it to, but the current implementation leaves room for mistakes.

After a year of not touching this code, someone comes along and accidentally changes the switch statement so that `"Dog"` says `"meow."` and `"Cat"` says `"woof!"`, that's no good and what's worse: our type system isn't helping us catch that a Dog should *only* woof and a Cat should *only* meow:

```js
// @flow
type Animal = "Dog" | "Cat" | "Cow" | "Horse";

const say = (animal: Animal) => {
    switch (animal) {
    case "Dog":
        console.log("meow.");
        break;
    case "Cat":
        console.log("woof!");
        break;
    case "Cow":
        console.log("moooooooo");
        break;
    case "Horse":
        console.log("nay-hay-hay-hay-hay!!!");
        break;
    }
};

say("Dog"); // Works! (but it's wrong) => prints "meow."
say("Cat"); // Works! => (but it's wrong) prints "woof!"
say("Cow"); // Works! => prints "moooooooo"
say("Horse"); // Works! => prints "nay-hay-hay-hay-hay!!!"
say("Human"); // Error!
```

Let's take a trip back a year and revisit our initial writing of this function. Instead of taking a string, let's make Animal a union of objects with a `type` and a unique function per type based on the noise the animal makes:

```js
// @flow

type SayFn = () => void

type Animal =
    | {| type: "Dog", bark: SayFn |}
    | {| type: "Cat", purr: SayFn |}
    | {| type: "Cow", moo: SayFn |}
    | {| type: "Horse", neigh: SayFn |};
```

It's important to notice that every animal has a unique function name, because we're going to call it based on the type so that the **type refinement** can catch the future mixup.

Let's rewrite the `say` function to look like this:

```js
const say = (animal: Animal) => {
    switch (animal.type) {
    case "Dog":
        animal.bark();
        break;
    case "Cat":
        animal.purr();
        break;
    case "Cow":
        animal.moo();
        break;
    case "Horse":
        animal.neigh();
        break;
    }
};
```

We made a few changes:

- we switch on `animal.type` instead of `animal` (previously a string)
- we call a unique function for each type instead of a `console.log`

This brings us to our final concept: **disjoint unions**.

`Animal` now has a `type` key that has a *unique* value (Flow docs call this a "tagged property") as it's type so that it can be easily distinguished by the type checker. It is a **disjoint union** because it has a tagged property of `type` and Flow knows that if the tagged property matches the value, it should use the object defined in the union.

Now let's fast-forward to the point that the developer mixed up the code for `"Dog"` and `"Cat"`, the change would be the following:

```js
const say = (animal: Animal) => {
    switch (animal.type) {
    case "Dog":
        animal.purr();
        break;
    case "Cat":
        animal.bark();
        break;
    case "Cow":
        animal.moo();
        break;
    case "Horse":
        animal.neigh();
        break;
    }
};

say({ type: "Dog", bark: () => console.log("woof!") });
say({ type: "Cat", purr: () => console.log("meow.") });
say({ type: "Cow", moo: () => console.log("MOOOO") });
say({ type: "Horse", neigh: () => console.log("NAY-HAY-HAY-HAY-HAY!!!") });
say({ type: "Human", neigh: () => console.log("I don't belong here.") });
```

When we run `yarn flow` we get the following error:

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:12:14

Cannot call animal.purr because property purr is missing in object type [1].

    [1]  9│ const say = (animal: Animal) => {
        10│   switch (animal.type) {
        11│     case "Dog":
        12│       animal.purr();
        13│       break;
        14│     case "Cat":
        15│       animal.bark();


Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:15:14

Cannot call animal.bark because property bark is missing in object type [1].

    [1]  9│ const say = (animal: Animal) => {
        10│   switch (animal.type) {
        11│     case "Dog":
        12│       animal.purr();
        13│       break;
        14│     case "Cat":
        15│       animal.bark();
        16│       break;
        17│     case "Cow":
        18│       animal.moo();



Found 2 errors
```

And Flow has kept us from making a party foul and making our animals say the wrong thing!

Even if the developer came along and changed the say calls to this so that it'd "work":

```js
say({ type: "Dog", purr: () => console.log("woof!") });
say({ type: "Cat", bark: () => console.log("meow.") });
```

Running `yarn flow` would give us an error like this:

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:29:5

Cannot call say with object literal bound to animal because:
    • property bark is missing in object type [1] but exists in object literal [2].
    • property purr is missing in object literal [2] but exists in object type [1].

    [1]  5│   | {| type: "Cat", purr: () => void |}
        :
        26│ };
        27│
        28│ say({ type: "Dog", purr: () => console.log("woof!") });
    [2] 29│ say({ type: "Cat", bark: () => console.log("meow.") });
        30│ say({ type: "Cow", moo: () => console.log("MOOOO") });
        31│ say({ type: "Horse", neigh: () => console.log("NAY-HAY-HAY-HAY-HAY!!!") });
```

Letting us know that an object with the type `"Cat"` should have a `purr` property and that `bark` isn't a part of the `"Cat"` type definition.

## Acknowldgements

Thanks to [Lily Scott (Suchipi)](https://github.com/suchipi) for helping me understand these concepts better and teaching me a lot of new things about Flow!

## Pior Art

- ["Making Impossible States Impossible" by Richard Feldman - YouTube](https://www.youtube.com/watch?v=IcgmSRJHu_8)
- [Designing with types: Making illegal states unrepresentable | F# for fun and profit](https://fsharpforfunandprofit.com/posts/designing-with-types-making-illegal-states-unrepresentable/)

[^footgun]: Functionality added to a product or tool that results in the person shooting themselves in the foot with it. [Wiktionary entry](https://en.wiktionary.org/wiki/footgun)
