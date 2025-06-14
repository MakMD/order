import React from "react";
import { useTranslation } from "react-i18next";
import { caseStudies } from "../../data/case-studies-data";
import Section from "../../components/layout/Section";
import CaseStudyCard from "../../components/case-studies/CaseStudyCard";
import styles from "./CaseStudiesPage.module.css";

const CaseStudiesPage = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t("case_studies_title")}
      subtitle={t("case_studies_subtitle")}
      variant="subtle"
    >
      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} caseStudy={study} />
        ))}
      </div>
    </Section>
  );
};

export default CaseStudiesPage;
