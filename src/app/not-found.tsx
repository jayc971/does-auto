import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Don&apos;t worry, even the best data sometimes gets lost in the internet. Let&apos;s get you back on track.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <footer className="text-sm text-muted-foreground mt-16 text-center">
        If you think it&apos;s an error, please{' '}
        <a
          href="mailto:support@doesauto.com"
          className="text-primary hover:underline"
        >
          contact our support team
        </a>
        .
      </footer>
    </div>
  );
}

export default NotFoundPage;