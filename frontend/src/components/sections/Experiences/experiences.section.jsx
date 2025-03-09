import React from 'react'

function ExperiencesSection({ experiences }) {

    return (
        <div>
            {experiences.map((ex, key) =>
                <p key={key}>{ex.jobTitle}</p>)}
        </div>

    )
}

export default ExperiencesSection