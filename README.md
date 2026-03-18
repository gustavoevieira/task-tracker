# 🍁 Canada Task Tracker

The **Canada Task Tracker** is a web application focused on personal productivity, developed to help organize daily goals aimed at an immigration plan to Canada. This project is part of my journey in my Software Engineering degree.

> **Note:** The tasks currently listed are part of my personal routine. Feel free to modify, add, or remove any tasks in the code to better suit your own goals and needs.

## 🚀 Technologies Used

* **Frontend:** HTML5, CSS3 (Responsive and Thematic Design 🇨🇦) and Vanilla JavaScript.
* **Backend as a Service (BaaS):** [Supabase](https://supabase.com/) (PostgreSQL) for data persistence.
* **Integration:** Supabase JS Client for CRUD operations.

## 📌 Features

* **Section 1 (Work):** Recurrent task counter with dynamic increment.
* **Section 2 (Main Goals):** Checklist for primary goals like English and Development.
* **Section 3 (Secondary):** Checklist for long-term goals such as Immigration, Portfolio, and Bible study.
* **Smart History:** Search system for specific dates or periods, with automatic display of the previous day's progress.
* **Cloud Persistence:** Data saved in real-time in the database.

## 🛠️ How to Install and Run

This project uses Database Security (RLS); you will need to configure your own keys:

1.  Clone this repository:
    ```bash
    git clone [https://github.com/YOUR_USER/canada-task-tracker.git](https://github.com/YOUR_USER/canada-task-tracker.git)
    ```
2.  Rename the file `config.example.js` to `config.js`.
3.  Insert your `SUPABASE_URL` and `SUPABASE_KEY` (anon public) obtained in your Supabase project panel.
4.  Ensure that the `historiy` table was created in your database with the columns: `job` (int), `primary` (text), and `secondary` (text).
5.  Open `index.html` in any browser.

## 🛡️ Security and Best Practices

This project applies fundamental concepts of Software Engineering:
* **Secrets Protection:** Using `.gitignore` to prevent API key leaks in the Git history.
* **Row Level Security (RLS):** Security applied directly to the database layer to control public access permissions.
* **Responsive Design:** Interface adapted for mobile use.

---
Developed by **Gustavo Vieira** 🇧🇷 ➡️ 🇨🇦


# 👋 Hi, I'm Gustavo!

### 👨🏻‍💻 About Me
- 🎓 **Software Engineering Student** (2nd Semester).
- 💼 Currently working as an **Administrative Assistant** at Fazzio Madeiras and taking on **Freelance Web Development** projects.
- 🍁 Planning my career path towards **immigration to Canada** (Operation Maple).
- 🤖 Passionate about **Artificial Intelligence, Machine Learning, and Game Development**.

### 🛠 Tech Stack
- 💻 **Frontend:** ![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)
  ![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)
  ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
- ⚙️ **Backend & Database:** ![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js&logoColor=339933)
  ![PHP](https://img.shields.io/badge/-PHP-333333?style=flat&logo=php&logoColor=777BB4)
  ![Python](https://img.shields.io/badge/-Python-333333?style=flat&logo=python)
  ![MySQL](https://img.shields.io/badge/-MySQL-333333?style=flat&logo=mysql&logoColor=4479A1)
- 🛠 **Tools:** ![Git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)
  ![GitHub](https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github)

### 📈 GitHub Stats
<a href="https://github.com/gustavoevieira">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=gustavoevieira&theme=great-gatsby&show_icons=true" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gustavoevieira&theme=great-gatsby&layout=compact" />
</a>

### 🌐 Featured Projects
- 🍁 **[Canada Task Tracker](https://github.com/gustavoevieira/canada-task-tracker):** A specialized productivity tool built with Vanilla JS and Supabase to manage daily immigration goals.
- 📁 View my complete [Portfolio](https://gustavoevieira.me/).

### 🤝 Let's Connect!
<p align="center">
<a href="https://www.linkedin.com/in/gustavo-ev"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Gustavo%20Vieira-blue?style=flat-square&logo=linkedin"></a>
<a href="https://www.instagram.com/vieira.gustta"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-@vieira.gustta-blue?style=flat-square&logo=instagram"></a>
<a href="https://github.com/gustavoevieira"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-gustavoevieira-blue?style=flat-square&logo=github"></a>
</p>
