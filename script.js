document.addEventListener('DOMContentLoaded', function() {
    // Gerar QR Code com o link específico
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://chatgpt.com/share/67ddb402-286c-8000-a773-f175d1d20ed1",
        width: 250,
        height: 250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    // Animação de entrada para as seções
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // Preencher o conteúdo das seções
    const sectionsContent = {
        'agile': `
            <p>A programação ágil é um conjunto de metodologias para o desenvolvimento de software que enfatiza a flexibilidade, colaboração entre equipes e entregas incrementais. Surgiu como uma resposta às limitações dos métodos tradicionais.</p>
            <h3>Sistemas para desenvolvimento:</h3>
            <ul>
                <li>Frameworks: Scrum, Kanban, Extreme Programming (XP)</li>
                <li>Ferramentas: Jira, Trello, Asana</li>
                <li>IDEs: Visual Studio Code, IntelliJ IDEA, Eclipse</li>
                <li>Linguagens: JavaScript, Python, Java, C#</li>
            </ul>
        `,
        'structured': `
            <p>A programação estruturada surgiu na década de 1960 como uma abordagem para melhorar a clareza e a manutenção do código. Baseia-se em três estruturas fundamentais: sequência, decisão e repetição.</p>
            <h3>Sistemas para desenvolvimento:</h3>
            <ul>
                <li>Linguagens: C, Pascal, Ada</li>
                <li>Ambientes: Turbo Pascal, Code::Blocks, Dev-C++</li>
                <li>Compiladores: GCC, Free Pascal Compiler (FPC)</li>
            </ul>
        `,
        'oop': `
            <p>A programação orientada a objetos (POO) promove maior modularidade e reutilização do código. Baseia-se nos conceitos de objetos e classes, com quatro pilares principais: Encapsulamento, Herança, Polimorfismo e Abstração.</p>
            <h3>Sistemas para desenvolvimento:</h3>
            <ul>
                <li>Linguagens: Java, C++, Python, C#</li>
                <li>IDEs: Eclipse, NetBeans, Visual Studio, PyCharm</li>
                <li>Frameworks: Spring Boot, Django, .NET</li>
            </ul>
        `,
        'dop': `
            <p>A programação orientada a dados (DOP) é um paradigma focado na organização e manipulação eficiente dos dados, separando-os da lógica do programa.</p>
            <h3>Sistemas para desenvolvimento:</h3>
            <ul>
                <li>Linguagens: SQL, R, Python, Scala</li>
                <li>Bancos de dados: MySQL, PostgreSQL, MongoDB</li>
                <li>Frameworks: Apache Spark, Hadoop, Pandas</li>
                <li>Ferramentas: Power BI, Tableau, Jupyter Notebook</li>
            </ul>
        `
    };

    // Preencher cada seção com seu conteúdo
    for (let id in sectionsContent) {
        document.querySelector(`#${id} .content`).innerHTML = sectionsContent[id];
    }
});
