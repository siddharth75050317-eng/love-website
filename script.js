/* =========================================
   FINAL SURPRISE
========================================= */

function showLove() {

    const memoryAnswer = document.querySelector(
        'input[name="memory"]:checked'
    );

    const feelingsAnswer = document.querySelector(
        'input[name="feelings"]:checked'
    );

    // Answers select kiye bina reveal nahi hoga
    if (!memoryAnswer || !feelingsAnswer) {

        alert("Pehle dono questions ka answer do ❤️");

        return;
    }

    const finalSurprise = document.getElementById(
        "finalSurprise"
    );

    // Final message reveal
    finalSurprise.classList.add("show");

    // Button hide
    const button = document.querySelector(
        ".reveal-btn"
    );

    button.style.opacity = "0";
    button.style.pointerEvents = "none";

    // Final surprise tak smooth scroll
    setTimeout(() => {

        finalSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

    // Little celebration
    createHearts();
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🌷"
    ];

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.className = "celebration-heart";

        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (18 + Math.random() * 22) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}