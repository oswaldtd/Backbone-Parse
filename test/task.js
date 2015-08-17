import Task from '../src/js/task'


describe("Task", function(){
    it('should have a default title', function(){
        var x = new Task()
        expect(x.get('title')).toEqual('(no title given)')
    })
    it('should be incomplete by default', function(){
        var x = new Task()
        expect(x.isComplete()).toBe(false)
    })
    it('should by default have an empty (null) due date', function(){
        var x = new Task()
        expect(x.get('duedate')).toBe(null)
    })
    it('marking as done should save the duedate to current time', function(){
        var x = new Task()
        var now = x.done() // now is Date()
        expect(x.get('done')).toBe(true)
        expect(x.get('duedate')).not.toEqual(now)
    })
})

