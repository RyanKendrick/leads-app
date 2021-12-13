from django.contrib import admin

from .models import Lead

class LeadAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'email', 'contacted', 'notes', 'created', 'updated')

# Register your models here.

admin.site.register(Lead, LeadAdmin)
