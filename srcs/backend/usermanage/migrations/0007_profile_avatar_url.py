# Generated by Django 5.1.5 on 2025-02-06 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usermanage', '0006_friendrequest_friendship'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='avatar_url',
            field=models.URLField(blank=True, default='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', max_length=500),
        ),
    ]
