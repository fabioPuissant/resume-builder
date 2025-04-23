import React from 'react'

function CertificationsSection({ certifications }) {
    return (
        <section className="resume-section">
            <h2>Certifications</h2>
            {certifications?.map((cert, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem' }}>
                    <p style={{ fontWeight: 'bold' }}>{cert.name}</p>
                    <p style={{ fontSize: '0.85rem', color: '#777' }}>
                        {cert.issuer} | {cert.dateEarned}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default CertificationsSection