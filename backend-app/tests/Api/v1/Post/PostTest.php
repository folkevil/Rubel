<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PostTest extends TestCase
{
    /**
     * Create a new post
     *
     * @return void
     */
    public function testCreatePost()
    {
        $this->post('/api/v1/admin/post/create')->seeStatusCode(200);
    }

    /**
     * Edit a new post
     *
     * @return void
     */
    public function testEditPost()
    {
        $this->post('/api/v1/admin/post/1/edit')->seeStatusCode(200);
    }

    /**
     * Update publication status of post
     *
     * @return void
     */
    public function testUpdatePost()
    {
        $this->post('/api/v1/admin/post/1/update')->seeStatusCode(200);
    }

    /**
     * Delete publication status of post
     *
     * @return void
     */
    public function testDeletePost()
    {
        $this->post('/api/v1/admin/post/1/delete')->seeStatusCode(200);
    }

    /**
     * Show a single post
     *
     * @return void
     */
    public function testPost()
    {
        $this->get('/api/v1/post/1')->seeStatusCode(200);
    }

    /**
     * Show posts
     *
     * @return void
     */
    public function testPosts()
    {
        $this->get('/api/v1/posts')->seeStatusCode(200);
    }
}
