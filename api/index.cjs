const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/creatures", require("./creatures"));

module.exports = router;
