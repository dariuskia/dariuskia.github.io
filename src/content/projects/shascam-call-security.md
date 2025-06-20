---
title: 'ShaScam: Live AI-Enabled Call Security'
description: For TreeHacks 2024, I built ShaScam, a tool to protect users from phishing and spam calls in real-time using AI-powered analysis and live call transcription.
publishDate: 'Nov 20 2023'
isFeatured: true
seo:
  image:
    src: '/project-shascam.jpg'
    alt: ShaScam call security platform preview
---

[GitHub repository](https://github.com/dariuskia/scam-id)

**Project Overview:**
ShaScam is an AI-powered platform to provide real-time protection from scam calls. We integrated Twilio for call management, Google Cloud's speech-to-text for live transcription, and a Mixtral-8x7B model for inference. The goal was to offer a proactive defense against scam calls.

## Objectives

Our main objective was to develop a system that could analyze calls in real-time to detect and prevent scams. We aimed to:

1.  Integrate several AI technologies to provide a comprehensive security solution.
2.  Give users immediate feedback on call risk and suggest what to do.
3.  Maintain user privacy while still offering strong security.

## Features

1.  **Real-time Scam Analysis:**
    The system uses Twilio to route and manage calls. As a call is happening, we use Google Cloud's speech-to-text to get a live transcript, which is then analyzed to assess the likelihood of it being a scam.

2.  **AI-Powered Call Filtering:**
    We used a Mixtral-8x7B model to analyze the call's content. The model was trained on scam call datasets to recognize scam patterns and adapt to new techniques.

3.  **User Privacy & Control:**
    To protect user privacy, we used Twilio proxy numbers. This way, users don't have to expose their personal phone numbers and have full control over call monitoring.

## Technology Stack

We used the following technologies to build the platform:

-   **Call Management:** Twilio API for call routing and proxy number management
-   **Speech Processing:** Google Cloud Speech-to-Text for live transcription
-   **AI/ML:** Mixtral-8x7B model for advanced LLM inference
-   **Backend:** Python with FastAPI for high-performance API endpoints
-   **Data Processing:** Jupyter Notebooks for model training and analysis
-   **Frontend:** Modern web interface for user management and monitoring

## Technical Challenges & Solutions

1.  **Data Acquisition & Quality:**
    A significant challenge was finding and compiling a good dataset of spam calls. We had to navigate various sources, clean the data, and use synthetic data augmentation to properly train our model.

2.  **Model Accuracy & Generalization:**
    To avoid overfitting and improve accuracy, we used the larger Mixtral-8x7B model and spent a lot of time on dataset curation. We also set up a process for continuous model evaluation.

3.  **Real-time Processing:**
    Getting the analysis to happen in real-time was another challenge. We had to optimize the speech-to-text and LLM inference pipeline to minimize latency.

## Outcome

The final product is a platform that can effectively protect users from scam calls in real-time. It demonstrates how combining different AI technologies can create a robust security tool while respecting user privacy.