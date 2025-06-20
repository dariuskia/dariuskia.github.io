---
title: 'Meta-Learning a Sample-Efficient Loss Function in Autonomous Driving'
description: For a research course, I explored using meta-learning to improve how autonomous driving models learn from imbalanced datasets, using the CARLA simulator.
publishDate: 'Jan 05 2024'
isFeatured: true
seo:
  image:
    src: '/project-meta-learning.jpg'
    alt: Meta-learning research project preview
---

<!-- ![Meta-learning research project preview](/project-meta-learning.jpg) -->
[Github Repository](https://github.com/dariuskia/autonomous-steering)

**Project Overview:**
This was my final research project for my `CMSC498z (Differentiable Programming)` course in Fall 2023. The goal was to tackle a common problem in autonomous driving: the data is overwhelmingly full of normal driving scenes, while rare but critical "abnormal" scenes (like near-collisions or obstacles) are scarce. My research explored whether we could use meta-learning to create a more sample-efficient loss function, which would help an autonomous agent learn more effectively from the few abnormal examples it sees.

## Objectives

My main objective was to design and test a system that could learn its own loss function for an imitation learning task in autonomous driving. Specifically, I wanted to:
1.  Address the class imbalance problem in autonomous driving datasets.
2.  Implement a meta-learning approach to learn a sample weighting function.
3.  Use Bayesian Optimization to tune the loss function against non-differentiable simulation metrics like "time without infractions."
4.  Evaluate the approach using the CARLA open-source simulator.

## Methodology & Approach
The core of my project was based on imitation learning, where a "student" model learns to drive by watching an "expert."
1.  **Imitation Learning Framework:** I started with a standard behavior cloning setup, using a CNN to predict steering angles from road images.
2.  **The Problem with MSE:** Standard Mean Squared Error (MSE) loss treats every training sample equally. This is not ideal when some samples (like avoiding a pedestrian) are much more important than others (like driving straight on an empty road).
3.  **Meta-Learned Loss:** My proposal was to meta-learn a function that would weight each sample's loss. This function would take in features from the driving scene (like the presence of pedestrians or the curve of the road) and decide how much attention the main model should pay to that sample. This turned the problem into a bi-level optimization task.
4.  **Bayesian Optimization:** Since some of the most important metrics for driving (like not crashing) are not differentiable, I couldn't use gradient-based methods to optimize the loss function directly against them. Instead, I used Bayesian Optimization to search for the best hyperparameters for my learned loss function.

## Technology Stack

I used the following tools and libraries for my research:
-   **Simulation:** CARLA Simulator for generating realistic and varied driving scenarios.
-   **Machine Learning:** PyTorch for building and training the neural networks.
-   **Meta-Learning:** The `higher` library from Facebook Research to implement the meta-learning loop.
-   **Bayesian Optimization:** `BoTorch` and `Ax` to optimize the non-differentiable parts of my loss function.
-   **Model:** A CNN with 5 convolutional layers and 4 linear layers.

## Key Findings & Challenges
1.  **Data Discrepancies:** A key challenge was the "distribution shift" between different datasets and even between simulated scenes in CARLA, which could affect how well the model generalized.
2.  **Non-Differentiable Metrics:** Working with simulation-based metrics that you can't backpropagate through was a major hurdle. Bayesian Optimization proved to be a powerful tool for this.
3.  **Promising Results:** My preliminary results showed that the learned loss function behaved differently from standard MSE and that there was a correlation between its parameters and the agent's driving accuracy. The approach of letting `tau = 0` converge to MSE provided a good baseline for comparison.

## Outcome

This research project was a deep dive into advanced machine learning concepts and their application to a real-world problem. I demonstrated a proof-of-concept that meta-learning can be used to create more sample-efficient loss functions for autonomous driving agents. The work highlighted the importance of addressing data imbalance and showed how tools like Bayesian Optimization can solve complex, non-differentiable problems in ML research.

**Note:** This was a research project for the CMSC498z course in Fall 2023. 