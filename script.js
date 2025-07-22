let model, webcam, labelContainer, maxPredictions;

async function init() {
    const URL = "./model/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const flip = true; 
    webcam = new tmImage.Webcam(300, 225, flip); 
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Show webcam canvas in the container
    document.getElementById("webcam-container").appendChild(webcam.canvas);

    // Label
    labelContainer = document.getElementById("label");
}

// Loop the webcam frames
async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

// Run prediction
async function predict() {
    const prediction = await model.predict(webcam.canvas);
    prediction.sort((a, b) => b.probability - a.probability);

    const result = `${prediction[0].className}: ${(prediction[0].probability * 100).toFixed(2)}%`;
    labelContainer.innerHTML = result;
}

init();
