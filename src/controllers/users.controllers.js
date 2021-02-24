const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async(req, res) => {
  const users = await User.find();
  console.log(users)
  res.json(users);
}

userCtrl.createUser = async(req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  console.log(newUser)
  res.json({message: 'Note Saved'});
}
userCtrl.deleteUser = async(req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({message: "User Deleted"})
}

module.exports = userCtrl;