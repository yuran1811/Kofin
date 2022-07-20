import { FC } from "react";

interface SectionProps {
  headerContent?: string;
}

export const Section: FC<SectionProps> = (props) => {
  const { headerContent } = props;

  return (
    <section>
      {!!headerContent && <header>{headerContent}</header>}
      <div></div>
    </section>
  );
};
