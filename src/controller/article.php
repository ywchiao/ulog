<?php
/**
 *  @file       article.php
 *  @brief      The Article module of the Article subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/11/2018 created.
 *  @date       06/11/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Article module of the Article subsystem.
 */

namespace ULog\Controller;

class Article
{
    public function action()
    {
        $file = $this->getArticleFile();

        header('Content-type: application/json');

        $post = $this->read($file);

        echo json_encode($post);

        flush();
    }

    private function getArticleFile() {
        return "htdocs/{$_SERVER['REQUEST_URI']}";
    }

    private function read($fname)
    {
        $post = file_get_contents($fname);

        return $post;
    }
}

// article.php
?>
