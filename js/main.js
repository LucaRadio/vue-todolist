const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoListItems: [

            ],
            newItem: {
                text: "",

            },

        }

    },
    methods: {
        addItem() {
            if (this.newItem.text === "") {
                alert("Inserisci qualcosa")
            } else {
                this.toDoListItems.push({
                    text: text = this.newItem.text,
                    done: false
                })
                this.newItem.text = ""
            }


        },
        deleteListItem(i) {
            const confrimation = confirm("Sei sicuro di volerlo cancellare?")
            if (confrimation) {
                this.toDoListItems.splice(i, 1)
            }

        },
        checkedItem(i) {
            if (this.toDoListItems[i].done) {
                this.toDoListItems[i].done = true
            } else {
                this.toDoListItems[i].done = false
            }
        },
        count() {
            const count = this.toDoListItems.length
            return count
        },
        clearAll() {
            const confrimation = confirm("Sei sicuro di volerlo cancellare?")
            if (confrimation) {
                this.toDoListItems.splice(this.toDoListItems)
            }
        }

    }
}).mount("#app")