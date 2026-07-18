import { useEffect, useState } from 'react';

import './LayoutSwitcher.css';

type LayoutMode = 'professional' | 'showcase' | 'retro';

const STORAGE_KEY = 'portfolio_layout';

const layoutOptions: LayoutMode[] = [
  'professional',
  'showcase',
  'retro',
];

function getSavedLayout(): LayoutMode {
  const savedLayout = localStorage.getItem(STORAGE_KEY);

  if (layoutOptions.includes(savedLayout as LayoutMode)) {
    return savedLayout as LayoutMode;
  }

  return 'professional';
}

function LayoutSwitcher() {
  const [mode, setMode] = useState<LayoutMode>(getSavedLayout);

  useEffect(() => {
    document.body.classList.remove(
      'layout-professional',
      'layout-showcase',
      'layout-retro',
    );

    document.body.classList.add(`layout-${mode}`);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  function handleLayoutChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    setMode(event.target.value as LayoutMode);
  }

  return (
    <div className="layout-switcher">
      <label
        htmlFor="layout-select"
        className="layout-switcher-label"
      >
        Layout
      </label>

      <select
        id="layout-select"
        className="layout-switcher-select"
        value={mode}
        onChange={handleLayoutChange}
      >
        <option value="professional">Professional</option>
        <option value="showcase">Showcase</option>
        <option value="retro">Retro</option>
      </select>
    </div>
  );
}

export default LayoutSwitcher;