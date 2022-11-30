const User = require("./userModel");
let { createUser } = require("./validations");
module.exports = {
  createUser:async (args, options) => {
    try {
      let { input } = args;
      let { name, email, password } = input;
      const errors = createUser(name, email, password);
      console.log(errors);
      if (errors.length !== 0) {
        let error = new Error("erros c");
        console.log({error});
        error.data = errors;
        error.statusCode = 422;
        throw error;
      }
      let user = new User({
        name,
        email,
        password,
      });
      user.save();

      return user;
    } catch (err) {
        throw err
    }
  },

  getUser: async(args, options) => {
    try {
      let { input } = args;
      let { id } = input;
      let user;
    if(id != null || id != 0 || id != undefined) {
        user = await User.find({id: id});
    } else {
        user = await User.find();
    }
      return user;
    } catch (err) {
        throw err
    }
  },
  updateUser: async(args, options) => {
    try {
      let { input } = args;
      let { id,name, email, password } = input;
      const errors = createUser(name, email, password);
      console.log(errors);
      if (errors.length !== 0) {
        let error = new Error("erros c");
        console.log({error});
        error.data = errors;
        error.statusCode = 422;
        throw error;
      }
      await User.findByIdAndUpdate({_id:id},{
        name,email,password
      })
     let user = await User.findOne({id: id});

      return user;
    } catch (err) {
        throw err
    }
  },
  deleteUser: async(args, options) => {
    try {
      let { input } = args;
      let { id } = input;
console.log(args);
      let user = await User.findOne({id});
      console.log({user});
      if(user) {
        await User.findByIdAndDelete({id:id});
      } else {
        return "user not exist";
      }

 
      return "user deleted";
    } catch (err) {
        throw err
    }
  },
};
