// src/components/EditRoutineForm.jsx
import { useState } from 'react';

export const EditRoutineForm = ({ routine, exerciseLibrary, onClose, onSave }) => {
  const [routineData, setRoutineData] = useState({
    type: routine.type || '',
    description: routine.description || '',
    exercises: routine.exercises ? [...routine.exercises] : [],
    notes: routine.notes || ''
  });
  
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: 3,
    reps: 10,
    weight: ''
  });

  const handleInputChange = (field, value) => {
    setRoutineData({
      ...routineData,
      [field]: value
    });
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...routineData.exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value
    };
    setRoutineData({
      ...routineData,
      exercises: updatedExercises
    });
  };

  const handleNewExerciseChange = (field, value) => {
    setNewExercise({
      ...newExercise,
      [field]: value
    });
  };

  const addExercise = () => {
    if (newExercise.name) {
      setRoutineData({
        ...routineData,
        exercises: [...routineData.exercises, { ...newExercise }]
      });
      setNewExercise({
        name: '',
        sets: 3,
        reps: 10,
        weight: ''
      });
    }
  };

  const removeExercise = (index) => {
    const updatedExercises = [...routineData.exercises];
    updatedExercises.splice(index, 1);
    setRoutineData({
      ...routineData,
      exercises: updatedExercises
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(routineData);
  };

  return (
    <div className="edit-form">
      <h2>Edit Routine</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Workout Type</label>
          <input
            type="text"
            value={routineData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={routineData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={3}
          ></textarea>
        </div>
        
        <div className="exercises-section">
          <h3>Exercises</h3>
          
          {routineData.exercises.length > 0 && (
            <div className="exercises-list">
              {routineData.exercises.map((exercise, index) => (
                <div key={index} className="exercise-item">
                  <div className="exercise-header">
                    <span>{exercise.name}</span>
                    <button 
                      type="button" 
                      className="remove-button"
                      onClick={() => removeExercise(index)}
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="exercise-form-row">
                    <div className="form-group">
                      <label>Sets</label>
                      <input
                        type="number"
                        min="1"
                        value={exercise.sets}
                        onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Reps</label>
                      <input
                        type="text"
                        value={exercise.reps}
                        onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Weight (optional)</label>
                      <input
                        type="text"
                        value={exercise.weight || ''}
                        onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                        placeholder="e.g., 25 lbs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="add-exercise-form">
            <h4>Add Exercise</h4>
            <div className="exercise-form-row">
              <div className="form-group">
                <label>Exercise</label>
                <select
                  value={newExercise.name}
                  onChange={(e) => handleNewExerciseChange('name', e.target.value)}
                >
                  <option value="">Select an exercise</option>
                  {exerciseLibrary.map((exercise, index) => (
                    <option key={index} value={exercise.name}>
                      {exercise.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Sets</label>
                <input
                  type="number"
                  min="1"
                  value={newExercise.sets}
                  onChange={(e) => handleNewExerciseChange('sets', parseInt(e.target.value))}
                />
              </div>
              
              <div className="form-group">
                <label>Reps</label>
                <input
                  type="text"
                  value={newExercise.reps}
                  onChange={(e) => handleNewExerciseChange('reps', e.target.value)}
                  placeholder="e.g., 10 or 30 sec"
                />
              </div>
            </div>
            
            <button 
              type="button" 
              className="add-button"
              onClick={addExercise}
              disabled={!newExercise.name}
            >
              Add Exercise
            </button>
          </div>
        </div>
        
        <div className="form-group">
          <label>Notes</label>
          <textarea
            value={routineData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={2}
            placeholder="Additional instructions or notes"
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};