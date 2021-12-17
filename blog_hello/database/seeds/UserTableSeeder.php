<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $users = [
                [
                    'name' => 'kevin da',
                    'email' => 'kevin@hsgd.com',
                    'password' => Hash::make('ana123456')
                ]
            ];
            foreach ($users as $user){
                \App\User::create($user);
            }

    }
}
