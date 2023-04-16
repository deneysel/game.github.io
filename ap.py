from flask import Flask, jsonify
from flask import send_from_directory

app = Flask(__name__)

@app.route("/", methods=["GET"])
def serve_index():
    return send_from_directory(".", "index.html")

@app.route("/api/gpus", methods=["GET"])
def get_gpus():
    gpus = [
        "NVIDIA GeForce RTX 3080",
        "AMD Radeon RX 6800 XT",
        "NVIDIA GeForce GTX 1660 Ti",
    ]
    return jsonify(gpus)

@app.route("/api/games", methods=["GET"])
def get_games():
    games = [
        {
            "id": 1,
            "title": "Oyun 1",
            "logo": "https://example.com/images/game1_logo.png",
            "description": "Oyun 1 açıklaması",
        },
        {
            "id": 2,
            "title": "Oyun 2",
            "logo": "https://example.com/images/game2_logo.png",
            "description": "Oyun 2 açıklaması",
        },
        {
            "id": 3,
            "title": "Oyun 3",
            "logo": "https://example.com/images/game3_logo.png",
            "description": "Oyun 3 açıklaması",
        },
    ]
    return jsonify(games)

if __name__ == "__main__":
    app.run(debug=True)
