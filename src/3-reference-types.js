const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

// const team2 = team1;
// team2.wins = 50;
// team2.losses = 15;

/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: team1.wins would become 50 and team1.losses would become 15, because team2 = team1
  copies the reference, not the object itself, so team1 and team2 point to the same object in
  memory. Mutating team2 mutates team1 as well.

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/

const team2 = {...team1};
team2.wins = 50;
team2.losses = 15;

// Part C: Verify the fix
console.log(team1.wins); // 45
console.log(team2.wins); // 50