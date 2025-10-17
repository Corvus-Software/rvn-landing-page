export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware on server side
  if (process.server) return;

  // Check if user is authenticated via cookie
  const cookie = useCookie('rvn_auth', {
    default: () => null,
    secure: true,
    sameSite: 'strict'
  });

  const isAuthenticated = cookie.value === 'authenticated';

  // Allow access to login page
  if (to.path === '/login') {
    // If already authenticated, redirect to home
    if (isAuthenticated) {
      return navigateTo('/');
    }
    return;
  }

  // Require authentication for all other pages
  if (!isAuthenticated) {
    return navigateTo('/login');
  }
});
