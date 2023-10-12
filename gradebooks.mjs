export class Gradebooks {
    #group;
    #teachers;
    #lms;
    #count;
    constructor(groups, teachers, lms) {
        this.#count = 0;
        this.gradebooks = new Map();
        this.#group = groups;
        this.#teachers = teachers;
        this.#lms = lms;
    }
    add(id) {
        // Create a new gradebook.
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        let Id = this.#count + 1;
        this.#count++;
        return this.gradebooks.set(Id, this.#group.read(id))

    }
    clear() {
        // Destroy all data inside this gradebook
        if (arguments.length !== 0) {
            throw Error("The parameter must not be passed ")
        }
        this.gradebooks.clear();
    }
    addRecord(gradebookId, record) {
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof gradebookId !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.gradebooks.has(gradebookId)) {
            throw Error("The parameter does not ")
        }

        // shceme of a record. all fields are required.

        if(typeof record !== 'object' || Array.isArray(record) || record === null){
            throw new Error("is not object")
        }
        if(typeof record.pupilId !== 'number' ||record.pupilId == undefined ){
            throw new Error("must have pupilId")
        }
        if(typeof record.teacherId !== 'number' ||record.teacherId == undefined ){
            throw new Error("must have teacherId")
        }
        if(typeof record.subjectId !== 'number' ||record.subjectId == undefined ){
            throw new Error("must have subjectId")
        }
        if(typeof record.lesson !== 'number' ||record.lesson == undefined ){
            throw new Error("must have lesson ")
        }
        if(typeof record.mark !== 'number' ||record.mark == undefined ){
            throw new Error("must have  mark")
        }
        if(record.mark < 0||record.mark >10 ){
            throw new Error("0< mark <10")
        }

        this.gradebooks.get(gradebookId).record = record;

    }
    read(gradebookId, pupilId) {// Read information about pupilId

          if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof gradebookId !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.gradebooks.has(gradebookId)) {
            throw Error("The parameter does not ")
        }
        if (typeof pupilId !== 'number') {
            throw Error("The parameter must be number ")
        }
        let arr = []
        let obj = {};
        let record = [];
        let innerrecord = {};
        let fullname = this.gradebooks.get(gradebookId).pupils.map((element) => {
            if (element.id == pupilId) {
                return element.name.first + ' ' + element.name.last
            }
        })
        obj.name = fullname;
        obj.record = record;
        let teacher = this.#teachers.read(this.gradebooks.get(gradebookId).record.teacherId);
        innerrecord.teacher = teacher.name.first + ' ' + teacher.name.last;
        innerrecord.subject = teacher.subjects[0].subject;
        innerrecord.lesson = this.gradebooks.get(gradebookId).record.lesson;
        innerrecord.mark = this.gradebooks.get(gradebookId).record.mark;
        record.push(innerrecord);
        arr.push(obj);
        return arr

    }
    readAll(gradebookId){
        // It will return the array of objects
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof gradebookId !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.gradebooks.has(gradebookId)) {
            throw Error("The parameter does not ")
        }
        let arr=[];
        arr.push(this.gradebooks.get(gradebookId));
        return arr;
    }

}