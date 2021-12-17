<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = new Post();

        $postsArray = $posts->getAllPosts();

        return response()->json($postsArray, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
        return response()->json(compact('user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->checkPermission("create blog")) {


            $request->validate([
                'title' => 'required',
                'description' => 'required'
            ]);


            $post = new Post();
            $post->title = $request->get("title");
            $post->description = $request->get("description");
            $post->save();



            return response()->json($request->all());
        } else {
            return response()->json(["message" => "error"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        if ($this->checkPermission("update blog")) {

            $request->validate([
                'title' => 'required',
                'description' => 'required'
            ]);


            $post = Post::find($id);
            $post->title = $request->get("title");
            $post->description = $request->get("description");
            $post->save();



            return response()->json($request->all());
        } else {
            return response()->json(["message" => "error"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if ($this->checkPermission("delete blog")) {

            $post = Post::find($id);

            $post->delete();
            return response()->json("ok");
        } else {
            return response()->json(["message" => "error"], 500);
        }
    }

    public function checkPermission($permission)
    {
        $user = Auth::user();
        $hasPermissions = $user->getAllPermissions();

        foreach ($hasPermissions as $value) {

            if ($value->name == $permission) {
                return true;
            }
        }

        return false;
    }


    public function publish($id)
    {

        if ($this->checkPermission("create blog")) {
            $post = Post::find($id);
            $post->status = 1;
              $post->save();
            return response()->json(["message" => "ok"]);
        } else {
            return response()->json(["message" => "error"], 500);
        }
    }
}
