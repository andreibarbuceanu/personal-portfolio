import { useEffect, useState } from "react";

import "./LayoutSwitcher.css";

type LayoutMode = "clean" | "editorial" | "mono";

const STORAGE_KEY = "portfolio_layout";

const layoutOptions: LayoutMode[] = ["clean", "editorial", "mono"];

function getSavedLayout(): LayoutMode {
  const savedLayout = localStorage.getItem(STORAGE_KEY);

  if (layoutOptions.includes(savedLayout as LayoutMode)) {
    return savedLayout as LayoutMode;
  }

  return "clean";
}

function LayoutSwitcher() {
  const [mode, setMode] = useState<LayoutMode>(getSavedLayout);

  useEffect(() => {
    document.body.classList.remove(
      "layout-clean",
      "layout-editorial",
      "layout-mono",
    );

    document.body.classList.add(`layout-${mode}`);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  function handleLayoutChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setMode(event.target.value as LayoutMode);
  }

  return (
    <div className="layout-switcher">
      <label htmlFor="layout-select" className="layout-switcher-label">
        Layout
      </label>

      <select
        id="layout-select"
        className="layout-switcher-select"
        value={mode}
        onChange={handleLayoutChange}
      >
        <option value="clean">Clean</option>
        <option value="editorial">Editorial</option>
        <option value="mono">Mono</option>
      </select>
    </div>
  );
}

export default LayoutSwitcher;
