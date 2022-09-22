
# A very simple Flask Hello World app for you to get started with...

from flask import Flask

app = Flask(__name__)

@app.route('/hello_world')
def hello_world():
    return 'Hello from Flask!'

@app.route('/<string:html_file>')
def load_html(html_file):
    try:
        with open(f'/home/Lna14012000/mysite/html/{html_file}', "r", encoding='utf-8') as f:
            html_file = f.read()
    except Exception as e:
        print("File error (pack_page): ", e)
        return "Error"

    return html_file

