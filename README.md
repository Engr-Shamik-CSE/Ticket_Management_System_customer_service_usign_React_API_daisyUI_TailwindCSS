# React Interview Questions - Quick Guide

This README answers common React interview questions related to JSX, state, props, hooks, and event handling.

---

## 1. What is JSX, and why is it used?

**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like code directly within React components. It is not valid JavaScript on its own; tools like Babel transpile it into `React.createElement` calls.

### Why is it used?
- **Readability**: It makes the code more intuitive by combining markup with logic.
- **Declarative**: It describes what the UI should look like.
- **Prevents Injection Attacks**: React DOM escapes any values embedded in JSX before rendering them.

### Example:
```jsx
const element = <h1>Hello, world!</h1>;