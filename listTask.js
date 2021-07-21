let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

class Task {
    constructor (id, title, done, dueDate, desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.done = done;
        this.dueDate = dueDate;
    }
    toggle () {
       return this.done = this.done === false ? true : false;
    }
    toString () { 
        let done = this.done === true ? '[x]' : '[ ]';
        let formatedDate = this.dueDate !== undefined ? `${month[this.dueDate.getMonth()]} ${this.dueDate.getDate()} ${this.dueDate.getFullYear()}` : ' ';
        
        if(this.desc === undefined || this.desc === '') {
            if(this.dueDate === undefined || this.dueDate === '') {
                return (`${this.id}. ${done} ${this.title}`)
            }
            return (`${this.id}. ${done} ${this.title} (${formatedDate})`)
        } else {
            if(this.dueDate === undefined || this.dueDate === '') {
                return (`${this.id}. ${done} ${this.title}\n   ${this.desc}`)
            }
            return (`${this.id}. ${done} ${this.title} (${formatedDate})\n   ${this.desc}`)
        }
    }
    isOverdue () {
        let currentDate = new Date();
        if(currentDate - this.dueDate < 0) {
            return false
        } else {
            return true
        }
    }
    postPone (timeSpan) {
        let due = this.dueDate;
        let data = {
            days: timeSpan.days !== undefined ? timeSpan.days : 0,
            months: timeSpan.months !== undefined ? timeSpan.months : 0,
            years: timeSpan.years !== undefined ? timeSpan.years : 0,
            hours: timeSpan.hours !== undefined ? timeSpan.hours : 0,
            minutes: timeSpan.minutes !== undefined ? timeSpan.minutes : 0 
        }
        if(due !== undefined) {
            due.setDate(due.getDate() + data.days);
            due.setMonth(due.getMonth() + data.months);
            due.setYear(due.getFullYear() + data.years);
            due.setHours(due.getHours() + data.hours);
            due.setMinutes(due.getMinutes() + data.minutes);
        }
        return due;
    }
    setDescription (text) {
        this.desc = text;
        return this.desc;
    }
}

let testDate = new Date('Aug 25, 2021 10:00');

let test = new Task(1, 'ToShowThisTask', true, testDate)

let time = {
    days: 2,
    // months: 0,
    // years: 0,
    // hours: 5,
    // minutes: 30 
}

console.log(test.toString())

test.postPone(time);
test.setDescription('NewDescription');

console.log(test.toString())


function testFunc(id,title,done,date) {
    return new Task(id, title, done, date);
}

export default testFunc;