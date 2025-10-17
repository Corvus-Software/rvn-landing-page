export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { password } = body;

  // Server-side password (you can also use environment variables)
  const SITE_PASSWORD = 'rvn2025';

  if (password === SITE_PASSWORD) {
    // Set a secure cookie (remove httpOnly so client can read it)
    setCookie(event, 'rvn_auth', 'authenticated', {
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return { success: true };
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid password'
    });
  }
});
