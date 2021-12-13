from django.test import TestCase

from .models import Lead

class MainTest(TestCase):
    def test_model(self):
        lead = Lead()
        record = Lead.objects.get()
        self.assertEqual(record, lead)
