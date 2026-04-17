from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order, OrderItem
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(['POST'])
def create_order(request):
    data = request.data

    order = Order.objects.create(
        table_number=data['table_number'],
        total_amount=data['total']
    )

    for item in data['items']:
        OrderItem.objects.create(
            order=order,
            name=item['name'],
            price=item['price']
        )

    return Response({"message": "Order created", "order_id": order.id})


@api_view(['GET'])
def get_orders(request):
    orders = Order.objects.all()

    data = []
    for order in orders:
        items = order.items.all()
        data.append({
            "id": order.id,
            "table": order.table_number,
            "total": order.total_amount,
            "status": order.status,
            "items": [{"name": i.name, "price": i.price} for i in items]
        })

    return Response(data)


@api_view(['PUT'])
def update_status(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order.status = request.data['status']
    order.save()
    return Response({"message": "Status updated"})


@api_view(['DELETE'])
def delete_order(request, order_id):
    Order.objects.get(id=order_id).delete()
    return Response({"message": "Deleted"})