export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ nome: "vini" });
  } else {
    res.status(200).json({ nome: "v" });
  }
};
