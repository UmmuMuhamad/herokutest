from flask import Flask

app = Flask('myApp')

@app.route("/")
def index():
    return "Hello, Worlddd!"
    
if __name__ == "__main__":
    app.run(debug=False)
