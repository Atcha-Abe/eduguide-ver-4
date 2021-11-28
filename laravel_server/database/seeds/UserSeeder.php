<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::where('name', 'Admin')->count();
        { if($admin == 0){
    
                User::insert([
                 [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('adminadmin321'),
                'address' => '#1 Admin Street']
             ]);
            
        } else { echo "This table already seeded."; }
        }
    }
}
