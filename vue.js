var app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'Learn Javascript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // 'prop', which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [{
        id: 0,
        text: 'Vegetables'
      },
      {
        id: 1,
        text: 'Cheese'
      },
      {
        id: 2,
        text: 'Whatever else humans are supposed to eat'
      }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello'
  },
  // computed properties are cached based on their reactive dependencies
  computed: {
    // a computed getter
    reversedMessage1: function() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  // methods are not
  methods: {
    reversedMessage2: function() {
      return this.message.split('').reverse().join('')
    }
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})

var app11 = new Vue({
  el: '#app-11',
  data: {
    isActive: true,
    hasError: false
  }
})

var app12 = new Vue({
  el: '#app-12',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

var app14 = new Vue({
  el: '#app-14',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

var app15 = new Vue({
  el: '#app-15',
  data: {
    type: 'F'
  }
})

var app16 = new Vue({
  el: '#app-16',
  data: {
    loginType: 'username'
  }
})


var app17 = new Vue({
  el: '#app-17',
  data: {
    loginType: 'username'
  }
})

var app18 = new Vue({
  el: '#app-18'
})

var app19 = new Vue({
  el: '#app-19',
  data: {
    items: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      }
    ]
  }
})

var app20 = new Vue({
  el: '#app-20',
  data: {
    parentMessage: 'Parent',
    items: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      }
    ]
  }
})

var app21 = new Vue({
  el: '#app-21',
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }
})

var app22 = new Vue({
  el: '#app-22',
  data: {
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ]
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }
})

var app23 = new Vue({
  el: '#app-23',
  data: {
    counter: 0
  }
})

var app24 = new Vue({
  el: '#app-24',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

var app25 = new Vue({
  el: '#app-25',
  methods: {
    say: function(message) {
      alert(message)
    }
  }
})

var app26 = new Vue({
  el: '#app-26',
  methods: {
    warn: function(message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
})

var app27 = new Vue({
  el: '#app-27',
  data: {
    message: ""
  }
})

var app28 = new Vue({
  el: '#app-28',
  data: {
    message: ""
  }
})

var app29 = new Vue({
  el: '#app-29',
  data: {
    checkedNames: []
  }
})

var app30 = new Vue({
  el: '#app-30',
  data: {
    picked: ""
  }
})

var app31 = new Vue({
  el: '#app-31',
  data: {
    selected: ''
  }
})

var app32 = new Vue({
  el: '#app-32',
  data: {
    selected: []
  }
})

var app33 = new Vue({
  el: '#app-33',
  data: {
    selected: '',
    options: [{
        text: 'One',
        value: 'A'
      },
      {
        text: 'Two',
        value: 'B'
      },
      {
        text: 'Three',
        value: 'C'
      }
    ]
  }
})

var app34 = new Vue({
  el: '#app-34',
  data: {
    picked: '',
    toggle: null,
    selected: ''
  }
})

var app35 = new Vue({
  el: '#app-35',
  data: {
    picked: '',
    a: 'This is the dynamic value',
    toggle: null,
    selected: {
      number: ''
    }
  }
})
