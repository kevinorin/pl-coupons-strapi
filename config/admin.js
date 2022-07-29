module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f104317d00f75b8aa2e036e434ff5101'),
  },
});
