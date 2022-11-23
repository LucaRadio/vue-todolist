const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoListItems: [

            ],
            newItem: {
                text: "",

            }

        }

    },
    methods: {
        addItem() {
            this.toDoListItems.push({
                text: text = this.newItem.text,
                done: false
            })
            this.newItem.text = ""
        },
        deleteListItem(i) {
            this.toDoListItems.splice(i, 1)

        },
        checkedItem(i) {
            if (this.toDoListItems[i].done) {
                this.toDoListItems[i].done = true
            } else {
                this.toDoListItems[i].done = false
            }
        }

    }
}).mount("#app")