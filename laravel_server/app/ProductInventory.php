<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductInventory extends Model
{

    protected $table = 'product_inventories';
    protected $fillable = [
        'product_id',
        'shopuser_id',
        'quantity',
        'is_closed'
    ];
}
