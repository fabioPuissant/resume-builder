import React from 'react'

function SkillsSection({ skills }) {
    return (
        <section className="resume-section">
            <h2>Skills</h2>
            <h3 style={{ fontWeight: 'bold' }}>Technical:</h3>
            <p>{skills.technical.join(', ')}</p>
            <h3 style={{ fontWeight: 'bold' }}>Professional:</h3>
            <p>{skills.professional.join(', ')}</p>
        </section>
    )
}

export default SkillsSection