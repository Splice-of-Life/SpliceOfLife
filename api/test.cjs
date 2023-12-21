const router = require("express").Router();
const { requireUser } = require('./utils.cjs');

router.get("/whoami", requireUser, async (req, res, next) => {
  const { user } = req;
  try {
    res.send(`You are "${user.username}!`)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
