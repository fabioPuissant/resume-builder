import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contactLine: {
    fontSize: 10,
    color: '#555',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    paddingBottom: 2,
  },
  text: {
    marginBottom: 2,
    lineHeight: 1.3,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  smallText: {
    fontSize: 10,
    color: '#444',
  },
  listItem: {
    marginLeft: 12,
    textIndent: -6,
  },
});

function ResumePDF({ resume }) {
  const s = resume.resumeSections;

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {/* Header */}
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.name}>{s.personalInfo.name}</Text>
          <Text style={pdfStyles.contactLine}>
            {s.personalInfo.location} | {s.personalInfo.email} | {s.personalInfo.phone}
          </Text>
          <Text style={pdfStyles.contactLine}>
            {s.personalInfo.linkedin}
          </Text>
        </View>

        {/* Summary */}
        <Text style={pdfStyles.sectionHeader}>Summary</Text>
        <Text style={pdfStyles.text}>{s.summary}</Text>

        {/* Work Experience */}
        <Text style={pdfStyles.sectionHeader}>Work Experience</Text>
        {s.workExperience?.map((job, idx) => (
          <View key={idx} style={{ marginBottom: 6 }}>
            <Text style={pdfStyles.jobTitle}>
              {job.jobTitle}, {job.company}
            </Text>
            <Text style={pdfStyles.smallText}>
              {job.location} | {job.startDate} - {job.endDate}
            </Text>
            {job.achievements?.map((ach, i) => (
              <Text key={i} style={[pdfStyles.text, pdfStyles.listItem]}>
                • {ach}
              </Text>
            ))}
          </View>
        ))}

        {/* Education */}
        <Text style={pdfStyles.sectionHeader}>Education</Text>
        {s.education?.map((edu, idx) => (
          <View key={idx} style={{ marginBottom: 6 }}>
            <Text style={pdfStyles.jobTitle}>
              {edu.degree} - {edu.institution}
            </Text>
            <Text style={pdfStyles.smallText}>
              {edu.graduationDate}
            </Text>
            {edu.relevantCoursework?.map((course, i) => (
              <Text key={i} style={[pdfStyles.text, pdfStyles.listItem]}>
                • {course}
              </Text>
            ))}
          </View>
        ))}

        {/* Skills */}
        <Text style={pdfStyles.sectionHeader}>Skills</Text>
        <Text style={pdfStyles.text}>
          <Text style={{ fontWeight: 'bold' }}>Technical: </Text>
          {s.skills.technical.join(', ')}
        </Text>
        <Text style={pdfStyles.text}>
          <Text style={{ fontWeight: 'bold' }}>Professional: </Text>
          {s.skills.professional.join(', ')}
        </Text>

        {/* Certifications */}
        <Text style={pdfStyles.sectionHeader}>Certifications</Text>
        {s.certifications?.map((cert, idx) => (
          <View key={idx} style={{ marginBottom: 4 }}>
            <Text style={pdfStyles.text}>{cert.name}</Text>
            <Text style={pdfStyles.smallText}>
              {cert.issuer} | {cert.dateEarned}
            </Text>
          </View>
        ))}

        {/* Additional sections as needed (Projects, Achievements, etc.) */}
      </Page>
    </Document>
  );
}

export default ResumePDF;
