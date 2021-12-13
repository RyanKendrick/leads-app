from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LeadSerializer
from .models import Lead

class LeadView(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()
