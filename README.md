# 🌟 Moodify

> **A data-driven sentiment analysis and business insight platform**  
> Transforming unstructured reviews into actionable insights for Sri Lankan SMEs.  

![Python](https://img.shields.io/badge/python-3.11-blue) ![React](https://img.shields.io/badge/react-18-blue) ![TensorFlow](https://img.shields.io/badge/tensorflow-2.13-orange)  

---

## ✨ Features

- 💬 **Sentiment Analysis:** BERT-based domain-specific analysis across Restaurants, Fashion, and Wellness.  
- 🏷 **Tag Mapping:** Maps reviews to structured variables and preset tags.  
- 🎯 **Personalized Scoring:** Users can set weights to get customized recommendations.  
- 📊 **Business Dashboard:** Full-featured tabs including Ads, Shop Info, Media, Reviews, Grading, Inbox, History, and more.  
- ⚡ **Smooth Integration:** React frontend + Python backend with fast data pipelines.  

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TailwindCSS, JavaScript |
| Backend | Python, Flask |
| ML | BERT (TensorFlow, Keras) |
| Database | MySQL |
| Deployment | Docker, AWS, Snowflake |

---

## 📁 Project Structure
```
market-prediction-system/
│
├── backend/
│   ├── bert_sentiment_model/      # Pretrained BERT model files (not in repo)
│   ├── venv/                      # Python virtual environment (ignored)
│   ├── app/                       # Backend source code
│   └── requirements.txt
│
├── frontend/
│   ├── app/                       # React frontend source
│   ├── node_modules/              # React dependencies (ignored)
│   └── package.json
│
├── .gitignore
└── README.md
```
---

⚡ Installation

Backend
```
cd backend
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```
Frontend
```
cd frontend/app
npm install
```
---

🚀 Usage

Start Backend
```
cd backend
source venv/bin/activate
python app/main.py           # Flask
```

Start Frontend
```
cd frontend/app
npm start
```
Open your browser: http://localhost:3000
