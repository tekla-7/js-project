export class Pupils {
    #count;

    constructor(obj) {
        this.#count = 0;
        let id = this.#count + 1;
        this.pupils = new Map();
        this.id = id;// should return pupil ID


    }
    add(obj) {
        // Create new Pupil from Pupil's data
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
            throw new Error("is not object")
        }
        if (typeof obj.name !== 'object' || Array.isArray(obj.name) || obj.name === null) {
            throw new Error("must have  name")
        }
        if (typeof obj.phones !== 'object' || obj.phones === null) {
            throw new Error("must have  phone")
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

        if (typeof obj.phones[0].phone !== 'string' || obj.phones[0].phone === undefined) {
            throw new Error("phone should be string")
        }
        if (typeof obj.phones[0].primary !== 'boolean' || obj.phones[0].primary === undefined) {
            throw new Error("phoneprimary   should be boolean")
        }
        if (obj.sex !== 'male' && obj.sex != 'female') {
            throw new Error("sex   should be male or female")
        }
        if (obj.description !== undefined) {
            if (typeof obj.description !== 'string') {
                throw new Error("description    should be string")
            }
        }
        let id = this.#count + 1;
        this.#count += 1;
        this.pupils.set(id, obj);
        obj.id = id;
        return obj;
    }
    read(id) {
        // will return Pupils data including pupil's id
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (this.pupils.has(id)) {
            return this.pupils.get(id)
        } else {
            return null
        }
    }
    update(id, updatedProfile) {
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.pupils.has(id)) {
            throw Error("The parameter does not ")
        }
        update(this.pupils.get(id), updatedProfile)
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
        if (typeof this.pupils.get(id)!== 'object' || Array.isArray(this.pupils.get(id)) ||this.pupils.get(id)=== null) {
            throw new Error("is not object")
        }
        if (typeof this.pupils.get(id).name !== 'object' || Array.isArray(this.pupils.get(id).name) || this.pupils.get(id).name === null) {
            throw new Error("must have  name")
        }
        if (typeof this.pupils.get(id).phones !== 'object' || this.pupils.get(id).phones === null) {
            throw new Error("must have  phone")
        }
        if (typeof this.pupils.get(id).name.first !== 'string' || this.pupils.get(id).name.first == undefined) {
            throw new Error("first name should be string")
        }
        if (typeof this.pupils.get(id).name.last !== 'string' || this.pupils.get(id).name.last === undefined) {
            throw new Error("last name should be string")
        }
        if (!this.pupils.get(id).dateOfBirth.match(/^(\d\d?)\/(\d\d?)\/(\d{4})$/)) {
            throw new Error("dateOfBirth should be string")
        }

        if (typeof this.pupils.get(id).phones[0].phone !== 'string' || this.pupils.get(id).phones[0].phone === undefined) {
            throw new Error("phone should be string")
        }
        if (typeof this.pupils.get(id).phones[0].primary !== 'boolean' || this.pupils.get(id).phones[0].primary === undefined) {
            throw new Error("phoneprimary   should be boolean")
        }
        if (this.pupils.get(id).sex !== 'male' && this.pupils.get(id).sex != 'female') {
            throw new Error("sex   should be male or female")
        }
        if (this.pupils.get(id).description !== undefined) {
            if (typeof this.pupils.get(id).description !== 'string') {
                throw new Error("description    should be string")
            }
        }
    }
    remove(id) {
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.pupils.has(id)) {
            throw Error("The parameter does not ")
        }
        this.pupils.delete(id);
    }
}