// src/data/userData.js

export const defaultUserData = {
    // Program start date (used to calculate current week)
    programStartDate: new Date().toISOString(),
    
    // User profile
    profile: {
      name: "",
      age: null,
      weight: null,
      height: null,
      fitnessLevel: "beginner", // beginner, intermediate, advanced
      goals: ["endurance", "strength"]
    },
    
    // Record of completed workouts
    completedWorkouts: [
      // Sample workout (this will help the app look populated on first run)
      {
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days ago
        type: "Endurance Ride",
        duration: 45,
        intensity: "medium",
        exercises: [
          { name: "Warm-up", completed: true, duration: 5 },
          { name: "Steady ride", completed: true, duration: 35 },
          { name: "Cool-down", completed: true, duration: 5 }
        ],
        caloriesBurned: 350,
        notes: "Felt good, maintained steady cadence"
      }
    ],
    
    // Biometric tracking data
    biometrics: [
      // Sample biometric data
      {
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days ago
        weight: 175,
        systolic: 120,
        diastolic: 80,
        restingHeartRate: 68,
        sleep: 7.5,
        mood: "good",
        notes: "Feeling rested and recovered"
      }
    ]
  };