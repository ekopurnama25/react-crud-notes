const db = require("../models");
const Notes = db.notes;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const note = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Notes.create(note)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Notes",
      });
    });
};

exports.findAll = (req, res) => {
  Notes.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Notes",
      });
    });
};

exports.findAllAnother = async (req, res) => {
  try {
    const data = await Notes.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving Notes",
    });
  }
};
exports.findOne = (req, res) => {
  const { id } = req.params;
  Notes.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Notes with id=${id}`,
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Notes.update(req.body, {
    where: { id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Note was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Note with id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Notes.destroy({
    where: { id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Note was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Note with id=${id}`,
      });
    }
  });
};
