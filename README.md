# 🌱 AI-Based Tomato Disease Detection & IPM Recommendation System

## 🚀 Overview

This project is an AI-powered web application that detects tomato leaf diseases using Deep Learning and provides Integrated Pest Management (IPM) recommendations. Users can upload an image of a tomato leaf, and the system predicts the disease with high accuracy (~97%) using EfficientNet.

---

## 🎯 Features

* 🔍 Disease Detection using Deep Learning (EfficientNet)
* 📊 High Accuracy (~96–97%)
* 🌿 IPM Recommendations for each disease
* 📷 Image Upload Interface
* 🧠 Model Comparison (CNN, MobileNetV2, EfficientNet)
* 📁 Prediction History (Frontend)
* 💻 Modern Web UI

---

## 🧠 Tech Stack

### 🔹 Machine Learning

* TensorFlow / Keras
* EfficientNet (Transfer Learning)
* ImageDataGenerator

### 🔹 Backend

* Flask (Python)

### 🔹 Frontend

* HTML, CSS, JavaScript

### 🔹 Dataset

* PlantVillage Dataset

---

## 🏗️ System Architecture

```
User Upload Image
        ↓
Flask Backend
        ↓
EfficientNet Model (.h5)
        ↓
Disease Prediction
        ↓
IPM Recommendation
        ↓
Result Display
```

---

## 📊 Model Performance

| Model        | Accuracy |
| ------------ | -------- |
| Baseline CNN | ~76%     |
| MobileNetV2  | ~82%     |
| EfficientNet | 🔥 ~97%  |

---

## 📸 Screenshots

> Add your screenshots here

* Homepage
* Detection Page
* Result Page

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 3️⃣ Run Backend

```bash
cd backend
python app.py
```

---

### 4️⃣ Open Frontend

Open `index.html` in your browser.

---

## 🧪 How It Works

1. Upload tomato leaf image
2. Image is preprocessed (224x224, normalized)
3. EfficientNet model predicts disease
4. System returns:

   * Disease name
   * Confidence score
   * IPM recommendation

---

## 🌍 Applications

* Smart Farming
* Precision Agriculture
* Crop Disease Monitoring
* Agricultural Research

---

## 🔮 Future Scope

* 📱 Mobile App Integration
* 🌐 Cloud Deployment
* 📷 Real-time Camera Detection
* 🌾 Multi-crop Disease Detection

---

## 👨‍💻 Author

**Rudraksh Singh**
AI & Web Development Enthusiast

---

## 📜 License

This project is for academic and educational purposes.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
