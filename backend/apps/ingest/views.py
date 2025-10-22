from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.ingest.models import Sample
from .serializers import SampleSerializer

@api_view(['GET'])
def list_samples(request):
    qs = Sample.objects.all().order_by('-created')
    serializer = SampleSerializer(qs, many=True)
    return Response(serializer.data)
