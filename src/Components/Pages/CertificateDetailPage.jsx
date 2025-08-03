import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './CertificateDetailPage.css';
import CertImage from "../../assets/client-EC25DE1AE4/CID-EC25DE1AE4.PNG";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const CertificateDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const certificateId = location.state?.certificateId;
    const [showImage, setShowImage] = useState(false);
    const certificateRef = useRef();
    const overallScore = 83.45;
    const validCertificateId = "EC25DE1AE4";

    useEffect(() => {
        if (!certificateId || certificateId !== validCertificateId) {
            navigate("/");
        }
    }, [certificateId, navigate]);

    // Redirect to verify page if user leaves and comes back to tab
    useEffect(() => {
        const onFocus = () => {
            if (document.hidden) return;
            if (!certificateId || certificateId !== validCertificateId) {
                navigate("/");
            }
        };
        window.addEventListener("focus", onFocus);
        return () => window.removeEventListener("focus", onFocus);
    }, [certificateId, navigate]);

    const handleDownload = async (type) => {
        if (!certificateRef.current) return;
        const canvas = await html2canvas(certificateRef.current);
        const imageData = canvas.toDataURL("image/png");

        if (type === "png") {
            const link = document.createElement("a");
            link.href = imageData;
            link.download = "certificate.png";
            link.click();
        } else if (type === "pdf") {
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imageData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("certificate.pdf");
        }
    };

    const barData = {
        labels: ["React", "Node.js", "Express", "MongoDB"],
        datasets: [
            {
                label: "Subject Scores",
                data: [75, 70, 70, 70],
                backgroundColor: "#3b82f6"
            }
        ]
    };

    const pieData = {
        labels: ["Achieved", "Remaining"],
        datasets: [
            {
                data: [overallScore, 100 - overallScore],
                backgroundColor: ["#10b981", "#e5e7eb"],
                borderWidth: 0
            }
        ]
    };

    return (
        <div className="detail-container">
            <div className="detail-box" ref={certificateRef}>
                <h2 className="detail-title">🎉 Certification Successfully Verified!</h2>
                <p className="detail-subtitle">Certificate ID: <strong>{certificateId}</strong></p>

                <div className="score-section">
                    <h3 className="score-title">Overall Score</h3>
                    <div className="score-value">{overallScore} / 100</div>
                    <div className="chart-wrapper">
                        <Pie data={pieData} />
                    </div>
                </div>

                <div className="score-section">
                    <h3 className="score-title">Subject-wise Score Analysis</h3>
                    <div className="chart-wrapper">
                        <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                    </div>
                </div>

                {showImage && (
                    <div className="certificate-preview">
                        <img
                            src={CertImage}
                            alt="Certificate Preview"
                            className="certificate-img"
                        />
                    </div>
                )}

                <div className="button-group">
                    <button className="view-btn" onClick={() => setShowImage(!showImage)}>
                        {showImage ? "Hide Certificate" : "View Certificate"}
                    </button>
                    <button className="download-btn" onClick={() => handleDownload("pdf")}>
                        Download as PDF
                    </button>
                    <button className="download-btn" onClick={() => handleDownload("png")}>
                        Download as PNG
                    </button>
                    <button className="view-btn" onClick={() => navigate("/")}>
                        Go to Certificate Verify Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateDetailPage;
