In this section I have used:
1. React
2. TailwindCSS - For styling.
- I have used tailwind classes for responsiveness on all screens.

ARIA Roles

- aria-expanded- Indicates whether the FAQ answer is visible or hidden.
aria-expanded={activeIndex === index}

- aria-controls- Links the button to the corresponding answer, so screen readers know which element the button controls.
aria-controls={`faq-answer-${index}`}
Keyboard Navigation

- Button Focus- Buttons are natively focusable and navigable via the Tab key.

- Toggle on Enter or Space- The FAQ can be toggled using Enter or Space when the button is focused.
onKeyDown={(e) => e.key === "Enter" || e.key === " " ? toggleFAQ(index) : null}

- Focus Indicators
Focus Ring- When the button is focused, a ring is shown for visibility.
focus:ring-2 focus:ring-blue-500
 
 - output is on public folder.
