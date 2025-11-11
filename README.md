# React Component Library

This project contains three reusable **React components** with full **Storybook integration**.  
Each component demonstrates interactive UI behavior, transitions, and real-world usability patterns.

---

## 🧩 Components

### 1. Input Component

**Behavior:**
- Supports multiple input types (`text`, `password`, `number`)
- If `type="password"` → shows an 👁️ icon to toggle visibility  
- If `clearable=true` → shows ❌ button to clear input

**Storybook examples:**
- Text input (default)
- Password input with toggle
- Clearable text input

**Screenshots:**
- Default  
  ![Input Default](src/stories/assets/input-default.png)
- Password Toggle  
  ![Input Password](src/stories/assets/input-password.png)

---

### 2. Toast Component

**Behavior:**
- Appears at the bottom-right corner  
- Auto-dismisses after a set duration  
- Smooth fade-in / fade-out transitions  
- Optional manual close button  

**Storybook examples:**
- Success / Error / Info states  
- Different durations  
- With / without manual close

**Screenshots:**
- Success Toast  
  ![Toast Success](src/stories/assets/toast-success.png)
- Error Toast  
  ![Toast Error](src/stories/assets/toast-error.png)

---

### 3. Sidebar Menu Component

**Behavior:**
- Slides in from the right  
- Renders nested submenus (accordion-style)  
- Closes when clicking outside (background overlay)  

**Storybook examples:**
- Single-level menu  
- Two-level nested menu  
- Open / closed states

**Screenshots:**
- Closed  
  ![Sidebar Closed](src/stories/assets/sidebar-closed.png)
- Open with Nested Items  
  ![Sidebar Open](src/stories/assets/sidebar-open.png)

---

## 📖 Storybook

You can view and interact with all components directly in **Storybook**.

**Run locally:**

```bash
npm install
npm run storybook


Storybook will open automatically at:
👉 http://localhost:6006

🧰 Tech Stack
⚛️ React + TypeScript
🎨 CSS Modules for scoped styling
📚 Storybook for component documentation and testing

