// check if the user is an admin or not
module.exports = (req, res, next) => {
    if (req.user.role !== "admin" || req.user === undefined) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }
    next();
  };
  
  // admin role is checked
  // exports.check = (role) => {
  //   if (req.user.role !== role || req.user === undefined) {
  //     return res.status(403).json({
  //       message: "Not authorized",
  //     });
  //   }
  // };