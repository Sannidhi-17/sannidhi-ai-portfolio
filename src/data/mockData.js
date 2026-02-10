// Portfolio data for Sannidhi Bookseller

export const portfolioData = {
  personal: {
    name: "Sannidhi Gajiwala",
    title: "AI Engineer",
    experience: "3.5+ years",
    tagline: "AI/ML & Data Engineering Lead | Business Intelligence Innovator",
    bio: "AI/ML & Data Engineer with 3.5+ years of experience developing, fine-tuning, and deploying predictive machine learning models in production environments. Strong hands-on expertise in building data pipelines, researching advanced analytics techniques, and translating business processes into scalable ML solutions. Skilled in end-to-end model development—from data ingestion and feature engineering to training, validation, deployment, and monitoring.",
    email: "sannidhibookseller@gmail.com",
    phone: "+1-(587)-938-6368",
    linkedin: "linkedin.com/in/sannidhi-gajiwala-146169132/",
    // linkedin: "https://www.linkedin.com/in/sannidhi-gajiwala-146169132/",
    github: "github.com/Sannidhi-17",
    location: "Edmonton, AB, Canada."
  },
  // MCQ - Generator

  projects: [
    {
      id: 1,
      title: "AI Resume Enhancer (GenAI-Powered Resume Optimization Tool)",
      description: "Built a GenAI-powered web application that analyzes and enhances resumes by tailoring content to specific job descriptions. The system summarizes, rewrites, and improves resume bullet points using a locally hosted large language model, ensuring complete data privacy and offline functionality.",
      technologies: ["Python", "Streamlit", "Ollama", "Gemma 3 (4B)", "PyPDF2", "Pydantic"],
      impact: "Automated resume optimization, improved job-specific relevance, ensured 100% offline and privacy-focused AI processing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7crxGCZ6FQvkk4Sq46fEJVS3QoajqP1MknCaNpDuHvw&s",
      github: "https://github.com/Sannidhi-17/AI-Resume-Enhancer",
      // demo: "#"
    },
    {
      id: 2,
      title: "AI Email Drafting Assistant",
      description: "Developed a Streamlit-based AI assistant that reads incoming emails, generates concise summaries, and drafts polite, professional, and actionable replies. The system leverages LangChain with Groq LLM and maintains conversational context using memory, enabling consistent and context-aware responses across email threads.",
      technologies: ["Python", "Streamlit", "LangChain", "Groq LLM", "ConversationBufferMemory"],
      impact: "Reduced manual email drafting time, improved response quality, and enabled context-aware communication across ongoing email conversations",
      image: "https://cdn.mos.cms.futurecdn.net/7YSmYZCfTNzJeivwGhrD9L-1200-80.png.webp",
      github: "https://github.com/Sannidhi-17/AI-Email-Drafting-Assistant?tab=readme-ov-file#ai-email-drafting-assistant",
      // demo: "#"
    },
    {
      id: 3,
      title: "Gemma 3 Local Chatbot (WhatsApp-Style UI)",
      description: "Built a fully local, WhatsApp-style conversational chatbot running on macOS using Ollama with the Gemma 3 (4B) large language model. The application provides a clean, real-time chat experience via Streamlit, enabling private and offline AI conversations without relying on external APIs or internet connectivity.",
      technologies: ["Python", "Streamlit", "Ollama", "Gemma 3 (4B)", "Local LLM"],
      impact: "Enabled privacy-first, offline conversational AI with zero API costs and full local control over data and inference",
      image: "https://www.bluebi.com/wp-content/uploads/2023/05/BBI-x-Chatbot-Andy-1.jpg",
      github: "https://github.com/Sannidhi-17/local-llm-chatbot",
      // demo: "#"
    },
    {
      id: 4,
      title: "AI-Powered MCQ Generator",
      description: "Developed an AI-driven MCQ Generator that automatically creates multiple-choice questions from PDFs or text inputs using transformer-based language models. The application leverages LangChain with Hugging Face Transformers to extract, understand, and generate high-quality questions, making it useful for exam preparation, training, and e-learning platforms.",  technologies: ["Python", "NLP", "Machine Learning", "Statistical Modelling", "Web Development"],
      technologies: [
        "Python",
        "LangChain",
        "Hugging Face Transformers",
        "PyTorch",
        "Streamlit",
        "PyPDF2"
      ],
      impact: "Automated question generation reduced manual content creation effort and improved learning material preparation efficiency",
      image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1",
      github: "https://github.com/Sannidhi-17/MCQ-Generator/blob/main/setup.py",
      // demo: "#"
    }
  ],

  journey: [
    {
      year: "May 2024 - Present",
      title: "AI/ML Developer & Technical Lead (Remote role)",
      company: "Webstertech Softwares, Surat, India",
      description: "Developing full-scale CRM and management platforms for clients, including government consultants and US-based property management firms. Leading cross-functional analytics teams, building scalable ML solutions, developing KPI dashboards from call-center data, and designing end-to-end ML pipelines integrating structured and unstructured data." ,    
      achievements: [ "Developing the Property Works platform for the USA market", 
      "Built a CRM platform for government consultancy projects",
      "Leading cross-functional development teams",
      "Managed and mentored the analytics team to enhance performance"],
      projects: [
        {"name": "SaaS Web Application Development",
          "client": "Property Works, US"},
        {"name": "AI/ML-based Live Safety Guard Detection",
          "client": "Indian Government, India"},
        {"name": "Web Application Development",
          "client": "N.N.Thakor, India"},
        {"name": "CRM Development", 
          "client": "Indian Government, India"}] 
    },
    {
      year: "Sep 2021 - Jan 2024",
      title: "Machine Learning Engineer",
      company: "Agami Tech Pvt. Ltd., Surat, India",
      description: "Developed LLM-based conversational assistant and automated solutions for healthcare workflows. Built dashboards and reporting systems using SQL and Excel.",
      achievements: ["received 'The Best Emerging Talent' award", "Created LLM chatbot reducing response times by 20%", "Automated workflows reducing manual work by 20%", "Built performance KPI dashboards"],
      projects: [
        {
          "name": "Customer Service Chatbot",
          "client": "Oman Government HealthCare, Oman",
          // "description": "Developed an LLM-based chatbot for automating customer support, reducing response time, and enhancing client engagement."
        },
        {
          "name": "Voice Analytics Product",
          "client": "Intalk.io, Mumbai, India",
          // "description": "Built a voice analytics solution to analyze call center conversations, generate reports, and improve customer service quality."
        }
      ]
    },
    {
      year: "Nov 2020 - May 2021",
      title: "Research & AI Developer",
      company: "Mediatum Oy, Finland",
      description: "Engineered scalable web application utilizing advanced ML techniques including statistical modelling and NLP to analyze multilingual unstructured text data.",
      achievements: ["Built multilingual text analysis system", "Delivered actionable consumer insights", "Applied NLP techniques at scale"],
      projects: [
        {
          "name": "Web Application Topic Modelling in Finnish Language",
          "client": "Mediatum Oy, Finland",
          // "description": "Developed an LLM-based chatbot for automating customer support, reducing response time, and enhancing client engagement."
        },
      ]
    },
    {
      year: "2019-2021",
      title: "Master of Science - Artificial Intelligence Systems",
      company: "School of EPITA, Paris, France",
      description: "Pursued advanced studies in Artificial Intelligence Systems, building strong foundations in machine learning, deep learning, and AI system architecture.",
      achievements: ["Published research on causality in COVID-19 data", "Specialized in ML and NLP"],
      projects: [
        {
          "name": "Self Drive Robo Car",
          "client": "Final Year Project",
          // "description": "Developed an LLM-based chatbot for automating customer support, reducing response time, and enhancing client engagement."
        },
        {
          "name": "Face Mask Detection",
          "client": "Mid-term Project",
          // "description": "Developed an LLM-based chatbot for automating customer support, reducing response time, and enhancing client engagement."
        }
      ]
    },
    {
      year: "2015-2019",
      title: "Bachelor of Engineering - Electronics and Communications",
      company: "Sarvajanik College of Engineering And Technology (SCET), Surat, India",
      description: "Completed a rigorous undergraduate program in Electronics and Communications, with a strong focus on Artificial Intelligence, Machine Learning, and Deep Learning. Gained hands-on experience in AI system design, signal processing, and applied research projects.",
      achievements: [
        "Published IEEE research paper on AI applications in data analysis",
        "Ranked among the top three in the EC batch",
      ],
    }
  ],

  skills: {
    "Programming & Frameworks": ["Python", "SQL", "PySpark", "R", "Node Js"],
    "Libraries & Frameworks": [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Hugging Face Transformers",
      "spaCy",
      "NLTK",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "FastAPI",
      "Flask"
    ],
    "Data Engineering & Cloud": ["Azure", "GCP", "AWS S3", "Docker", "Databricks"],
    "Machine Learning": ["MLflow", "Model Training & Tuning", "Model Deployment", "Model Monitoring", "End-to-end ML Pipelines"],
    "Generative AI & LLMs": ["OpenAI", "Hugging Face", "LangChain", "LangGraph", "Agents", "Prompt Engineering", "RAG Implementation", "Perplexity", "Pinecone"],
    "Analytics & Visualization": ["ElasticSearch", "Kibana", "Tableau", "Matplotlib","Seaborn", "Plotly", "Advanced Excel"],
    "Distributed Systems": ["Apache Spark", "Parallel Processing", "Data Optimization", "Asynchronous Programming", "Kafka"]
  },

  certifications: [

    {
      title: "Docker & Kubernetes: The Practical Guide",
      issuer: "Udemy (Online Certification)",
      date: "2025",
      // credentialId: "SQL-BOOT-2020"
    },
    {
      title: "GCP ACE - Google Cloud Associate Cloud Engineer certification",
      issuer: "Udemy (Online Certification)",
      date: "2024",
      // credentialId: "SQL-BOOT-2020"
    },
    {
      title: "Complete Data Science,Machine Learning,DL,NLP Bootcamp",
      issuer: "Udemy (Online Certification)",
      date: "2024",
      // credentialId: "PYTORCH-CV-2023"
    },
    {
      title: "Complete Guide To Elasticsearch",
      issuer: "Udemy (Online Certification)",
      date: "2023",
      // credentialId: "ES-CERT-2023"
    },
    {
      title: "PyTorch For Deep Learning And Computer Vision",
      issuer: "Udemy (Online Certification)",
      date: "2023",
      // credentialId: "PYTORCH-CV-2023"
    },
    {
      title: "Data Science and machine Learning with R",
      issuer: "Udemy (Online Certification)",
      date: "2021",
      // credentialId: "PYTORCH-CV-2023"
    },
    {
      title: "The Complete SQL Bootcamp 2020",
      issuer: "Udemy (Online Certification)",
      date: "2020",
      // credentialId: "SQL-BOOT-2020"
    }
  ],

  accomplishments: [
    {
      title: "Research Paper - Traffic Sign Detection",
      description: "Published 'Performance of different optimizers for traffic sign detection' in Computer Vision and Machine Learning at 10th IEEE International Conference.",
      date: "February 2019 - June 2019",
      type: "Research Publication"
    },
    {
      title: "Research Paper - COVID-19 Data Analysis",
      description: "Published 'Questioning causality on sex, gender, and COVID-19, and identifying bias in large-scale data-driven analyses' in arXiv Journal.",
      date: "November 2020 - April 2021",
      type: "Research Publication"
    }
  ]
};
