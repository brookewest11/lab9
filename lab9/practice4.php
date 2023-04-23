<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $size = $_POST["size"];
    if (!is_numeric($size)) {
        echo "<p>Please enter a valid number.</p>";
    } else {
        echo "<table>";
        echo "<tr><td></td>";
        for ($i = 1; $i <= $size; $i++) {
            echo "<td>$i</td>";
        }
        echo "</tr>";
        for ($i = 1; $i <= $size; $i++) {
            echo "<tr><td>$i</td>";
            for ($j = 1; $j <= $size; $j++) {
                echo "<td>" . $i * $j . "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
}
?>
