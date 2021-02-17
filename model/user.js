var mongoose = require("mongoose");
var dataTables = require('mongoose-datatables');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim:true
    },
    password: {
      type: String,
      required: true
    }
  },
  { collection: "User" }
);

userSchema.plugin(dataTables, {
  totalKey: 'recordsTotal',
  dataKey: 'data'
});

module.exports = mongoose.model("User", userSchema);

