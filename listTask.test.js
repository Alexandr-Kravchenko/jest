import testFunc from './listTask';

let date = new Date('Aug 25, 2021 10:00');

let time = {
    days: 5,
    // months: 0,
    // years: 0,
    // hours: 5,
    // minutes: 30 
}

let task = testFunc(1, 'someTitle', true, date);


describe('task', () => {
    it('to toggle bool value', () => {
        expect(task.toggle()).toBe(false);
    });
    it('date is overdue?', () => {
        expect(task.isOverdue()).toBe(false);
    })
    it('postPone should change duedate', () => {
        task.postPone(time);
        expect(task.dueDate).toEqual(new Date('Aug 30, 2021 10:00'));
    })
    it('received string must be equal to', () => {
        expect(task.toString()).toEqual('1. [ ] someTitle (Aug 30 2021)');
    })
    it('setDescription should change description', () => {
        let newDescription = 'Ohh yeah, new description';
        expect(task.setDescription(newDescription)).toBe(newDescription);
    })
})