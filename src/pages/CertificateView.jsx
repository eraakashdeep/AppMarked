import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaCheckCircle } from 'react-icons/fa';
import './CertificateView.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const candidateData = {
  "A0N31P7CENF11H9G": {
    name: 'ROSHNI RANI PRUSTY',
    scoreData: [
      { domain: 'Cloud Concepts', score: 85, feedback: 'Good' },
      { domain: 'Security and Compliance', score: 78, feedback: 'Good' },
      { domain: 'Technology', score: 90, feedback: 'Excellent' },
      { domain: 'Billing and Pricing', score: 88, feedback: 'Good' },
    ],
  },
  // Add more candidate data as needed
};

const CertificateView = () => {
  const { id } = useParams();
  const candidate = candidateData[id] || {};
  const [image, setImage] = useState(null);

  // Scorecard data setup
  const { scoreData, name } = candidate;
  const resultSummary = {
    totalScore: scoreData?.reduce((acc, item) => acc + item.score, 0),
    averageScore: scoreData ? scoreData.reduce((acc, item) => acc + item.score, 0) / scoreData.length : 0,
    result: scoreData && scoreData.reduce((acc, item) => acc + item.score, 0) >= 300 ? 'Pass' : 'Fail',
  };

  // Chart Data
  const chartData = {
    labels: scoreData ? scoreData.map(item => item.domain) : [],
    datasets: [
      {
        label: 'Scores',
        data: scoreData ? scoreData.map(item => item.score) : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Include Candidate Info
    doc.text(`AWS Cloud Practitioner Certificate`, 20, 20);
    doc.text(`Name: ${name}`, 20, 30);
    doc.text(`ID: ${id}`, 20, 40);
    doc.text(`Total Score: ${resultSummary.totalScore}`, 20, 50);
    doc.text(`Average Score: ${resultSummary.averageScore.toFixed(2)}`, 20, 60);
    doc.text(`Result: ${resultSummary.result}`, 20, 70);

    // Add Image
    if (image) {
      const imgData = image.split(',')[1]; // Get base64 data from image
      doc.addImage(imgData, 'JPEG', 20, 80, 180, 90); // Add image to PDF
    }

    doc.save('AWS_Certificate.pdf');
  };

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set image state
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  return (
    <div className="certificate-container">
      <div className="certificate-section">
        <h2>AWS Cloud Practitioner Certificate</h2>
        <p>Candidate: <span style={{fontWeight:"bold"}}>{name}</span></p>
        <p>ID: <span style={{fontWeight:"bold"}}>{id}</span></p>
        {/* <input type="file" accept="image/*" onChange={handleImageChange} />
        
        {image && (
          <div className="image-preview">
            <h4>Uploaded Image:</h4>
            <img src={image} alt="Candidate" className="preview-image" />
          </div>
        )} */}
        <button disabled onClick={downloadPDF} className="download-btn">Download PDF</button>
      </div>

      <div className="scorecard-section">
        <h3>Scorecard</h3>
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Score</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {scoreData && scoreData.map((item, index) => (
              <tr key={index}>
                <td>{item.domain}</td>
                <td>{item.score}</td>
                <td>
                  {item.feedback === 'Good' || item.feedback === 'Excellent' ? (
                    <span className="feedback">
                      {item.feedback} <FaCheckCircle style={{ color: 'green', marginLeft: '5px' }} />
                    </span>
                  ) : item.feedback}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Score: {resultSummary.totalScore}</p>
        <p>Average Score: {resultSummary.averageScore.toFixed(2)}</p>
        <p>Result: {resultSummary.result}</p>
      </div>

      <div className="chart-section">
        <h3>Result Analysis</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default CertificateView;
