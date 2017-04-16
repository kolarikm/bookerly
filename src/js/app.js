var app = new Vue({
    el: '#app',
    data: {
        message: 'Your personal librarian'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        submessage: 'Here to curate your reading experience'
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        books: [
            {title: 'Fool Moon'},
            {title: 'Grave Peril'},
            {title: 'Oathbringer'}
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'The great blue planet'
    },
    methods: {
        reverse: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
