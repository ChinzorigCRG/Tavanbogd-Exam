from django.db import models

class CRUD(models.Model):
	name = models.CharField(max_length=50)
	age = models.IntegerField()
	major = models.CharField(max_length=50)

	def __str__(self):
		return self.name
		
