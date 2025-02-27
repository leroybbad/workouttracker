// src/components/BodyChart.jsx
export const BodyChart = ({ targetedMuscles }) => {
    // Define muscle groups and their positions in the SVG
    const muscleGroups = {
      chest: { name: 'Chest', class: 'chest' },
      back: { name: 'Back', class: 'back' },
      shoulders: { name: 'Shoulders', class: 'shoulders' },
      biceps: { name: 'Biceps', class: 'biceps' },
      triceps: { name: 'Triceps', class: 'triceps' },
      forearms: { name: 'Forearms', class: 'forearms' },
      core: { name: 'Core', class: 'core' },
      quads: { name: 'Quads', class: 'quads' },
      hamstrings: { name: 'Hamstrings', class: 'hamstrings' },
      calves: { name: 'Calves', class: 'calves' },
      glutes: { name: 'Glutes', class: 'glutes' },
    };
  
    return (
      <div className="body-chart">
        <div className="svg-container">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            {/* Front body silhouette */}
            <g className="body-front">
              {/* Head */}
              <circle cx="100" cy="30" r="20" className="body-part" />
              
              {/* Torso */}
              <rect x="80" y="50" width="40" height="70" className="body-part" />
              
              {/* Chest */}
              <path 
                d="M80,60 Q100,70 120,60 Q120,80 100,90 Q80,80 80,60"
                className={`muscle-group ${targetedMuscles.includes('chest') ? 'active' : ''}`}
              />
              
              {/* Shoulders */}
              <path 
                d="M80,55 Q70,60 65,70 L80,70 Z"
                className={`muscle-group ${targetedMuscles.includes('shoulders') ? 'active' : ''}`}
              />
              <path 
                d="M120,55 Q130,60 135,70 L120,70 Z"
                className={`muscle-group ${targetedMuscles.includes('shoulders') ? 'active' : ''}`}
              />
              
              {/* Arms */}
              <rect x="60" y="70" width="10" height="40" className="body-part" />
              <rect x="130" y="70" width="10" height="40" className="body-part" />
              
              {/* Biceps */}
              <ellipse 
                cx="65" cy="80" rx="6" ry="10"
                className={`muscle-group ${targetedMuscles.includes('biceps') ? 'active' : ''}`}
              />
              <ellipse 
                cx="135" cy="80" rx="6" ry="10"
                className={`muscle-group ${targetedMuscles.includes('biceps') ? 'active' : ''}`}
              />
              
              {/* Forearms */}
              <ellipse 
                cx="65" cy="95" rx="5" ry="10"
                className={`muscle-group ${targetedMuscles.includes('forearms') ? 'active' : ''}`}
              />
              <ellipse 
                cx="135" cy="95" rx="5" ry="10"
                className={`muscle-group ${targetedMuscles.includes('forearms') ? 'active' : ''}`}
              />
              
              {/* Core/Abs */}
              <rect 
                x="85" y="90" width="30" height="30" rx="2"
                className={`muscle-group ${targetedMuscles.includes('core') ? 'active' : ''}`}
              />
              
              {/* Legs */}
              <rect x="85" y="120" width="15" height="60" className="body-part" />
              <rect x="100" y="120" width="15" height="60" className="body-part" />
              
              {/* Quads */}
              <path 
                d="M85,125 Q90,145 85,165 L100,165 L100,125 Z"
                className={`muscle-group ${targetedMuscles.includes('quads') ? 'active' : ''}`}
              />
              <path 
                d="M100,125 Q110,145 115,165 L100,165 L100,125 Z"
                className={`muscle-group ${targetedMuscles.includes('quads') ? 'active' : ''}`}
              />
              
              {/* Calves */}
              <ellipse 
                cx="87" cy="190" rx="7" ry="15"
                className={`muscle-group ${targetedMuscles.includes('calves') ? 'active' : ''}`}
              />
              <ellipse 
                cx="113" cy="190" rx="7" ry="15"
                className={`muscle-group ${targetedMuscles.includes('calves') ? 'active' : ''}`}
              />
            </g>
            
            {/* Back body silhouette */}
            <g className="body-back" transform="translate(0, 0)">
              {/* Head */}
              <circle cx="100" cy="250" r="20" className="body-part" />
              
              {/* Torso */}
              <rect x="80" y="270" width="40" height="70" className="body-part" />
              
              {/* Back */}
              <path 
                d="M80,280 h40 v30 h-40 z"
                className={`muscle-group ${targetedMuscles.includes('back') ? 'active' : ''}`}
              />
              
              {/* Shoulders (back view) */}
              <path 
                d="M80,275 Q70,280 65,290 L80,290 Z"
                className={`muscle-group ${targetedMuscles.includes('shoulders') ? 'active' : ''}`}
              />
              <path 
                d="M120,275 Q130,280 135,290 L120,290 Z"
                className={`muscle-group ${targetedMuscles.includes('shoulders') ? 'active' : ''}`}
              />
              
              {/* Arms */}
              <rect x="60" y="290" width="10" height="40" className="body-part" />
              <rect x="130" y="290" width="10" height="40" className="body-part" />
              
              {/* Triceps */}
              <ellipse 
                cx="65" cy="305" rx="6" ry="10"
                className={`muscle-group ${targetedMuscles.includes('triceps') ? 'active' : ''}`}
              />
              <ellipse 
                cx="135" cy="305" rx="6" ry="10"
                className={`muscle-group ${targetedMuscles.includes('triceps') ? 'active' : ''}`}
              />
              
              {/* Glutes */}
              <path 
                d="M85,335 a15,10 0 0,0 30,0 a15,15 0 0,0 -30,0"
                className={`muscle-group ${targetedMuscles.includes('glutes') ? 'active' : ''}`}
              />
              
              {/* Legs */}
              <rect x="85" y="345" width="15" height="60" className="body-part" />
              <rect x="100" y="345" width="15" height="60" className="body-part" />
              
              {/* Hamstrings */}
              <path 
                d="M85,350 Q90,370 85,390 L100,390 L100,350 Z"
                className={`muscle-group ${targetedMuscles.includes('hamstrings') ? 'active' : ''}`}
              />
              <path 
                d="M100,350 Q110,370 115,390 L100,390 L100,350 Z"
                className={`muscle-group ${targetedMuscles.includes('hamstrings') ? 'active' : ''}`}
              />
              
              {/* Calves (back view) */}
              <ellipse 
                cx="87" cy="410" rx="7" ry="15"
                className={`muscle-group ${targetedMuscles.includes('calves') ? 'active' : ''}`}
              />
              <ellipse 
                cx="113" cy="410" rx="7" ry="15"
                className={`muscle-group ${targetedMuscles.includes('calves') ? 'active' : ''}`}
              />
            </g>
          </svg>
        </div>
        
        <div className="muscle-legend">
          <h3>Targeted Areas</h3>
          <ul>
            {targetedMuscles.length > 0 ? (
              targetedMuscles.map((muscle) => (
                <li key={muscle} className="active-muscle">
                  {muscleGroups[muscle]?.name || muscle}
                </li>
              ))
            ) : (
              <li className="no-muscles">No specific muscle groups targeted today</li>
            )}
          </ul>
        </div>
      </div>
    );
  };