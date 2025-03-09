import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import ExperiencesSection from './components/sections/Experiences/experiences.section';

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
      <section className="resume-section">
        <h2>Summary</h2>
        <p>{sections.summary}</p>
      </section>

      {/* Work Experience */}
      <section className="resume-section">
        <h2>Work Experience</h2>
        <ExperiencesSection experiences={sections.workExperience} />
        {sections.workExperience?.map((job, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>
              {job.jobTitle}, {job.company}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#777' }}>
              {job.location} | {job.startDate} - {job.endDate}
            </p>
            <ul>
              {job.achievements?.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        {sections.education?.map((edu, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>{edu.degree}</h3>
            <p style={{ fontSize: '0.85rem', color: '#777' }}>
              {edu.institution} ({edu.graduationDate})
            </p>
            <ul>
              {edu.relevantCoursework?.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <h3 style={{ fontWeight: 'bold' }}>Technical:</h3>
        <p>{sections.skills.technical.join(', ')}</p>
        <h3 style={{ fontWeight: 'bold' }}>Professional:</h3>
        <p>{sections.skills.professional.join(', ')}</p>
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <h2>Certifications</h2>
        {sections.certifications?.map((cert, idx) => (
          <div key={idx} style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontWeight: 'bold' }}>{cert.name}</p>
            <p style={{ fontSize: '0.85rem', color: '#777' }}>
              {cert.issuer} | {cert.dateEarned}
            </p>
          </div>
        ))}
      </section>

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
