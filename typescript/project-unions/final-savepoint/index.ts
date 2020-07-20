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

type ManageScheduleArgs = {
  action: 'enroll' | 'drop';
  event: Course | StudyGroup;
};

let events = [];

function searchEvents(args: SearchEventArgs): (Course | StudyGroup)[] {
  const { query, type } = args;
  const isCourses = type === 'courses';
  const events: (Course | StudyGroup)[] = isCourses ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof query === 'number') {
      return event.id === query;
    }

    if (typeof query === 'string' && event.keywords) {
      return event.keywords.includes(query);
    }
  });
}

function manageSchedule(args: ManageScheduleArgs) {
  const { action, event } = args;

  if (action === 'enroll') {
    events = [...events, event];
  }

  if (action === 'drop') {
    events = events.filter((_event) => _event.id !== event.id);
  }
}

function viewSchedule() {
  events.forEach((event) => {
    console.log(
      `${event.type === 'course' ? 'Course' : 'Group'}: ${event.title}`
    );
  });
}

const coursesSearchResults = searchEvents({ query: 'art', type: 'courses' });

coursesSearchResults.forEach((courseSearchResult: Course) => {
  manageSchedule({ action: 'enroll', event: courseSearchResult });

  const studyGroup = studyGroups.find(
    (studyGroup) => studyGroup.id === courseSearchResult.studyGroupId
  );
  manageSchedule({ action: 'enroll', event: studyGroup });
});

manageSchedule({ action: 'drop', event: events[1] });

viewSchedule();
