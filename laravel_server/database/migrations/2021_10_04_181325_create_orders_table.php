<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->string("order_no");
            $table->integer("customer_id");
            $table->integer("shopuser_id");
            $table->string("customer_address");
            $table->string("seller_address");
            $table->boolean("is_confirm")->default(false);
            $table->boolean("is_shipped")->default(false);
            $table->boolean("is_received")->default(false);
            $table->boolean("is_canceled")->default(false);
            $table->boolean("is_returned")->default(false);
            $table->boolean("is_refund")->default(false);
            $table->string("customer_msg_to_seller");
            $table->string("remarks");
            $table->timestamps();
        });
    }

    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
