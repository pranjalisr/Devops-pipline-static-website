# Static Website with DevOps Pipeline

This project demonstrates a static website built with Next.js and a DevOps pipeline for continuous integration and deployment.

## Project Overview

This static website includes:
- A home page
- An about page
- A contact page

The DevOps pipeline includes:
- Continuous Integration (CI) with GitHub Actions
- Automated testing with Jest
- Performance testing with Lighthouse CI
- Security scanning with Snyk
- Continuous Deployment (CD) to AWS S3 and CloudFront

## Getting Started

1. Clone the repository
2. Install dependencies:


Disclaimer: AWS Credentials

This project does not include or reference any AWS credentials in the codebase, configuration files, or environment variables. This is an intentional decision to avoid accidental exposure of sensitive information and to prevent any unintended charges related to AWS services such as S3 bucket usage or other billable resources.

Key Points:

No Hardcoded Credentials: At no point are AWS Access Keys or Secret Keys included in the source code.

No AWS Resources Created: The project does not make any calls to AWS APIs or attempt to create resources such as S3 buckets, EC2 instances, or any other AWS service.

Environment Variables Not Configured: Ensure that no environment-specific AWS credentials are set or used while running this project.

Recommendations:

If you intend to integrate this project with AWS services, please use environment variables or a credentials manager to securely provide AWS credentials.

Consider using the AWS SDK with temporary security tokens, IAM roles, or a secure secret management tool.

By omitting AWS credentials from this project, I aim to maintain secure coding practices and avoid unnecessary charges or misuse of resources.
