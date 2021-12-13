from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id','firstName', 'lastName', 'email', 'contacted', 'notes', 'created', 'updated')