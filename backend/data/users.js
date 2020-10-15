import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Harsh Kalani',
    email: 'admin',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ashwin Mandoth',
    email: 'ashwin@mandoth.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Harish Gandhi',
    email: 'harish@gandhi.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Naman Geleda',
    email: 'naman@geleda.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rithik Lodha',
    email: 'rithik@lodha.com',
    password: 'xxxx',
  },
];

export default users;
