import { useEffect, useState } from 'react';
import './LayoutSwitcher.css';

type LayoutMode = 'professional' | 'showcase' | 'retro'; 

const STORAGE_KEY = 'portfolio_layout';

function LayoutSwitcher() {
  const [mode, setMode] = useState<LayoutMode>(() => {//ruleaza la load 
    try {
      const savedRaw = localStorage.getItem(STORAGE_KEY);
      if (!savedRaw) return 'professional';
      const normalized = savedRaw === 'compact' ? 'showcase' : (savedRaw as LayoutMode);
      return normalized;
    } catch {
      return 'professional';
    }
  });

  useEffect(() => { //ruleaza de fiecare data cand se schimba mode
    const classPrefix = 'layout-';
    Array.from(document.body.classList) //aplica clasa layout ului
      .filter((c) => c.startsWith(classPrefix))
      .forEach((c) => document.body.classList.remove(c));

    document.body.classList.add(`${classPrefix}${mode}`);

    try {
      localStorage.setItem(STORAGE_KEY, mode);//incarca in local storage layout ul
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
        value={mode}//controlled component element de formular controlat de state ul react ului
        onChange={(e) => setMode(e.target.value as LayoutMode)}//e = evenimentul generat cand se schimba layout ul
        aria-label="Choose layout mode" //pt accesibilitate = screen reader pt personane cu deficienta
      >
        <option value="professional">Professional</option>
        <option value="showcase">Showcase</option>
        <option value="retro">Retro</option>
      </select>
    </div>
  );
}

export default LayoutSwitcher;
