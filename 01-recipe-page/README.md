# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:
View the optimal layout depending on their device's screen size.

### Preview

This project uses a responsive web design (RWD) layout for three different screen sizes:

- Mobile (375px width)
- Tablet (768px width)
- Desktop (1440px width)

<video src="./media/20240905_220707.mp4" controls height="350">
</video>
<video src="./media/20240905_221251.mp4" controls height="350">
</video>


### Links

- Solution URL: [Github repo](https://github.com/MiJouHsieh/Frontend-Mentor-Challenges/tree/main/01-recipe-page)

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### 👀 What I learned 👀

Step-by-Step Explanation for Custom Bullets and Numbering with CSS

To align bullets (for unordered lists) and numbers (for ordered lists) correctly with the list item (`li`) content, we use pseudo-elements to create them. Here’s how it’s done:

### ⭐ Step 1: Set `position` for `li` Elements

Set the `position` property of all `li` elements to `relative` so that pseudo-elements can be positioned relative to them.

```css
li {
  position: relative;
  padding-left: 28px; /* Adds space for the pseudo-element */
  line-height: 150%;
  list-style: none; /* Removes default bullet or number */
}
```

### ⭐ Step 2: Create Custom Bullets and Numbers with `::before`

To create custom styles for bullets and numbers, we use the `::before` pseudo-element with the following common properties:

These ensure the pseudo-elements appear on the left side of the `li`.

```css
ul li::before, ol li::before {
  display: inline-block;
  position: absolute;
  left: 0;
}
```

Customize for each list type:

1. **For Ordered List (number) - Align to Top of `li` Content:**
    
    ```css
    ol li::before {
      top: 0%; /* Aligns to the top */
      content: counter(li) ".";
      font-weight: bold;
      color: blue; /* Custom number color */
    }
    ```
    
2. **For Unordered List (bullet) - Align to Middle of `li` Content:**
    
    ```css
    ul li::before {
      top: 50%; /* Aligns to the middle */
      transform: translateY(-50%);
      width: 4px; /* Bullet size */
      height: 4px;
      background-color: orange; /* Bullet color */
      border-radius: 50%; /* Makes it a circle */
      content: ""; /* No content for bullets */
    }
    ```
    
    Use `top: 50%` and `transform: translateY(-50%)` to center the bullet vertically in the `li`.
    

### ⭐ Step 3: Use CSS `counter` for Custom Numbers

To create custom numbers for ordered lists, use CSS `counter`:

1. **Reset the counter in the parent `ol`:**
    
    ```css
    ol {
      counter-reset: li; /* Resets the counter */
    }
    ```
    
2. **Increment the counter for each `li`:**
    
    ```css
    ol li {
      padding-left: 32px; /* Space for numbers */
      counter-increment: li;
    }
    ```
    
3. **Display the counter with `::before`:**

    Use the `counter` property to generate numbers
    ```css
    ol li::before {
      content: counter(li) '.'; 
    }
    ```

---

### ☀️ Useful resources

- [CSS-TRICKS - Using CSS Counters for Custom List Number Styling](https://css-tricks.com/css-counters-custom-list-number-styling/)

## Author

- Website - [My Github homepage](https://github.com/MiJouHsieh)
- Frontend Mentor - [MiJouHsieh](https://www.frontendmentor.io/profile/MiJouHsieh)