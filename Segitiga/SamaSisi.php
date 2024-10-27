<?php
$rows = 5; // jumlah baris

for ($i = 1; $i <= $rows; $i++) {
    // Cetak spasi
    for ($j = $i; $j < $rows; $j++) {
        echo "&nbsp;&nbsp;";
    }
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>";
}
?>
