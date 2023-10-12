export class Groups {
    #count;

    constructor() {
        this.#count = 0;
        this.groups = new Map();

    }

    add(room) {// Create a new group. add methods takes integer as a parameter. returns id of group
        let id = this.#count + 1;
        this.#count += 1;
        const group = {};
        group.room = room;
        group.id = id;
        group.pupils = [];
        this.groups.set(id, group);
        return id;
    }
    addPupil(id, pupil) {
        // Add this pupil to this group
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.groups.has(id)) {
            throw Error("The parameter does not ")
        }
        this.groups.get(id).pupils.push(pupil)
        return this.groups.get(id);
    }
    removePupil(groupId, pupilId) {
        // Remove this pupil from this group
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof groupId !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.groups.has(groupId)) {
            throw Error("The parameter does not ")
        }
        let arr = this.groups.get(groupId).pupils;
        arr.forEach((element) => {
            if (element.id == pupilId) {
                arr.splice(element, 1)
            }
        })
    }
    update(groupId, Room) {
        // Update room for this group
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof groupId !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.groups.has(groupId)) {
            throw Error("The parameter does not ")
        }
        this.groups.get(groupId).room = Room.room
    }
    read(id) {
        // Read information about group
        if (arguments.length === 0) {
            throw Error("The parameter must be passed ")
        }
        if (typeof id !== 'number') {
            throw Error("The parameter must be number ")
        }
        if (!this.groups.has(id)) {
            throw Error("The parameter does not ")
        }
        return this.groups.get(id)
    }
    readAll() {// It will return array of groups
        if (arguments.length !== 0) {
            throw Error("The parameter must not be passed ")
        }
        let arr = [];
        this.groups.forEach((element, key) => {
            arr.push(this.groups.get(key));
        });

        return arr;
    }
}