# Dev Stack

Dev Stack is a responsive React-based website that helps developers explore different technologies and build their own technology stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

### 1. Explore Technologies
Users can browse different frontend, backend, database, language, styling, DevOps, and development tools.

### 2. Build Your Own Stack
Users can add technologies to their personal stack, remove individual technologies, or remove all selected technologies.

### 3. Responsive Design
The website is fully responsive and works across desktop, tablet, and mobile devices.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX because it makes writing and understanding UI components easier and more readable.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component. When state changes, React updates the UI.

## 3. What does useState do, and where do you use it?

`useState` is a React Hook used to create and manage state inside a functional component.

In this project, it is used to keep track of the technologies selected by the user.

## 4. What does useEffect do, and why is it needed to load JSON?

`useEffect` is a React Hook that runs side effects after a component renders.

It can be used to fetch or load JSON data when the component is loaded, so the technology data can be displayed dynamically.

## 5. Why does every item in a map() need a unique key?

React uses the `key` to identify each item in a list. A unique key helps React understand which items were changed, added, or removed and update the UI efficiently.

## 6. What is conditional rendering? Show one place where you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, the stack shows an empty-state message when no technology has been selected.

```jsx
{selectedStack.length === 0
  ? "No technologies selected yet"
  : `${selectedStack.length} technologies selected`}