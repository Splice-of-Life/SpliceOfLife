const router = require("express").Router();

router.use("/users", require("./users.cjs"));
router.use("/creatures", require("./creatures.cjs"));

module.exports = router;
