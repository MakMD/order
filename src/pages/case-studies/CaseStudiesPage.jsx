import React from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { caseStudies } from "../../data/case-studies-data.js";
import Section from "../../components/layout/Section";
import CaseStudyCard from "../../components/case-studies/CaseStudyCard";
import styles from "./CaseStudiesPage.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CaseStudiesPage = () => {
  const { t } = useTranslation();
  const [gridRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <Section
      title={t("case_studies_title")}
      subtitle={t("case_studies_subtitle")}
      variant="subtle"
    >
      <div ref={gridRef} className={styles.grid}>
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={clsx("fade-in-section", { "is-visible": isVisible })}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CaseStudyCard caseStudy={study} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudiesPage;
