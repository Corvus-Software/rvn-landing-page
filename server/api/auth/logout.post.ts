export default defineEventHandler(async (event) => {
  // Clear the authentication cookie
  setCookie(event, 'rvn_auth', '', {
    secure: true,
    sameSite: 'strict',
    maxAge: 0 // Expire immediately
  });

  return { success: true };
});

