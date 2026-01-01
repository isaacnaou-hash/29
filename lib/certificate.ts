import { jsPDF } from 'jspdf';

export interface CertificateData {
    name: string;
    score: number;
    totalQuestions: number;
    proficiencyLevel: string;
    certificateId: string;
    completedAt: Date;
}

export function generateCertificate(data: CertificateData): jsPDF {
    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
    });

    // Background
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 297, 210, 'F');

    // Border
    doc.setDrawColor(41, 98, 255);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Inner border
    doc.setDrawColor(100, 149, 237);
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 267, 180);

    // Title
    doc.setFontSize(40);
    doc.setTextColor(41, 98, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATE', 148.5, 50, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('of English Proficiency', 148.5, 60, { align: 'center' });

    // Horizontal line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(50, 70, 247, 70);

    // This certifies that
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text('This certifies that', 148.5, 85, { align: 'center' });

    // Name
    doc.setFontSize(28);
    doc.setTextColor(41, 98, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(data.name, 148.5, 100, { align: 'center' });

    // Achievement text
    doc.setFontSize(13);
    doc.setTextColor(80, 80, 80);
    doc.setFont('helvetica', 'normal');
    doc.text('has successfully completed the English Proficiency Test', 148.5, 115, { align: 'center' });

    // Score
    const percentage = Math.round((data.score / data.totalQuestions) * 100);
    doc.setFontSize(16);
    doc.setTextColor(41, 98, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(`Score: ${data.score}/${data.totalQuestions} (${percentage}%)`, 148.5, 130, { align: 'center' });

    // Proficiency Level
    doc.setFontSize(18);
    doc.setTextColor(34, 197, 94);
    doc.text(`Proficiency Level: ${data.proficiencyLevel}`, 148.5, 142, { align: 'center' });

    // Date
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    const dateStr = new Date(data.completedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    doc.text(`Date: ${dateStr}`, 148.5, 160, { align: 'center' });

    // Certificate ID
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Certificate ID: ${data.certificateId}`, 148.5, 170, { align: 'center' });

    // Signature line
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.5);
    doc.line(120, 185, 177, 185);

    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text('Authorized Signature', 148.5, 192, { align: 'center' });

    return doc;
}

export function downloadCertificate(data: CertificateData): void {
    const doc = generateCertificate(data);
    doc.save(`Certificate-${data.certificateId}.pdf`);
}
