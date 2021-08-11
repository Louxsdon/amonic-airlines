import nc from "next-connect";

const Hello = nc()
  .get((req, res) => {
    res.send("Hello World with next-connect");
  })
  .delete((req, res) => {
    console.log(req.body);
    res.json({ data: req.body });
  });

export default Hello;
