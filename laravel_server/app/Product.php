<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $table = 'products';
    protected $fillable = [
        'name',
        'desc',
        'cat_id',
        'shopuser_id',
        'image',
        'is_ban',
        'is_active',
    ];
}
