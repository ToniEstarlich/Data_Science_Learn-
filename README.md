# Data Science Practice Project

## Description
This repository contains exercises and practice projects in **Data Science**. It includes examples of data handling, exploratory analysis, visualization, and API connections.

> Personal reflection: I'm not sure if putting this on GitHub looks "professional", but I decided to do it to document my learning and practice good development and version control habits.

## Project Structure
- `backend/` - Django code for example APIs.
- `frontend/` - Scripts and tests for consuming APIs (React Native / Node.js).
- `data/` - Datasets used for analysis.
- `notebooks/` - Jupyter Notebooks with data exploration and experiments.
- `README.md` - This file.

## Technologies
- Python, Django
- React Native, Node.js
- Axios for API consumption
- Jupyter Notebook
- Git and GitHub for version control

### Full-Stack Data Science Project Flow

The project follows a complete Data Science workflow integrated with a Django backend and React Native frontend. The flow is as follows:

```blas
📱 React Native (Mobile Frontend)
│
▼
🌐 predictions_api/ (Django Endpoints)
│
▼
🤖 models.pkg/ (Machine Learning / AI)
│
▼
🧹 processing/ (Data Cleaning & Feature Engineering)
│
▼
📊 monitoring/ (Logging, Metrics, Model Performance)
```

**Flow Summary:**
1. User inputs from the mobile app are sent to the `predictions_api/`.  
2. The API uses trained models from `models.pkg/` to generate predictions.  
3. Models are trained on cleaned and processed data from `processing/`.  
4. Monitoring keeps track of predictions, logs, and model performance over time.  


## How to Use
1. Clone the repository:
```
git clone https://github.com/your-username/your-repository.git
```

2. Install backend dependencies:
```
cd backend
python -m venv .venv
source .venv/bin/activate  # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt

```
3. Start Django server:
```
python manage.py runserver

```
4. Run frontend / API tests:
```
cd frontend
node testApi.js

```
## Contributions

This repository is mainly for personal practice, but feel free to comment, suggest, or open an issue if you want to collaborate or give feedback.

## License

This project is for personal and educational use.
