const user1 = new User("#1U", new Account("Paula Cobos", "pau@gmail.com", "+5711122233444", "1234567890"));
user1.printDataUser()

const user2 = new User("#2U", new Account("Nicolas Izquierdo", "nico@gmail.com", "+572223334455", "0987654321"));
user2.printDataUser()

const driver1 = new Driver("#1D", new UberX("APO123", "Rafael Bustos", "Chevrolet", "Spark"));
driver1.printDataDriver();