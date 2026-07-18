import { useEffect, useState } from 'react';
import './LayoutSwitcher.css';

type LayoutMode = 'professional' | 'showcase' | 'retro'; 

const STORAGE_KEY = 'portfolio_layout';

function LayoutSwitcher() {
  const [mode, setMode] = useState<LayoutMode>(() => {
    try {
      const savedRaw = localStorage.getItem(STORAGE_KEY);
      if (!savedRaw) return 'professional';
      const normalized = savedRaw === 'compact' ? 'showcase' : (savedRaw as LayoutMode);
      return normalized;
    } catch {
      return 'professional';
    }
  });

  useEffect(() => {
    const classPrefix = 'layout-';
    Array.from(document.body.classList)
      .filter((c) => c.startsWith(classPrefix))
      .forEach((c) => document.body.classList.remove(c));

    document.body.classList.add(`${classPrefix}${mode}`);

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }, [mode]);

  return (
    <div className="layout-switcher">
      <label htmlFor="layout-select" className="layout-switcher-label">Layout</label>
      <select
        id="layout-select"
        className="layout-switcher-select"
        value={mode}
        onChange={(e) => setMode(e.target.value as LayoutMode)}
        aria-label="Choose layout mode"
      >
        <option value="professional">Professional</option>
        <option value="showcase">Showcase</option>
        <option value="retro">Retro</option>
      </select>
    </div>
  );
}

export default LayoutSwitcher;
