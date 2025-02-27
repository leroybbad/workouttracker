// src/components/AddExerciseForm.jsx
import { useState } from 'react';

export const AddExerciseForm = ({ onClose, onSave }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    primaryMuscles: [],
    secondaryMuscles: [],
    description: '',
    difficulty: 'intermediate'
  });

  const muscleGroups = [
    'chest', 'back', 'shoulders', 'biceps', 'triceps', 
    'forearms', 'quads', 'hamstrings', 'glutes', 'calves', 
    'core', 'full body', 'cardio'
  ];

  const handleInputChange = (field, value) => {
    setExerciseData({
      ...exerciseData,
      [field]: value
    });
  };

  const handleMuscleChange = (muscle, isPrimary) => {
    const field = isPrimary ? 'primaryMuscles' : 'secondaryMuscles';
    const currentMuscles = [...exerciseData[field]];
    
    if (currentMuscles.includes(muscle)) {
      // Remove muscle if already selected
      setExerciseData({
        ...exerciseData,
        [field]: currentMuscles.filter(m => m !== muscle)
      });
    } else {
      // Add muscle to selected list
      setExerciseData({
        ...exerciseData,
        [field]: [...currentMuscles, muscle]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(exerciseData);
  };

  return (
    <div className="edit-form">
      <h2>Add New Exercise</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exercise Name</label>
          <input
            type="text"
            value={exerciseData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="e.g., Bulgarian Split Squats"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Difficulty Level</label>
          <select
            value={exerciseData.difficulty}
            onChange={(e) => handleInputChange('difficulty', e.target.value)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={exerciseData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe the proper form and technique"
            rows={3}
          ></textarea>
        </div>
        
        <div className="muscle-groups-section">
          <h3>Primary Muscle Groups</h3>
          <p className="help-text">Select the main muscles targeted by this exercise</p>
          <div className="muscle-groups-grid">
            {muscleGroups.map((muscle) => (
              <div key={`primary-${muscle}`} className="muscle-checkbox">
                <input
                  type="checkbox"
                  id={`primary-${muscle}`}
                  checked={exerciseData.primaryMuscles.includes(muscle)}
                  onChange={() => handleMuscleChange(muscle, true)}
                />
                <label htmlFor={`primary-${muscle}`}>{muscle}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="muscle-groups-section">
          <h3>Secondary Muscle Groups</h3>
          <p className="help-text">Select additional muscles engaged during this exercise</p>
          <div className="muscle-groups-grid">
            {muscleGroups.map((muscle) => (
              <div key={`secondary-${muscle}`} className="muscle-checkbox">
                <input
                  type="checkbox"
                  id={`secondary-${muscle}`}
                  checked={exerciseData.secondaryMuscles.includes(muscle)}
                  onChange={() => handleMuscleChange(muscle, false)}
                />
                <label htmlFor={`secondary-${muscle}`}>{muscle}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button 
            type="submit" 
            className="save-button"
            disabled={!exerciseData.name || exerciseData.primaryMuscles.length === 0}
          >
            Add Exercise
          </button>
        </div>
      </form>
    </div>
  );
};