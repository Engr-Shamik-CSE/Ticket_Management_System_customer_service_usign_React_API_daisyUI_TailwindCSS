## What is **JSX**, and why is it used?

- **JSX** stands for **JavaScript XML**. It allows you to write HTML-like code inside JavaScript. It's used because it makes the code more readable and easier to write compared to using complex JavaScript functions to create elements.

- **JSX** এর পূর্ণরূপ হলো **JavaScript XML**। এটি জাভাস্ক্রিপ্টের ভিতরে এইচটিএমএল-এর মতো কোড লেখার সুযোগ দেয়। জটিল জাভাস্ক্রিপ্ট ফাংশন ব্যবহার করার চেয়ে JSX কোড বেশি পড়তে সুবিধাজনক এবং লেখা সহজ বলে এটি ব্যবহার করা হয়।
---

## What is the difference between **State** and **Props**?

- **Props** are read-only data passed from parent to child components. They cannot be modified by the child component. **State** is data that is managed within a component and can change over time. When state changes, the component automatically updates on the screen. 
- **Props** are for passing data down, while **state** is for handling dynamic data within a component.

- **Props** হলো রিড-অনলি ডাটা যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়। চাইল্ড কম্পোনেন্ট তা পরিবর্তন করতে পারে না। **State** হলো ডাটা যা একটি কম্পোনেন্টের ভিতরে ম্যানেজ করা হয় এবং সময়ের সাথে পরিবর্তিত হতে পারে। State পরিবর্তন হলে কম্পোনেন্টটি automatically আপডেট হয়। 
- **Props** ডাটা নিচে পাঠানোর জন্য, আর **State** ডায়নামিক ডাটা হ্যান্ডেল করার জন্য ব্যবহৃত হয়।

What is the useState hook, and how does it work?
English:
useState is a React hook that adds state to functional components. It returns an array with two elements: the current state value and a function to update that value. When you call the update function, React automatically re-renders the component with the new value. You pass the initial state as an argument to useState.

Bengali:
useState একটি React hook যা ফাংশনাল কম্পোনেন্টে state যোগ করে। এটি দুটি এলিমেন্টের একটি অ্যারে রিটার্ন করে: বর্তমান state ভ্যালু এবং সেই ভ্যালু আপডেট করার একটি ফাংশন। আপনি যখন আপডেট ফাংশন কল করেন, React automatically নতুন ভ্যালু দিয়ে কম্পোনেন্টটি রি-রেন্ডার করে। আপনি initial state কে আর্গুমেন্ট হিসেবে useState-এ পাঠান।

How can you share state between components in React?
English:
You can share state by lifting it up to the closest common parent component and passing it down as props. For more complex apps, you can use the Context API to avoid prop drilling. Or use state management libraries like Redux for global state.

Bengali:
State শেয়ার করার জন্য আপনি সবচেয়ে কাছের কমন প্যারেন্ট কম্পোনেন্টে state তুলে নিয়ে সেখান থেকে props আকারে নিচে পাঠাতে পারেন। জটিল অ্যাপের জন্য, Context API ব্যবহার করে prop drilling এড়ানো যায়। অথবা গ্লোবাল state-এর জন্য Redux-এর মতো স্টেট ম্যানেজমেন্ট লাইব্রেরি ব্যবহার করা যায়।

How is event handling done in React?
English:
Event handling in React is similar to DOM events but uses camelCase syntax like onClick instead of onclick. You pass a function as the event handler, not a string. To prevent default behavior, you call preventDefault on the event object.

Bengali:
React-এ ইভেন্ট হ্যান্ডলিং DOM ইভেন্টের মতোই কিন্তু onclick-এর পরিবর্তে onClick-এর মতো camelCase সিনট্যাক্স ব্যবহার করা হয়। আপনি স্ট্রিং নয়, একটি ফাংশনকে ইভেন্ট হ্যান্ডলার হিসেবে পাঠান। ডিফল্ট বিহেভিয়ার prevent করতে, আপনি ইভেন্ট অবজেক্টের উপর preventDefault কল করেন।