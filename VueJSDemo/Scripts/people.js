new Vue({
    el: '#app',
    data: {
        people: [],
        modalPerson: {},
        isAddMode: false,
        sortAsc: true,
        allToDelete: []
    },
    mounted: function () {
        this.getPeople();
    },
    methods: {
        getPeople: function () {
            $.get('/home/getpeople', people => {
                this.people = people;
            });
        },

        addPerson: function () {
            this.isAddMode = true;
            this.modalPerson = {};
            $('.modal').modal();
        },

        savePerson: function () {
            $.post('/home/addperson', this.modalPerson, () => {
                this.getPeople();
                $('.modal').modal('hide');
            });
        },

        editPerson: function (person) {
            this.isAddMode = false;
            console.log(person);
            this.modalPerson = person;
            $('.modal').modal();
        },

        updatePerson: function() {
            $.post('/home/update', this.modalPerson, () => {
                this.getPeople();
                $('.modal').modal('hide');
            });
        },

        deletePerson: function(person) {
            $.post('/home/delete', {personId: person.Id}, () => {
                this.getPeople();
            });
        },

        sortPeople: function() {
            this.people.sort((a, b) => {
                if (!this.sortAsc) {
                    var temp = a;
                    a = b;
                    b = temp;
                }

                return a.Age - b.Age;
            });

            this.sortAsc = !this.sortAsc;
        },

        deleteAll: function() {
            $.post('/home/deleteall', { PersonIds: this.allToDelete }, () => {
                this.getPeople();
            });
        }
    }
});

