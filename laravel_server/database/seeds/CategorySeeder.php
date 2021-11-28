<?php

use Illuminate\Database\Seeder;
use App\ProductCategory;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { if(ProductCategory::all()->count() == 0){

        ProductCategory::insert([

            ['name' => 'Women Clothes',
             'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Men Clothes',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Beauty',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Health',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Fashion Accessories',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Home Appliances',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Men Shoes',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Mobile & Gadgets',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Travel & Luggage',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Women Bags',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Women Shoes',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Men Bags',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Watches',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Audio',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Food & Beverage',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Pets',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Mom & Baby',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Baby & Kids Fashion',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Gaming & Consoles',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],  
            ['name' => 'Cameras & Drones',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],    
            ['name' => 'Home & Living',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],    
            ['name' => 'Sports & Outdoors',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Stationery',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Hobbies & Collections',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Automobiles',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')], 
            ['name' => 'Motorcycles',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],  
            ['name' => 'Books & Magazines',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')],
            ['name' => 'Computers & Accessories',
            'created_at' => DB::raw('CURRENT_TIMESTAMP')]

        ]);
        
    } else { echo "This table already seeded."; }
    }
}
