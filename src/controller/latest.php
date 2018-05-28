<?php
/**
 *  @file       latest.php
 *  @brief      The Latest module of the Latest subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/28/2018 created.
 *  @date       05/28/2018 last modified.
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

        error_log($lastPost);

        header('Content-type: application/json');

        $this->read($lastPost);
    }

    private function getLastPost() {
        $postDates = scandir('htdocs/blog');

        $lastDate = end($postDates);

        $posts = scandir('htdocs/blog/' . $lastDate);

        return './htdocs/blog/' . $lastDate . '/' . end($posts);
    }

    private function read($fname)
    {
        $post = file_get_contents($fname);

        echo json_encode($post);
    }
}

// latest.php
?>
