// src/utils/workoutUtils.js

// Get the current week's schedule based on program start date
export const getWeekSchedule = (program, startDate) => {
    const today = new Date();
    const programStart = new Date(startDate);
    
    // Calculate weeks passed since program start
    const weeksPassed = Math.floor((today - programStart) / (7 * 24 * 60 * 60 * 1000));
    
    // Get current week's schedule (limit to program length)
    const currentWeekIndex = Math.min(Math.max(0, weeksPassed), program.length - 1);
    return program[currentWeekIndex]?.schedule || {};
  };
  
  // Calculate overall program progress percentage
  export const calculateProgramProgress = (program, userData) => {
    if (!program || program.length === 0) {
      return 0;
    }
    
    // Calculate total workouts in program (excluding rest days)
    let totalWorkouts = 0;
    program.forEach(week => {
      if (week.schedule) {
        Object.values(week.schedule).forEach(day => {
          if (day.type !== 'Rest Day' && day.type !== 'Active Recovery') {
            totalWorkouts++;
          }
        });
      }
    });
    
    // Get number of completed workouts
    const completedWorkouts = userData.completedWorkouts.length;
    
    // Calculate progress percentage
    return totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;
  };
  
  // Map workout types to muscle groups
  const workoutMuscleMap = {
    'Strength Training A': ['chest', 'shoulders', 'triceps', 'core'],
    'Strength Training B': ['back', 'biceps', 'shoulders', 'core'],
    'Upper Body': ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
    'Lower Body': ['quads', 'hamstrings', 'glutes', 'calves'],
    'Full Body': ['chest', 'back', 'shoulders', 'biceps', 'triceps', 'quads', 'hamstrings', 'glutes', 'core'],
    'Core': ['core'],
    'Cardio': ['quads', 'hamstrings', 'calves', 'core'],
    'HIIT': ['quads', 'hamstrings', 'core', 'chest', 'shoulders'],
    'Endurance Ride': ['quads', 'hamstrings', 'calves', 'glutes'],
    'Tempo Ride': ['quads', 'hamstrings', 'calves', 'glutes'],
    'Hill Ride': ['quads', 'hamstrings', 'calves', 'glutes', 'core'],
    'Interval Ride': ['quads', 'hamstrings', 'calves', 'glutes', 'core'],
    'Rest Day': [],
    'Active Recovery': []
  };
  
  // Individual exercise to muscle group mapping
  const exerciseMuscleMap = {
    'Squats': ['quads', 'glutes', 'core'],
    'Lunges': ['quads', 'glutes', 'hamstrings'],
    'Deadlifts': ['hamstrings', 'glutes', 'back', 'core'],
    'Push-ups': ['chest', 'shoulders', 'triceps', 'core'],
    'Pull-ups': ['back', 'biceps', 'shoulders'],
    'Bench Press': ['chest', 'triceps', 'shoulders'],
    'Rows': ['back', 'biceps', 'shoulders'],
    'Shoulder Press': ['shoulders', 'triceps'],
    'Planks': ['core', 'shoulders'],
    'Crunches': ['core'],
    'Leg Raises': ['core', 'quads'],
    'Bicep Curls': ['biceps', 'forearms'],
    'Tricep Extensions': ['triceps'],
    'Calf Raises': ['calves'],
    'Glute Bridges': ['glutes', 'hamstrings', 'core'],
    'Mountain Climbers': ['core', 'shoulders', 'quads'],
    'Burpees': ['chest', 'quads', 'core', 'shoulders'],
    'Jumping Jacks': ['quads', 'shoulders', 'calves'],
    'Russian Twists': ['core'],
    'Side Planks': ['core', 'shoulders']
  };
  
  // Get targeted muscle groups from a workout
  export const getMuscleGroups = (workout) => {
    if (!workout) {
      return [];
    }
    
    let muscles = new Set();
    
    // Add muscles based on workout type
    if (workoutMuscleMap[workout.type]) {
      workoutMuscleMap[workout.type].forEach(muscle => muscles.add(muscle));
    }
    
    // Add muscles based on specific exercises
    if (workout.exercises && workout.exercises.length > 0) {
      workout.exercises.forEach(exercise => {
        const exerciseName = exercise.name;
        if (exerciseMuscleMap[exerciseName]) {
          exerciseMuscleMap[exerciseName].forEach(muscle => muscles.add(muscle));
        }
      });
    }
    
    return Array.from(muscles);
  };
  
  // Calculate estimated calories burned based on workout details
  export const calculateCaloriesBurned = (workout) => {
    if (!workout || !workout.duration) {
      return 0;
    }
    
    // Base calories burned per minute for different workout types
    const caloriesPerMinuteByType = {
      'Strength Training A': 7,
      'Strength Training B': 7,
      'Upper Body': 6,
      'Lower Body': 8,
      'Full Body': 9,
      'Core': 5,
      'Cardio': 10,
      'HIIT': 12,
      'Endurance Ride': 8,
      'Tempo Ride': 10,
      'Hill Ride': 11,
      'Interval Ride': 12,
      'Rest Day': 0,
      'Active Recovery': 3
    };
    
    // Intensity multipliers
    const intensityMultipliers = {
      'low': 0.8,
      'medium': 1,
      'high': 1.2,
      'very-high': 1.4
    };
    
    // Calculate base calories from workout type
    const baseCaloriesPerMinute = caloriesPerMinuteByType[workout.type] || 7;
    
    // Apply intensity multiplier
    const intensityMultiplier = intensityMultipliers[workout.intensity] || 1;
    
    // Calculate total calories
    return Math.round(baseCaloriesPerMinute * workout.duration * intensityMultiplier);
  };