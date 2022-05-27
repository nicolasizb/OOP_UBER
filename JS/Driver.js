class Driver extends Account {
    constructor(id, dataDriver){
        super(id);
        this.dataDriver = dataDriver;
    }
    printDataDriver(){
        console.table(this.dataDriver);
    }
}