const test = async (req, res) => {
  return res.status(200).json({ message: "Connected Succesfully!" });
};

module.exports = {
  test,
};
