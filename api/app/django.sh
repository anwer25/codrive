echo "Createing migrations"
python manage.py makemigrations

echo ====================================

echo "Migrating"
python manage.py migrate
echo ====================================

echo "Starting Server..."

python manage.py runserver 0.0.0.0:8000