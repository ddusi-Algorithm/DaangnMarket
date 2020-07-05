# Generated by Django 3.0.3 on 2020-07-06 03:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UploadFileModel',
            fields=[
                ('id_productImg', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=50)),
                ('image', models.ImageField(null=True, upload_to='product')),
                ('id_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='member.Product')),
            ],
        ),
    ]