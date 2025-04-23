import React from 'react'

function ExperiencesSection({ experiences }) {

    return (
        <section className="resume-section">
        <h2>Work Experience</h2>
        {experiences?.map((job, idx) => (
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

    )
}

export default ExperiencesSection