'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Create Account</h1>
        <SignUp 
          appearance={{
            elements: {
              card: 'shadow-none p-0',
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
            }
          }}
          afterSignUpUrl="/dashboard"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
}
