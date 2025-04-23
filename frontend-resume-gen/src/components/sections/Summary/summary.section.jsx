import React from 'react'

function SummarySection({ summary }) {
    return (
        <section className="resume-section">
            <h2>Summary</h2>
            <p>{summary}</p>
        </section>
    )
}

export default SummarySection