import React from "react";
import { Section } from "./Section";
import { Slider } from "./Slider";

export const Main = () => (
  <main>
    <div>Main</div>

    <Slider />

    <Section headerContent="Story" />
    <Section headerContent="Featured Mugs" />
    <Section headerContent="More Products" />
    <Section headerContent="Magazine" />
    <Section headerContent="Lifestyle Story" />
    <Section headerContent="Subscribe" />
  </main>
);
