import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", percentage: 90, experience: "2+ years" },
        { name: "JavaScript (ES6+)", percentage: 95, experience: "3+ years" },
        { name: "HTML5 & CSS3", percentage: 90, experience: "3+ years" },
        { name: "Responsive Design", percentage: 85, experience: "2+ years" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", percentage: 85, experience: "2+ years" },
        { name: "Express.js", percentage: 80, experience: "1+ years" },
        { name: "Python", percentage: 85, experience: "2+ years" },
        { name: "Django", percentage: 75, experience: "1+ years" },
        { name: "RESTful APIs", percentage: 88, experience: "2+ years" }
      ]
    },
    {
      category: "Database Technologies",
      items: [
        { name: "MongoDB", percentage: 80, experience: "1+ years" },
        { name: "MySQL", percentage: 85, experience: "2+ years" },
        { name: "Database Design", percentage: 82, experience: "2+ years" }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", percentage: 95, experience: "3+ years" },
        { name: "Python", percentage: 85, experience: "2+ years" },
        { name: "Java", percentage: 80, experience: "2+ years" }
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Machine Learning", percentage: 85, experience: "1+ years" },
        { name: "TensorFlow", percentage: 80, experience: "1+ years" },
        { name: "Data Analysis", percentage: 82, experience: "1+ years" },
        { name: "Python Libraries (Pandas, NumPy)", percentage: 78, experience: "1+ years" }
      ]
    },
    {
      category: "Development Tools & Practices",
      items: [
        { name: "Git & Version Control", percentage: 88, experience: "2+ years" },
        { name: "Problem Solving", percentage: 92, experience: "3+ years" },
        { name: "Code Review", percentage: 80, experience: "1+ years" },
        { name: "Agile Methodology", percentage: 75, experience: "1+ years" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div className="skill-group" key={index}>
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-experience">{skill.experience}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;