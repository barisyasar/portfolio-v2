import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { ServiceId } from './OtherServices';

export interface OtherServiceCardProps {
  title: string;
  description: string;
  href: any;
  id: ServiceId;
}

function OtherServiceCard({
  title,
  description,
  href,
  id,
}: OtherServiceCardProps) {
  return (
    <Link href={href} prefetch={false}>
      <Card className="flex h-full flex-col bg-card" id={id}>
        <CardHeader>
          <CardTitle className="flex text-xl font-bold">
            <h3 className="me-4 flex-1 text-lg">{title}</h3>
            <Button className="float-right size-6 min-w-6 rounded-full p-0">
              <ChevronRight />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-2 flex-1 space-y-2 text-sm text-muted-foreground">
          {description}
        </CardContent>
      </Card>
    </Link>
  );
}

export default OtherServiceCard;
