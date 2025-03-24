'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Determine if it's a Prisma error
  const isPrismaError =
    error.message?.includes('PrismaClientUnknownRequestError') ||
    error.message?.includes('ConnectorError');

  const errorMessage = isPrismaError
    ? "We're having trouble connecting to our database. This might be a temporary issue."
    : 'We encountered an unexpected error.';

  const errorDescription = isPrismaError
    ? 'Please try again in a few moments. If the problem persists, our team has been notified.'
    : "We're working to fix this issue. Please try again.";

  return (
    <main className="container">
      <Card className="section">
        <div className="mx-auto max-w-screen-md space-y-4 text-center">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl font-bold">{errorMessage}</h1>
            </CardTitle>
            <CardDescription className="text-lg">
              {errorDescription}
              {error.digest && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Error ID: {error.digest}
                </p>
              )}
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button onClick={() => reset()}>
              Try again
              <RefreshCw className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
}
