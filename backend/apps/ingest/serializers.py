from rest_framework import serializers
from apps.ingest.models import Sample

class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = ['id', 'name', 'value', 'created']
