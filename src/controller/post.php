<?php
/**
 *  @file       post.php
 *  @brief      The Post module of the Post subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/15/2018 created.
 *  @date       04/15/2018 last modified.
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
    public function run()
    {
        header('Content-type: application/json');

        error_log(json_encode($_POST));
        echo json_encode($_POST);
    }
}

// post.php
?>
