# Generated by Django 4.2 on 2023-10-31 23:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_registro'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registro',
            name='mongo_id',
        ),
    ]
