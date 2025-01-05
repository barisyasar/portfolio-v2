"use client";

import { ALL_TECHS } from "@/constants/techStack";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "./ui/blur-fade";

function TechStackTabList() {
  const t = useTranslations("AboutPage.techStack");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const categories = [
    { id: "all", label: t("all") },
    { id: "frontend", label: t("frontEnd") },
    { id: "backend", label: t("backEnd") },
    { id: "other", label: t("other") },
  ];

  const filteredTechs = ALL_TECHS.filter((tech) => {
    if (activeCategory === "all") return true;
    return tech.categories.includes(activeCategory);
  });

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Filter Buttons */}
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="inline-flex gap-2 p-1 rounded-lg card--5 border whitespace-nowrap">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <button
                onClick={() => {
                  if (isFirstLoad) setIsFirstLoad(false);
                  setActiveCategory(category.id);
                  const button = document.querySelector(
                    `[data-category="${category.id}"]`
                  );
                  button?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }}
                data-category={category.id}
                className={cn(
                  "relative z-20 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "hover:text-primary"
                )}
              >
                {category.label}
              </button>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 z-10 bg-primary rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div>
        <div className="grid grid-cols-2 gap-2 [&_svg]:size-12 [&_svg]:mx-auto 2xs:grid-cols-3 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 ">
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech, i) =>
              isFirstLoad ? (
                <BlurFade direction="up" delay={i * 0.1} key={tech.name}>
                  <Card className="card--5 2xs:p-3">
                    <CardContent>
                      <tech.icon />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-base text-center font-light">
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </BlurFade>
              ) : (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                >
                  <Card className="card--5 2xs:p-3">
                    <CardContent>
                      <tech.icon />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-base text-center font-light">
                        {tech.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default TechStackTabList;
