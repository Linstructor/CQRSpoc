var app = new Vue({
    el: '#app',
    data: {
        entries: []
    },
    methods: {
        getEntries: function() {
            console.log(this);
        }
    },
    created: function() {
        console.log(this.getEntries());
    }
});