import {
  ApolloIcon,
  AwsIcon,
  ExpressIcon,
  JavaScriptIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgreIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  SwrIcon,
  TypeScriptIcon,
} from "@/components/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTranslations } from "next-intl/server";

async function TechStack() {
  const t = await getTranslations("AboutPage.techStack");

  return (
    <Card className="section">
      <div className="max-w-screen-lg mx-auto space-y-5">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">{t("all")}</TabsTrigger>
              <TabsTrigger value="frontEnd">{t("frontEnd")}</TabsTrigger>
              <TabsTrigger value="backEnd">{t("backEnd")}</TabsTrigger>
            </TabsList>
            <TabsContent
              value="all"
              className="grid grid-cols-2 gap-2 [&_svg]:size-12 [&_svg]:mx-auto 2xs:grid-cols-3 2xs:[&>div]:p-3 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
            >
              <Card className="card--5">
                <CardContent>
                  <NextIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <ReactIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <ReduxIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <TypeScriptIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <JavaScriptIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <ExpressIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <ApolloIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <AwsIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <MongoIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <PostgreIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <NodeIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <SwrIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="card--5">
                <CardContent>
                  <ReactQueryIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    React
                  </CardTitle>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent
              value="frontEnd"
              className="grid grid-cols-2 gap-2 [&_svg]:size-12 [&_svg]:mx-auto"
            >
              <Card className="card--5">
                <CardContent>
                  <NodeIcon />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base text-center font-light">
                    Node
                  </CardTitle>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </Card>
  );
}

export default TechStack;
