module.exports = mongoose => {

  var schema = mongoose.Schema(
    {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      email: String,
      agegroup: String,
      dob: Date
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Athlete = mongoose.model("athlete", schema);
  return Athlete;
};
