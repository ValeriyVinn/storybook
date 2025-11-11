// import React, { useState } from "react";
// import styles from "./App.module.css";

// import { Input } from "./components/Input/Input";
// import { Toast } from "./components/Toast/Toast";
// import { SidebarMenu, type MenuItem } from "./components/SidebarMenu/SidebarMenu";

// export const App: React.FC = () => {
//   const [toastVisible, setToastVisible] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   const menuItems: MenuItem[] = [
//     { label: "Home" },
//     { label: "About" },
//     {
//       label: "Dashboard",
//       children: [
//         { label: "Overview" },
//         { label: "Settings", children: [{ label: "Profile" }, { label: "Security" }] },
//       ],
//     },
//     { label: "Contact" },
//   ];

//   return (
//     <div className={styles.app}>
//       <h1 className={styles.title}>Storybook Demo</h1>

//       {/* Input Examples */}
//       <section className={styles.section}>
//         <h2 className={styles.sectionTitle}>Input Examples</h2>
//         <div className={styles.inputRow}>
//           <Input
//             placeholder="Text input"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <Input type="password" placeholder="Password input" clearable />
//           <Input type="number" placeholder="Number input" />
//           <Input placeholder="Clearable input" clearable />
//         </div>
//       </section>

//       {/* Toast Example */}
//       <section className={styles.section}>
//         <h2 className={styles.sectionTitle}>Toast Example</h2>
//         <button className={styles.button} onClick={() => setToastVisible(true)}>
//           Show Toast
//         </button>
//         {toastVisible && (
//           <Toast
//             message="This is a toast notification!"
//             type="success"
//             duration={5000}
//             onClose={() => setToastVisible(false)}
//             showClose
//           />
//         )}
//       </section>

//       {/* Sidebar Menu Example */}
//       <section className={styles.section}>
//         <h2 className={styles.sectionTitle}>Sidebar Menu Example</h2>
//         <button className={styles.button} onClick={() => setSidebarOpen(true)}>
//           Open Sidebar
//         </button>
//         <SidebarMenu
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//           items={menuItems}
//         />
//       </section>
//     </div>
//   );
// };


import React, { useState } from "react";
import styles from "./App.module.css";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu, type MenuItem } from "./components/SidebarMenu/SidebarMenu";

const App: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const menuItems: MenuItem[] = [
    { label: "Home" },
    { label: "About" },
    {
      label: "Dashboard",
      children: [
        { label: "Overview" },
        { label: "Settings", children: [{ label: "Profile" }, { label: "Security" }] },
      ],
    },
    { label: "Contact" },
  ];

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Storybook Demo</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Input Examples</h2>
        <div className={styles.inputRow}>
          <Input
            placeholder="Text input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input type="password" placeholder="Password input" clearable />
          <Input type="number" placeholder="Number input" />
          <Input placeholder="Clearable input" clearable />
        </div>
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
