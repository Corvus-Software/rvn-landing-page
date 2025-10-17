<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-xl">
      <div>
        <h2 class="text-center text-3xl font-bold text-white">
          RVN Access
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Please enter the password to continue
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            @input="error = ''"
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading">Signing in...</span>
            <span v-else>Sign in</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleLogin = async () => {
  if (!password.value) {
    error.value = 'Please enter a password';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: password.value }
    });

    // Success - redirect to home
    await navigateTo('/');
  } catch (err: any) {
    error.value = 'Incorrect password';
    password.value = '';
  } finally {
    loading.value = false;
  }
};

// SEO - prevent indexing of login page
useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>
