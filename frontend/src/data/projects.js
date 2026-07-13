import healthcareFront from "../assets/images/healthcare_app/healthcare_front.jpg";
import thankyouCCC from "../assets/images/robotic_arm/thankyou_ccc.jpg";
import assemblyMainMenu from "../assets/images/assembly_project/main_menu.png";
import systemMonitoring from "../assets/images/sysMonTool.png";
import utt from "../assets/images/android_app/UTT.png";
import gameCarnival from "../assets/images/game_carnival/game_carnival.png";
import citationMachine from "../assets/images/citation_machine.png";
import stocksGraph from "../assets/images/stocks_app/stocks_graph.png";
import ai_sales_home_page from "../assets/images/ai_sales_app/home_page.png";
import moodifyLogin from "../assets/images/moodify_app/login_page.png";

const projects = [
    {
        id: "emotion-detection-music-app",
        title: "Emotion Detection Music App",
        description: "This music app uses AI, facial detection, and recommendation algorithms to recommend songs based on your mood to create a personalized and interactive music experience. Users can listen to music, share playlists with friends, and have voice / video calls.",
        image: moodifyLogin,
        githubLink: ""
    },
    {
        id: "operating-system",
        title: "Operating System",
        description: "Created an operating system by implementing thread synchronization, system calls, virtual memory, and the file system.",
        image: "",
        githubLink: ""
    },
    {
        id: "ai-sales-app",
        title: "AI Sales App",
        description: "This web app uses AI to find potential clients that would be the best fit for the services that your company offers.",
        image: ai_sales_home_page,
        githubLink: ""
    },
    {
        id: "stock-management-app",
        title: "Stock Management App",
        description: "This web app allows users to manage their stocks, see future stock prices, perform transactions, and connect with friends.",
        image: stocksGraph,
        githubLink: ""
    },
    {
        id: "healthcare-web-application",
        title: "Healthcare Web Application",
        description: "A healthcare web application built with React and Tailwind CSS to improve patient care and streamline medical workflows.",
        image: healthcareFront,
        githubLink: ""
    },
    {
        id: "robotic-arm-drawing-automation",
        title: "Robotic Arm Drawing Automation",
        description: "This project gets the user to draw something (simple or very detailed) on the screen, and then the robotic arms will draw that exact image on paper or makeup.",
        image: thankyouCCC,
        githubLink: ""
    },
    {
        id: "platform-game-angry-birds-coin-quest",
        title: "Platform Game: Angry Birds Coin Quest",
        description: "This platform game based on the game Angry Birds is built using Assembly language for the MIPS processor.",
        image: assemblyMainMenu,
        githubLink: ""
    },
    {
        id: "system-monitoring-tool",
        title: "System Monitoring Tool",
        description: "This system monitoring tool developed in C for Unix/Linux environments provides real-time insights into system performance metrics.",
        image: systemMonitoring,
        githubLink: ""
    },
    {
        id: "android-app-university-timetable-generator",
        title: "Android App: University Timetable Generator",
        description: "This Android app is aimed to help students automatically plan and forecast courses required to graduate.",
        image: utt,
        githubLink: ""
    },
    {
        id: "game-carnival",
        title: "Game Carnival",
        description: "This is an interactive and educational game for children, developed using Python, Pygame, software design patterns, and object-oriented programming.",
        image: gameCarnival,
        githubLink: ""
    },
    {
        id: "citation-machine",
        title: "Citation Machine",
        description: " Delivered a Java program that helps students cite their sources in the requested MLA, APA, or Chicago format, effectively mitigating the risk of plagiarism.",
        image: citationMachine,
        githubLink: ""
    }
]

export default projects;