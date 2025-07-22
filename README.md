# emotion-cam-ai

**emotion-cam-ai** is a real-time facial emotion recognition web application that uses your webcam to analyze and classify facial expressions directly in the browser.  
Built with **TensorFlow.js** and **Google's Teachable Machine**, this project enables instant emotion detection without sending any data to a server—making it **fast, private, and fully client-side**.

---

## 🚀 Features

- 🎥 **Webcam-based Emotion Detection**  
- ⚡ **Real-Time Predictions**  
- 🧠 **AI Model Integration with Teachable Machine**  
- 🖥️ **100% Browser-based (No Backend Required)**  
- 🔒 **Privacy Friendly: No Data Storage or Transmission**

---

## 🛠️ Tech Stack

- **HTML5 / CSS3 / JavaScript (Vanilla)**
- **TensorFlow.js**
- **Teachable Machine Image Model**
- **Webcam API (MediaDevices.getUserMedia)**

---

## 📂 Project Structure
emotion-cam-ai/
│
├── index.html           # Main HTML interface
├── style.css            # Styling and layout
├── script.js            # Webcam integration and AI model logic
├── model/                # Pre-trained model from Teachable Machine
│   ├── model.json
│   ├── metadata.json
│   └── weights.bin



---

## 🎯 Use Cases

- Emotion detection for browser apps  
- Interactive AI experiments  
- ML demos without backend dependencies  
- Privacy-focused sentiment recognition  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/emotion-cam-ai.git
cd emotion-cam-ai
2️⃣ Setup the Model
Go to Teachable Machine

Train your emotion detection model (e.g., Happy, Sad, Neutral)

Export the model as TensorFlow.js Model

Place the exported files into the model/ folder:
model/
├── model.json
├── metadata.json
└── weights.bin
3️⃣ Run Locally
Use a local server to avoid browser CORS issues:
# For Python 3
python -m http.server
Then open in your browser:
http://localhost:8000
📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

🙌 Acknowledgments
Google Teachable Machine

TensorFlow.js

