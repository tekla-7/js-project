let Id = 0;
class Subject {
    constructor(obj) {
        let id = Id + 1;
        this.id = id;
        this.title = obj.title;
        this.lessons = obj.lessons;
        let newobj = {
            id: this.id,
            title: this.title,
            lessons: this.lessons,
        }
        if (obj.description != undefined) {
            this.description = obj.description;
            newobj.description = this.description;
        }
        Id += 1;

        if (typeof obj != 'object' || Array.isArray(obj) || obj === null) {
            throw new Error("is not object")
        }
        if (!obj.title) {
            throw new Error("doesn't heve  title")
        }
        if (!obj.lessons) {
            throw new Error("doesn't habe lessons")
        }
        if (typeof obj.title != 'string') {
            throw new Error("title is not string")
        }
        if (typeof obj.lessons != 'number') {
            throw new Error("lesson is not namber")
        }
        if (obj.description) {
            if (typeof obj.description != 'string') {
                throw new Error("description is not string")
            }
        }
        if (Object.getOwnPropertyNames(obj).length > 3) {
            throw new Error("Too many properties")
        }
        return newobj;
    }

}
class LMS {
    #count;
    constructor() {
        this.#count = 0;
        this.subjects = new Map()
    }
    add(obj) {
        let id = this.#count + 1;
        this.#count += 1;
        this.subjects.set(id, obj);

    }
    remove(obj) {
        if (obj == null) {
            throw new Error('Specify the name of the subject you want to delete')
        }
        let removeitemid;
        this.subjects.forEach((value, key, ownMap) => {
            if (value == obj) {
                removeitemid = key;
            }
        });
        if(removeitemid==undefined){
            throw new Error("non existing subject")
        }
        this.subjects.delete(removeitemid);
    }
    verify(obj) {
        let verifyitemid;
        this.subjects.forEach((value, key, ownMap) => {
            if (value == obj) {
                verifyitemid = key;
            }
        });
        if (this.subjects.has(verifyitemid)) {
            return true;
        } else {
            return false;
        }
    }
    readAll() {

        if(arguments.length != 0){
            throw new Error('method shouldn\'t take argument')
        }
        let arr = []
        this.subjects.forEach((element, key) => {
            arr.push(this.subjects.get(key));
        });
        return arr;
    }

}
const history = new Subject({
    title: 'History',
    lessons: 24,
    description: "string"
});
const geo = new Subject({
    title: 'ddd',
    lessons: 20,
});
const lms = new LMS();
 lms.add(history);
lms.add(geo);
console.log(lms.verify(history))