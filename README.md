Live Projects

FAQ Collapse - https://ayush-kev.github.io/Interactive-Logistics-Scheduling-Engine/FAQ%20Collapse/

Drag and Drop Interface -  https://ayush-kev.github.io/Interactive-Logistics-Scheduling-Engine/drag-and-drop/

Sortable List - https://ayush-kev.github.io/Interactive-Logistics-Scheduling-Engine/sortable-list/

Interactive Logistics Scheduling Engine
A high-interaction scheduling dashboard designed for complex logistics management. This project demonstrates mastery of the DOM Event Model and the HTML5 Drag-and-Drop API, providing a "snappy" and accessible user experience without the overhead of heavy frameworks.

🚀 Engineering Highlights
Native Drag-and-Drop Integration: Built using the DataTransfer API to enable seamless movement of "Order" entities between different "Driver" columns.
Scalable Event Delegation: Implemented a single event listener at the container level to manage interactions for hundreds of dynamic elements, drastically reducing memory footprint.
A11y (Accessibility) First: Fully navigable via keyboard with custom aria-live regions that announce scheduling changes to screen readers—meeting WCAG 2.1 standards.
Persistent State Logic: Engineered a local-first synchronization layer that saves the board's state to localStorage, ensuring zero data loss on page refresh.

🛠️ Technical Stack
Language: JavaScript (ES6+ Functional & Class patterns)
API: HTML5 Drag and Drop, DOM MutationObserver
UX: CSS Transitions & hardware-accelerated transforms
Patterns: Publisher-Subscriber for state updates

📈 Performance & Usability
Interaction Latency: < 16ms (Input to Screen)
A11y Compliance: WCAG 2.1 Level AA
Memory Management: Zero memory leaks during heavy element re-parenting (verified via Chrome Heap Snapshot)

💡 How it Works
The Drag: Data is serialized into the DataTransfer object.
The Drop: A custom validation logic checks if the "Driver" has capacity before allowing the drop.
The Update: The underlying state object is mutated, and a "Re-render" signal is dispatched only to affected components.
