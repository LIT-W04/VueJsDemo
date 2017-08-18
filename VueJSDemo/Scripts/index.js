new Vue({
    el: '#app',
    data: {
        message: '',
        numbers: [],
        names: [],
        nameToAdd: ''
    },

    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },

        addNumber: function() {
            this.numbers.push(Math.floor((Math.random() * 10000) + 1));
        },

        reverseNumbers: function() {
            this.numbers = this.numbers.reverse();
        },

        addName: function() {
            this.names.push(this.nameToAdd);
            this.nameToAdd = '';
        }
    }
});