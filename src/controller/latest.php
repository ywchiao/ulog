<?php
/**
 *  @file       latest.php
 *  @brief      The Latest module of the Latest subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/28/2018 created.
 *  @date       06/11/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Latest module of the Latest subsystem.
 */

namespace ULog\Controller;

class Latest
{
    public function action()
    {
        $lastPost = $this->getLastPost();

        header('Content-type: application/json');

        $post = $this->read($lastPost);

        echo json_encode($post);

        flush();
    }

    private function getLastPost() {
        $postDates = scandir('htdocs/article');

        $lastDate = end($postDates);

        $posts = scandir('htdocs/article/' . $lastDate);

        return './htdocs/article/' . $lastDate . '/' . end($posts);
    }

    private function read($fname)
    {
        $post = file_get_contents($fname);

        return $post;
    }
}

// latest.php
?>
