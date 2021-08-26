import UberX from './cars/UberX.js';
import User from './user/User.js';
import Driver from './driver/Driver.js';

const user_1 = new User('Ben von Potobsky', '41033183', 'bvonpotobsky@gmail.com', 'argy123');
user_1.printDataUser();

const driver_1 = new Driver('Lio Messi', '38493922', 'messi@gmail.com', 'jefe123', '123ASD');
driver_1.printDataDriver();

console.clear();

const uberX_1 = new UberX(driver_1.carLicense, driver_1.name, driver_1.document, driver_1.email, driver_1.password);
uberX_1.printDataUberX();