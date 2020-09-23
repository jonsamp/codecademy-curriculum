// Task 1: look at raccoon meadows data
import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from './raccoon-meadows-log';

// Task 2: look at wolf point data
import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from './wolf-point-log';

// Task 3: look at these types: CombinedActivity, Volunteers
type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  // Task 4: we've written a combine volunteers partially, define the inside.
  // start with .map
  return volunteers.map((volunteer) => {
    // Task 5: create a varialbe named id
    let id = volunteer.id;

    // Task 6: write a type guard, inside parseInt
    if (typeof id === 'string') {
      id = parseInt(id, 10);
    }

    // Task 7: return this
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
}

// Task 10: check if the activity is verified with a type guard. write a function that can take a string or boolean
function isVerified(verified: string | boolean) {
  // Task 11: write a type guard, return verified. otherwise, below type guard, return verified since it's a boolean;
  if (typeof verified === 'string') {
    return verified === 'Yes';
  }

  return verified;
}

// Task 13: we need to get hours. write a function that can take in activity of either type
function getHours(activity: CombinedActivity) {
  // Task 14: now use the in operator to write a type guard. return hours or time.
  if ('hours' in activity) {
    return activity.hours;
  } else {
    return activity.time;
  }
}

function calculateHours(volunteers: Volunteers[]) {
  // Task 9: look at this pre-existing code!
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      // Task 12: write a conditional with the function we just wrote
      if (isVerified(activity.verified)) {
        // Task 15: set hours equal to the hours + the new hours from each activity
        hours = hours + getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

// Task 17: write a sort comparator
function byHours(a, b) {
  return b.hours - a.hours;
}

// Task 8: call combined volunteers and console.log the result
/**
 * [
  { id: 400, name: 'Sarah Galloway', activities: [ [Object] ] },
  { id: 100, name: 'Rose Sutton', activities: [ [Object], [Object] ] }
]
 */

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

// Task 16: set the result
const result = calculateHours(combinedVolunteers);

// Task 18: view the output
console.log(result.sort(byHours));
