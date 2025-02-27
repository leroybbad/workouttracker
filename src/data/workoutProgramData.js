// src/data/workoutProgramData.js

// Exercise library for adding new exercises
const exerciseLibrary = [
    { name: "Squats", primaryMuscles: ["quads", "glutes"], secondaryMuscles: ["core", "hamstrings"] },
    { name: "Lunges", primaryMuscles: ["quads", "glutes"], secondaryMuscles: ["hamstrings", "core"] },
    { name: "Deadlifts", primaryMuscles: ["hamstrings", "glutes"], secondaryMuscles: ["back", "core"] },
    { name: "Push-ups", primaryMuscles: ["chest", "triceps"], secondaryMuscles: ["shoulders", "core"] },
    { name: "Pull-ups", primaryMuscles: ["back", "biceps"], secondaryMuscles: ["shoulders", "core"] },
    { name: "Bench Press", primaryMuscles: ["chest", "triceps"], secondaryMuscles: ["shoulders"] },
    { name: "Rows", primaryMuscles: ["back", "biceps"], secondaryMuscles: ["shoulders", "forearms"] },
    { name: "Shoulder Press", primaryMuscles: ["shoulders"], secondaryMuscles: ["triceps", "core"] },
    { name: "Planks", primaryMuscles: ["core"], secondaryMuscles: ["shoulders", "glutes"] },
    { name: "Crunches", primaryMuscles: ["core"], secondaryMuscles: [] },
    { name: "Leg Raises", primaryMuscles: ["core"], secondaryMuscles: ["quads", "hip flexors"] },
    { name: "Bicep Curls", primaryMuscles: ["biceps"], secondaryMuscles: ["forearms"] },
    { name: "Tricep Extensions", primaryMuscles: ["triceps"], secondaryMuscles: [] },
    { name: "Calf Raises", primaryMuscles: ["calves"], secondaryMuscles: [] },
    { name: "Glute Bridges", primaryMuscles: ["glutes"], secondaryMuscles: ["hamstrings", "core"] },
    { name: "Mountain Climbers", primaryMuscles: ["core"], secondaryMuscles: ["shoulders", "quads"] },
    { name: "Burpees", primaryMuscles: ["full body"], secondaryMuscles: [] },
    { name: "Jumping Jacks", primaryMuscles: ["cardio"], secondaryMuscles: ["shoulders", "calves"] },
    { name: "Russian Twists", primaryMuscles: ["core"], secondaryMuscles: [] },
    { name: "Side Planks", primaryMuscles: ["core"], secondaryMuscles: ["shoulders"] }
  ];
  
  export const workoutProgramData = [
    // Week 1: Foundation
    {
      focus: "Foundation",
      description: "Building base fitness, adapting to regular exercise, establishing routine",
      schedule: {
        monday: {
          type: "Strength Training A",
          description: "Focus on proper form and controlled movements",
          exercises: [
            { name: "Squats", sets: 3, reps: 12 },
            { name: "Push-ups", sets: 3, reps: 10 },
            { name: "Planks", sets: 3, reps: "30 sec" },
            { name: "Lunges", sets: 3, reps: "10 each leg" },
            { name: "Glute Bridges", sets: 3, reps: 15 }
          ]
        },
        tuesday: {
          type: "Endurance Ride",
          description: "Zone 2 (conversational pace)",
          duration: 45,
          notes: "Keep heart rate low and maintain steady cadence"
        },
        wednesday: {
          type: "Active Recovery",
          description: "Light activity to promote recovery",
          exercises: [
            { name: "Walking", duration: "20-30 min" },
            { name: "Stretching", duration: "10-15 min" }
          ]
        },
        thursday: {
          type: "Strength Training B",
          description: "Focus on core and upper body",
          exercises: [
            { name: "Rows", sets: 3, reps: 12 },
            { name: "Shoulder Press", sets: 3, reps: 10 },
            { name: "Side Planks", sets: 3, reps: "20 sec each side" },
            { name: "Bicep Curls", sets: 3, reps: 12 },
            { name: "Russian Twists", sets: 3, reps: 20 }
          ]
        },
        friday: {
          type: "Interval Ride",
          description: "Short intervals to build intensity",
          exercises: [
            { name: "Warm-up", duration: "5 min" },
            { name: "Intervals", sets: 5, reps: "1 min hard, 2 min easy" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        saturday: {
          type: "Endurance Ride",
          description: "Longer steady-state ride",
          duration: 60,
          notes: "Focus on maintaining good posture throughout"
        },
        sunday: {
          type: "Rest Day",
          description: "Complete rest to allow recovery",
          notes: "Stay hydrated and focus on good nutrition"
        }
      }
    },
    
    // Week 2: Building
    {
      focus: "Building",
      description: "Increasing intensity and duration slightly, maintaining consistency",
      schedule: {
        monday: {
          type: "Strength Training A",
          description: "Increase weight or reps from previous week",
          exercises: [
            { name: "Squats", sets: 3, reps: 15 },
            { name: "Push-ups", sets: 3, reps: 12 },
            { name: "Planks", sets: 3, reps: "45 sec" },
            { name: "Lunges", sets: 3, reps: "12 each leg" },
            { name: "Glute Bridges", sets: 3, reps: 18 }
          ]
        },
        tuesday: {
          type: "Tempo Ride",
          description: "Moderate intensity with periods of higher effort",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Tempo effort", duration: "20 min" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        wednesday: {
          type: "Active Recovery",
          description: "Light activity focusing on mobility",
          exercises: [
            { name: "Easy Spinning", duration: "20 min" },
            { name: "Stretching", duration: "15 min" }
          ]
        },
        thursday: {
          type: "Strength Training B",
          description: "Focus on strength gains",
          exercises: [
            { name: "Rows", sets: 3, reps: 15 },
            { name: "Shoulder Press", sets: 3, reps: 12 },
            { name: "Side Planks", sets: 3, reps: "30 sec each side" },
            { name: "Bicep Curls", sets: 3, reps: 15 },
            { name: "Russian Twists", sets: 3, reps: 25 }
          ]
        },
        friday: {
          type: "Hill Ride",
          description: "Building leg strength through hill work",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Hill intervals", sets: 6, reps: "2 min climb, 2 min recovery" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        saturday: {
          type: "Endurance Ride",
          description: "Building endurance base",
          duration: 75,
          notes: "Focus on maintaining consistent effort"
        },
        sunday: {
          type: "Rest Day",
          description: "Complete rest and recovery",
          notes: "Assess how your body is adapting to the program"
        }
      }
    },
    
    // Week 3: Progression
    {
      focus: "Progression",
      description: "Increasing challenge through higher intensity and volume",
      schedule: {
        monday: {
          type: "Strength Training A",
          description: "Progress with either weight or reps",
          exercises: [
            { name: "Squats", sets: 4, reps: 12 },
            { name: "Push-ups", sets: 3, reps: 15 },
            { name: "Planks", sets: 3, reps: "60 sec" },
            { name: "Lunges", sets: 3, reps: "15 each leg" },
            { name: "Glute Bridges", sets: 3, reps: 20 }
          ]
        },
        tuesday: {
          type: "Interval Ride",
          description: "Higher intensity intervals",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Intervals", sets: 6, reps: "1.5 min hard, 2 min easy" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        wednesday: {
          type: "Core",
          description: "Dedicated core strengthening",
          exercises: [
            { name: "Planks", sets: 3, reps: "45 sec" },
            { name: "Leg Raises", sets: 3, reps: 15 },
            { name: "Russian Twists", sets: 3, reps: 30 },
            { name: "Mountain Climbers", sets: 3, reps: 20 },
            { name: "Side Planks", sets: 3, reps: "30 sec each side" }
          ]
        },
        thursday: {
          type: "Strength Training B",
          description: "Focus on upper body and core strength",
          exercises: [
            { name: "Rows", sets: 4, reps: 12 },
            { name: "Shoulder Press", sets: 3, reps: 15 },
            { name: "Side Planks", sets: 3, reps: "45 sec each side" },
            { name: "Bicep Curls", sets: 3, reps: 15 },
            { name: "Tricep Extensions", sets: 3, reps: 15 }
          ]
        },
        friday: {
          type: "Tempo Ride",
          description: "Extended tempo intervals",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Tempo blocks", sets: 3, reps: "10 min at tempo effort, 5 min easy" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        saturday: {
          type: "Endurance Ride",
          description: "Longer ride with tempo sections",
          duration: 90,
          notes: "Include 3 x 10 min at moderate effort"
        },
        sunday: {
          type: "Active Recovery",
          description: "Easy activity to promote recovery",
          exercises: [
            { name: "Walking", duration: "30 min" },
            { name: "Stretching", duration: "20 min" }
          ]
        }
      }
    },
    
    // Week 4: Peak
    {
      focus: "Peak",
      description: "Reaching higher intensities before a recovery week",
      schedule: {
        monday: {
          type: "Strength Training A",
          description: "Peak strength week",
          exercises: [
            { name: "Squats", sets: 4, reps: 15 },
            { name: "Push-ups", sets: 4, reps: 12 },
            { name: "Planks", sets: 3, reps: "75 sec" },
            { name: "Lunges", sets: 4, reps: "12 each leg" },
            { name: "Glute Bridges", sets: 3, reps: 25 }
          ]
        },
        tuesday: {
          type: "HIIT",
          description: "High intensity interval training",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Burpees", sets: 3, reps: "30 sec work, 30 sec rest" },
            { name: "Mountain Climbers", sets: 3, reps: "30 sec work, 30 sec rest" },
            { name: "Jumping Jacks", sets: 3, reps: "30 sec work, 30 sec rest" },
            { name: "Push-ups", sets: 3, reps: "30 sec work, 30 sec rest" },
            { name: "Squats", sets: 3, reps: "30 sec work, 30 sec rest" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        wednesday: {
          type: "Active Recovery",
          description: "Light activity to maintain movement",
          exercises: [
            { name: "Easy Spin", duration: "20-30 min" },
            { name: "Stretching", duration: "15-20 min" }
          ]
        },
        thursday: {
          type: "Strength Training B",
          description: "Peak upper body strength",
          exercises: [
            { name: "Rows", sets: 4, reps: 15 },
            { name: "Shoulder Press", sets: 4, reps: 12 },
            { name: "Side Planks", sets: 3, reps: "60 sec each side" },
            { name: "Bicep Curls", sets: 4, reps: 12 },
            { name: "Tricep Extensions", sets: 4, reps: 12 }
          ]
        },
        friday: {
          type: "Hill Ride",
          description: "Challenging hill intervals",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Hill repeats", sets: 8, reps: "2 min hard climb, 2 min recovery" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        saturday: {
          type: "Endurance Ride",
          description: "Long ride with varied intensity",
          duration: 120,
          notes: "Include 4 x 10 min at moderate-high effort"
        },
        sunday: {
          type: "Rest Day",
          description: "Complete rest to prepare for next training block",
          notes: "Focus on recovery, hydration, and nutrition"
        }
      }
    },
    
    // Week 5: Recovery
    {
      focus: "Recovery",
      description: "Reduced volume to allow adaptation and recovery",
      schedule: {
        monday: {
          type: "Strength Training A",
          description: "Reduced volume, focus on technique",
          exercises: [
            { name: "Squats", sets: 2, reps: 15 },
            { name: "Push-ups", sets: 2, reps: 15 },
            { name: "Planks", sets: 2, reps: "45 sec" },
            { name: "Lunges", sets: 2, reps: "12 each leg" },
            { name: "Glute Bridges", sets: 2, reps: 20 }
          ]
        },
        tuesday: {
          type: "Endurance Ride",
          description: "Easy Zone 2 ride",
          duration: 45,
          notes: "Keep effort very light, focus on recovery"
        },
        wednesday: {
          type: "Rest Day",
          description: "Complete rest day",
          notes: "Allow your body to fully recover"
        },
        thursday: {
          type: "Strength Training B",
          description: "Light strength session",
          exercises: [
            { name: "Rows", sets: 2, reps: 15 },
            { name: "Shoulder Press", sets: 2, reps: 12 },
            { name: "Side Planks", sets: 2, reps: "30 sec each side" },
            { name: "Bicep Curls", sets: 2, reps: 15 },
            { name: "Russian Twists", sets: 2, reps: 25 }
          ]
        },
        friday: {
          type: "Active Recovery",
          description: "Very light activity",
          exercises: [
            { name: "Easy Spinning", duration: "20 min" },
            { name: "Stretching", duration: "20 min" }
          ]
        },
        saturday: {
          type: "Endurance Ride",
          description: "Moderate duration at easy pace",
          duration: 60,
          notes: "Keep effort low, enjoy the ride"
        },
        sunday: {
          type: "Rest Day",
          description: "Complete rest to prepare for next training block",
          notes: "Reflect on progress and set goals for next phase"
        }
      }
    },
    
    // Week 6: New Progression
    {
      focus: "New Progression",
      description: "Starting a new progression cycle with different exercises",
      schedule: {
        monday: {
          type: "Full Body",
          description: "Comprehensive full body workout",
          exercises: [
            { name: "Deadlifts", sets: 3, reps: 10 },
            { name: "Push-ups", sets: 3, reps: 15 },
            { name: "Rows", sets: 3, reps: 15 },
            { name: "Lunges", sets: 3, reps: "12 each leg" },
            { name: "Planks", sets: 3, reps: "60 sec" }
          ]
        },
        tuesday: {
          type: "Interval Ride",
          description: "Varied interval session",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Pyramid intervals", sets: 1, reps: "1-2-3-4-3-2-1 min hard, 1 min easy between" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        wednesday: {
          type: "Core",
          description: "Core strength and stability",
          exercises: [
            { name: "Planks", sets: 3, reps: "60 sec" },
            { name: "Leg Raises", sets: 3, reps: 15 },
            { name: "Russian Twists", sets: 3, reps: 30 },
            { name: "Mountain Climbers", sets: 3, reps: 30 },
            { name: "Side Planks", sets: 3, reps: "45 sec each side" }
          ]
        },
        thursday: {
          type: "Upper Body",
          description: "Focused upper body strength",
          exercises: [
            { name: "Push-ups", sets: 4, reps: 12 },
            { name: "Rows", sets: 4, reps: 12 },
            { name: "Shoulder Press", sets: 3, reps: 15 },
            { name: "Bicep Curls", sets: 3, reps: 15 },
            { name: "Tricep Extensions", sets: 3, reps: 15 }
          ]
        },
        friday: {
          type: "Tempo Ride",
          description: "Sustained efforts at threshold",
          exercises: [
            { name: "Warm-up", duration: "10 min" },
            { name: "Threshold blocks", sets: 3, reps: "12 min at threshold, 5 min recovery" },
            { name: "Cool-down", duration: "5 min" }
          ]
        },
        saturday: {
          type: "Lower Body",
          description: "Leg strength focus",
          exercises: [
            { name: "Squats", sets: 4, reps: 15 },
            { name: "Lunges", sets: 3, reps: "15 each leg" },
            { name: "Glute Bridges", sets: 3, reps: 20 },
            { name: "Calf Raises", sets: 3, reps: 20 },
            { name: "Leg Raises", sets: 3, reps: 15 }
          ]
        },
        sunday: {
          type: "Endurance Ride",
          description: "Building back endurance base",
          duration: 90,
          notes: "Steady effort with good technique"
        }
      }
    }
  ];
  
  // Also export the exercise library so it can be used elsewhere
  export { exerciseLibrary };