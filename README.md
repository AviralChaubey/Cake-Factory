# 🍰 Cake Factory: An AWS-Powered Serverless E-Commerce Platform

Cake Factory is a modern, cloud-native e-commerce web application where users can browse, customize, and order cakes with ease.  
Built using a **serverless architecture** with deeply integrated AWS cloud services, the platform ensures **scalability, security, and cost-efficiency**—ideal for production-grade deployments.

---

## 🚀 Key Features & Live Demo

| Feature | Description |
|--------|-------------|
| Serverless Architecture | Vendor-free deployment—no servers to manage! |
| Secure Authentication | Amazon Cognito handles secure user signup/login. |
| Scalable Data | Amazon DynamoDB provides fast, NoSQL product data. |
| AI Chatbot | Amazon Lex + Lambda for smart, conversational assistance. |
| Modern Frontend | Built with React.js for a sleek, responsive experience. |
| Full CI/CD | Automated deployment via AWS Amplify. |

🔗 *Live Demo:*  
https://main.d6p3vwne64pcn.amplifyapp.com/

---

## 🏗 Architecture Overview

Cake Factory leverages a **fully AWS-serverless ecosystem** for maximum reliability and minimal maintenance.

| Step | Component | Purpose |
|-----|-----------|---------|
| 1 | AWS Amplify | CI/CD pipeline and hosting for the React frontend |
| 2 | Amazon Cognito | Secure user authentication and management |
| 3 | Amazon S3 | Storage & delivery of cake images and static assets |
| 4 | Amazon DynamoDB | NoSQL product data store |
| 5 | Amazon Lex | Conversational flow management for chatbot |
| 6 | AWS Lambda | Backend integration logic for Lex & DynamoDB |

### 🔁 High-Level Flow Diagram
1. User visits the website hosted on Amplify  
2. Cognito handles authentication (login/signup)  
3. Product images load from S3  
4. Product data is fetched from DynamoDB  
5. User interacts with Lex chatbot  
6. Lex triggers Lambda based on intent  
7. Lambda queries DynamoDB and responds via Lex  

---

## 🛠 Tech Stack

### Frontend 💻
- React.js & Context API  
- React Router  
- TailwindCSS / CSS Modules  

### Backend & Cloud Services ☁
- AWS Lambda (Node.js)  
- Amazon DynamoDB  
- Amazon S3  
- Amazon Cognito  
- Amazon Lex  

---

## ⚙ Local Setup

Get the development environment running in a few simple steps.

```bash
# Clone the repository
git clone https://github.com/your-username/cake-factory.git
cd cake-factory/frontend

# Install dependencies
npm install

# Start local development
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.


---

## 📜 Available Scripts

### Frontend Commands

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds the app for production optimization |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (irreversible) |

### Deployment

The application automatically deploys to AWS Amplify whenever you push to the main branch. No manual deployment steps required!

---

## 📂 Project Structure

```
cake-factory/
├── backend/
│   ├── lambda/              # AWS Lambda functions
│   ├── lex/                 # Lex bot configuration
│   └── config/              # AWS service configurations
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── context/         # Context API state management
│   │   ├── pages/           # Application pages
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/              # Static assets
│   ├── package.json
│   └── .gitignore
├── amplify.yml              # Amplify deployment configuration
├── .gitignore
└── README.md
```


---

## 💡 Future Enhancements

We plan to extend Cake Factory with:

- Payment gateway integration (Stripe, PayPal)
- Real-time order tracking with WebSocket updates
- Admin dashboard for inventory management
- Personalized cake recommendations using ML
- User reviews and ratings system
- Email notifications for order updates
- Mobile app (React Native)


---

## 🤝 Authors

Built as part of the Cloud Architecture Design course by:

- **Aryaman**
- **Amogh**
- **Aviral**


---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.


---
