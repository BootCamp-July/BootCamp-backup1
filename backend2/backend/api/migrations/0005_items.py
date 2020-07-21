# Generated by Django 3.0.8 on 2020-07-17 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200717_0545'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemdesc', models.CharField(max_length=50)),
                ('status', models.CharField(max_length=50)),
                ('helper_id', models.IntegerField()),
                ('reacher_id', models.IntegerField()),
            ],
            options={
                'db_table': 'items',
            },
        ),
    ]
