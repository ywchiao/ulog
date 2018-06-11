<?php
/**
 *  @file       post.php
 *  @brief      The Post module of the Post subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/15/2018 created.
 *  @date       06/11/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Post module of the Post subsystem.
 */

namespace ULog\Controller;

class Post
{
    public function action()
    {
        header('Content-type: application/json');

        echo json_encode($_POST);

        $this->save();
    }

    private function save()
    {
        $path = './htdocs/article/' . date('Ymd');

        if (!file_exists($path)) {
            mkdir($path, 0755, true);
        }

        $post = fopen($path . '/' . time() . '.json', 'wb');
        fwrite($post, json_encode($_POST, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        fclose($post);
    }
}

// post.php
?>
