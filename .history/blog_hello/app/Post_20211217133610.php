<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    public function getAllPosts(){
        $posts = Post::get()->all();

        return $posts;

    }
}
