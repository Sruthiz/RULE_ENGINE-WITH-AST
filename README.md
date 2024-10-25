# RULE_ENGINE-WITH-AST
Developed a simple 3-tier rule engine application(Simple UI, API and Backend, Data) to determine user eligibility based on attributes like age, department, income, spend

Objective:
Developing a simple 3-tier rule engine application(Simple UI, API and Backend, Data) to determine
user eligibility based on attributes like age, department, income, spend etc.The system can use
Abstract Syntax Tree (AST) to represent conditional rules and allow for dynamic
creation,combination, and modification of these rules.

Rule Creation : 

![createrule](https://github.com/user-attachments/assets/db029c5c-3294-4145-9593-11c373c6961a)

Rule Combination :

![Screenshot (157)](https://github.com/user-attachments/assets/b614fd73-ea90-43cf-9c5c-d7b6ffc60630)
![Screenshot (158)](https://github.com/user-attachments/assets/339a4908-f8b8-492e-9358-4bc0a33a39ec)

Rule Evaluation :

![Screenshot (158)](https://github.com/user-attachments/assets/615da047-8c0e-4025-a801-c9633fa48b8b)


Installtion Steps :

 1. Open a terminal (or command prompt) in your project's root directory.
 2. Initialize Git:
    ```bash
     git init
    
3. Clone the Repository
   ```bash
   git clone https://github.com/your-username/rule-engine-project.git
4. Install Dependencies Install the required packages using npm:
   ```bash
    npm install
5. Setup MongoDB Ensure MongoDB is running on your local machine or connect to a remote MongoDB instance. Modify the connection URL in server.js if needed:
   ```bash
    const MONGO_URL = "mongodb://127.0.0.1:27017/rule_engine_data";
6. Run the Server Start the server:
   ```bash
    node server.js






