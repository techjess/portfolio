import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
    },
  });

  console.log('Created admin user:', adminUser.email);

  // Create sample projects
  const sampleProjects = [
    {
      title: 'Network Performance Analysis Dashboard',
      description: 'Real-time monitoring dashboard for network infrastructure with predictive analytics',
      content: 'A comprehensive dashboard built to monitor network performance metrics and predict potential issues using machine learning algorithms. Features include real-time data visualization, anomaly detection, and automated alerting systems.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      githubUrl: 'https://github.com/yourusername/network-dashboard',
      liveUrl: '',
      tags: 'Python, Pandas, Plotly, Machine Learning, Network Analysis',
      featured: true,
      published: true,
    },
    {
      title: 'Data Pipeline Automation Tool',
      description: 'Automated ETL pipeline for processing large datasets with error handling and monitoring',
      content: 'Built an automated data pipeline system that processes terabytes of network log data daily. Includes data validation, transformation, and loading into analytical databases with comprehensive error handling and monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600',
      githubUrl: 'https://github.com/yourusername/data-pipeline',
      tags: 'Python, Apache Airflow, PostgreSQL, Docker, Data Engineering',
      featured: false,
      published: true,
    },
    {
      title: 'ML-Based System Anomaly Detection',
      description: 'Machine learning model to detect unusual patterns in system behavior',
      content: 'Developed and deployed a machine learning solution that identifies anomalous behavior in network systems. Uses ensemble methods including isolation forests and autoencoders to detect various types of anomalies with high accuracy and low false positive rates.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
      githubUrl: 'https://github.com/yourusername/anomaly-detection',
      liveUrl: '',
      tags: 'Python, Scikit-learn, TensorFlow, Anomaly Detection, MLOps',
      featured: true,
      published: true,
    },
  ];

  for (const project of sampleProjects) {
    const existingProject = await prisma.project.findFirst({
      where: { title: project.title }
    });
    
    if (!existingProject) {
      await prisma.project.create({
        data: project,
      });
    }
  }

  console.log('Created sample projects');
  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });