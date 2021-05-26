from __future__ import unicode_literals
from test.models import *
from test.serializers import CRUDSerializer
from rest_framework import generics
 
class APIView(generics.ListCreateAPIView):
   queryset = CRUD.objects.all()
   serializer_class = CRUDSerializer

class DetialSet(generics.RetrieveDestroyAPIView):
   queryset = CRUD.objects.all()
   serializer_class = CRUDSerializer

class UpdateSet(generics.RetrieveUpdateAPIView):
   queryset = CRUD.objects.all()
   serializer_class = CRUDSerializer