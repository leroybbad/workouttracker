// src/components/Program.jsx
import { useState } from 'react';
import { Accordion } from './Accordion';
import { AddExerciseForm } from './AddExerciseForm';
import { EditRoutineForm } from './EditRoutineForm';

export const Program = ({ program, updateRoutine, addExercise }) => {
  const [isAddExerciseOpen, setIsAddExerciseOpen] = useState(false);
  const [isEditRoutineOpen, setIsEditRoutineOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleEditRoutine = (weekIndex, day) => {
    setSelectedWeek(weekIndex);
    setSelectedDay(day);
    setIsEditRoutineOpen(true);
  };

  const closeModals = () => {
    setIsAddExerciseOpen(false);
    setIsEditRoutineOpen(false);
  };

  const saveRoutine = (routine) => {
    updateRoutine(selectedWeek, selectedDay, routine);
    closeModals();
  };

  const saveExercise = (exercise) => {
    addExercise(exercise);
    closeModals();
  };

  return (
    <div className="program-container">
      <div className="program-header">
        <h1>My Program</h1>
        <button 
          className="add-button"
          onClick={() => setIsAddExerciseOpen(true)}
        >
          Add Exercise
        </button>
      </div>

      <div className="program-weeks">
        {program.map((week, weekIndex) => (
          <Accordion 
            key={weekIndex}
            title={`Week ${weekIndex + 1}: ${week.focus || 'Training Week'}`}
          >
            <div className="week-content">
              <p className="week-description">{week.description}</p>
              
              <div className="days-container">
                {Object.entries(week.schedule).map(([day, routine]) => (
                  <div key={day} className="day-card">
                    <div className="day-header">
                      <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                      <button 
                        className="edit-button"
                        onClick={() => handleEditRoutine(weekIndex, day)}
                      >
                        Edit
                      </button>
                    </div>
                    
                    <div className="routine-details">
                      <p className="routine-type">{routine.type}</p>
                      {routine.description && (
                        <p className="routine-description">{routine.description}</p>
                      )}
                      
                      {routine.exercises && routine.exercises.length > 0 ? (
                        <ul className="routine-exercises">
                          {routine.exercises.map((exercise, exIndex) => (
                            <li key={exIndex}>
                              {exercise.name}: {exercise.sets} × {exercise.reps}
                              {exercise.weight && ` @ ${exercise.weight}`}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="no-exercises">Rest day or recovery</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        ))}
      </div>
      
      {/* Add Exercise Modal */}
      {isAddExerciseOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <AddExerciseForm 
              onClose={closeModals}
              onSave={saveExercise}
            />
          </div>
        </div>
      )}
      
      {/* Edit Routine Modal */}
      {isEditRoutineOpen && selectedWeek !== null && selectedDay !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <EditRoutineForm
              routine={program[selectedWeek].schedule[selectedDay]}
              exerciseLibrary={program.exerciseLibrary || []}
              onClose={closeModals}
              onSave={saveRoutine}
            />
          </div>
        </div>
      )}
    </div>
  );
};