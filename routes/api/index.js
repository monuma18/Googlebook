const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googlebooks");

// Book routes
router.use("/books", bookRoutes);
// Book routes
router.use("/googlebooks", googleRoutes);

module.exports = router;
