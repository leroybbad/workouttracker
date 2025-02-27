// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Program } from './components/Program';
import { Navigation } from './components/Navigation';
import { workoutProgramData } from './data/workoutProgramData';
import { defaultUserData } from './data/userData';
import './styles.css';

function App() {
  // Initialize state from localStorage or use defaults
  const [program, setProgram] = useState(() => {
    const savedProgram = localStorage.getItem('workoutProgram');
    return savedProgram ? JSON.parse(savedProgram) : workoutProgramData;
  });
  
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : defaultUserData;
  });

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('workoutProgram', JSON.stringify(program));
  }, [program]);
  
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  // Calculate today's workout
  const getTodaysWorkout = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[dayOfWeek];
    
    // Calculate current week of program
    const startDate = new Date(userData.programStartDate);
    const weeksPassed = Math.floor((today - startDate) / (7 * 24 * 60 * 60 * 1000));
    const currentWeek = Math.min(Math.max(0, weeksPassed), program.length - 1);
    
    return program[currentWeek]?.schedule[currentDay] || { type: 'Rest Day', exercises: [] };
  };

  // Record completed workout
  const recordWorkout = (workout) => {
    const today = new Date().toISOString().split('T')[0];
    
    setUserData(prev => ({
      ...prev,
      completedWorkouts: [
        ...prev.completedWorkouts,
        {
          date: today,
          ...workout,
          caloriesBurned: calculateCaloriesBurned(workout)
        }
      ]
    }));
  };

  // Simple calories burned estimation
  const calculateCaloriesBurned = (workout) => {
    // Base calculation - can be refined based on exercise intensity, user weight, etc.
    const baseCaloriesPerMinute = 5;
    return workout.duration * baseCaloriesPerMinute;
  };

  // Record biometric data
  const recordBiometrics = (biometricData) => {
    const today = new Date().toISOString().split('T')[0];
    
    setUserData(prev => ({
      ...prev,
      biometrics: [
        ...prev.biometrics,
        {
          date: today,
          ...biometricData
        }
      ]
    }));
  };

  // Add new exercise to program
  const addExercise = (exercise) => {
    setProgram(prev => {
      const updatedProgram = [...prev];
      const exerciseLibrary = [...(updatedProgram.exerciseLibrary || []), exercise];
      updatedProgram.exerciseLibrary = exerciseLibrary;
      return updatedProgram;
    });
  };

  // Update a routine in the program
  const updateRoutine = (weekIndex, dayOfWeek, routine) => {
    setProgram(prev => {
      const updatedProgram = [...prev];
      updatedProgram[weekIndex] = {
        ...updatedProgram[weekIndex],
        schedule: {
          ...updatedProgram[weekIndex].schedule,
          [dayOfWeek]: routine
        }
      };
      return updatedProgram;
    });
  };

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={
            <Home 
              todaysWorkout={getTodaysWorkout()}
              program={program}
              userData={userData}
              recordWorkout={recordWorkout}
              recordBiometrics={recordBiometrics}
            />
          } />
          <Route path="/program" element={
            <Program 
              program={program}
              updateRoutine={updateRoutine}
              addExercise={addExercise}
            />
          } />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}

export default App;