<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductPricing extends Model
{
    protected $table = 'product_pricings';
    protected $fillable = [
        'product_id',
        'price',
        'discount',
        'shipment_fee',
        'shopuser_id'
    ];
}
