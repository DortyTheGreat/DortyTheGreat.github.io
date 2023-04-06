from flask import Flask, redirect, render_template, request, session


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/click')
def click():
    clicks = open('player.txt', 'r').read()
    open('player.txt', 'w').write(str(int(clicks) + 1))

    return str(int(clicks) + 1)

if __name__ == "__main__":
    app.run(debug=True)
