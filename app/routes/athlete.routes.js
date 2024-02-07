module.exports = app => {
  const athletes = require("../controllers/athlete.controller.js");

  var router = require("express").Router();

  // Create a new Athelete
  router.post("/", athletes.create);

  // Retrieve all athletes
  router.get("/", athletes.findAll);

  // Retrieve all published athletes
  // router.get("/published", athletes.findAllPublished);

  // Retrieve a single Athelete with id
  router.get("/:id", athletes.findOne);

  // Update a Athelete with id
  router.put("/:id", athletes.update);

  // Delete a Athlete with id
  router.delete("/:id", athletes.delete);

  // Delete All
  router.delete("/", athletes.deleteAll);

  app.use("/api/athletes", router);
};
