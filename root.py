from flask import Flask

application=Flask('myApp')

@application.route('/')
def index():
   return render_template('index.html')

if __name__ == '__main__':
    application.run(debug=False)    
