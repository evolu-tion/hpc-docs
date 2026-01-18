import React from "react";
import styles from "./SOPHeader.module.css";

interface SOPHeaderProps {
  documentCode: string;
  title: string;
  version?: string;
  status: "Draft" | "In-review" | "Approved" | "Archived";
  effectiveDate: string;
  category: string;
  approvedBy: string;
  authors: string;
  lastUpdated?: string;
}

export default function SOPHeader({
  documentCode,
  title,
  version = "1.0",
  status,
  effectiveDate,
  category,
  approvedBy,
  authors,
  lastUpdated,
}: SOPHeaderProps): JSX.Element {
  const getStatusClass = () => {
    switch (status) {
      case "Approved":
        return styles.statusApproved;
      case "Draft":
        return styles.statusDraft;
      case "In-review":
        return styles.statusReview;
      case "Archived":
        return styles.statusArchived;
      default:
        return styles.statusDraft;
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className={styles.sopHeader}>
      <div className={styles.headerTop}>
        <div className={styles.headerLeft}>
          <span className={styles.documentCode}>{documentCode}</span>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.versionStatus}>
            <span className={styles.version}>v{version}</span>
            <span className={`${styles.status} ${getStatusClass()}`}>
              {status}
            </span>
          </div>
          <button
            className={styles.exportButton}
            onClick={handleExportPDF}
            title="Export to PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      <div className={styles.metadataBar}>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>EFFECTIVE DATE</span>
          <span className={styles.metadataValue}>{effectiveDate}</span>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>CATEGORY</span>
          <span className={styles.metadataValue}>{category}</span>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>APPROVED BY</span>
          <span className={styles.metadataValue}>{approvedBy}</span>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>AUTHORS</span>
          <span className={styles.metadataValue}>{authors}</span>
        </div>
        {lastUpdated && (
          <div className={styles.metadataItem}>
            <span className={styles.metadataLabel}>LAST UPDATED</span>
            <span className={styles.metadataValue}>{lastUpdated}</span>
          </div>
        )}
      </div>
    </div>
  );
}
