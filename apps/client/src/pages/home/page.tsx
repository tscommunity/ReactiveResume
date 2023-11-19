import { t } from "@lingui/macro";
import { Helmet } from "react-helmet-async";

import { ContributorsSection } from "./sections/contributors";
import { FAQSection } from "./sections/faq";
import { FeaturesSection } from "./sections/features";
import { HeroSection } from "./sections/hero";
import { LogoCloudSection } from "./sections/logo-cloud";
import { StatisticsSection } from "./sections/statistics";
import { SupportSection } from "./sections/support";
import { TemplatesSection } from "./sections/templates";
import { TestimonialsSection } from "./sections/testimonials";

export const HomePage = () => (
  <main className="relative isolate bg-background">
    <Helmet>
      <title>
        {t`Reactive Resume`} - {t`A free and open-source resume builder`}
      </title>
    </Helmet>

    <HeroSection />
    <LogoCloudSection />
    <StatisticsSection />
    <FeaturesSection />
    <TemplatesSection />
    <TestimonialsSection />
    <SupportSection />
    <FAQSection />
    <ContributorsSection />
  </main>
);