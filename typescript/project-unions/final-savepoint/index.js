"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let events = [];
function searchEvents(args) {
    const { query, type } = args;
    const isCourses = type === 'courses';
    const events = isCourses ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof query === 'number') {
            return event.id === query;
        }
        if (typeof query === 'string' && event.keywords) {
            return event.keywords.includes(query);
        }
    });
}
function manageSchedule(args) {
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
        console.log(`${event.type === 'course' ? 'Course' : 'Group'}: ${event.title}`);
    });
}
const coursesSearchResults = searchEvents({ query: 'art', type: 'courses' });
coursesSearchResults.forEach((courseSearchResult) => {
    manageSchedule({ action: 'enroll', event: courseSearchResult });
    const studyGroup = studyGroups_1.default.find((studyGroup) => studyGroup.id === courseSearchResult.studyGroupId);
    manageSchedule({ action: 'enroll', event: studyGroup });
});
manageSchedule({ action: 'drop', event: events[1] });
viewSchedule();
