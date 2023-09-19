document.addEventListener("DOMContentLoaded", async function () {
    const startButton = document.getElementById("startButton");
    const emulatorFrame = document.getElementById("emulator");

    startButton.addEventListener("click", async function () {
        try {
            // ROM'u getir
            let response = await fetch("assets/oyun.gba");
            if (!response.ok) throw new Error("ROM yüklenemedi!");

            let romBlob = await response.blob();
            let romUrl = URL.createObjectURL(romBlob);

            // Emülatöre yükle
            emulatorFrame.src = `https://www.emulatorjs.com/gba.html?rom=${romUrl}`;
            emulatorFrame.style.display = "block";

        } catch (error) {
            console.error("Hata:", error);
            alert("Oyun yüklenemedi!");
        }
    });
});
