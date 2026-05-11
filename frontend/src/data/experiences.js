import clioLogo from '../assets/images/logos/clio_logo.jpg';
import arctiqLogo from '../assets/images/logos/arctiq_logo.jpg';
import cccLogo from '../assets/images/logos/ccc_logo.png';

export const experiences = [
    {
    id: 'clio-full-time',
    title: 'Systems Engineer',
    company:'Clio',
    location: 'Toronto, ON',
    logo: clioLogo,
    date: 'May 2026 – Present',
    employment: "Full-time",
    description: ``
  },
  {
    id: 'clio-co-op',
    title: 'Site Reliability Engineer',
    company: 'Clio',
    location: 'Toronto, ON',
    logo: clioLogo,
    date: 'September 2024 – April 2025',
    employment: "Co-op",
    description: `Winner of Clio’s company-wide hackathon by centralizing CI scripts, reducing code duplication and improving maintainability across all repos.
                  Built internal Ruby and Bash tooling to automate infrastructure workflows, improving debugging and developer productivity
                  Deployed applications across multiple regions using CI/CD pipelines with Buildkite, and implemented Datadog monitoring and health checks to ensure high availability.
                  Performed Amazon EKS Kubernetes upgrades to address security vulnerabilities and resolve compatibility issues, improving cluster stability and ensuring safe, uninterrupted deployments.
                  Received Outstanding as my overall co-op performance evaluation.`
  },
  {
    id: 'arctiq',
    title: 'DevOps Engineer',
    company: 'Arctiq',
    location: 'Toronto, ON',
    logo: arctiqLogo,
    date: 'January 2024 – August 2024',
    employment: "Co-op",
    description: `Designed and developed CI/CD pipelines using GitHub Actions to build and deploy microservices to Kubernetes (AKS) clusters in MS Azure.
                  Automated user onboarding for AppSec tools like Snyk, Lacework, and Dynatrace using Terraform, Python, and REST APIs, eliminating manual onboarding effort and time.
                  Developed a custom Terraform provider for Lacework and used GitOps to optimize infrastructure testing, migration, and deployment.
                  Delivered technical demos to the entire company of system engineers and architects starting in my first month, demonstrating fast onboarding and learning.
                  Managed and resolved vulnerabilities found by Snyk with Python and Bash.
                  Received Outstanding as my overall co-op performance evaluation.`
  },
  {
    id: 'ccc',
    title: 'Software Engineer',
    company: 'Crystal Claire Cosmetics',
    location: 'Scarborough, ON',
    logo: cccLogo,
    date: 'May 2023 – August 2023',
    employment: "Co-op",
    description: `Developed a Python program that generates C++ code to make robotic arms produce complex designs, saving developer effort and time of writing 10,000+ lines of code from months to 2 minutes.
                  Designed and optimized an inventory management system using MS SQL Server, improving data retrieval performance and reducing manual processing by ~20 hours per week.
                  Participated in the company’s Dragon Boat Team and won gold at the Toronto Dragon Boat Festival.
                  Received Outstanding as my overall co-op performance evaluation.`
  }
];

export default experiences;