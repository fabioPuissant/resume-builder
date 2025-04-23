import React from 'react'

function EductionSection({education}) {
  return (
    <section className="resume-section">
    <h2>Education</h2>
    {education?.map((edu, idx) => (
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
  )
}

export default EductionSection