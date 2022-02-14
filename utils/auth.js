/* AUTHGUARD (restrict to authenticated users) ROUTES WHERE USERS PUT IN INFORMATION */
// Check for existance of a session property
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // redirect to the login if req.session.user_id doesnt exist
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
