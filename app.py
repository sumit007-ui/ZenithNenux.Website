from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$umit_1912'
app.config['MYSQL_DB'] = 'website'
app.secret_key = 'your_secret_key'

mysql = MySQL(app)

#check database is connected or not
@app.route("/test_db_connection")
def test_db_connection():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT VERSION()")  
        data = cur.fetchone()  
        cur.close()
        return f"Connected to MySQL Database. Version: {data[0]}"
    except Exception as e:
        return f"Error connecting to database: {str(e)}"



@app.route("/")
def home():
    return render_template('home.html')



@app.route("/home.html")
def homemain():
    return render_template('home.html')

@app.route("/BrowseBooks1.html")
def Browsebooks():
    return render_template('BrowseBooks1.html')

@app.route("/SellBooks.html")
def sellsbooks():
    return render_template('SellBooks.html')

# @app.route("/About.html")
# def aboutus():
#     return render_template('BrowseBooks.html')

@app.route("/community.html")
def aboutus():
    return render_template('community.html')


# @app.route("/Contact.html")
# def contact_us():
#     return render_template('BrowseBooks.html')

@app.route("/register", methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')  # No hashing
        email = request.form.get('email')  

        try:
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO users(username, password,email) VALUES(%s, %s,%s)", (username, password, email))
            mysql.connection.commit()
            cur.close()
            flash("Registration successful! You can now log in.", "success")
            return redirect(url_for('login'))
        except Exception as e:
            mysql.connection.rollback()
            flash(f"An error occurred: {str(e)}", "danger")
    
    return render_template('register.html')


@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = cur.fetchone()
        cur.close()

        if user:
            flash("Login successful!", "success")
            return redirect(url_for('home'))  # Redirect to a home
        else:
            return render_template('error.html')
    
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True)