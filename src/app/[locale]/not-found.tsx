import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';

export default async function NotFoundPage() {
  return (
    <main className="container">
      <Card className="section">
        <div className="mx-auto max-w-screen-md space-y-4 text-center">
          <CardHeader>
            <CardTitle>
              <h1 className="text-6xl font-bold">404</h1>
              <p className="mt-4 text-2xl">Page not found</p>
            </CardTitle>
            <CardDescription className="text-lg">
              The page you are looking for does not exist.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link href="/">
                Go Home
                <ChevronRight className="ml-2 h-4 w-4 animate-bounce-horizontal" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
}
