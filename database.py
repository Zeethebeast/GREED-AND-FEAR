from greedandfear import app, db, User  # Import both the Flask app and SQLAlchemy instance

# Use app.app_context() to push the application context
with app.app_context():
    db.create_all()  # Create all the tables in the database

    user_1 = User(username='Zee', email='chimasamuel6@gmail.com', password='password')
    db.session.add(user_1)

    user_2 = User(username='Zee2', email='chimasamauel6@gmail.com', password='password')
    db.session.add(user_2)
    db.session.commit()
print("Database and tables created successfully!")
