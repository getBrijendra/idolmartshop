import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@idolmart.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user 1',
    email: 'user1@idolmart.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user 2',
    email: 'user2@eidolmart.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
