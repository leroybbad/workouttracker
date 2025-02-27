// src/components/Home.jsx
import { useState, useEffect } from 'react';
import { BodyChart } from './BodyChart';
import { WorkoutSheet } from './WorkoutSheet';
import { BiometricSheet } from './BiometricSheet';
import { MetricChart } from './MetricChart';
import { getWeekSchedule, calculateProgramProgress, getMuscleGroups } from '../utils/workoutUtils';

export const Home = ({ todaysWorkout, program, userData, recordWorkout, recordBiometrics }) => {
  const [isWorkoutSheetOpen, setIsWorkoutSheetOpen] = useState(false);
  const [isBiometricSheetOpen, setIsBiometricSheetOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [weekProgress, setWeekProgress] = useState(0);
  const [programProgress, setProgramProgress] = useState(0);
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
  const [targetedMuscles, setTargetedMuscles] = useState([]);
  const [thisWeekSchedule, setThisWeekSchedule] = useState({});

  // Calculate statistics on data changes
  useEffect(() => {
    // Calculate program progress
    setProgramProgress(calculateProgramProgress(program, userData));
    
    // Calculate calories burned
    const calories = userData.completedWorkouts.reduce(
      (total, workout) => total + (workout.caloriesBurned || 0), 0
    );
    setTotalCaloriesBurned(calories);
    
    // Get targeted muscle groups from today's workout
    setTargetedMuscles(getMuscleGroups(todaysWorkout));
    
    // Get this week's schedule
    const weekSchedule = getWeekSchedule(program, userData.programStartDate);
    setThisWeekSchedule(weekSchedule);
    
    // Calculate week progress (completed / total workouts this week)
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    startOfWeek.setHours(0, 0, 0, 0);
    
    const completedThisWeek = userData.completedWorkouts.filter(workout => {
      const workoutDate = new Date(workout.date);
      return workoutDate >= startOfWeek;
    }).length;
    
    const totalWorkoutsThisWeek = Object.values(weekSchedule).filter(
      day => day.type !== 'Rest Day'
    ).length;
    
    setWeekProgress(totalWorkoutsThisWeek > 0 ? 
      (completedThisWeek / totalWorkoutsThisWeek) * 100 : 0);
  }, [userData, program, todaysWorkout]);

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
  };

  const closeSheet = () => {
    setIsWorkoutSheetOpen(false);
    setIsBiometricSheetOpen(false);
    setSelectedMetric(null);
  };

  // Format date as "Weekday, Month Day"
  const formatDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="home-container">
      <h1>Workout Tracker</h1>
      <p className="date">{formatDate()}</p>
      
      {/* Today's Workout Section */}
      <section className="today-section">
        <h2>Today's Workout</h2>
        <div className="workout-card">
          <h3>{todaysWorkout.type}</h3>
          <p>{todaysWorkout.description || 'Focus on proper form and controlled movements.'}</p>
          
          {todaysWorkout.exercises && todaysWorkout.exercises.length > 0 ? (
            <ul className="exercise-list">
              {todaysWorkout.exercises.map((exercise, index) => (
                <li key={index}>
                  {exercise.name}: {exercise.sets} sets × {exercise.reps} reps
                </li>
              ))}
            </ul>
          ) : (
            <p className="rest-day">Rest or light activity today</p>
          )}
          
          <div className="action-buttons">
            <button 
              className="primary-button" 
              onClick={() => setIsWorkoutSheetOpen(true)}
            >
              Record Workout
            </button>
            <button 
              className="secondary-button"
              onClick={() => setIsBiometricSheetOpen(true)}
            >
              Biometrics
            </button>
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="metrics-section">
        <h2>Progress</h2>
        <div className="metrics-grid">
          <div className="metric-card" onClick={() => handleMetricClick('workouts')}>
            <h3>Workouts</h3>
            <p className="metric-value">{userData.completedWorkouts.length}</p>
            <p>completed</p>
          </div>
          
          <div className="metric-card" onClick={() => handleMetricClick('calories')}>
            <h3>Calories</h3>
            <p className="metric-value">{totalCaloriesBurned.toLocaleString()}</p>
            <p>burned</p>
          </div>
          
          <div className="metric-card" onClick={() => handleMetricClick('weight')}>
            <h3>Weight</h3>
            <p className="metric-value">
              {userData.biometrics.length > 0 
                ? `${userData.biometrics[userData.biometrics.length - 1].weight} lbs` 
                : 'No data'}
            </p>
            <p>current</p>
          </div>
          
          <div className="metric-card" onClick={() => handleMetricClick('sleep')}>
            <h3>Sleep</h3>
            <p className="metric-value">
              {userData.biometrics.length > 0 
                ? `${userData.biometrics[userData.biometrics.length - 1].sleep} hrs` 
                : 'No data'}
            </p>
            <p>last night</p>
          </div>
        </div>
      </section>
      
      {/* Program Progress Section */}
      <section className="progress-section">
        <div className="progress-container">
          <h3>Program Progress</h3>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${programProgress}%` }}
            ></div>
          </div>
          <p>{Math.round(programProgress)}% complete</p>
        </div>
        
        <div className="progress-container">
          <h3>This Week</h3>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${weekProgress}%` }}
            ></div>
          </div>
          <p>{Math.round(weekProgress)}% complete</p>
        </div>
      </section>
      
      {/* Body Chart Section */}
      <section className="body-chart-section">
        <h2>Today's Focus Areas</h2>
        <BodyChart targetedMuscles={targetedMuscles} />
      </section>
      
      {/* Weekly Overview */}
      <section className="week-overview">
        <h2>This Week</h2>
        <div className="week-days">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const dayIndex = (index + 1) % 7; // Adjust to make Monday first
            const dayKey = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayIndex];
            const workout = thisWeekSchedule[dayKey] || { type: 'Unknown' };
            
            // Check if this day is today
            const today = new Date().getDay();
            const isToday = dayIndex === today;
            
            // Check if this day's workout is completed
            const isCompleted = userData.completedWorkouts.some(completedWorkout => {
              const workoutDate = new Date(completedWorkout.date);
              return workoutDate.getDay() === dayIndex && 
                     workoutDate.getTime() >= new Date().setHours(0, 0, 0, 0) - (6 * 24 * 60 * 60 * 1000);
            });
            
            return (
              <div 
                key={day} 
                className={`day-item ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}`}
              >
                <span className="day-label">{day}</span>
                <span className="workout-type">{workout.type}</span>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Sheets (modals) */}
      {isWorkoutSheetOpen && (
        <WorkoutSheet 
          workout={todaysWorkout}
          onClose={closeSheet}
          onSave={recordWorkout}
        />
      )}
      
      {isBiometricSheetOpen && (
        <BiometricSheet
          onClose={closeSheet}
          onSave={recordBiometrics}
          lastBiometrics={userData.biometrics.length > 0 ? 
            userData.biometrics[userData.biometrics.length - 1] : null}
        />
      )}
      
      {selectedMetric && (
        <MetricChart
          metric={selectedMetric}
          data={selectedMetric === 'workouts' || selectedMetric === 'calories' ? 
            userData.completedWorkouts : userData.biometrics}
          onClose={closeSheet}
        />
      )}
    </div>
  );
};