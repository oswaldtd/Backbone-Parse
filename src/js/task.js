// Task Model

import Backbone from 'backbone'
export default Backbone.Model.extend({
    defaults: {
        done: false,
        title: '(no title given)',
        duedate: null
    },
    isComplete: function(){
        return this.get('done')
    },
    done: function(){
        this.set('done', true)
        return new Date()
    }
})
