import { useState } from 'react';
import EpocheEntdecken from './EpocheEntdecken';
import EpochenVergleich from './EpochenVergleich';


interface ToolbarContainerProps {
  onModeChange: (mode: string) => void;
  selectedTimeFrame: string | null;
  onTimeFrameChange: (TimeFrame: string) => void;
  className?: string;
  onHeatmapToggle: (isActive: boolean) => void; 
  onClusterToggle: (isActive: boolean) => void;  
  isClusterActive: boolean;
}

function ToolbarContainer({ onModeChange, onTimeFrameChange, className = '', onHeatmapToggle,  onClusterToggle, }: ToolbarContainerProps) {
  const [activeMode, setActiveMode] = useState('alleClubs');
  const [isHeatmapActive, setIsHeatmapActive] = useState(false); 
  const [isClusterActive, setIsClusterActive] = useState(false);

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveMode(e.target.value);
    onModeChange(e.target.value);
  };
  
  const handleHeatmapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isActive = e.target.checked;
    setIsHeatmapActive(isActive);
    onHeatmapToggle(isActive); 
  };

  const handleClusterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isActive = e.target.checked;
    setIsClusterActive(isActive);
    onClusterToggle(isActive);
  };

  return (
    <div className={`toolbar-container bg-karte-primary bg-opacity-90 rounded-xl text-white p-4 fixed shadow-lg ml-4 mt-4 transition-all duration-300 ${className} z-[9999]`}
         style={{ top: '20px', left: '16px' }}>
      <div>
        <label className="block mb-2">Modus auswählen:</label>
        <select
          className="p-2 rounded-xl bg-primary text-white mb-4 "
          value={activeMode}
          onChange={handleModeChange}
        >
          <option value="epocheEntdecken">Epoche Entdecken</option>
          <option value="epochenVergleich">Epochen-Vergleich</option>
          <option value="zeitWanderung">Zeit-Wanderung</option>
          <option value="alleClubs">Alle Clubs</option>
        </select>

        {activeMode === 'epocheEntdecken' && <EpocheEntdecken onTimeFrameChange={onTimeFrameChange} />}
        {activeMode === 'epochenVergleich' && <EpochenVergleich onTimeFrameChange={onTimeFrameChange} />}


        {(activeMode !== 'alleClubs' && activeMode !== 'epochenVergleich' && activeMode !== 'zeitWanderung')&& (
          <div className="mt-4">
            <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary"
              checked={isHeatmapActive}
              onChange={handleHeatmapChange}
            />
            <span className="ml-2">Heatmap anzeigen</span>
            </label>
          </div>
        )}

         {(activeMode === 'epocheEntdecken') && (
          <div className="mt-4">
            <label className="inline-flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
                checked={isClusterActive}
                onChange={handleClusterChange} 
              />
              <span className="ml-2">Cluster anzeigen</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolbarContainer;
