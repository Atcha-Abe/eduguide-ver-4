<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // Creating Table For the Database
    public function up()
    {
        Schema::create('posts_comments', function (Blueprint $table) {
            // $table->id();
             $table->increments('id');
            $table->string('title');
            $table->text('body');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('post_id')->unsigned();
            $table->integer('parent_id')->unsigned()->nullable();
            $table->text('body');
            $table->timestamps();
            $table->softDeletes();
    });

}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // Dropping The Table if it does exists
    public function down()
    {
        Schema::dropIfExists('posts_comments');
        Schema::dropIfExists('comments');
        
    }
}
