---
title: 'Alignly: AI-Powered Impact Investing Platform'
description: For HooHacks 2024, I built Alignly, an AI-powered web app that helps users create investment portfolios based on their personal values.
publishDate: 'Dec 15 2023'
isFeatured: true
seo:
  image:
    src: '/project-alignly.jpg'
    alt: Alignly impact investing platform preview
---

[GitHub repository](https://github.com/dariuskia/impact-investing)

**Project Overview:**
For this project, we wanted to bridge the gap between personal values and investment decisions. We built Alignly, an AI-powered web application that takes multimedia inputs like articles and YouTube videos, extracts the key ideas, and transforms them into embeddings. These embeddings are then used to find S&P 500 companies that align with the user's expressed values.

## Objectives

Our main goal was to build a platform that could translate a user's values into concrete investment strategies. We aimed to:

1.  Integrate a multimedia analysis pipeline to understand user preferences from sources like articles and videos.
2.  Match users with value-aligned companies to facilitate impact investing.
3.  Provide direct trading capabilities through the Alpaca API.

## Features

1.  **Multimedia Content Analysis:**
    We built a system where users can input articles or YouTube videos. Our backend processes this content by transcribing audio, summarizing text, and identifying the core values and beliefs expressed.

2.  **Value-Based Company Matching:**
    The core of the application compares the user's value embeddings against a database of S&P 500 companies. It then identifies companies whose mission and practices seem to align with the user's beliefs, providing a detailed analysis and ESG metrics.

3.  **Portfolio Creation & Management:**
    Based on the value alignment, the app can automatically generate a diversified investment portfolio. It also provides tools for real-time portfolio performance tracking.

4.  **Direct Trading Integration:**
    We integrated the Alpaca Markets API to allow users to execute real market-order trades directly on NASDAQ through the platform.

## Technology Stack

We used the following technologies to build Alignly:

-   **Frontend:** Next.js with React, TypeScript, and TailwindCSS
-   **Backend:** FastAPI for high-performance API endpoints
-   **Database:** MongoDB Atlas with vector search capabilities
-   **AI/ML:** OpenAI Whisper for transcriptions, advanced embeddings for value matching
-   **Trading:** Alpaca Markets API for real-time trading
-   **Web Scraping:** BeautifulSoup for article data extraction

## Technical Challenges & Solutions

1.  **Data Processing Pipeline:**
    One of the main challenges was building a robust data processing pipeline to handle various multimedia formats. We developed a system for efficient embedding generation and storage to enable quick value matching.

2.  **Real-time Trading Integration:**
    Integrating the Alpaca API for live market orders required careful implementation of error handling and order validation to ensure reliability.

3.  **Scalable Architecture:**
    To ensure scalability, we designed the application with a microservices architecture, separating the frontend, API, and web scraping services. We used MongoDB Atlas for its scalable vector search capabilities.

## Outcome

The result is a platform that helps people make investment decisions that reflect their personal values. Alignly provides the tools and information to connect financial goals with a desire to contribute to a more sustainable and equitable world.

**Note:** This project was developed as part of a collaborative effort to advance impact investing technology. 