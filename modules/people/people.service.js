const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))
//set up for resetting?
// --------------------

module.exports = {
  get() {
    return people.all()
  },

  enqueue(person) {
    people.enqueue(person)
  },

  dequeue() {
    people.dequeue()
  }
}
