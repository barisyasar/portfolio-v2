import OrbitingCircleSkills from "../OrbitingCircleSkills";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function Recap() {
  return (
    <Card
      className="section section-height scroll-mt-2 lg:scroll-mt-4"
      id="recap"
    >
      <div className="max-w-screen-md">
        <CardHeader>
          <CardTitle>
            <h2 className="xs:text-3xl lg:text-4xl">A Quick Recap</h2>
          </CardTitle>
          <CardDescription className="xs:text-lg lg:text-xl">
            With 4 years of software experience and over 2 years of professional
            work experience, I am a <strong>full-stack developer</strong>. I
            have professional-level expertise in <strong>JavaScript</strong> and
            {/* */} <strong>TypeScript</strong>. Currently, I am developing my
            projects using <strong>Next</strong> and <strong>Node</strong>.
          </CardDescription>
        </CardHeader>
        <OrbitingCircleSkills />
      </div>
    </Card>
  );
}

export default Recap;
