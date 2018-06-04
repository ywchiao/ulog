<?php
/**
 *  @file       catalog.php
 *  @brief      The Catalog module of the Catalog subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Catalog module of the Catalog subsystem.
 */

namespace ULog\Controller;

class Catalog
{
    public function action()
    {
        $catalog = $this->getCatalog();

        header('Content-type: application/json');

        echo json_encode($catalog);

        flush();
    }

    private function getCatalog() {
        $catalog = [];

        $postDates = scandir('htdocs/blog');

        foreach ($postDates as $date) {
            if ($date[0] === '.') {
                continue;
            }

            $catalog[$date] = scandir('htdocs/blog/' . $date);
        }

        return $catalog;
    }
}

// catalog.php
?>
