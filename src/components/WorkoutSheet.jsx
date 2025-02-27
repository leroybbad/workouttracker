// src/components/WorkoutSheet.jsx
import { useState } from 'react';

export const WorkoutSheet = ({ workout, onClose, onSave }) => {
  const [workoutData, setWorkoutData] = useState({
    type: workout.type,
    exercises: workout.exercises?.map(ex => ({
      ...ex,
      completed: false,
      actualSets: ex.sets,
      actualReps: ex.reps,
      weight: ex.weight || '',
      notes: ''
    })) || [],
    duration: 0,
    intensity: 'medium',
    notes: ''
  });

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...workoutData.exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value
    };
    setWorkoutData({
      ...workoutData,
      exercises: updatedExercises
    });
  };

  const handleInputChange = (field, value) => {
    setWorkoutData({
      ...workoutData,
      [field]: value
    });
  };

  const handleToggleComplete = (index) => {
    const updatedExercises = [...workoutData.exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      completed: !updatedExercises[index].completed
    };
    setWorkoutData({
      ...workoutData,
      exercises: updatedExercises
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(workoutData);
  };

  return (
    <div className="sheet-container">
      <div className="sheet-content">
        <div className="sheet-header">
          <h2>Record Workout</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Workout Type</label>
            <input
              type="text"
              value={workoutData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Duration (minutes)</label>
            <input
              type="number"
              min="1"
              value={workoutData.duration}
              onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Intensity</label>
            <select
              value={workoutData.intensity}
              onChange={(e) => handleInputChange('intensity', e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </select>
          </div>
          
          <div className="exercises-section">
            <h3>Exercises</h3>
            {workoutData.exercises.length > 0 ? (
              workoutData.exercises.map((exercise, index) => (
                <div 
                  key={index} 
                  className={`exercise-item ${exercise.completed ? 'completed' : ''}`}
                >
                  <div className="exercise-header">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={exercise.completed}
                        onChange={() => handleToggleComplete(index)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span className="exercise-name">{exercise.name}</span>
                  </div>
                  
                  <div className="exercise-details">
                    <div className="input-group">
                      <label>Sets</label>
                      <input
                        type="number"
                        min="0"
                        value={exercise.actualSets}
                        onChange={(e) => handleExerciseChange(index, 'actualSets', parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>Reps</label>
                      <input
                        type="number"
                        min="0"
                        value={exercise.actualReps}
                        onChange={(e) => handleExerciseChange(index, 'actualReps', parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div className="input-group">
                      <label>Weight</label>
                      <input
                        type="text"
                        placeholder="e.g. 25 lbs"
                        value={exercise.weight}
                        onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="notes-input">
                    <input
                      type="text"
                      placeholder="Notes for this exercise"
                      value={exercise.notes}
                      onChange={(e) => handleExerciseChange(index, 'notes', e.target.value)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-exercises">No exercises for this workout</p>
            )}
          </div>
          
          <div className="form-group">
            <label>Workout Notes</label>
            <textarea
              placeholder="How did this workout feel? Any achievements or challenges?"
              value={workoutData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
            ></textarea>
          </div>
          
          <div className="sheet-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};