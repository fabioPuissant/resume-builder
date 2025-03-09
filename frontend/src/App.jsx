import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import ExperiencesSection from './components/sections/Experiences/experiences.section';
import EductionSection from './components/sections/Education/eduction.section';
import SkillsSection from './components/sections/Skills/skills.section';
import SummarySection from './components/sections/Summary/summary.section';
import CertificationsSection from './components/sections/Certifications/certification.section';

function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    // Fetch from Node Express
    fetch('http://localhost:5001/api/resume')
      .then(res => res.json())
      .then(data => setResumeData(data))
      .catch(err => console.error('Error fetching resume data:', err));
  }, []);

  if (!resumeData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Loading resume...</p>
      </div>
    );
  }

  // Assume resumeData is an array with one object
  const [firstItem] = resumeData;
  const resume = firstItem.resume;
  const sections = resume.resumeSections;

  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>{sections.personalInfo.name}</h1>
        <p>
          {sections.personalInfo.location} | {sections.personalInfo.email} |{' '}
          {sections.personalInfo.phone}
        </p>
        <p>{sections.personalInfo.linkedin}</p>
      </header>

      {/* Summary */}
      <SummarySection summary={sections.summary} />
      {/* Work Experience */}
      <ExperiencesSection experiences={sections.workExperience} />
      {/* Education */}
      <EductionSection education={sections.education} />
      {/* Skills */}
      <SkillsSection skills={sections.skills} />

      {/* Certifications */}
      {sections.certifications ? <CertificationsSection certifications={sections.certifications} /> : <></>}


      {/* PDF Download */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <PDFDownloadLink
          document={<ResumePDF resume={resume} />}
          fileName="resume.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button className="pdf-download-btn">
                Preparing PDF...
              </button>
            ) : (
              <button className="pdf-download-btn">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
