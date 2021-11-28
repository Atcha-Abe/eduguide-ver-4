<?php

use Illuminate\Database\Seeder;
use App\Status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   /**
        * Run the database seeds.
        *
        * @return void
        */
       { if(Status::all()->count() == 0){
   
            Status::insert([
   
               ['name' => 'PROCESSING',
                'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'PROCESSED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'SHIPPING',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'SHIPPED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'RECEIVED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'CANCELED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'RETURNED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
               ['name' => 'REFUNDED',
               'created_at' => DB::raw('CURRENT_TIMESTAMP')],
           
            ]);
           
       } else { echo "This table already seeded."; }
       }
    }
}
