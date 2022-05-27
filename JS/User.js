class User extends Account {
    constructor(id, dataUser){
        super(id);
        this.dataUser = dataUser;
    }
    printDataUser() {
        console.table(this.dataUser);
    }
}