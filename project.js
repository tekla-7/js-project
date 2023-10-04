let Id = 0;
//SUBJECT CLASS
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
//LMS CLASS
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
        if (removeitemid == undefined) {
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

        if (arguments.length != 0) {
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








class Teachers {

    constructor() {
        this.count = 0;
        this.teacher = new Map();

    }
    add(obj) {
        // all fields are required, except description
        // Create a new teacher
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
            throw new Error("is not object")
        }
        if (typeof obj.name !== 'object' || Array.isArray(obj.name) || obj.name === null) {
            throw new Error("must have  name")
        }
        if (typeof obj.emails !== 'object' || obj.emails === null) {
            throw new Error("must have  emails")
        }
        if (typeof obj.phones !== 'object' || obj.phones === null) {
            throw new Error("must have  phone")
        }
        if (typeof obj.subjects !== 'object' || obj.subjects === null) {
            throw new Error("must have subject")
        }
        if (typeof obj.name.first !== 'string' || obj.name.first == undefined) {
            throw new Error("first name should be string")
        }
        if (typeof obj.name.last !== 'string' || obj.name.last === undefined) {
            throw new Error("last name should be string")
        }
        if (! obj.dateOfBirth.match(/^(\d\d?)\/(\d\d?)\/(\d{4})$/)) {
            throw new Error("dateOfBirth should be string")
        }
        if (typeof obj.emails[0].email !== 'string' || obj.emails[0].email === undefined) {
            throw new Error("email should be string")
        }

        if (typeof obj.emails[0].primary !== 'boolean' || obj.emails[0].primary === undefined) {
            throw new Error("emails primary should be boolean")
        }
        if (typeof obj.phones[0].phone !== 'string' || obj.phones[0].phone === undefined) {
            throw new Error("phone should be string")
        }
        if (typeof obj.phones[0].primary !== 'boolean' || obj.phones[0].primary === undefined) {
            throw new Error("phoneprimary   should be boolean")
        }
        if (obj.sex!=='male' && obj.sex!='female') {
            throw new Error("sex   should be male or female")
        }
        if (typeof obj.subjects[0].subject !== 'string' || obj.subjects[0].subject === undefined) {
            throw new Error("subject  should be string")
        }
        if (obj.description !== undefined) {
            if (typeof obj.description !== 'string') {
                throw new Error("description    should be string")
            }
        }
        let id = this.count + 1;
        this.count += 1;
        obj.id = id;
        this.teacher.set(id, obj);
        return id;
    }
    read(id) {
        // will return Teachers data including teacher's id
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (this.teacher.has(id)) {
            return this.teacher.get(id)
        } else {
            return null
        }
    }
    update(teacherId, updatedProfile) {
        // will update Teacher. 
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if(!this.teacher.has(teacherId)){
            throw Error("this id is not match")
        }
        
        update(this.teacher.get(teacherId), updatedProfile)
        function update(obj, key) {
            for (let a in key) {
                for (let k in obj) {
                    if (k == a) {
                        if (typeof key[a] === 'object') {
                            update(obj[k], key[a])
                        }
                    }
                }
                for (let k in obj) {
                    if (typeof obj[k] === 'object') {
                        update(obj[k], key);

                    } else if (k == a) {
                        obj[k] = key[a];
                    }
                }

            }

        }

    }
    remove(id){
        // will remove teacher
        if(!this.teacher.has(id)){
            throw Error("this id is not match")
        }
        this.teacher.delete(id);
    }
}
const teachers = new Teachers();
