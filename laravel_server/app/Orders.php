<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $fillable = [
        'order_no,',
        'customer_id',
        'shopuser_id',
        'customer_address',
        'seller_address',
        'is_confirm',
        'is_shipped',
        'is_received',
        'is_canceled',
        'is_returned',
        'is_refund',
        'customer_msg_to_seller',
        'remarks'
    ];
}
