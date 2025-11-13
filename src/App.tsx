import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.module.css";
import Input from "./components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Toast from "./components/Toast/Toast";
import type { MenuItem } from "./components/SidebarMenu/types";

const App: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputs = [
    { id: "text", type: "text", placeholder: "Text input" },
    { id: "password", type: "password", placeholder: "Password input", clearable: true },
    { id: "number", type: "number", placeholder: "Number input" },
    { id: "clearable", type: "text", placeholder: "Clearable input", clearable: true },
  ];

  // Коли інпут у фокусі — переносимо його вгору
  const sortedInputs = [...inputs].sort((a, b) =>
    a.id === focusedInput ? -1 : b.id === focusedInput ? 1 : 0
  );

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    {
      id: "dashboard",
      label: "Dashboard",
      children: [
        { id: "dashboard-overview", label: "Overview" },
        {
          id: "dashboard-settings",
          label: "Settings",
          children: [
            { id: "dashboard-settings-profile", label: "Profile" },
            { id: "dashboard-settings-security", label: "Security" },
          ],
        },
      ],
    },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Storybook Demo</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Input Examples</h2>
        <p>I'm Framer Motion muscle-boostle. Focus, and reach the top!</p>
        <motion.div layout className={styles.inputRow} transition={{ layout: { duration: 0.4 } }}>
          <AnimatePresence>
            {sortedInputs.map((input) => (
              <motion.div
                key={input.id}
                layout
                transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  clearable={input.clearable}
                  value={input.id === "text" ? inputValue : undefined}
                  onChange={
                    input.id === "text"
                      ? (e) => setInputValue(e.target.value)
                      : undefined
                  }
                  onFocus={() => setFocusedInput(input.id)}
                  onBlur={() => setFocusedInput(null)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Toast Example</h2>
        <button className={styles.button} onClick={() => setToastVisible(true)}>
          Show Toast
        </button>
        {toastVisible && (
          <Toast
            message="This is a toast notification!"
            type="success"
            duration={5000}
            onClose={() => setToastVisible(false)}
            showClose
          />
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sidebar Menu Example</h2>
        <button className={styles.button} onClick={() => setSidebarOpen(true)}>
          Open Sidebar
        </button>
        <SidebarMenu
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={menuItems}
        />
      </section>
    </div>
  );
};

export default App;
