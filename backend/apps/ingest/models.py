from django.db import models

class Sample(models.Model):
    name = models.CharField(max_length=120)
    value = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
