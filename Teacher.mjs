export class Teachers {

    constructor(obj) {
        this.count = 0;
        this.teacher = new Map()
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
        if (!obj.dateOfBirth.match(/^(\d\d?)\/(\d\d?)\/(\d{4})$/)) {
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
        if (obj.sex !== 'male' && obj.sex != 'female') {
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
        if (!this.teacher.has(teacherId)) {
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
        if (typeof this.teacher.get(teacherId) !== 'object' || Array.isArray(this.teacher.get(teacherId)) ||this.teacher.get(teacherId) === null) {
            throw new Error("is not object")
        }
        if (typeof this.teacher.get(teacherId).name !== 'object' || Array.isArray(this.teacher.get(teacherId).name) || this.teacher.name === null) {
            throw new Error("must have  name")
        }
        if (typeof this.teacher.get(teacherId).emails !== 'object' || this.teacher.get(teacherId).emails === null) {
            throw new Error("must have  emails")
        }
        if (typeof this.teacher.get(teacherId).phones !== 'object' || this.teacher.get(teacherId).phones === null) {
            throw new Error("must have  phone")
        }
        if (typeof this.teacher.get(teacherId).subjects !== 'object' || this.teacher.get(teacherId).subjects === null) {
            throw new Error("must have subject")
        }
        if (typeof this.teacher.get(teacherId).name.first !== 'string' || this.teacher.get(teacherId).name.first == undefined) {
            throw new Error("first name should be string")
        }
        if (typeof this.teacher.get(teacherId).name.last !== 'string' || this.teacher.get(teacherId).name.last === undefined) {
            throw new Error("last name should be string")
        }
        if (!this.teacher.get(teacherId).dateOfBirth.match(/^(\d\d?)\/(\d\d?)\/(\d{4})$/)) {
            throw new Error("dateOfBirth should be string")
        }
        if (typeof this.teacher.get(teacherId).emails[0].email !== 'string' || this.teacher.get(teacherId).emails[0].email === undefined) {
            throw new Error("email should be string")
        }

        if (typeof this.teacher.get(teacherId).emails[0].primary !== 'boolean' || this.teacher.get(teacherId).emails[0].primary === undefined) {
            throw new Error("emails primary should be boolean")
        }
        if (typeof this.teacher.get(teacherId).phones[0].phone !== 'string' ||this.teacher.get(teacherId).phones[0].phone === undefined) {
            throw new Error("phone should be string")
        }
        if (typeof this.teacher.get(teacherId).phones[0].primary !== 'boolean' || this.teacher.get(teacherId).phones[0].primary === undefined) {
            throw new Error("phoneprimary   should be boolean")
        }
        if (this.teacher.get(teacherId).sex !== 'male' && this.teacher.get(teacherId).sex != 'female') {
            throw new Error("sex   should be male or female")
        }
        if (typeof this.teacher.get(teacherId).subjects[0].subject !== 'string' || this.teacher.get(teacherId).subjects[0].subject === undefined) {
            throw new Error("subject  should be string")
        }
        if (this.teacher.get(teacherId).description !== undefined) {
            if (typeof this.teacher.get(teacherId).description !== 'string') {
                throw new Error("description    should be string")
            }
        }

    }
    remove(id) {
        // will remove teacher
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.teacher.has(id)) {
            throw Error("this id is not match")
        }
        this.teacher.delete(id);
    }
}