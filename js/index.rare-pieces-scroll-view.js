function initScrollIntoRareTimePiecesView() { 
    const scrollButtonIntoRarePieces = document.querySelectorAll(".scrollButtonIntoRarePieces");
    const rareTimePiecesView = document.querySelector("#rareTimePiecesView");
    if (!scrollButtonIntoRarePieces.length || !rareTimePiecesView) return;
    scrollButtonIntoRarePieces.forEach(button => {
        button.addEventListener("click", (e) => { 
            e.preventDefault();
            rareTimePiecesView.scrollIntoView({
                behavior: "smooth", 
                block: "start",
                inline: "start"
            });
        });
    });
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollIntoRareTimePiecesView);
} else { 
    initScrollIntoRareTimePiecesView();
}
