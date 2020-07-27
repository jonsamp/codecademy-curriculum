import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  type: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  type: string;
};

type SearchEventArgs = {
  query: number | string;
  type: 'courses' | 'groups';
};

let enrolledEvents: (Course | StudyGroup)[] = [];

function searchEvents(args: SearchEventArgs) {
  const events: (Course | StudyGroup)[] =
    args.type === 'courses' ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof args.query === 'number') {
      return event.id === args.query;
    }

    if (typeof args.query === 'string') {
      return event.keywords.includes(args.query);
    }
  });
}

function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event];
}

const searchResults = searchEvents({ query: 'art', type: 'courses' });

enroll(searchResults[0]);

console.log(enrolledEvents);
