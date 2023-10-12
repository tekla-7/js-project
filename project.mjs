import { Id, Subject, LMS } from "./lms.mjs";
import { Teachers } from "./Teacher.mjs";
import { Pupils } from "./pupils.mjs"
import {Groups} from './groups.mjs'
import {Gradebooks} from './gradebooks.mjs'





// Create a new Subject
const history = new Subject({
    title: 'History',
    lessons: 24,
    description: "string"
});
const lms = new LMS();
lms.add(history);

// Create a new teacher
const teachers = new Teachers();
const data = {
    name: {
        first: "ana",
        last: "anoo"
    },
    dateOfBirth: "01/01/2023", // format date
    emails: [
        {
            email: "aaa@hgmail.com",
            primary: true,
        }
    ],
    phones: [
        {
            phone: "55555555555",
            primary: true
        }
    ],
    sex: "male", // male or female
    subjects: [
        {
            subject: history.title // just name property of subject.
        }
    ],
    description: "aaaaaa",
}
const teacherId = teachers.add(data);




// Create a new pupil
const pup = {
    name: {
        first: "eka",
        last: "tsivtsivadze"
    },
    dateOfBirth: "02/04/2022", // format date
    phones: [
        {
            phone: "555555555h",
            primary: true,
        }
    ],
    sex: "male", // male OR female
    description: "string"
}
const pupils = new Pupils();
const pupil = pupils.add(pup);



// Create a new groups
const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
groups.addPupil(groupId, pupil);

// Create a new gradebooks
const pupilId = pupil.id;
const teacher = teacherId;
const gradebooks = new Gradebooks(groups, teachers, lms);
const gradebook = gradebooks.add(groupId);
const record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history.id,
    lesson: 1,
    mark: 9,
};
gradebooks.addRecord(1, record);




