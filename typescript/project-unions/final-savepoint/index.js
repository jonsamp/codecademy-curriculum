"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let enrolledEvents = [];
function searchEvents(args) {
    const events = args.type === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof args.query === 'number') {
            return event.id === args.query;
        }
        if (typeof args.query === 'string') {
            return event.keywords.includes(args.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: 'art', type: 'courses' });
enroll(searchResults[0]);
console.log(enrolledEvents);
