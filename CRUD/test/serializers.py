from rest_framework import serializers

from test.models import *


class CRUDSerializer(serializers.ModelSerializer):
    class Meta:
        model = CRUD
        fields = '__all__'
    def create(self, validated_data):
        return CRUD.objects.create(**validated_data)
    # def update(self, instance, validated_data):
    #     instance.name=validated_data.get('name',instance.name)
    #     instance.save()
    #     return instance
