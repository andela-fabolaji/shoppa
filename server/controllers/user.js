class User {
  static create(req, res) {
    res.status(201).json({
      name: 'John Doe'
    });
  }

  static getAll(req, res) {
    res.status(200).json({
      data: [
        {
          name: 'Daniella Winter'
        },
        {
          name: 'Femi Alabi'
        },
        {
          name: 'Chisom Amaru'
        }
      ]
    });
  }

  static getOne(req, res) {
    console.log(req.params);
    res.status(200 ).json({
      data: {
        name: 'John Doe'
      }
    });
  }
}

module.exports = User;
