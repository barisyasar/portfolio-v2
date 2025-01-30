import { ServicesGridList } from '@/components/ServicesGridList';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

function ServicesGrid() {
  return (
    <Card className="section">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <CardHeader className="my-3 xl:mt-0">
          <CardTitle>
            <h1 className="text-2xl">Services Grid</h1>
          </CardTitle>
        </CardHeader>
        <ServicesGridList />
      </div>
    </Card>
  );
}

export default ServicesGrid;
