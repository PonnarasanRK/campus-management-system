// Sample data for job listings
const jobsData = [
    {
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      eligibility: "Bachelor's degree in Computer Science or related field",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed neque ac ultricies. Donec bibendum eros sit amet quam commodo consectetur."
    },
    {
      company: "FinanceCorp",
      position: "Financial Analyst",
      eligibility: "Bachelor's degree in Finance or Accounting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed neque ac ultricies. Donec bibendum eros sit amet quam commodo consectetur."
    }
  ];
  
  // Function to display job listings
  function displayJobs() {
    const jobsList = document.getElementById('jobs-list');
    
    // Clear existing content
    jobsList.innerHTML = '';
  
    // Create HTML for each job listing
    jobsData.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job-item');
  
      jobDiv.innerHTML = `
        <h3>${job.company}</h3>
        <p><strong>Position:</strong> ${job.position}</p>
        <p><strong>Eligibility:</strong> ${job.eligibility}</p>
        <p>${job.description}</p>
        <button onclick="apply('${job.company}', '${job.position}')">Apply Now</button>
      `;
  
      jobsList.appendChild(jobDiv);
    });
  }
  
  // Function to simulate job application
  function apply(company, position) {
    alert(`You are applying for the position of ${position} at ${company}. Application form will be available soon.`);
  }
  
  // Display job listings when the page loads
  document.addEventListener('DOMContentLoaded', displayJobs);
  